import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Palette, Layers, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'UI/UX Design & Human-Centered Interaction',
      issuer: 'Design Thinking & UX Foundations',
      badge: 'Core Specialization',
      date: '2024',
      detail: 'Comprehensive training in human-centered design principles, user persona development, rapid wireframing with Balsamiq, and interactive prototyping in Figma & Sketch.',
      skills: ['Figma', 'Balsamiq', 'Sketch', 'User Research', 'Design Systems']
    },
    {
      title: 'Visual Design, Typography & Brand Systems',
      issuer: 'Creative Digital Design',
      badge: 'Visual Asset Mastery',
      date: '2024',
      detail: 'In-depth mastery of typographic hierarchy, color theory, layout grid systems, brand identity guidelines, and vector asset creation using Adobe Illustrator, Photoshop, and Canva.',
      skills: ['Adobe Illustrator', 'Photoshop', 'Typography', 'Color Theory', 'Canva']
    }
  ];

  const highlights = [
    {
      stat: '30+',
      title: 'Reusable UI Components',
      desc: 'Architected modular design system components with consistent accessibility and design tokens.'
    },
    {
      stat: '100%',
      title: 'User-Centered Focus',
      desc: 'Iterative design workflows tested with real users, eliminating friction and maximizing usability.'
    },
    {
      stat: '3+',
      title: 'Products Designed End-to-End',
      desc: 'Delivered web dashboards, multi-tier access systems, and mobile apps from concept to interactive handoff.'
    }
  ];

  return (
    <section id="certifications" className="cert-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cert-header"
      >
        <span className="section-eyebrow">Design Standards</span>
        <h2 className="section-title">
          Credentials <span>& Impact</span>
        </h2>
        <p className="section-desc">
          Design competencies and quantified outcomes backed by real-world system implementations.
        </p>
      </motion.div>

      {/* Grid of Highlight Metrics */}
      <div className="cert-highlights-grid">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="cert-stat-card glass-card"
            data-cursor="pointer"
          >
            <div className="stat-number">{item.stat}</div>
            <h4 className="stat-title">{item.title}</h4>
            <p className="stat-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Certification Cards */}
      <div className="cert-cards-container">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="cert-card glass-card"
            data-cursor="pointer"
          >
            <div className="cert-card-top">
              <div className="cert-badge-wrap">
                <ShieldCheck size={18} className="cert-badge-icon" />
                <span className="cert-badge-text">{cert.badge}</span>
              </div>
              <span className="cert-year">{cert.date}</span>
            </div>

            <h3 className="cert-name">{cert.title}</h3>
            <h5 className="cert-issuer">{cert.issuer}</h5>

            <p className="cert-detail">{cert.detail}</p>

            <div className="cert-skills-chips">
              {cert.skills.map((skill, sIdx) => (
                <span key={sIdx} className="cert-skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
