import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import './TechStackMarquee.css';

const TechStackMarquee = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techCategories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'tools', label: 'Design & Prototyping Tools' },
    { id: 'ux', label: 'UI/UX Methodologies' },
    { id: 'visual', label: 'Visual & Brand Systems' },
    { id: 'systems', label: 'Design Systems & Standards' }
  ];

  const row1 = [
    { name: 'Figma', category: 'tools', icon: '🎨', level: 'Interactive Prototyping' },
    { name: 'Balsamiq', category: 'tools', icon: '📐', level: 'Low-Fi Wireframing' },
    { name: 'Sketch', category: 'tools', icon: '💎', level: 'Vector UI Mockups' },
    { name: 'InVision', category: 'tools', icon: '🚀', level: 'Click-Through Prototypes' },
    { name: 'Adobe Illustrator', category: 'visual', icon: '✒️', level: 'Vector & Iconography' },
    { name: 'Adobe Photoshop', category: 'visual', icon: '🖼️', level: 'Visual Composition' },
    { name: 'Canva', category: 'visual', icon: '✨', level: 'Brand & Marketing Decks' },
    { name: 'Miro / FigJam', category: 'tools', icon: '💡', level: 'User Journey Mapping' },
  ];

  const row2 = [
    { name: 'User Research', category: 'ux', icon: '🔍', level: 'Requirement Gathering' },
    { name: 'User Flows & IA', category: 'ux', icon: '🗺️', level: 'Information Architecture' },
    { name: 'Design Systems', category: 'systems', icon: '🧩', level: 'Reusable Component Kits' },
    { name: 'Usability Testing', category: 'ux', icon: '🧪', level: 'Heuristic Evaluation' },
    { name: 'Responsive Web Design', category: 'systems', icon: '💻', level: 'Multi-Device Grids' },
    { name: 'Mobile UX & Ergonomics', category: 'systems', icon: '📱', level: '48px Tap Targets' },
    { name: 'WCAG Accessibility', category: 'systems', icon: '♿', level: 'Color & Contrast Standards' },
    { name: 'Typography & Layout', category: 'visual', icon: '🔤', level: 'Visual Hierarchy' },
    { name: 'Micro-interactions', category: 'systems', icon: '⚡', level: 'State Transitions' },
  ];

  const allSkills = [...row1, ...row2];
  const filteredSkills = selectedCategory === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="tech-section section-container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="tech-header"
      >
        <span className="section-eyebrow">Design Toolset</span>
        <h2 className="section-title">
          Tools & <span>Methodologies</span>
        </h2>
        <p className="section-desc">
          A modern UI/UX toolkit focused on rapid wireframing, high-fidelity prototyping, systematic component libraries, and usability testing.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="tech-filter-tabs">
        {techCategories.map(cat => (
          <button
            key={cat.id}
            className={`tech-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
            data-cursor="pointer"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Tools */}
      <motion.div 
        layout
        className="tech-grid"
      >
        {filteredSkills.map((tech, index) => (
          <motion.div
            layout
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="tech-card glass-card"
            data-cursor="pointer"
          >
            <div className="tech-card-inner">
              <span className="tech-icon">{tech.icon}</span>
              <div className="tech-meta">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-level">{tech.level}</span>
              </div>
            </div>
            <div className="tech-card-glow" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStackMarquee;
