import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Edith from './components/Edith';
import TechStackMarquee from './components/TechStackMarquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeView from './components/ResumeView';
import AnimatedCursor from './components/AnimatedCursor';
import { Sparkles, FileText, Printer } from 'lucide-react';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState('portfolio'); // 'portfolio' or 'resume'

  const handlePrint = () => {
    const prevMode = viewMode;
    setViewMode('resume');
    setTimeout(() => {
      window.print();
      setViewMode(prevMode);
    }, 180);
  };

  return (
    <div className="app-container">
      {/* Custom Glowing Magnetic Cursor */}
      <AnimatedCursor />

      <div className="nav-fade" />

      {/* Floating View Switcher & Print Control Dock */}
      <div className="control-panel no-print">
        <button
          className={`btn-toggle ${viewMode === 'portfolio' ? 'active' : ''}`}
          onClick={() => setViewMode('portfolio')}
          aria-label="Switch to 3D Cyberpunk Portfolio"
          data-cursor="pointer"
        >
          <Sparkles size={15} />
          <span>Interactive 3D</span>
        </button>
        <button
          className={`btn-toggle ${viewMode === 'resume' ? 'active' : ''}`}
          onClick={() => setViewMode('resume')}
          aria-label="Switch to Tailored Resume View"
          data-cursor="pointer"
        >
          <FileText size={15} />
          <span>Resume (CV)</span>
        </button>
        <div className="divider" />
        <button
          className="btn-toggle"
          onClick={handlePrint}
          title="Print or Save Resume as PDF"
          aria-label="Print Resume"
          data-cursor="pointer"
        >
          <Printer size={15} />
          <span>Print</span>
        </button>
      </div>

      {/* Main Content Area */}
      {viewMode === 'portfolio' ? (
        <div className="portfolio-view">
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhatIDo />
            <Edith />
            <TechStackMarquee />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      ) : (
        <div className="resume-view">
          <ResumeView />
        </div>
      )}
    </div>
  );
}

export default App;
