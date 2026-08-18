import React, { useEffect, useRef, useState } from 'react';
import './InteractiveAvatar.css';

const InteractiveAvatar = () => {
  const containerRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const avatarCardRef = useRef(null);

  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const tilt = { currentX: 0, currentY: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.33; // Eye level approx 33% from top

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const angle = Math.atan2(dy, dx);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 6.5; // Max pupil offset in px
      const clampedDistance = Math.min(maxDistance, distance * 0.018);

      target.x = Math.cos(angle) * clampedDistance;
      target.y = Math.sin(angle) * clampedDistance;

      // 3D Parallax Tilt for the head/card
      const tiltStrength = 8; // Max degrees
      const normX = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
      const normY = (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);

      tilt.targetY = Math.max(-tiltStrength, Math.min(tiltStrength, normX * tiltStrength));
      tilt.targetX = Math.max(-tiltStrength, Math.min(tiltStrength, -normY * tiltStrength));
    };

    const animate = () => {
      // Lerp pupil position
      current.x += (target.x - current.x) * 0.15;
      current.y += (target.y - current.y) * 0.15;

      // Lerp head tilt
      tilt.currentX += (tilt.targetX - tilt.currentX) * 0.08;
      tilt.currentY += (tilt.targetY - tilt.currentY) * 0.08;

      if (leftPupilRef.current && rightPupilRef.current) {
        leftPupilRef.current.style.transform = `translate(${current.x}px, ${current.y}px)`;
        rightPupilRef.current.style.transform = `translate(${current.x}px, ${current.y}px)`;
      }

      if (avatarCardRef.current) {
        avatarCardRef.current.style.transform = `perspective(1000px) rotateX(${tilt.currentX}deg) rotateY(${tilt.currentY}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Blink timer loop
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 180);

      const nextBlinkTime = 2400 + Math.random() * 3500;
      blinkTimeoutId = setTimeout(triggerBlink, nextBlinkTime);
    };

    let blinkTimeoutId = setTimeout(triggerBlink, 2000);

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(blinkTimeoutId);
    };
  }, []);

  return (
    <div className="avatar-interactive-wrapper" ref={containerRef}>
      {/* Background Holographic Glow Rim */}
      <div className="avatar-ambient-glow" />

      {/* Cyberpunk HUD Rings */}
      <div className="avatar-hud-ring ring-outer" />
      <div className="avatar-hud-ring ring-inner" />

      {/* 3D Card with Avatar & Interactive Eyes Rig */}
      <div
        className="avatar-card-container"
        ref={avatarCardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Base Stylized Portrait */}
        <div className="avatar-portrait-frame">
          <img
            src="/nikyn_avatar.jpg"
            alt="Nikyn Suresh Animated Figure"
            className="avatar-base-img"
          />

          {/* Left Eye Interactive Overlay (Viewer's Left) */}
          <div className={`eye-socket eye-left ${isBlinking ? 'blinking' : ''} ${isHovered ? 'hover-focus' : ''}`}>
            <div className="eye-sclera">
              <div className="eye-iris" ref={leftPupilRef}>
                <div className="eye-pupil" />
                <div className="eye-specular" />
                <div className="eye-specular-secondary" />
              </div>
            </div>
            <div className="eyelid eyelid-top" />
            <div className="eyelid eyelid-bottom" />
          </div>

          {/* Right Eye Interactive Overlay (Viewer's Right) */}
          <div className={`eye-socket eye-right ${isBlinking ? 'blinking' : ''} ${isHovered ? 'hover-focus' : ''}`}>
            <div className="eye-sclera">
              <div className="eye-iris" ref={rightPupilRef}>
                <div className="eye-pupil" />
                <div className="eye-specular" />
                <div className="eye-specular-secondary" />
              </div>
            </div>
            <div className="eyelid eyelid-top" />
            <div className="eyelid eyelid-bottom" />
          </div>

          {/* Hologram scanline & subtle cyan gradient vignette */}
          <div className="avatar-scanline-overlay" />
          <div className="avatar-lighting-overlay" />
        </div>
      </div>

      {/* Bottom Status Pill */}
      <div className="avatar-status-pill">
        <span className="status-live-dot" />
        <span>EYE-TRACKING // NEURAL AVATAR ACTIVE</span>
      </div>
    </div>
  );
};

export default InteractiveAvatar;
