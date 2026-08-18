import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, Code2, Copy, Check, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('s.nikyn005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <span className="section-eyebrow">Get In Touch</span>
        <h2 className="contact-giant-title">CONTACT</h2>
      </motion.div>

      <div className="contact-flex-grid">
        {/* Email & Phone Column */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="contact-col"
        >
          <h4 className="contact-col-heading">Direct Inquiries</h4>
          <div className="contact-link-row">
            <a
              href="mailto:s.nikyn005@gmail.com"
              className="contact-main-link"
              data-cursor="pointer"
            >
              s.nikyn005@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="btn-copy-email"
              title="Copy Email"
              data-cursor="pointer"
            >
              {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
            </button>
          </div>

          <div className="contact-phone-row">
            <Phone size={16} className="contact-sub-icon" />
            <a href="tel:+919677872799" className="contact-sub-link">
              +91 96778 72799
            </a>
          </div>

          <div className="contact-location-row">
            <MapPin size={16} className="contact-sub-icon" />
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>
        </motion.div>

        {/* Social Profiles Column (amarnath.dev style) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-col"
        >
          <h4 className="contact-col-heading">Network & Code</h4>
          <div className="contact-social-list">
            <a
              href="https://github.com/Nikynsuresh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              data-cursor="pointer"
            >
              <div className="social-item-left">
                <Github size={18} />
                <span>GitHub</span>
              </div>
              <ArrowUpRight size={18} className="social-item-arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/nikyn-suresh-20a9413bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              data-cursor="pointer"
            >
              <div className="social-item-left">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight size={18} className="social-item-arrow" />
            </a>

            <a
              href="https://leetcode.com/u/nikyn_suresh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              data-cursor="pointer"
            >
              <div className="social-item-left">
                <Code2 size={18} />
                <span>LeetCode (270+ Solved)</span>
              </div>
              <ArrowUpRight size={18} className="social-item-arrow" />
            </a>
          </div>
        </motion.div>

        {/* Attribution & Status Column */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="contact-col contact-attribution-col"
        >
          <h4 className="contact-col-heading">Availability</h4>
          <div className="contact-status-card glass-card">
            <span className="live-status-pill">
              <span className="live-dot" /> Open for Opportunities
            </span>
            <p className="contact-status-p">
              Actively seeking Generative AI, Machine Learning Engineer, and RAG Architecture roles.
            </p>
            <a
              href="mailto:s.nikyn005@gmail.com?subject=Opportunity at [Company Name]"
              className="btn-hire-me"
              data-cursor="pointer"
            >
              <Send size={15} />
              <span>Schedule an Interview</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
