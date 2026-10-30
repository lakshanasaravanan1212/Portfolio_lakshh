import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, Layout, ArrowRight, Sparkles } from 'lucide-react';
import './WhatIDo.css';

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      id: 0,
      icon: <Layers size={28} className="what-service-icon" />,
      title: 'UI/UX Research & Requirements Gathering',
      subtitle: 'Empathy-driven problem discovery',
      description: 'Conducting user research, building user personas, mapping user journeys, and gathering stakeholder requirements to transform complex workflows into intuitive, human-centered digital experiences.',
      skillsTitle: 'Skillset & Methodologies',
      tags: ['User Research', 'User Personas', 'Journey Mapping', 'Information Architecture', 'User Flows', 'Requirement Gathering']
    },
    {
      id: 1,
      icon: <Layout size={28} className="what-service-icon" />,
      title: 'Wireframing & Interactive Prototyping',
      subtitle: 'Rapid ideation to pixel-perfect mockups',
      description: 'Drafting low-fidelity wireframes in Balsamiq for quick structural validation, and evolving them into interactive, click-through high-fidelity prototypes in Figma, Sketch, and InVision for seamless stakeholder and user testing.',
      skillsTitle: 'Tools & Workflows',
      tags: ['Figma', 'Sketch', 'Balsamiq', 'InVision', 'Interactive Prototypes', 'Micro-interactions', 'Mobile Ergonomics']
    },
    {
      id: 2,
      icon: <Palette size={28} className="what-service-icon" />,
      title: 'Design Systems & Visual Design',
      subtitle: 'Consistent, scalable product foundations',
      description: 'Building modular component systems with tokenized typography scales, harmonious color schemes, and WCAG-accessible components. Crafting custom logos and brand assets using Adobe Illustrator and Photoshop.',
      skillsTitle: 'Design Assets & Tools',
      tags: ['Design Systems', 'Reusable Components', 'Usability Testing', 'Adobe Illustrator', 'Photoshop', 'Canva', 'WCAG 2.1']
    }
  ];

  return (
    <section id="what-i-do" className="what-i-do-section section-container">
      <div className="what-i-do-grid">
        {/* Left Side Big Typographic Header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="what-left"
        >
          <span className="section-eyebrow">Core Capabilities</span>
          <h2 className="what-giant-title">
            W<span className="italic-span">HAT</span>
            <br />
            I<span className="accent-span"> DO</span>
          </h2>
          <p className="what-left-desc">
            Transforming user research, business requirements, and multi-tier workflows into intuitive, tested, and accessible digital products.
          </p>
        </motion.div>

        {/* Right Side Interactive Blueprint Cards */}
        <div className="what-right">
          {services.map((item, index) => {
            const isActive = activeCard === index;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`what-card ${isActive ? 'what-card-active' : ''}`}
                onClick={() => setActiveCard(index)}
                data-cursor="pointer"
              >
                {/* Sci-Fi Blueprint SVG Borders & Corner Accents */}
                <div className="what-border-svg-wrap">
                  <svg width="100%" height="100%" className="what-dashed-svg">
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      fill="none"
                      stroke={isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.2)'}
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                    />
                  </svg>
                </div>

                <div className="what-corner top-left" />
                <div className="what-corner top-right" />
                <div className="what-corner bottom-left" />
                <div className="what-corner bottom-right" />

                <div className="what-card-content">
                  <div className="what-card-header">
                    {item.icon}
                    <div className="what-title-box">
                      <h3 className="what-card-title">{item.title}</h3>
                      <p className="what-card-subtitle">{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="what-card-desc">{item.description}</p>

                  <div className="what-skills-block">
                    <span className="what-skills-label">{item.skillsTitle}:</span>
                    <div className="what-tags-wrap">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="what-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
