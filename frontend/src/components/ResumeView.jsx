import React from 'react';

const ResumeView = () => {
  return (
    <div className="cv-paper">
      {/* Header */}
      <div className="cv-header">
        <h1 className="cv-name">Nikyn V S</h1>
        <div className="cv-title">Generative AI & Machine Learning Engineer</div>
        <div className="cv-contacts">
          <a href="tel:+919677872799">+91 96778 72799</a>
          <span>|</span>
          <a href="mailto:s.nikyn005@gmail.com">s.nikyn005@gmail.com</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/nikyn-suresh-20a9413bb/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nikyn-suresh</a>
          <span>|</span>
          <a href="https://github.com/Nikynsuresh" target="_blank" rel="noopener noreferrer">github.com/Nikynsuresh</a>
          <span>|</span>
          <a href="https://leetcode.com/u/nikyn_suresh" target="_blank" rel="noopener noreferrer">leetcode.com/u/nikyn_suresh</a>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="cv-section">
        <h2 className="cv-section-title">Professional Summary</h2>
        <p className="cv-summary-text">
          Solutions-driven Generative AI and Machine Learning Engineer specializing in architecting scalable Retrieval-Augmented
          Generation (RAG) pipelines, autonomous agents, and NLP applications. Proven track record of independently designing
          full-stack AI products, indexing large-scale datasets (14,000+ documents), and building automated, high-performance
          tools that accelerate workflows and enhance user engagement.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="cv-section">
        <h2 className="cv-section-title">Technical Skills</h2>
        <div className="cv-skill-group">
          <strong>AI & Machine Learning:</strong> RAG Architectures, Agentic AI, Prompt Engineering, LangChain, LangGraph, LLM APIs (Gemini), Semantic Search, NLP, Deep Learning (CNN, LSTM)
        </div>
        <div className="cv-skill-group">
          <strong>Full-Stack & Backend:</strong> Python, FastAPI, React.js, Next.js, RESTful APIs, SQL
        </div>
        <div className="cv-skill-group">
          <strong>Databases & DevOps:</strong> ChromaDB, FAISS, MySQL, MongoDB, Git/GitHub
        </div>
        <div className="cv-skill-group">
          <strong>Libraries & Data Science:</strong> PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy
        </div>
      </div>

      {/* Technical Projects */}
      <div className="cv-section">
        <h2 className="cv-section-title">Technical Projects</h2>

        <div className="cv-entry">
          <div className="cv-entry-header">
            <span className="cv-entry-title">
              AI-Based Learning Platform | <span className="cv-entry-subtitle">FastAPI, React.js, Gemini AI, ChromaDB, RAG</span> <a href="https://github.com/Nikynsuresh/AI-based-Learning-platform.git" target="_blank" rel="noopener noreferrer" style={{ color: '#003366', textDecoration: 'none' }}>GitHub</a>
            </span>
            <span className="cv-entry-date">Dec 2025 – Mar 2026</span>
          </div>
          <ul className="cv-entry-bullets">
            <li>Designed and deployed a full-stack learning application from scratch using React.js and FastAPI, enabling instant automated study material generation from raw PDFs.</li>
            <li>Architected robust RAG pipelines leveraging ChromaDB and semantic search to instantly generate context-accurate quizzes, flashcards, and summaries, significantly reducing manual content creation time.</li>
          </ul>
        </div>

        <div className="cv-entry">
          <div className="cv-entry-header">
            <span className="cv-entry-title">
              Smart DevTool for API Integration | <span className="cv-entry-subtitle">Next.js, FastAPI, Agentic AI, LangGraph</span> <a href="https://github.com/Nikynsuresh/Smart-DevTool-for-Api-Integration.git" target="_blank" rel="noopener noreferrer" style={{ color: '#003366', textDecoration: 'none' }}>GitHub</a>
            </span>
            <span className="cv-entry-date">Apr 2026 – Jun 2026</span>
          </div>
          <ul className="cv-entry-bullets">
            <li>Built an autonomous Agentic AI tool utilizing LangGraph and FastAPI to parse complex API documentation and auto-generate production-ready SDKs, eliminating manual onboarding friction.</li>
            <li>Implemented intelligent prompt systems to dynamically generate SDK wrappers, Postman collections, and boilerplate code, accelerating developer integration timelines.</li>
          </ul>
        </div>

        <div className="cv-entry">
          <div className="cv-entry-header">
            <span className="cv-entry-title">
              Multilingual Government Schemes Chatbot | <span className="cv-entry-subtitle">LangChain, Gemini AI, FAISS</span> <a href="https://github.com/Nikynsuresh/Multilingual-Chatbot-for-indian-schemes.git" target="_blank" rel="noopener noreferrer" style={{ color: '#003366', textDecoration: 'none' }}>GitHub</a>
            </span>
            <span className="cv-entry-date">Sep 2025 – Nov 2025</span>
          </div>
          <ul className="cv-entry-bullets">
            <li>Built and deployed a multilingual chatbot utilizing LangChain and Gemini AI to provide real-time, highly accurate information on Indian government schemes.</li>
            <li>Processed, chunked, and indexed 14,000+ complex policy documents into FAISS and ChromaDB, optimizing vector search to achieve sub-second retrieval latency and high semantic accuracy.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="cv-section">
        <h2 className="cv-section-title">Education</h2>

        <div className="cv-entry">
          <div className="cv-entry-header">
            <span className="cv-entry-title">Sri Shakthi Institute of Engineering and Technology</span>
            <span className="cv-entry-date">Coimbatore, Tamil Nadu</span>
          </div>
          <div className="cv-entry-header" style={{ fontWeight: 'normal', fontSize: '0.95rem', marginTop: '0.1rem' }}>
            <span style={{ fontStyle: 'italic' }}>Bachelor of Technology in Artificial Intelligence and Data Science, CGPA: 7.56/10.00</span>
            <span style={{ fontStyle: 'italic' }}>Sep 2023 – Present</span>
          </div>
        </div>

        <div className="cv-entry" style={{ marginTop: '0.6rem' }}>
          <div className="cv-entry-header">
            <span className="cv-entry-title">GKD Matriculation Higher Secondary School</span>
            <span className="cv-entry-date">Coimbatore, Tamil Nadu</span>
          </div>
          <div className="cv-entry-header" style={{ fontWeight: 'normal', fontSize: '0.95rem', marginTop: '0.1rem' }}>
            <span style={{ fontStyle: 'italic' }}>Higher Secondary Certificate (Computer Science and Mathematics) | Percentage: 72.5%</span>
            <span style={{ fontStyle: 'italic' }}>2021 – 2023</span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="cv-section">
        <h2 className="cv-section-title">Certifications</h2>
        <ul className="cv-entry-bullets">
          <li>Python for Data Science, AI & Development – IBM (Coursera)</li>
          <li>AI in Healthcare Workshop – IIT Madras Research Park</li>
        </ul>
      </div>

      {/* Achievements & Competitions */}
      <div className="cv-section">
        <h2 className="cv-section-title">Achievements & Competitions</h2>
        <ul className="cv-entry-bullets">
          <li><strong>Algorithmic Problem Solving:</strong> Successfully solved 270+ Data Structures and Algorithms problems on LeetCode, demonstrating strong analytical and optimization skills.</li>
          <li><strong>Large-Scale Data Engineering:</strong> Processed and vectorized a massive dataset of 14,000+ government schemes, utilizing advanced chunking and embedding techniques for high-performance retrieval.</li>
          <li><strong>End-to-End Delivery:</strong> Architected and deployed 3+ production-ready AI applications integrating complex backend APIs, LLMs, and Vector Databases.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeView;
