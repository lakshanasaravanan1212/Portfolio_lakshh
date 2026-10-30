import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, X, Sparkles, Layout, Layers, CheckCircle2, Palette } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'student-assessment-dashboard',
      name: 'Student Learning & Assessment Dashboard',
      category: 'web',
      tagline: 'End-to-end web dashboard for course management, timed test examinations, and real-time performance analytics.',
      status: 'launched',
      projectType: 'Web Dashboard',
      featured: true,
      period: '2025',
      techStack: ['Figma', 'Balsamiq', 'Design Systems', 'Usability Testing', 'Information Architecture', 'WCAG 2.1'],
      live: 'https://linkedin.com/in/lakshh12',
      problem: 'Students and educators struggled with fragmented testing portals that lacked clear question palettes, transparent countdown timers, and accessible test performance visualizations.',
      solution: 'Gathered requirements across students and instructors; drafted low-fidelity wireframes in Balsamiq, followed by interactive prototypes in Figma. Engineered a modular 30+ piece UI component library for timed quizzes, progress bars, and scorecards with strict visual hierarchy.',
      metrics: [
        { label: 'UX Friction Reduction', val: '25%' },
        { label: 'Component Library', val: '30+ Pieces' },
        { label: 'Usability Satisfaction', val: '92%' }
      ]
    },
    {
      id: 'smart-gate-pass-system',
      name: 'Smart Gate Pass & Identity Management System',
      category: 'web',
      tagline: 'Responsive multi-tier verification interface streamlining secure approval workflows for students, faculty, and administrators.',
      status: 'launched',
      projectType: 'Enterprise System',
      featured: true,
      period: '2024',
      techStack: ['Figma', 'Sketch', 'InVision', 'User Flows', 'Wireframing', 'Responsive Design'],
      live: 'https://linkedin.com/in/lakshh12',
      problem: 'Manual paper-based campus gate pass approvals caused severe bottlenecks, lost audit trails, and high friction for security guards and faculty approvers.',
      solution: 'Mapped comprehensive user journeys and edge cases in Sketch; built interactive click-through prototypes in InVision and Figma to validate instant multi-tier approval states, automated status notifications, and real-time visitor audit tables.',
      metrics: [
        { label: 'Processing Speed', val: '+40% Faster' },
        { label: 'User Satisfaction', val: '95%' },
        { label: 'Turnaround Reduction', val: '35%' }
      ]
    },
    {
      id: 'fitness-tracking-app',
      name: 'Fitness & Wellness Tracking Mobile App',
      category: 'mobile',
      tagline: 'Intuitive mobile wellness application focused on daily activity tracking, personalized workout goals, and nutrition analytics.',
      status: 'launched',
      projectType: 'Mobile Application',
      featured: false,
      period: '2024',
      techStack: ['Figma', 'Balsamiq', 'Mobile UX', 'Micro-interactions', 'User Personas', 'Color Theory'],
      live: 'https://linkedin.com/in/lakshh12',
      problem: 'Most fitness applications overwhelm first-time users with cluttered dashboards, microscopic touch targets, and difficult data logging.',
      solution: 'Formulated user personas and empathy maps; designed rapid wireframes in Balsamiq optimized for one-handed mobile ergonomics. Polished high-fidelity screens in Figma with engaging micro-interactions and strict 48x48px tap accessibility standards.',
      metrics: [
        { label: 'Ease of Use Rating', val: '88%' },
        { label: 'Touch Standard', val: '48px Tap Targets' },
        { label: 'Visual Hierarchy', val: 'High-Contrast' }
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
            Featured <span>Design Projects</span>
          </h2>
          <p className="section-desc">
            Interactive web dashboards, multi-tier verification workflows, and mobile applications built with Figma, Balsamiq, and design systems.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          <button
            className={`proj-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            data-cursor="pointer"
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`proj-filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
            data-cursor="pointer"
          >
            Web & Dashboards
          </button>
          <button
            className={`proj-filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mobile')}
            data-cursor="pointer"
          >
            Mobile Apps
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
                  ● COMPLETED
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
                View Design Case Study <ArrowUpRight size={16} />
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
                    ● COMPLETED
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
                <h4 className="modal-subheading">User Challenge & Friction</h4>
                <p className="modal-body-text">{selectedProject.problem}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-subheading">Design Process & UX Solution</h4>
                <p className="modal-body-text">{selectedProject.solution}</p>
              </div>

              {/* Tech Stack */}
              <div className="modal-section">
                <h4 className="modal-subheading">Design Tools & Methods</h4>
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
                  href="https://linkedin.com/in/lakshh12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal-primary"
                  data-cursor="pointer"
                >
                  <Palette size={18} />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href={`mailto:lakshanasaravanan1212@gmail.com?subject=Regarding ${selectedProject.name}`}
                  className="btn-modal-secondary"
                  data-cursor="pointer"
                >
                  <span>Discuss Case Study</span>
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
