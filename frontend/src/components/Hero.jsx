import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ArrowDownRight, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import HeroPortrait from './HeroPortrait';
import './Hero.css';

const Hero = () => {
  const roles = [
    'Engineer',
    'RAG Architect',
    'Agent Builder',
    'Developer',
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
            NIKYN
            <br />
            <span className="landing-name-surname">
              V S{' '}
              <svg className="verified-badge-icon" viewBox="0 0 24 24" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
              </svg>
            </span>
          </motion.h1>

          {/* Dynamic Role Ticker */}
          <div className="landing-role-ticker">
            <h3 className="role-prefix">Full Stack Generative AI</h3>
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
            Solutions-driven engineer architecting scalable <strong>Retrieval-Augmented Generation (RAG)</strong> pipelines, 
            autonomous agents with <strong>LangChain / LangGraph</strong>, and high-performance full-stack AI services. 
            Passionate about indexing large-scale knowledge corpora and deploying robust production AI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="landing-cta-row"
          >
            <a href="#projects" className="btn-hero-primary" data-cursor="pointer">
              <span>View Projects</span>
              <ChevronRight size={18} />
            </a>
            <a href="#what-i-do" className="btn-hero-secondary" data-cursor="pointer">
              <span>Explore Architecture</span>
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

      {/* Floating Left Side Social Dock (amarnath.dev style) */}
      <div className="floating-social-dock" id="social" data-cursor="icons">
        <a
          href="https://github.com/Nikynsuresh"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="dock-icon-link"
          data-cursor="pointer"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikyn-suresh-20a9413bb/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="dock-icon-link"
          data-cursor="pointer"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://leetcode.com/u/nikyn_suresh"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode (270+ Solved)"
          className="dock-icon-link leetcode-link"
          data-cursor="pointer"
        >
          <Code2 size={20} />
          <span className="lc-badge">270+</span>
        </a>
        <a
          href="mailto:s.nikyn005@gmail.com"
          title="Email"
          className="dock-icon-link"
          data-cursor="pointer"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Floating Bottom Right Angled Resume Trigger */}
      <a
        href="/Nikyn_VS_Resume.jpg"
        target="_blank"
        rel="noopener noreferrer"
        download="Nikyn_VS_Resume.jpg"
        className="floating-resume-trigger"
        data-cursor="pointer"
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
