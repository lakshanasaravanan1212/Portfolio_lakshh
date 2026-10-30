import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Layers, Sparkles } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Prototyping Tools",
      icon: <Layout size={20} />,
      skills: ["Figma", "Sketch", "Balsamiq", "InVision", "Adobe XD", "Miro / FigJam", "Canva"],
      colorClass: ""
    },
    {
      title: "UI/UX Methodologies",
      icon: <Layers size={20} />,
      skills: ["User Requirements Gathering", "Wireframing (Low & High Fi)", "Interactive Prototyping", "User Flows", "Information Architecture", "Usability Testing", "Heuristic Evaluation"],
      colorClass: "blue-note"
    },
    {
      title: "Visual Design & Branding",
      icon: <Palette size={20} />,
      skills: ["Adobe Illustrator", "Adobe Photoshop", "Typography Hierarchy", "Color Theory", "Visual Hierarchy", "Brand Asset Design", "Iconography"],
      colorClass: "green-note"
    },
    {
      title: "Design Systems & Quality",
      icon: <Sparkles size={20} />,
      skills: ["Reusable Component Kits", "Design Tokens", "WCAG Accessibility", "Responsive Web Design", "Mobile Touch Ergonomics (48px)", "Micro-interactions"],
      colorClass: ""
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header-sketchy">
          <h2 className="sketchy">UIUX_Skills.md</h2>
          <p className="handwritten">My specialized design tools, methods, and component standards</p>
        </div>

        <div className="skills-board">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`skills-sheet ${category.colorClass}`}
            >
              <div className="paperclip"></div>
              <div className="sheet-header">
                <span className="sheet-icon">{category.icon}</span>
                <h3 className="sketchy">{category.title}</h3>
              </div>
              <ul className="skills-list handwritten">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="checkmark">✓</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
