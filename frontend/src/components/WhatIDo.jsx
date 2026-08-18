import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, Layers, ArrowRight } from 'lucide-react';
import './WhatIDo.css';

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      id: 0,
      icon: <Bot size={28} className="what-service-icon" />,
      title: 'Generative AI & Agentic Systems',
      subtitle: 'Autonomous multi-agent orchestration',
      description: 'Designing stateful reasoning loops with LangChain and LangGraph. Implementing self-governing agent chains that break complex development tasks into autonomous, verified pipelines.',
      skillsTitle: 'Skillset & Tools',
      tags: ['LangGraph', 'LangChain', 'Agentic Workflows', 'Prompt Systems', 'Gemini AI', 'Evaluation Loops']
    },
    {
      id: 1,
      icon: <Database size={28} className="what-service-icon" />,
      title: 'Large-Scale RAG & Vector Search',
      subtitle: 'High-dimensional semantic retrieval',
      description: 'Indexing, chunking, and querying large datasets (14,000+ policy and document corpora) using ChromaDB and FAISS with sub-second retrieval latency and strict grounding checks.',
      skillsTitle: 'Skillset & Tools',
      tags: ['RAG Pipelines', 'ChromaDB', 'FAISS', 'Dense Embeddings', 'Semantic Chunking', 'Hybrid Search']
    },
    {
      id: 2,
      icon: <Layers size={28} className="what-service-icon" />,
      title: 'Full-Stack AI Product Engineering',
      subtitle: 'Production software architecture',
      description: 'Deploying high-throughput FastAPI backend microservices and clean React/Next.js client interfaces. Packaging models with Docker, managing asynchronous queues, and optimizing API latency.',
      skillsTitle: 'Skillset & Tools',
      tags: ['FastAPI', 'React.js', 'Next.js', 'Python', 'REST APIs', 'Docker', 'SQL / MongoDB']
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
            Transforming research-grade machine learning models into resilient, scalable, production-grade applications.
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
                      stroke={isActive ? '#5eead4' : 'rgba(255, 255, 255, 0.2)'}
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
                      <h3 className="what-title">{item.title}</h3>
                      <h4 className="what-subtitle">{item.subtitle}</h4>
                    </div>
                  </div>

                  <p className="what-desc">{item.description}</p>

                  <div className="what-skills-area">
                    <h5 className="what-skills-heading">{item.skillsTitle}</h5>
                    <div className="what-tags-wrap">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="what-pill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="what-arrow-indicator">
                    <ArrowRight size={16} />
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
