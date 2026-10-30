import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import './Edith.css';

// EDITH Knowledge Base & Response Engine for Lakshana S
const EDITH_KB = {
  about_concise: `Lakshana S is an Electrical & Electronics Engineering undergraduate at Sri Shakthi Institute of Engineering and Technology, Coimbatore (2023 – 2027, CGPA: 7.9/10.0). She is an aspiring UI/UX Designer and Product Design Intern skilled in Figma, Sketch, Balsamiq, InVision, user research, wireframing, and building accessible design systems.`,
  
  about_detailed: `Lakshana S is a UI/UX Designer and Engineering student at Sri Shakthi Institute of Engineering and Technology (2023 – 2027, CGPA: 7.9/10.0).

Her core design expertise spans:
• **Design & Prototyping Tools**: Figma, Sketch, Balsamiq, InVision, Adobe XD, Adobe Photoshop, Adobe Illustrator, Canva, Miro, and FigJam.
• **UI/UX Competencies**: User requirements gathering, low-to-high fidelity wireframing, interactive prototyping, user flows, information architecture, design systems, usability testing, and UX troubleshooting.
• **Visual & Interaction Design**: Typographic balance, WCAG contrast compliance, responsive layout grids, micro-interactions, and brand identity assets.
• **Product & AI UX Awareness**: Conversational UI patterns (virtual interviewers / assessment bots), multi-role workflow dashboards (candidates, faculty, administrators), and exam/proctoring experiences.
• **Education**: B.E. in EEE (Sri Shakthi Institute of Engg & Tech, CGPA: 7.9), Higher Secondary Certificate (65%), Secondary School Certificate (92.4%).`,

  why_hire_concise: `Lakshana combines strong user empathy with rapid wireframing speed and systematic component thinking. She excels at gathering stakeholder requirements, converting complex workflows into intuitive low-fi Balsamiq wireframes and pixel-perfect Figma prototypes, and troubleshooting UX friction. Aligned with Talview's 5Cs culture (Collaboration, Commitment, Credence, Customer-centricity, Candor), she is ready to add immediate value as a UI/UX Intern.`,

  why_hire_detailed: `You should hire Lakshana S because she brings:
1. **User-Centered Product Mindset**: Skilled in gathering and analyzing user requirements, mapping personas and edge cases, and designing intuitive web and mobile interfaces.
2. **Industry Prototyping Tools**: Fluent in Figma, Sketch, Balsamiq, and InVision for rapid wireframing and interactive stakeholder validation.
3. **Design System & Component Discipline**: Proven ability to architect 30+ piece reusable UI component libraries that ensure visual consistency, accessibility, and clean developer handoff.
4. **Hands-on Freelance Delivery**: Led corporate web redesigns, graphic branding suites, and multimedia content under real client deadlines.
5. **Growth Mindset & Curiosity**: Eager to learn emerging AI/conversational UX patterns and apply design thinking under senior designer mentorship.`,

  projects_concise: `Lakshana has designed three standout projects: a **Student Learning & Assessment Dashboard** (Figma, Balsamiq, 30+ component design system), a **Smart Gate Pass & Identity Management System** (Sketch, InVision, multi-tier approvals), and a **Fitness & Wellness Tracking Mobile App** (Balsamiq, Figma, mobile ergonomics).`,

  projects_detailed: `Here are Lakshana's featured design projects:

1. **Student Learning & Assessment Dashboard** (Figma, Balsamiq, Design Systems)
   • *What it does*: An end-to-end web dashboard for timed course examinations, quiz modules, and real-time performance analytics across student and instructor roles.
   • *Design Process*: Low-fidelity wireframing in Balsamiq, pixel-perfect Figma mockups, and a 30+ piece reusable UI component library (timers, progress trackers, question palettes, scorecards).
   • *Impact*: Usability walkthroughs with 15+ peer testers reduced quiz completion friction by 25%.

2. **Smart Gate Pass & Identity Management System** (Sketch, InVision, Figma)
   • *What it does*: A responsive multi-role verification system streamlining approval workflows for students, faculty approvers, and security administrators.
   • *Design Process*: User journey mapping and edge-case resolution in Sketch; interactive click-through prototypes in InVision and Figma to test rapid check-in flows.
   • *Impact*: Cut administrative turnaround time and achieved a 95% user satisfaction rate.

3. **Fitness & Wellness Tracking Mobile App** (Figma, Balsamiq, Mobile UX)
   • *What it does*: A habit tracking and personal workout companion app focused on thumb-friendly mobile navigation and motivational progress visualization.
   • *Design Process*: User personas, empathy maps, low-fi Balsamiq wireframes, and high-fidelity Figma screens with micro-interactions adhering to 48x48px tap targets.
   • *Impact*: Achieved an 88% ease-of-use rating across diverse mobile screen sizes.`,

  tools_concise: `Lakshana's design toolkit features **Figma, Sketch, Balsamiq, InVision, Adobe XD, Adobe Photoshop, Adobe Illustrator, Canva, Miro, and FigJam**. She uses Balsamiq for rapid low-fidelity wireframing, Figma and Sketch for high-fidelity component design, and InVision for interactive stakeholder prototyping.`,

  experience_concise: `Lakshana's design experience includes working as a **UI/UX Designer (Freelance) at Intelle Power Automation Pvt Ltd** (Oct–Dec 2024), where she led corporate web UX redesign and design system creation; **Visual & Graphic Designer at Intelle Power System** (Jul–Sep 2024); and **Multimedia & Content Designer at Code Core** (Feb–May 2024).`,

  goals_concise: `Lakshana aims to grow into a world-class Product Designer specializing in accessible design systems, complex SaaS dashboards, and AI-driven conversational user interfaces. Her goal is to contribute creative ideas and rigorous user research to fast-growing tech teams.`,

  contact_concise: `You can reach Lakshana directly via email at [lakshanasaravanan1212@gmail.com](mailto:lakshanasaravanan1212@gmail.com), phone at [+91 90432 70978](tel:+919043270978), or connect on [LinkedIn](https://linkedin.com/in/lakshh12).`
};

