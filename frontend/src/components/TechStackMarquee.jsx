import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Sparkles, Server, Database, Code, CheckCircle2 } from 'lucide-react';
import './TechStackMarquee.css';

const TechStackMarquee = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techCategories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'ai', label: 'AI & ML Frameworks' },
    { id: 'vector', label: 'Vector DBs & RAG' },
    { id: 'web', label: 'Full-Stack & APIs' },
    { id: 'tools', label: 'Data Science & DevOps' }
  ];

  const row1 = [
    { name: 'Python', category: 'ai', icon: '🐍', level: 'Core Language' },
    { name: 'FastAPI', category: 'web', icon: '⚡', level: 'Async Backend' },
    { name: 'LangChain', category: 'ai', icon: '🦜', level: 'LLM Pipelines' },
    { name: 'LangGraph', category: 'ai', icon: '🕸️', level: 'Multi-Agent Loops' },
    { name: 'Google Gemini', category: 'ai', icon: '✨', level: 'LLM / Multimodal' },
    { name: 'ChromaDB', category: 'vector', icon: '🔮', level: 'Vector Database' },
    { name: 'FAISS', category: 'vector', icon: '⚡', level: 'Dense Vector Search' },
    { name: 'PyTorch', category: 'tools', icon: '🔥', level: 'Deep Learning' },
  ];

  const row2 = [
    { name: 'React.js', category: 'web', icon: '⚛️', level: 'Frontend UI' },
    { name: 'Next.js', category: 'web', icon: '▲', level: 'Full-Stack Framework' },
    { name: 'TypeScript', category: 'web', icon: '📘', level: 'Type Safety' },
    { name: 'Docker', category: 'tools', icon: '🐳', level: 'Containerization' },
    { name: 'Git / GitHub', category: 'tools', icon: '🐙', level: 'Version Control' },
    { name: 'MySQL / SQL', category: 'vector', icon: '🐬', level: 'Relational DB' },
    { name: 'MongoDB', category: 'vector', icon: '🍃', level: 'Document Store' },
    { name: 'Scikit-Learn', category: 'tools', icon: '📊', level: 'Classical ML' },
    { name: 'LeetCode (270+)', category: 'tools', icon: '💡', level: 'DSA Mastery' },
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
        <span className="section-eyebrow">Engineering Toolset</span>
        <h2 className="section-title">
          Technologies & <span>AI Stack</span>
        </h2>
        <p className="section-desc">
          A high-throughput toolkit engineered for building, testing, vectorizing, and deploying autonomous AI systems.
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

      {/* Grid of Interactive Tech Chips */}
      <div className="tech-chips-grid">
        {filteredSkills.map((tech, idx) => (
          <motion.div
            key={idx}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="tech-card glass-card"
            data-cursor="pointer"
          >
            <div className="tech-card-icon">{tech.icon}</div>
            <div className="tech-card-info">
              <h4 className="tech-card-name">{tech.name}</h4>
              <span className="tech-card-level">{tech.level}</span>
            </div>
            <div className="tech-glow-accent" />
          </motion.div>
        ))}
      </div>

      {/* Infinite Glowing Marquee Rows (amarnath.dev style) */}
      <div className="marquee-wrapper">
        <div className="marquee-row marquee-left">
          <div className="marquee-content">
            {[...row1, ...row1, ...row1].map((tech, idx) => (
              <span key={idx} className="marquee-chip">
                <span className="chip-icon">{tech.icon}</span>
                <span className="chip-text">{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-row marquee-right">
          <div className="marquee-content">
            {[...row2, ...row2, ...row2].map((tech, idx) => (
              <span key={idx} className="marquee-chip">
                <span className="chip-icon">{tech.icon}</span>
                <span className="chip-text">{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
