import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-tech-text">
            Designed with <span>Figma</span>, <span>React</span> & <span>Human-Centered Empathy</span>.
          </p>
          <p className="footer-author-text">
            Portfolio of <span className="highlight-name">Lakshana S</span> — UI/UX Designer.
          </p>
        </div>

        <div className="footer-right">
          <span className="footer-year">© 2026 — Present</span>
          <button
            onClick={scrollToTop}
            className="btn-back-to-top"
            title="Scroll to Top"
            data-cursor="pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
