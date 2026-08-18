import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Code, Cpu } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain size={20} />,
      skills: ["RAG Architectures", "Agentic AI", "Prompt Engineering", "LangChain", "LangGraph", "LLM APIs (Gemini)", "Semantic Search", "NLP", "Deep Learning (CNN, LSTM)"],
      colorClass: ""
    },
    {
      title: "Full-Stack & Backend",
      icon: <Code size={20} />,
      skills: ["Python", "FastAPI", "React.js", "Next.js", "RESTful APIs", "SQL"],
      colorClass: "blue-note"
    },
    {
      title: "Databases & DevOps",
      icon: <Database size={20} />,
      skills: ["ChromaDB", "FAISS", "MySQL", "MongoDB", "Git / GitHub"],
      colorClass: "green-note"
    },
    {
      title: "Libraries & Data Science",
      icon: <Cpu size={20} />,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      colorClass: ""
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header-sketchy">
          <h2 className="sketchy">Technical_Skills.md</h2>
          <p className="handwritten">My specialized tools and core technologies</p>
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
