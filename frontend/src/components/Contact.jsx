import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Copy, Check, Send, Palette, FileText } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('lakshanasaravanan1212@gmail.com');
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
              href="mailto:lakshanasaravanan1212@gmail.com"
              className="contact-main-link"
              data-cursor="pointer"
            >
              lakshanasaravanan1212@gmail.com
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
            <a href="tel:+919043270978" className="contact-sub-link">
              +91 90432 70978
            </a>
          </div>

          <div className="contact-location-row">
            <MapPin size={16} className="contact-sub-icon" />
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>
        </motion.div>

        {/* Social Profiles Column */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-col"
        >
          <h4 className="contact-col-heading">Professional Links</h4>
          <div className="contact-social-list">
            <a
              href="https://linkedin.com/in/lakshh12"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              data-cursor="pointer"
            >
              <div className="social-item-left">
                <Linkedin size={18} />
                <span>LinkedIn Profile</span>
              </div>
              <ArrowUpRight size={18} className="social-item-arrow" />
            </a>

            <a
              href="/Lakshana_S_Talview_UIUX_Intern_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              data-cursor="pointer"
            >
              <div className="social-item-left">
                <FileText size={18} />
                <span>Download Tailored Resume</span>
              </div>
              <ArrowUpRight size={18} className="social-item-arrow" />
            </a>

            <a
              href="#skills"
              className="contact-social-item"
              data-cursor="pointer"
            >
              <div className="social-item-left">
                <Palette size={18} />
                <span>UI/UX Design Stack</span>
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
          <h4 className="contact-col-heading">Internship Status</h4>
          <div className="contact-status-card glass-card">
            <span className="live-status-pill">
              <span className="live-dot" /> Open for Opportunities
            </span>
            <p className="contact-status-p">
              Actively seeking <strong>UI/UX Intern</strong> and <strong>Product Design</strong> roles. Eager to contribute to fast-paced product teams under senior design mentorship.
            </p>
            <a
              href="mailto:lakshanasaravanan1212@gmail.com?subject=UI/UX Internship Opportunity at [Company Name]"
              className="btn-hire-me"
              data-cursor="pointer"
            >
              <Send size={15} />
              <span>Reach Out Directly</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
