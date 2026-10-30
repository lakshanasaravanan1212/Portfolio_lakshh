import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Palette, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'UI/UX Designer (Freelance Project)',
      organization: 'Intelle Power Automation and Private Limited',
      period: 'Oct 2024 — Dec 2024',
      location: 'Coimbatore, India',
      tag: 'UI/UX Design',
      grade: 'Corporate Web Redesign',
      description: 'Led end-to-end user experience and interface redesign for corporate web platform. Gathered stakeholder requirements, mapped information architecture, produced low-fidelity wireframes in Balsamiq, and engineered comprehensive Figma prototypes. Created branded vector assets and collaborated with engineering to troubleshoot layout defects.'
    },
    {
      role: 'Visual & Graphic Designer (Freelance / Project-Based)',
      organization: 'Intelle Power System',
      period: 'Jul 2024 — Sep 2024',
      location: 'Coimbatore, India',
      tag: 'Brand Design',
      grade: 'Marketing Collaterals',
      description: 'Designed corporate invitation cards, event celebration collaterals, and digital marketing assets aligned with corporate branding. Leveraged Adobe Photoshop, Adobe Illustrator, and Canva with strict typographic hierarchy and color harmony.'
    },
    {
      role: 'Multimedia & Content Designer (Freelance / Project-Based)',
      organization: 'Code Core',
      period: 'Feb 2024 — May 2024',
      location: 'Remote / Hybrid',
      tag: 'Motion & Media',
      grade: 'Social Video Campaigns',
      description: 'Edited promotional marketing videos, implementing transitions, kinetic typography, and audio mastering to enhance audience engagement. Participated in weekly creative brainstorming sessions with team leads to deliver brand-consistent multimedia content.'
    },
    {
      role: 'B.E. in Electrical and Electronics Engineering',
      organization: 'Sri Shakthi Institute of Engineering and Technology',
      period: '2023 — 2027',
      location: 'Coimbatore, Tamil Nadu',
      tag: 'Undergraduate Degree',
      grade: 'CGPA: 7.9 / 10.0',
      description: 'Undergraduate engineering studies developing strong problem-solving fundamentals, human-computer interaction principles, and analytical thinking applied to digital interface design.'
    },
    {
      role: 'Higher Secondary Certificate (HSC) & SSLC',
      organization: 'Sri Chaitanya Techno School',
      period: '2020 — 2023',
      location: 'Coimbatore, Tamil Nadu',
      tag: 'Foundations',
      grade: 'SSLC: 92.4% | HSC: 65%',
      description: 'Completed secondary and higher secondary education with distinction in fundamental sciences, logical problem solving, and design thinking.'
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
        <span className="section-eyebrow">Milestones & Career</span>
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
