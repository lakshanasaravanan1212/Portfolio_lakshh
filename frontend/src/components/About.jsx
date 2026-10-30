import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, Layout, Sparkles, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const blocks = [
    {
      icon: '🎨',
      title: 'User-Centered UI/UX Design',
      description: 'Dedicated to understanding real user pain points, gathering product requirements, and designing intuitive, accessible interfaces across web and mobile platforms with strict WCAG compliance.',
      tag: 'Human-Centered Design'
    },
    {
      icon: '📐',
      title: 'Rapid Wireframing & Prototyping',
      description: 'Skilled in turning abstract concepts into rapid low-fidelity wireframes in Balsamiq, and scaling them into interactive, click-through prototypes in Figma, Sketch, and InVision for early usability testing.',
      tag: 'Figma • Balsamiq • InVision'
    },
    {
      icon: '🧩',
      title: 'Design Systems & Component Kits',
      description: 'Architecting scalable UI component libraries with reusable widgets, tokenized color palettes, consistent typography scales, and micro-interactions that streamline developer handoff.',
      tag: 'Reusable UI Kits'
    },
    {
      icon: '✨',
      title: 'Visual Identity & Creative Media',
      description: 'Proficient in Adobe Illustrator, Photoshop, and Canva. Experienced in crafting bespoke logos, brand identity assets, marketing collaterals, and engaging social video content.',
      tag: 'Branding & Visual Design'
    }
  ];

  return (
    <section id="about" className="about-section section-container">
      <div className="about-inner">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <span className="section-eyebrow">Biography & Design Focus</span>
          <h2 className="section-title">
            Crafting <span>Intuitive Experiences</span>
          </h2>
          <p className="section-desc">
            B.E. in Electrical and Electronics Engineering at Sri Shakthi Institute of Engineering and Technology, Coimbatore (CGPA: 7.9). 
            Focused on bridging user empathy, systematic wireframing, and state-of-the-art interaction design.
          </p>
        </motion.div>

        <div className="about-grid">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="about-card glass-card"
              data-cursor="pointer"
            >
              <div className="about-card-top">
                <span className="about-icon-emoji">{block.icon}</span>
                <span className="about-tag">{block.tag}</span>
              </div>
              <h3 className="about-card-title">{block.title}</h3>
              <p className="about-card-desc">{block.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
