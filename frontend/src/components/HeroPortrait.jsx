import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Layers, CheckCircle2 } from 'lucide-react';
import './HeroPortrait.css';

const HeroPortrait = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [filterMode, setFilterMode] = useState('bw'); // 'bw' | 'cyber'

  useEffect(() => {
    let animationFrameId;
    const target = { tiltX: 0, tiltY: 0, glareX: 50, glareY: 50 };
    const current = { tiltX: 0, tiltY: 0, glareX: 50, glareY: 50 };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width) * 2 - 1; // -1 to 1
      const normY = (y / rect.height) * 2 - 1; // -1 to 1

      const maxTilt = 12; // degrees
      target.tiltY = normX * maxTilt;
      target.tiltX = -normY * maxTilt;

      target.glareX = (x / rect.width) * 100;
      target.glareY = (y / rect.height) * 100;
    };

    const handleMouseLeave = () => {
      target.tiltX = 0;
      target.tiltY = 0;
      target.glareX = 50;
      target.glareY = 50;
    };

    const animate = () => {
      // Smooth lerping
      current.tiltX += (target.tiltX - current.tiltX) * 0.1;
      current.tiltY += (target.tiltY - current.tiltY) * 0.1;
      current.glareX += (target.glareX - current.glareX) * 0.1;
      current.glareY += (target.glareY - current.glareY) * 0.1;

      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${current.tiltX}deg) rotateY(${current.tiltY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`;
        cardRef.current.style.setProperty('--glare-x', `${current.glareX}%`);
        cardRef.current.style.setProperty('--glare-y', `${current.glareY}%`);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    animate();

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <div className="hero-portrait-stage" ref={containerRef}>
      {/* Background Ambient Glow Halo */}
      <div className="portrait-ambient-glow" />

      {/* Orbital Tech Rings Behind Card */}
      <div className="portrait-orbital-ring ring-outer" />
      <div className="portrait-orbital-ring ring-inner" />

      {/* Perspective Tech Floor Grid */}
      <div className="portrait-grid-floor" />

      {/* 3D Interactive Card Container */}
      <div
        className={`portrait-3d-card ${filterMode === 'cyber' ? 'mode-cyber' : 'mode-bw'}`}
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card Outer Border & Glass Container */}
        <div className="portrait-glass-casing">
          {/* Real Photo in Studio Black & White */}
          <div className="portrait-image-wrapper">
            <img
              src="/lakshana_portrait.jpg"
              alt="Lakshana S - UI/UX Designer & Product Thinker"
              className="portrait-photo"
            />
            {/* Cinematic Vignette & Bottom Shadow Blend */}
            <div className="portrait-vignette-overlay" />
            <div className="portrait-duotone-layer" />
            <div className="portrait-scanline-mesh" />
          </div>

          {/* Dynamic Interactive Cursor Glare Shine */}
          <div className="portrait-glare-shine" />

          {/* Cyberpunk Decorative Corner Brackets */}
          <div className="tech-corner corner-tl" />
          <div className="tech-corner corner-tr" />
          <div className="tech-corner corner-bl" />
          <div className="tech-corner corner-br" />

          {/* Floating Top-Right Badge: UI/UX & Design Systems */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="floating-telemetry-badge badge-top-right"
          >
            <div className="telemetry-icon-box">
              <Sparkles size={14} className="icon-pulse" />
            </div>
            <div className="telemetry-text">
              <span className="telemetry-title">UI/UX & Design Systems</span>
              <span className="telemetry-sub">Figma • Sketch • InVision</span>
            </div>
            <span className="telemetry-live-dot" />
          </motion.div>

          {/* Floating Bottom-Left Badge: User-Centered Design */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="floating-telemetry-badge badge-bottom-left"
          >
            <div className="telemetry-icon-box code-box">
              <Layers size={15} />
            </div>
            <div className="telemetry-text">
              <span className="telemetry-title">User-Centered Design</span>
              <span className="telemetry-sub">Wireframing • Usability</span>
            </div>
          </motion.div>

          {/* Floating Bottom Center Glass Pill */}
          <div className="portrait-identity-pill">
            <span className="identity-pulse" />
            <span className="identity-title">LAKSHANA S // UI/UX DESIGNER</span>
            <span className="identity-tag">PORTFOLIO</span>
          </div>
        </div>
      </div>

      {/* Aesthetic Micro Toggle (Studio Noir vs Cyberpunk Matrix) */}
      <div className="portrait-mode-switcher">
        <button
          type="button"
          className={`mode-btn ${filterMode === 'bw' ? 'active' : ''}`}
          onClick={() => setFilterMode('bw')}
          title="Monochrome Studio Noir"
          data-cursor="pointer"
        >
          Studio Noir (B&W)
        </button>
        <button
          type="button"
          className={`mode-btn ${filterMode === 'cyber' ? 'active' : ''}`}
          onClick={() => setFilterMode('cyber')}
          title="Vibrant Accent"
          data-cursor="pointer"
        >
          Color Tone
        </button>
      </div>
    </div>
  );
};

export default HeroPortrait;
