import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Phone, ChevronRight, ArrowDownRight, FileText, Sparkles, Palette } from 'lucide-react';
import HeroPortrait from './HeroPortrait';
import './Hero.css';

const Hero = () => {
  const roles = [
    'UI/UX Designer',
    'Product Thinker',
    'Figma Specialist',
    'Wireframe Architect',
    'Interaction Designer',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="landing-section">
      <div className="landing-container">
        {/* Left Side: Typography & Intro */}
        <div className="landing-intro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="intro-greeting-wrap"
          >
            <span className="intro-greeting">Hello! I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="landing-name"
          >
            LAKSHANA
            <br />
            <span className="landing-name-surname">
              S{' '}
              <svg className="verified-badge-icon" viewBox="0 0 24 24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
              </svg>
            </span>
          </motion.h1>

          {/* Dynamic Role Ticker */}
          <div className="landing-role-ticker">
            <h3 className="role-prefix">Creative & User-Centered</h3>
            <div className="role-roller-box">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="role-highlight"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="landing-bio"
          >
            Engineering undergraduate and UI/UX Designer dedicated to crafting accessible, intuitive digital experiences. 
            Proficient in <strong>Figma, Sketch, Balsamiq, and InVision</strong>, specializing in gathering user requirements, 
            rapid wireframing, building reusable design systems, and conducting usability testing for web dashboards and mobile apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="landing-cta-row"
          >
            <a href="#projects" className="btn-hero-primary" data-cursor="pointer">
              <span>View Design Projects</span>
              <ChevronRight size={18} />
            </a>
            <a href="#what-i-do" className="btn-hero-secondary" data-cursor="pointer">
              <span>Explore Process</span>
              <ArrowDownRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Side / Center Visual: 3D Monochrome Portrait Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="landing-visual"
        >
          <HeroPortrait />
        </motion.div>
      </div>

      {/* Floating Left Side Social Dock */}
      <div className="floating-social-dock" id="social" data-cursor="icons">
        <a
          href="https://linkedin.com/in/lakshh12"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="dock-icon-link"
          data-cursor="pointer"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:lakshanasaravanan1212@gmail.com"
          title="Email Lakshana"
          className="dock-icon-link"
          data-cursor="pointer"
        >
          <Mail size={20} />
        </a>
        <a
          href="tel:+919043270978"
          title="Call (+91 90432 70978)"
          className="dock-icon-link"
          data-cursor="pointer"
        >
          <Phone size={19} />
        </a>
        <a
          href="#skills"
          title="Design Toolkit"
          className="dock-icon-link"
          data-cursor="pointer"
        >
          <Palette size={20} />
        </a>
      </div>

      {/* Floating Bottom Right Angled Resume Trigger */}
      <a
        href="/Lakshana_S_Talview_UIUX_Intern_Resume.html"
        target="_blank"
        rel="noopener noreferrer"
        download="Lakshana_S_Talview_UIUX_Intern_Resume.html"
        className="floating-resume-trigger"
        data-cursor="pointer"
        title="View & Download Tailored Resume"
      >
        <span className="resume-text">RESUME</span>
        <span className="resume-icon-box">
          <FileText size={18} />
        </span>
      </a>
    </section>
  );
};

export default Hero;
