import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'B.Tech in Artificial Intelligence & Data Science',
      organization: 'Sri Shakthi Institute of Engineering and Technology',
      period: 'Sep 2023 — Present',
      location: 'Coimbatore, Tamil Nadu',
      tag: 'Academic Degree',
      grade: 'CGPA: 7.56 / 10.00',
      description: 'Specializing in Generative AI architectures, vector databases, and machine learning pipelines. Gained hands-on experience designing RAG systems, building neural network architectures, and developing full-stack AI applications.'
    },
    {
      role: 'Machine Learning Engineer Intern',
      organization: 'CodSoft Technologies',
      period: 'Oct 2023 — Nov 2023',
      location: 'Remote',
      tag: 'Industry Internship',
      grade: 'Hands-on ML Engineering',
      description: 'Acquired practical exposure to machine-learning model workflows, data exploration, predictive modeling, and feature engineering on real-world datasets.'
    },
    {
      role: 'Algorithmic Problem Solver (270+ Solved)',
      organization: 'LeetCode & Competitive Coding',
      period: '2024 — Present',
      location: 'Global Platform',
      tag: 'Algorithms & DSA',
      grade: 'Top Percentile Problem Solver',
      description: 'Consistently practicing and solving 270+ complex Data Structures and Algorithms problems. Strong mastery of Dynamic Programming, Graph Traversal, Binary Trees, and time-space complexity optimization.'
    },
    {
      role: 'Higher Secondary Certificate (CS & Mathematics)',
      organization: 'GKD Matriculation Higher Secondary School',
      period: '2021 — 2023',
      location: 'Coimbatore, Tamil Nadu',
      tag: 'Foundations',
      grade: 'Score: 72.5%',
      description: 'Completed higher secondary schooling with major focus in Computer Science and Mathematics, laying the core mathematical foundations in calculus, probability, and procedural programming.'
    }
  ];

  return (
    <section id="experience" className="career-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="career-header"
      >
        <span className="section-eyebrow">Milestones</span>
        <h2 className="career-title">
          My journey <span>&</span>
          <br />
          experience
        </h2>
      </motion.div>

      <div className="career-timeline-container">
        {/* Animated Glowing Neon Timeline Line */}
        <div className="career-timeline">
          <div className="career-dot" />
        </div>

        {/* Timeline Items */}
        <div className="career-items-list">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="career-info-box"
              data-cursor="pointer"
            >
              <div className="career-info-left">
                <div className="career-role-wrap">
                  <span className="career-tag-pill">{exp.tag}</span>
                  <h4 className="career-role-title">{exp.role}</h4>
                  <h5 className="career-org-title">{exp.organization}</h5>
                  <div className="career-meta-row">
                    <span><MapPin size={13} /> {exp.location}</span>
                    <span className="career-grade-badge">{exp.grade}</span>
                  </div>
                </div>
                <h3 className="career-period">{exp.period}</h3>
              </div>

              <div className="career-info-right">
                <p className="career-desc-p">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
