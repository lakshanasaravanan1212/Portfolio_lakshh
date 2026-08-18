import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Network, Database, Sparkles, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
  const blocks = [
    {
      icon: '⚙️',
      title: 'RAG & Vector Architecture',
      description: 'Specialized in architecting scalable Retrieval-Augmented Generation systems. From semantic chunking and dense embeddings to hybrid search with ChromaDB and FAISS, I build pipelines that deliver sub-second, context-accurate responses over massive knowledge corpora.',
      tag: 'RAG Systems'
    },
    {
      icon: '🤖',
      title: 'Autonomous Agents & LangGraph',
      description: 'Deeply experienced in orchestrating stateful multi-agent workflows using LangChain and LangGraph. I design autonomous loops that reason through complex tasks—such as parsing multi-page technical documentation and auto-synthesizing production SDK wrappers.',
      tag: 'Agentic Workflows'
    },
    {
      icon: '🧠',
      title: 'Algorithmic Mastery (270+ LeetCode)',
      description: 'Strong foundation in Data Structures, Algorithms, and optimization. Having solved 270+ LeetCode problems, I bring rigorous analytical precision to memory allocation, time complexity, and high-throughput data processing in ML pipelines.',
      tag: 'Data Structures & Algorithms'
    },
    {
      icon: '⚡',
      title: 'High-Performance Full-Stack AI',
      description: 'Bridging modern machine learning with production-ready software engineering. I build robust FastAPI backend services, responsive React/Next.js client workbenches, and automated evaluation loops with strict latency and security boundaries.',
      tag: 'FastAPI • React • Next.js'
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
          <span className="section-eyebrow">Biography & Focus</span>
          <h2 className="section-title">
            Architecting <span>Reasoning Systems</span>
          </h2>
          <p className="section-desc">
            B.Tech in Artificial Intelligence & Data Science at Sri Shakthi Institute of Engineering and Technology. 
            Focused on the intersection of Generative AI, high-dimensional vector search, and agent orchestration.
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
