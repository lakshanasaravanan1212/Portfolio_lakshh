import React, { useEffect, useRef } from 'react';
import './NeuralHologram.css';

const NeuralHologram = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    // 3D Neural Sphere parameters
    const nodeCount = 90;
    const sphereRadius = Math.min(width, height) * 0.38;
    const nodes = [];

    // Mouse coordinates & rotation momentum
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let rotX = 0;
    let rotY = 0;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left - width / 2) * 0.0006;
      mouse.targetY = (e.clientY - rect.top - height / 2) * 0.0006;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Initialize Fibonacci sphere distribution for uniform points
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      nodes.push({
        x: x * sphereRadius,
        y: y * sphereRadius,
        z: z * sphereRadius,
        baseX: x * sphereRadius,
        baseY: y * sphereRadius,
        baseZ: z * sphereRadius,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        size: 2.2 + Math.random() * 1.8
      });
    }

    // Pulses travelling along axons
    const pulseCount = 12;
    const pulses = Array.from({ length: pulseCount }, () => ({
      from: Math.floor(Math.random() * nodeCount),
      to: Math.floor(Math.random() * nodeCount),
      progress: Math.random(),
      speed: 0.008 + Math.random() * 0.012
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse rotation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      rotY += 0.004 + mouse.x;
      rotX += 0.002 + mouse.y;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const fov = 400;
      const projected = [];

      // Rotate and project nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.pulse += n.pulseSpeed;

        // Rotate Y
        let x1 = n.baseX * cosY - n.baseZ * sinY;
        let z1 = n.baseZ * cosY + n.baseX * sinY;

        // Rotate X
        let y1 = n.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + n.baseY * sinX;

        // Perspective scale
        const scale = fov / (fov + z2 + sphereRadius * 1.2);
        const screenX = width / 2 + x1 * scale;
        const screenY = height / 2 + y1 * scale;
        const alpha = Math.max(0.15, (z2 + sphereRadius) / (sphereRadius * 2));

        projected.push({
          x: screenX,
          y: screenY,
          z: z2,
          scale,
          alpha,
          pulse: n.pulse,
          size: n.size * scale
        });
      }

      // Draw Synaptic Connections (lines between close nodes)
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 85 * ((p1.scale + p2.scale) / 2);
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.35 * ((p1.alpha + p2.alpha) / 2);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(94, 234, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw Travelling Synaptic Signal Pulses
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.from = Math.floor(Math.random() * nodeCount);
          pulse.to = Math.floor(Math.random() * nodeCount);
        }

        const p1 = projected[pulse.from];
        const p2 = projected[pulse.to];
        if (p1 && p2) {
          const px = p1.x + (p2.x - p1.x) * pulse.progress;
          const py = p1.y + (p2.y - p1.y) * pulse.progress;
          const pAlpha = Math.min(p1.alpha, p2.alpha);

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 211, 238, ${pAlpha * 0.9})`;
          ctx.shadowColor = '#22d3ee';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw Neural Nodes
      projected.sort((a, b) => a.z - b.z); // Render back-to-front
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const pulseFactor = 1 + 0.25 * Math.sin(p.pulse);
        const radius = p.size * pulseFactor;

        // Outer glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 234, 212, ${p.alpha * 0.18})`;
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.95})`;
        ctx.shadowColor = '#5eead4';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hologram-wrapper">
      <div className="character-rim" />
      <div className="hologram-grid-floor" />
      <canvas ref={canvasRef} className="hologram-canvas" />
      <div className="hologram-status-badge">
        <span className="live-dot" />
        <span>RAG // AGENTIC NEURAL CORE ONLINE</span>
      </div>
    </div>
  );
};

export default NeuralHologram;
