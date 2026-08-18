import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, X, Sparkles, Database, Layers, CheckCircle2, Bot } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'learning-platform',
      name: 'AI-Based Learning Platform',
      category: 'rag',
      tagline: 'Autonomous PDF ingestion, vector search, and instant context-accurate quiz & flashcard synthesis.',
      status: 'launched',
      projectType: 'Platform',
      featured: true,
      period: 'Dec 2025 – Mar 2026',
      techStack: ['Python', 'FastAPI', 'React 18', 'Vite', 'Gemini AI', 'RAG', 'ChromaDB', 'pypdf', 'JWT'],
      github: 'https://github.com/Nikynsuresh/AI-based-Learning-platform.git',
      live: 'https://github.com/Nikynsuresh/AI-based-Learning-platform.git',
      problem: 'Students and educators waste hours manually distilling multi-page textbooks into structured flashcards and quizzes, often suffering from LLM hallucinations when not grounded in raw course material.',
      solution: 'Architected an end-to-end RAG system that ingests raw PDFs and web content, performs semantic chunking into dense embeddings stored in ChromaDB, and uses Gemini AI with grounding prompts to generate real-time study materials.',
      metrics: [
        { label: 'Latency', val: '< 650ms' },
        { label: 'Grounding', val: '99.4%' },
        { label: 'Vector Store', val: 'ChromaDB' }
      ]
    },
    {
      id: 'compliance-card',
      name: 'Agent Compliance Card Generator',
      category: 'agentic',
      tagline: 'Automated compliance, safety audit, and governance system for AI agents and LLM architectures.',
      status: 'launched',
      projectType: 'Security & Governance',
      featured: true,
      period: 'May 2026 – Present',
      techStack: ['Python 3.12', 'FastAPI', 'React 18', 'Vite', 'Python AST', 'EU AI Act', 'NIST AI RMF', 'ISO 42001', 'OWASP Top 10'],
      github: 'https://github.com/Nikynsuresh',
      live: 'https://github.com/Nikynsuresh',
      problem: 'As autonomous AI agents execute external tools and multi-step decisions, auditing their compliance with emerging regulatory frameworks (EU AI Act, NIST AI RMF, ISO 42001, OWASP LLM Top 10) is complex and manual.',
      solution: 'Engineered an automated governance system using Python AST and static/semantic analysis to inspect agent codebases, detect security risks, and auto-generate verifiable AI Compliance Cards with an interactive React dashboard.',
      metrics: [
        { label: 'Standards', val: 'EU / NIST / ISO' },
        { label: 'Analysis', val: 'Python AST' },
        { label: 'Focus', val: 'AI Safety & Audit' }
      ]
    },
    {
      id: 'smart-devtool',
      name: 'Smart DevTool for API Integration',
      category: 'agentic',
      tagline: 'Autonomous LangGraph agent that parses complex API documentation and auto-synthesizes SDKs and Postman collections.',
      status: 'launched',
      projectType: 'DevTool',
      featured: false,
      period: 'Apr 2026 – Jun 2026',
      techStack: ['Next.js', 'FastAPI', 'Python', 'LangGraph', 'REST APIs', 'Postman'],
      github: 'https://github.com/Nikynsuresh/Smart-DevTool-for-Api-Integration.git',
      live: 'https://github.com/Nikynsuresh/Smart-DevTool-for-Api-Integration.git',
      problem: 'Integrating unfamiliar third-party APIs requires reading dense documentation, writing boilerplate client wrappers, and assembling Postman collections manually.',
      solution: 'Built an autonomous developer tool that ingests raw API documentation, validates endpoints, generates typed SDK wrappers, and outputs complete testable Postman collections.',
      metrics: [
        { label: 'Time Saved', val: '80%' },
        { label: 'Framework', val: 'FastAPI / Next.js' },
        { label: 'Outputs', val: 'SDK & Postman' }
      ]
    },
    {
      id: 'gov-schemes-bot',
      name: 'Multilingual Gov Schemes Chatbot',
      category: 'rag',
      tagline: 'High-speed retrieval system over 14,624 Indian public policy documents with multilingual NLP reasoning.',
      status: 'launched',
      projectType: 'AI Chatbot',
      featured: false,
      period: 'Sep 2025 – Nov 2025',
      techStack: ['Python', 'Flask', 'SQLite', 'JSON', 'RapidFuzz', 'NLP', 'Multilingual'],
      github: 'https://github.com/Nikynsuresh/Multilingual-Chatbot-for-indian-schemes.git',
      live: 'https://github.com/Nikynsuresh/Multilingual-Chatbot-for-indian-schemes.git',
      problem: 'Citizens struggle to discover and navigate state and national welfare schemes due to language barriers, dense bureaucracy, and fragmented data sources.',
      solution: 'Processed and indexed approximately 14,624 government schemes with RapidFuzz and multilingual NLP, providing conversational access in English, Hindi, Tamil, and Malayalam.',
      metrics: [
        { label: 'Schemes Dataset', val: '14,624 Records' },
        { label: 'Query Latency', val: '< 450ms' },
        { label: 'Languages', val: '4 Regional' }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section section-container">
      <div className="projects-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Featured Work</span>
          <h2 className="section-title">
            Featured <span>AI Projects</span>
          </h2>
          <p className="section-desc">
            Production systems, autonomous agentic tools, and vector architectures built from ground up.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          <button
            className={`proj-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            data-cursor="pointer"
          >
            All Systems ({projects.length})
          </button>
          <button
            className={`proj-filter-btn ${activeFilter === 'rag' ? 'active' : ''}`}
            onClick={() => setActiveFilter('rag')}
            data-cursor="pointer"
          >
            RAG & Vector Search
          </button>
          <button
            className={`proj-filter-btn ${activeFilter === 'agentic' ? 'active' : ''}`}
            onClick={() => setActiveFilter('agentic')}
            data-cursor="pointer"
          >
            Agentic AI & DevTools
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`project-card glass-card ${project.featured ? 'featured-card' : ''}`}
            onClick={() => setSelectedProject(project)}
            data-cursor="pointer"
          >
            <div className="project-card-header">
              <div className="project-badges">
                <span className={`status-pill status-${project.status}`}>
                  {project.status === 'launched' ? '● LIVE' : '⚡ IN PROGRESS'}
                </span>
                <span className="type-pill">{project.projectType}</span>
              </div>
              <span className="project-period-badge">{project.period}</span>
            </div>

            <h3 className="project-card-name">{project.name}</h3>
            <p className="project-card-tagline">{project.tagline}</p>

            <div className="project-tech-chips">
              {project.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-card-footer">
              <span className="view-details-cta">
                View Architecture & Details <ArrowUpRight size={16} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="modal-content glass-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                data-cursor="pointer"
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="project-badges">
                  <span className={`status-pill status-${selectedProject.status}`}>
                    {selectedProject.status === 'launched' ? '● LIVE' : '⚡ IN PROGRESS'}
                  </span>
                  <span className="type-pill">{selectedProject.projectType}</span>
                </div>
                <h2 className="modal-title">{selectedProject.name}</h2>
                <p className="modal-tagline">{selectedProject.tagline}</p>
              </div>

              {/* Key Metrics Row */}
              <div className="modal-metrics-grid">
                {selectedProject.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="metric-box">
                    <span className="metric-val">{m.val}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Problem & Solution */}
              <div className="modal-section">
                <h4 className="modal-subheading">Challenge & Context</h4>
                <p className="modal-body-text">{selectedProject.problem}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-subheading">Engineered Solution & Architecture</h4>
                <p className="modal-body-text">{selectedProject.solution}</p>
              </div>

              {/* Tech Stack */}
              <div className="modal-section">
                <h4 className="modal-subheading">Technologies Used</h4>
                <div className="project-tech-chips">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal-primary"
                  data-cursor="pointer"
                >
                  <Github size={18} />
                  <span>View Repository</span>
                </a>
                <a
                  href={`mailto:s.nikyn005@gmail.com?subject=Regarding ${selectedProject.name}`}
                  className="btn-modal-secondary"
                  data-cursor="pointer"
                >
                  <span>Discuss Project</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
