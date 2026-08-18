import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Code2, Database, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM (Coursera)',
      badge: 'Verified Credential',
      date: '2024',
      detail: 'Comprehensive program covering Python fundamentals, data structures, pandas, NumPy, REST APIs, and automated data extraction for AI pipelines.',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Pipelines', 'APIs']
    },
    {
      title: 'AI in Healthcare Workshop',
      issuer: 'IIT Madras Research Park',
      badge: 'Technical Workshop',
      date: '2024',
      detail: 'In-depth exploration of machine learning diagnostics, clinical NLP architectures, and deploying generative models in sensitive healthcare contexts.',
      skills: ['Clinical ML', 'NLP', 'Medical Imaging', 'Data Governance']
    }
  ];

  const highlights = [
    {
      stat: '270+',
      title: 'LeetCode Problems Solved',
      desc: 'Demonstrated mastery across graph traversal, dynamic programming, and algorithm optimization.'
    },
    {
      stat: '14K+',
      title: 'Documents Vectorized',
      desc: 'Engineered high-throughput embedding pipelines for sub-second semantic document retrieval.'
    },
    {
      stat: '3+',
      title: 'Full-Stack AI Apps Deployed',
      desc: 'Architected production systems integrating FastAPI, React, ChromaDB, and LLM APIs.'
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
        <span className="section-eyebrow">Verification & Metrics</span>
        <h2 className="section-title">
          Certifications <span>& Badges</span>
        </h2>
        <p className="section-desc">
          Verified academic and professional credentials backed by real-world system implementations.
        </p>
      </motion.div>

      {/* Metrics Row */}
      <div className="cert-metrics-row">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="cert-metric-card glass-card"
            data-cursor="pointer"
          >
            <span className="metric-giant-number">{item.stat}</span>
            <h4 className="metric-title">{item.title}</h4>
            <p className="metric-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications Cards */}
      <div className="cert-cards-grid">
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
            <div className="cert-card-header">
              <div className="cert-icon-box">
                <Award size={24} />
              </div>
              <div className="cert-badge-pill">
                <ShieldCheck size={14} />
                <span>{cert.badge}</span>
              </div>
            </div>

            <h3 className="cert-card-title">{cert.title}</h3>
            <span className="cert-issuer">{cert.issuer} • {cert.date}</span>
            <p className="cert-desc">{cert.detail}</p>

            <div className="cert-skills-wrap">
              {cert.skills.map((skill, sIdx) => (
                <span key={sIdx} className="cert-skill-tag">
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