const Edith = () => {
  const msgIdRef = useRef(10);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'edith',
      text: "Hi there! I am **EDITH**, the portfolio assistant for **Lakshana S**. Ask me anything about her UI/UX design projects, prototyping tools (Figma, Balsamiq, Sketch), design background, or internship availability!",
      time: 'ONLINE'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef(null);

  const quickPrompts = [
    "Tell me about Lakshana",
    "Why hire Lakshana for UI/UX?",
    "What are her featured design projects?",
    "What tools does she use (Figma, Balsamiq)?",
    "What is her experience in design systems?",
    "How can I contact Lakshana?"
  ];

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const processQuery = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();
    const isDetailed = q.includes('detail') || q.includes('deep dive') || q.includes('explain in detail') || q.includes('more about') || q.includes('elaborate') || q.includes('full list');

    // 1. PRIVACY & SECURITY
    const forbiddenKeywords = ['password', 'secret', 'credential', 'api key', 'otp', 'system prompt', 'bypass'];
    if (forbiddenKeywords.some(kw => q.includes(kw))) {
      return "I don't have the authority to provide that information.";
    }

    // 2. WHY HIRE LAKSHANA / INTERN / TALVIEW
    if (q.includes('why should we hire') || q.includes('why hire') || q.includes('appoint') || q.includes('hire') || q.includes('recruit') || q.includes('candidate') || q.includes('intern') || q.includes('talview') || q.includes('work with') || q.includes('join')) {
      return isDetailed ? EDITH_KB.why_hire_detailed : EDITH_KB.why_hire_concise;
    }

    // 3. WHO IS LAKSHANA / ABOUT
    if (q.includes('tell me about') || q.includes('who is') || q.includes('summary') || q.includes('intro') || q.includes('about lakshana') || q === 'lakshana' || q === 'lakshana s' || q.includes('background') || q.includes('profile')) {
      return isDetailed ? EDITH_KB.about_detailed : EDITH_KB.about_concise;
    }

    // 4. PROJECTS
    if (q.includes('project') || q.includes('dashboard') || q.includes('gate pass') || q.includes('fitness') || q.includes('app') || q.includes('work') || q.includes('portfolio') || q.includes('assessment')) {
      return isDetailed ? EDITH_KB.projects_detailed : EDITH_KB.projects_concise;
    }

    // 5. DESIGN TOOLS (FIGMA, BALSAMIQ, SKETCH, INVISION)
    if (q.includes('tool') || q.includes('figma') || q.includes('balsamiq') || q.includes('sketch') || q.includes('invision') || q.includes('xd') || q.includes('photoshop') || q.includes('illustrator') || q.includes('canva') || q.includes('miro') || q.includes('software')) {
      return EDITH_KB.tools_concise;
    }

    // 6. DESIGN SKILLS & DESIGN SYSTEMS
    if (q.includes('skill') || q.includes('design system') || q.includes('wireframe') || q.includes('prototype') || q.includes('usability') || q.includes('research') || q.includes('user flow') || q.includes('wcag') || q.includes('component')) {
      return EDITH_KB.about_detailed;
    }

    // 7. EXPERIENCE & FREELANCE
    if (q.includes('experience') || q.includes('freelance') || q.includes('intelle') || q.includes('code core') || q.includes('company')) {
      return EDITH_KB.experience_concise;
    }

    // 8. EDUCATION & COLLEGE
    if (q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('cgpa') || q.includes('education') || q.includes('school') || q.includes('shakthi') || q.includes('chaitanya')) {
      return `Lakshana S is pursuing her B.E. in Electrical and Electronics Engineering at Sri Shakthi Institute of Engineering and Technology, Coimbatore (2023 – 2027) with a current CGPA of 7.9/10.0. She completed her Higher Secondary Certificate (65%) and Secondary School Certificate (92.4%) at Sri Chaitanya Techno School.`;
    }

    // 9. GOALS & ASPIRATIONS
    if (q.includes('goal') || q.includes('future') || q.includes('vision') || q.includes('interest') || q.includes('passion') || q.includes('aspire')) {
      return EDITH_KB.goals_concise;
    }

    // 10. CONTACT INFO
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('linkedin') || q.includes('reach') || q.includes('call') || q.includes('message')) {
      return EDITH_KB.contact_concise;
    }

    // 11. GREETINGS
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('edith') || q.includes('greetings')) {
      return "Hello! I am **EDITH**, Lakshana S's portfolio assistant. What would you like to know about her UI/UX design projects, prototyping tools (Figma, Balsamiq), or background?";
    }

    // 12. FALLBACK
    return "I'm not sure about that from Lakshana's portfolio information. You can use the contact section or email her directly at lakshanasaravanan1212@gmail.com.";
  };

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery.trim();
    msgIdRef.current += 1;
    const userMsg = {
      id: msgIdRef.current,
      sender: 'user',
      text: userText,
      time: 'LOGGED'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      msgIdRef.current += 1;
      const responseText = processQuery(userText);
      const aiMsg = {
        id: msgIdRef.current,
        sender: 'edith',
        text: responseText,
        time: 'SYNCED'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 380);
  };

  const handlePromptClick = (promptText) => {
    setInputQuery(promptText);
    msgIdRef.current += 1;
    const userMsg = {
      id: msgIdRef.current,
      sender: 'user',
      text: promptText,
      time: 'LOGGED'
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      msgIdRef.current += 1;
      const responseText = processQuery(promptText);
      const aiMsg = {
        id: msgIdRef.current,
        sender: 'edith',
        text: responseText,
        time: 'SYNCED'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 380);
  };

  const handleClearChat = () => {
    msgIdRef.current += 1;
    setMessages([
      {
        id: msgIdRef.current,
        sender: 'edith',
        text: "Session reset. EDITH assistant standing by. Ready for your UI/UX design inquiries about Lakshana S.",
        time: 'ONLINE'
      }
    ]);
  };

  const renderFormattedText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target={match[2].startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="edith-inline-link"
          >
            {match[1]}
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      return (
        <p key={lIdx} className="edith-msg-line">
          {parts.map((p, pIdx) => {
            if (typeof p === 'string') {
              const boldSegments = p.split(/\*\*(.*?)\*\*/g);
              return boldSegments.map((seg, sIdx) => 
                sIdx % 2 === 1 ? <strong key={sIdx} className="edith-bold">{seg}</strong> : seg
              );
            }
            return <React.Fragment key={pIdx}>{p}</React.Fragment>;
          })}
        </p>
      );
    });
  };

  return (
    <section id="edith" className="edith-section section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="edith-header"
      >
        <span className="section-eyebrow">Portfolio Design Assistant</span>
        <h2 className="section-title">
          Ask <span>EDITH</span>
        </h2>
        <p className="section-desc">
          Official interactive assistant embedded in Lakshana S's portfolio. Ask questions about her UI/UX projects, prototyping skills, or design experience.
        </p>
      </motion.div>

      {/* Main Terminal Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="edith-console-wrapper glass-card"
      >
        {/* Console Header */}
        <div className="edith-console-topbar">
          <div className="topbar-left">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="terminal-title">E.D.I.T.H. // DESIGN PORTFOLIO AI v3.2</span>
          </div>

          <div className="topbar-right">
            <div className="edith-status-indicator">
              <span className="edith-pulse-dot" />
              <span>ONLINE</span>
            </div>
            <button
              onClick={handleClearChat}
              className="btn-reset-chat"
              title="Reset Console"
              data-cursor="pointer"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>

        {/* Quick Question Chips */}
        <div className="edith-prompt-chips">
          <span className="prompt-label">Quick Prompts:</span>
          {quickPrompts.map((prompt, pIdx) => (
            <button
              key={pIdx}
              className="prompt-chip-btn"
              onClick={() => handlePromptClick(prompt)}
              data-cursor="pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Message Stream */}
        <div className="edith-messages-stream" ref={messagesContainerRef}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`edith-msg-row ${msg.sender === 'user' ? 'msg-user' : 'msg-edith'}`}
            >
              <div className="edith-msg-avatar">
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className="edith-msg-bubble">
                <div className="edith-msg-meta">
                  <span className="msg-sender-name">{msg.sender === 'user' ? 'RECRUITER' : 'EDITH AI'}</span>
                  <span className="msg-time">{msg.time}</span>
                </div>
                <div className="edith-msg-content">
                  {renderFormattedText(msg.text)}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="edith-msg-row msg-edith typing-active">
              <div className="edith-msg-avatar">
                <Bot size={16} />
              </div>
              <div className="edith-msg-bubble typing-bubble">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form className="edith-input-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="edith-input-field"
            placeholder="Ask about Lakshana's UI/UX projects, design tools, or skills..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
          />
          <button
            type="submit"
            className="edith-send-btn"
            disabled={!inputQuery.trim() || isTyping}
            data-cursor="pointer"
          >
            <Send size={16} />
            <span>Transmit</span>
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Edith;
