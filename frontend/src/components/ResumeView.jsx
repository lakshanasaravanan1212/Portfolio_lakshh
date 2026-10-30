import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Printer, Image, Sparkles, ExternalLink } from 'lucide-react';

const ResumeView = () => {
  const [showPhoto, setShowPhoto] = useState(true);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-container">
      {/* Resume Action Bar (Hidden in Print) */}
      <div className="cv-action-bar no-print">
        <div className="cv-action-left">
          <span className="cv-badge-role">Target Role: UI/UX Intern @ Talview</span>
          <span className="cv-status-dot">● Tailored for ATS & Hiring Manager</span>
        </div>
        <div className="cv-action-right">
          <button 
            type="button" 
            className="cv-action-btn"
            onClick={() => setShowPhoto(!showPhoto)}
            title="Toggle Profile Photo"
          >
            <Image size={15} />
            <span>{showPhoto ? 'Hide Photo' : 'Show Photo'}</span>
          </button>
          <button 
            type="button" 
            className="cv-action-btn primary"
            onClick={handlePrint}
            title="Print or Save as PDF"
          >
            <Printer size={15} />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      <div className="cv-paper">
        {/* Header with Photo & Contact Info */}
        <div className="cv-header-flex">
          {showPhoto && (
            <div className="cv-avatar-container">
              <img 
                src="/lakshana_portrait.jpg" 
                alt="Lakshana S - UI/UX Designer" 
                className="cv-avatar-img"
              />
            </div>
          )}

          <div className="cv-header-details">
            <h1 className="cv-name">LAKSHANA S</h1>
            <div className="cv-title">UI/UX Designer | Aspiring Product Design Intern</div>
            
            <div className="cv-contacts-grid">
              <a href="mailto:lakshanasaravanan1212@gmail.com" className="cv-contact-item">
                <Mail size={13} className="cv-icon" />
                <span>lakshanasaravanan1212@gmail.com</span>
              </a>
              <a href="tel:+919043270978" className="cv-contact-item">
                <Phone size={13} className="cv-icon" />
                <span>+91 90432 70978</span>
              </a>
              <a 
                href="https://linkedin.com/in/lakshh12" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cv-contact-item"
              >
                <Linkedin size={13} className="cv-icon" />
                <span>linkedin.com/in/lakshh12</span>
              </a>
              <span className="cv-contact-item">
                <MapPin size={13} className="cv-icon" />
                <span>Coimbatore, Tamil Nadu</span>
              </span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="cv-section">
          <h2 className="cv-section-title">Professional Summary</h2>
          <p className="cv-summary-text">
            User-Centric UI/UX Designer and Engineering undergraduate with a strong foundation in <strong>human-centered design principles, rapid wireframing, and interactive prototyping</strong>. Highly proficient in <strong>Figma, Sketch, Balsamiq, and InVision</strong>, with hands-on experience in user research, low-to-high fidelity wireframing, and building accessible UI component libraries. Proven track record gathering user requirements, designing intuitive web dashboards, and troubleshooting UX friction points. Eager to contribute fresh creative perspectives, rapid iteration, and user-centered design excellence to <strong>Talview's AI-driven assessment and candidate experience ecosystem</strong> under senior designer mentorship.
          </p>
        </div>

        {/* Technical & Design Skills (Targeted to Talview JD) */}
        <div className="cv-section">
          <h2 className="cv-section-title">Skills & Methodologies</h2>
          <div className="cv-skill-group">
            <strong>Design & Prototyping Tools:</strong> Figma, Sketch, Balsamiq, InVision, Adobe XD, Adobe Photoshop, Adobe Illustrator, Canva, Miro, FigJam
          </div>
          <div className="cv-skill-group">
            <strong>UI/UX Design Competencies:</strong> User Requirements Gathering, Low & High-Fidelity Wireframing, Interactive Prototyping, User Flows, Information Architecture, Reusable UI Components & Design Systems, Usability Testing, Heuristic Evaluation, UX Troubleshooting, Responsive Web & Mobile Design, Accessibility (WCAG)
          </div>
          <div className="cv-skill-group">
            <strong>Visual & Interaction Design:</strong> Typography Hierarchy, Color Theory, Layout Systems, Visual Hierarchy, Micro-interactions, Design Tokens, Brand Identity Assets
          </div>
          <div className="cv-skill-group">
            <strong>Product & Emerging UX Awareness:</strong> Conversational UI & AI Interaction Patterns (Assessment Bots / Virtual Interviewers), Multi-Role Workflows (Candidate, Evaluator, Admin), Assessment Dashboards
          </div>
          <div className="cv-skill-group">
            <strong>Soft Skills & Work Culture:</strong> Cross-functional Collaboration, Problem-Solving Mindset, Attention to Detail, Creative Brainstorming, Continuous Adaptability (Talview 5Cs)
          </div>
        </div>

        {/* Featured Projects (Directly Aligned with Talview's Domain) */}
        <div className="cv-section">
          <h2 className="cv-section-title">UI/UX Design Projects</h2>

          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">
                Student Learning & Assessment Dashboard | <span className="cv-entry-subtitle">Figma, Balsamiq, Design Systems, Usability Testing</span>
              </span>
              <span className="cv-entry-date">2025</span>
            </div>
            <ul className="cv-entry-bullets">
              <li>Architected an end-to-end web dashboard for course assessments, timed test modules, and real-time performance analytics across student and evaluator roles.</li>
              <li>Drafted initial low-fidelity wireframes in <strong>Balsamiq</strong> to map testing workflows, transitioning to pixel-perfect high-fidelity mockups and interactive prototypes in <strong>Figma</strong>.</li>
              <li>Engineered a modular 30+ piece UI component library (timers, progress trackers, question palettes, scorecards) with strict visual consistency and accessibility standards.</li>
              <li>Conducted usability walkthroughs with 15+ peer testers, identifying navigation bottlenecks and reducing quiz completion friction by 25%.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">
                Smart Gate Pass & Identity Management System | <span className="cv-entry-subtitle">Figma, Sketch, InVision, User Flows</span>
              </span>
              <span className="cv-entry-date">2024</span>
            </div>
            <ul className="cv-entry-bullets">
              <li>Designed a responsive, multi-tier verification interface streamlining secure approval workflows for students, faculty approvers, and security administrators.</li>
              <li>Mapped comprehensive user journeys and edge cases in <strong>Sketch</strong>, resolving permission routing complexities and reducing user friction.</li>
              <li>Created interactive click-through prototypes in <strong>InVision</strong> and <strong>Figma</strong> to validate check-in and automated status notification flows with stakeholders.</li>
              <li>Redesigned status indicators and form inputs, cutting administrative processing time and achieving a 95% user satisfaction rate.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">
                Fitness & Wellness Tracking Mobile App | <span className="cv-entry-subtitle">Figma, Balsamiq, Mobile UX, User Research</span>
              </span>
              <span className="cv-entry-date">2024</span>
            </div>
            <ul className="cv-entry-bullets">
              <li>Developed a user-friendly mobile application focused on tracking personal daily habits, workout milestones, and nutritional goals.</li>
              <li>Formulated user personas, empathy maps, and rapid wireframes in <strong>Balsamiq</strong> to optimize ergonomics for one-handed mobile navigation.</li>
              <li>Implemented cohesive typography, color hierarchy, and engaging micro-interactions in <strong>Figma</strong> for fluid screen transitions and high user retention.</li>
              <li>Tested usability across diverse mobile viewports, resolving touch-target sizing issues and adhering to 48x48px tap accessibility standards.</li>
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div className="cv-section">
          <h2 className="cv-section-title">Experience</h2>

          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">
                Intelle Power Automation Pvt Ltd — UI/UX Designer <span className="cv-entry-subtitle">(Freelance Project)</span>
              </span>
              <span className="cv-entry-date">Oct 2024 – Dec 2024</span>
            </div>
            <ul className="cv-entry-bullets">
              <li>Led the UI/UX design for a responsive corporate web platform, gathering stakeholder requirements and transforming business goals into intuitive product specs.</li>
              <li>Produced initial wireframes in <strong>Balsamiq/Sketch</strong> and developed full interactive prototypes and reusable UI kits in <strong>Figma</strong>.</li>
              <li>Enforced consistent visual design principles, typography hierarchies, and custom branded vector assets using Adobe Illustrator and Photoshop.</li>
              <li>Collaborated with front-end developers during handoff, diagnosing and troubleshooting responsive layout and cross-device usability defects.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">
                Intelle Power System — Visual & Graphic Designer <span className="cv-entry-subtitle">(Freelance / Project-Based)</span>
              </span>
              <span className="cv-entry-date">Jul 2024 – Sep 2024</span>
            </div>
            <ul className="cv-entry-bullets">
              <li>Designed corporate marketing collaterals, digital invitation suites, and event decks aligned with corporate brand guidelines.</li>
              <li>Utilized Adobe Photoshop, Adobe Illustrator, and Canva to deliver print and digital assets with strict typographic balance and color harmony.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-header">
              <span className="cv-entry-title">
                Code Core — Multimedia & Content Designer <span className="cv-entry-subtitle">(Freelance / Project-Based)</span>
              </span>
              <span className="cv-entry-date">Feb 2024 – May 2024</span>
            </div>
            <ul className="cv-entry-bullets">
              <li>Edited promotional social media videos, implementing transitions, text animations, and audio mastering to enhance audience engagement.</li>
              <li>Participated in creative brainstorming sessions with team leads to deliver engaging, brand-consistent multimedia content.</li>
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
            <div className="cv-entry-header" style={{ fontWeight: 'normal', fontSize: '0.9rem', marginTop: '0.1rem' }}>
              <span style={{ fontStyle: 'italic' }}>Bachelor of Engineering (B.E.) in Electrical and Electronics Engineering | CGPA: 7.9 / 10.0</span>
              <span style={{ fontStyle: 'italic' }}>2023 – 2027</span>
            </div>
          </div>

          <div className="cv-entry" style={{ marginTop: '0.4rem' }}>
            <div className="cv-entry-header">
              <span className="cv-entry-title">Sri Chaitanya Techno School</span>
              <span className="cv-entry-date">Coimbatore, Tamil Nadu</span>
            </div>
            <div className="cv-entry-header" style={{ fontWeight: 'normal', fontSize: '0.9rem', marginTop: '0.1rem' }}>
              <span style={{ fontStyle: 'italic' }}>Higher Secondary Certificate (HSC) — Percentage: 65% (2022–2023) | Secondary School (SSLC) — Percentage: 92.4% (2020–2021)</span>
              <span style={{ fontStyle: 'italic' }}>2020 – 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
