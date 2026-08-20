<div align="center">

  # ⚡ Nikyn V S — Interactive Portfolio & LaTeX CV

  **Generative AI & Machine Learning Engineer**  
  *Architecting Scalable RAG Pipelines • Autonomous Multi-Agent Systems • High-Performance Full-Stack AI Products*

  [🌐 Live Demo](https://nikynsuresh.me) • [💼 LinkedIn](https://www.linkedin.com/in/nikyn-suresh-20a9413bb/) • [💻 LeetCode (270+ Solved)](https://leetcode.com/u/nikyn_suresh) • [🐙 GitHub](https://github.com/Nikynsuresh)

  <br />

  ![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
  ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
  ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div>

---

## 🌟 Overview

A modern, high-performance, and cyberpunk-inspired personal portfolio designed and engineered from scratch. Built with **React 19**, **Vite**, and **Framer Motion**, featuring dual interactive modes, an embedded conversational AI assistant (**E.D.I.T.H**), and a one-click printable **LaTeX-styled CV**.

---

## ✨ Key Features

- 🎭 **Dual-View Architecture**:
  - **Interactive 3D Mode**: Dark cyberpunk aesthetic with particle effects, glassmorphic cards, and fluid motion.
  - **LaTeX CV Mode**: Clean, recruiter-friendly academic resume with a single-click print/PDF export engine.
- 🤖 **E.D.I.T.H AI Assistant**:
  - Embedded conversational AI interface with custom knowledge retrieval engine to answer recruiter queries about projects, tech stack, and background interactively.
- 💫 **Modern Micro-Interactions**:
  - Custom glowing magnetic cursor with hover state tracking.
  - Infinite tech stack marquee ticker.
  - Physics-based spring animations with `framer-motion`.
- 🚀 **AI & ML Engineering Showcase**:
  - Detailed case studies for RAG pipelines, LangGraph autonomous agents, AI governance frameworks, and NLP systems.
- 📱 **Fully Responsive & Accessible**:
  - Mobile-first layout with smooth touch interactions and SEO-optimized metadata.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Modern CSS3 (CSS Variables, Flexbox/Grid, Glassmorphism) & Tailwind utilities
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typewriter Effect**: `react-simple-typewriter`

### Backend & Services
- **Runtime**: [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- **Security**: [Helmet](https://helmetjs.github.io/) & [CORS](https://expressjs.com/en/resources/middleware/cors.html)
- **Mailing Service**: [Nodemailer](https://nodemailer.com/) for contact form SMTP routing

### AI / Data Engineering Stack (Featured Projects)
- **LLMs & Frameworks**: LangChain, LangGraph, Google Gemini API
- **Vector Databases**: ChromaDB, FAISS
- **Microservices**: Python, FastAPI, Flask

---

## 📂 Project Structure

```bash
Nikyn-Portfolio/
├── frontend/                 # Client application (React + Vite)
│   ├── public/               # Static assets & favicon
│   ├── src/
│   │   ├── components/       # UI Components (Hero, About, Edith AI, Projects, etc.)
│   │   │   ├── Edith.jsx     # AI Assistant component & Knowledge Base
│   │   │   ├── ResumeView.jsx# LaTeX formatted CV component
│   │   │   └── ...
│   │   ├── App.jsx           # Root application & View Switcher logic
│   │   ├── main.jsx          # Entry point
│   │   └── ...
│   ├── index.html            # Main HTML document
│   └── package.json
├── backend/                  # Optional API server (Express / Node.js)
│   ├── index.js              # Server entry point & API endpoints
│   └── package.json
├── package.json              # Root scripts orchestrator
└── README.md
