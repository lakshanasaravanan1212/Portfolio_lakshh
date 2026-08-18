import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import './Edith.css';

// EDITH Knowledge Base & Response Engine
const EDITH_KB = {
  about_concise: `Nikyn V S is a B.Tech Artificial Intelligence & Data Science student at Sri Shakthi Institute of Engineering and Technology (Sep 2023 – Present, CGPA: 7.56/10.00). He is a Generative AI & Machine Learning Engineer specializing in architecting scalable Retrieval-Augmented Generation (RAG) pipelines, autonomous agents, and NLP applications. He has independently designed 3+ full-stack AI products and solved over 270 LeetCode problems.`,
  
  about_detailed: `Nikyn V S is an Artificial Intelligence & Data Science student at Sri Shakthi Institute of Engineering and Technology (Sep 2023 – Present, CGPA: 7.56/10.00). 

His technical focus spans:
• **Generative AI & LLMs**: Architecting Retrieval-Augmented Generation (RAG) pipelines, prompt engineering, and semantic vector retrieval with ChromaDB and FAISS.
• **AI Agents**: Designing multi-step reasoning workflows and tool calling using LangGraph and LangChain.
• **Full-Stack & Backend**: Developing high-performance asynchronous microservices with Python, FastAPI, Flask, React, and Next.js.
• **AI Security & Governance**: Implementing automated compliance audits aligned with EU AI Act, NIST AI RMF, ISO 42001, and OWASP LLM Top 10.
• **Experience**: ML Engineer Intern at CodSoft Technologies and 270+ solved LeetCode challenges.`,

  why_hire_concise: `Nikyn combines strong AI knowledge with practical full-stack software engineering skills. He doesn't just build isolated AI models; he builds complete, production-ready applications connecting frontend interfaces, FastAPI backends, vector databases, and LLMs. His hands-on project experience, 270+ LeetCode track record, and fast-learning mindset make him a high-impact addition to any engineering team.`,

  why_hire_detailed: `You should hire Nikyn because he brings:
1. **End-to-End AI Engineering**: Hands-on experience building full-stack AI products (AI-Based Learning Platform, Multilingual Gov Schemes Chatbot for 14.6k+ schemes, Smart DevTool for API Integration, and Agent Compliance Card Generator).
2. **Robust Software Fundamentals**: Strong command of Python, FastAPI, React, SQL, NoSQL, and vector stores (ChromaDB, FAISS, Pinecone).
3. **Problem-Solving Rigor**: 270+ LeetCode problems solved across Trees, Graphs, Dynamic Programming, and algorithm optimization.
4. **Curiosity & Adaptability**: An engineering mindset focused on understanding core fundamentals deeply to solve complex real-world problems.`,

  projects_concise: `Nikyn has engineered four standout AI projects: an **AI-Based Learning Platform** using RAG and Gemini AI, a **Multilingual Chatbot for Indian Government Schemes** indexing 14,624 schemes, a **Smart DevTool for API Integration** with LangGraph, and an **Agent Compliance Card Generator** for AI governance and safety audits.`,

  projects_detailed: `Here are Nikyn's featured engineering projects:

1. **AI-Based Learning Platform** (RAG + Generative AI)
   • *Stack*: Python, FastAPI, React 18, Vite, Gemini AI, ChromaDB, pypdf, JWT, Bcrypt.
   • *What it does*: Ingests raw PDFs/web content into ChromaDB dense vectors for sub-650ms retrieval and generates context-grounded study guides, flashcards, and quizzes.
   • *Repo*: [AI-based-Learning-platform](https://github.com/Nikynsuresh/AI-based-Learning-platform.git)

2. **Multilingual Chatbot for Indian Government Schemes**
   • *Stack*: Python, Flask, SQLite, JSON, RapidFuzz, Multilingual NLP.
   • *What it does*: Provides conversational access across 14,624 government schemes in English, Hindi, Tamil, and Malayalam with sub-450ms search latency.
   • *Repo*: [Multilingual-Chatbot-for-indian-schemes](https://github.com/Nikynsuresh/Multilingual-Chatbot-for-indian-schemes.git)

3. **Smart DevTool for API Integration**
   • *Stack*: Next.js, FastAPI, Python, LangGraph, REST APIs.
   • *What it does*: Parses complex API specifications and automatically synthesizes typed client SDK wrappers and Postman collections.
   • *Repo*: [Smart-DevTool-for-Api-Integration](https://github.com/Nikynsuresh/Smart-DevTool-for-Api-Integration.git)

4. **Agent Compliance Card Generator**
   • *Stack*: Python 3.12, FastAPI, React 18, Vite, Python AST.
   • *What it does*: Automatically analyzes AI agent codebases for security and compliance against EU AI Act, NIST AI RMF, ISO 42001, and OWASP LLM Top 10 standards.

5. **Other Projects**: Handwriting Detection (TensorFlow Deep Learning), MedChair (3rd Prize award), and ML predictive workflows on the Titanic dataset.`,

  rag_concise: `Nikyn has practical experience building end-to-end RAG systems using ChromaDB, FAISS, Pinecone, LangChain, LlamaIndex, and Gemini AI. He implements semantic chunking, dense vector embeddings, and strict grounding prompts to deliver sub-second, context-accurate responses with zero hallucinations.`,

  skills_concise: `Nikyn's primary programming language is **Python**, backed by experience in **SQL, JavaScript, HTML, CSS, C, and C++**. His technical stack includes **FastAPI, Flask, React, Next.js, ChromaDB, FAISS, Pinecone, LangChain, LangGraph, Gemini, TensorFlow, PyTorch, Scikit-learn, Pandas, and Docker**.`,

  dsa_concise: `Nikyn has solved **more than 270 LeetCode problems** covering Arrays, Strings, Linked Lists, Binary Trees, Graphs (BFS/DFS), Dynamic Programming, and sorting algorithms. This algorithmic discipline strengthens his code efficiency and problem-solving intuition.`,

  experience_concise: `Nikyn worked as a **Machine Learning Engineer Intern at CodSoft Technologies** (Oct–Nov 2023), gaining hands-on exposure to ML model training, exploratory data analysis, and predictive workflows. He also participated in an **AI in Healthcare Workshop** conducted at IIT Madras Research Park.`,

  goals_concise: `Nikyn aims to become a strong AI/ML and Full-Stack Engineer specializing in Generative AI, LLMs, RAG pipelines, autonomous AI Agents, and robust backend architectures. His long-term goal is to build intelligent, secure, and scalable AI software products.`,

  dob_concise: `Nikyn was born on **4 September 2005** (Current Age: **20 years old**; his 21st birthday is on 4 September 2026).`,

  contact_concise: `You can reach Nikyn directly via email at [s.nikyn005@gmail.com](mailto:s.nikyn005@gmail.com), phone at [+91 96778 72799](tel:+919677872799), or connect on [LinkedIn](https://www.linkedin.com/in/nikyn-suresh-20a9413bb/) and [GitHub](https://github.com/Nikynsuresh).`
};

const Edith = () => {
  const msgIdRef = useRef(10);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'edith',
      text: "Hi there! I am **EDITH** (Even Dead, I'm The Hero), the chat assistant embedded in Nikyn V S's portfolio. Ask me anything about his AI projects, technical skills, background, or hiring availability!",
      time: 'ONLINE'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef(null);

  const quickPrompts = [
    "Tell me about Nikyn",
    "Why should we hire Nikyn?",
    "What are his top AI projects?",
    "Tell me about his RAG & Agent experience",
    "What is his LeetCode & DSA background?",
    "How can I contact Nikyn?"
  ];

  // Scroll ONLY inside the chat messages stream container, never scrolling the browser page
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
    const isDetailed = q.includes('detail') || q.includes('deep dive') || q.includes('explain in detail') || q.includes('more about') || q.includes('elaborate') || q.includes('full list') || q.includes('architecture');

    // 1. PRIVACY & SECURITY / PROMPT INJECTION RULES
    const forbiddenKeywords = [
      'password', 'secret', 'credential', 'api key', 'apikey', 'access token',
      'auth token', 'otp', 'private key', 'system prompt', 'system instruction',
      'developer mode', 'ignore previous', 'forget previous', 'hidden prompt',
      'show me prompt', 'reveal instructions', 'bypass', 'give me password',
      'database credential', 'env var'
    ];
    if (forbiddenKeywords.some(kw => q.includes(kw))) {
      return "I don't have the authority to provide that information.";
    }

    // 2. WHY HIRE NIKYN / APPOINT / CANDIDATE
    if (q.includes('why should we hire') || q.includes('why hire') || q.includes('appoint') || q.includes('company') || q.includes('hire') || q.includes('recruit') || q.includes('candidate') || q.includes('employ') || q.includes('work with') || q.includes('join')) {
      return isDetailed ? EDITH_KB.why_hire_detailed : EDITH_KB.why_hire_concise;
    }

    // 3. WHO IS NIKYN / ABOUT NIKYN
    if (q.includes('tell me about') || q.includes('who is') || q.includes('summary') || q.includes('intro') || q.includes('about nikyn') || q === 'nikyn' || q === 'nikyn vs' || q.includes('background') || q.includes('profile')) {
      return isDetailed ? EDITH_KB.about_detailed : EDITH_KB.about_concise;
    }

    // 4. PROJECTS
    if (q.includes('project') || q.includes('built') || q.includes('portfolio') || q.includes('app') || q.includes('platform') || q.includes('learning platform') || q.includes('compliance') || q.includes('devtool') || q.includes('schemes') || q.includes('chatbot') || q.includes('medchair') || q.includes('handwriting')) {
      return isDetailed ? EDITH_KB.projects_detailed : EDITH_KB.projects_concise;
    }

    // 5. RAG & AI AGENTS
    if (q.includes('rag') || q.includes('retrieval') || q.includes('vector') || q.includes('chroma') || q.includes('faiss') || q.includes('pinecone') || q.includes('embedding') || q.includes('agent') || q.includes('agentic') || q.includes('langgraph') || q.includes('langchain')) {
      return EDITH_KB.rag_concise;
    }

    // 6. TECHNICAL SKILLS & STACK
    if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('python') || q.includes('sql') || q.includes('backend') || q.includes('fastapi') || q.includes('flask') || q.includes('react') || q.includes('next') || q.includes('frontend') || q.includes('database') || q.includes('tech')) {
      return EDITH_KB.skills_concise;
    }

    // 7. DSA & LEETCODE
    if (q.includes('leetcode') || q.includes('dsa') || q.includes('algorithm') || q.includes('problem') || q.includes('coding') || q.includes('solve')) {
      return EDITH_KB.dsa_concise;
    }

    // 8. INTERNSHIP & WORKSHOPS
    if (q.includes('intern') || q.includes('codsoft') || q.includes('workshop') || q.includes('iit') || q.includes('ibm') || q.includes('experience')) {
      return EDITH_KB.experience_concise;
    }

    // 9. CAREER GOALS & INTERESTS
    if (q.includes('goal') || q.includes('future') || q.includes('vision') || q.includes('interest') || q.includes('passion') || q.includes('aspire')) {
      return EDITH_KB.goals_concise;
    }

    // 10. DATE OF BIRTH / AGE / COLLEGE
    if (q.includes('age') || q.includes('old') || q.includes('dob') || q.includes('birth') || q.includes('born') || q.includes('bday')) {
      return EDITH_KB.dob_concise;
    }

    if (q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('cgpa') || q.includes('education') || q.includes('school') || q.includes('shakthi')) {
      return `Nikyn is pursuing his B.Tech in Artificial Intelligence & Data Science at Sri Shakthi Institute of Engineering and Technology (Sep 2023 – Present) with a current CGPA of 7.56/10.00. He completed his higher secondary education at GKD Matriculation Higher Secondary School with 72.5% in Computer Science and Mathematics.`;
    }

    // 11. CONTACT & REPOSITORIES
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('linkedin') || q.includes('github') || q.includes('reach') || q.includes('call') || q.includes('message')) {
      return EDITH_KB.contact_concise;
    }

    // 12. GREETINGS
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('edith') || q.includes('greetings') || q.includes('sup')) {
      return "Hello! I am **EDITH**, Nikyn V S's portfolio assistant. What would you like to know about his AI projects, RAG systems, skills, or background?";
    }

    // 13. EXACT FALLBACK RULE
    return "I’m not sure about that from Nikyn’s portfolio information. You can use the contact form to get in touch with him directly.";
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
        text: "Session reset. EDITH assistant standing by. Ready for your inquiries.",
        time: 'ONLINE'
      }
    ]);
  };

  // Helper to format markdown bold and links cleanly in messages
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
        <span className="section-eyebrow">Portfolio AI Assistant</span>
        <h2 className="section-title">
          Ask <span>EDITH</span>
        </h2>
        <p className="section-desc">
          Official chat assistant embedded in Nikyn V S's portfolio. Ask questions about his AI projects, RAG systems, skills, or career goals.
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
            <span className="terminal-title">E.D.I.T.H. // TACTICAL PORTFOLIO AI v3.2</span>
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
              onClick={() => handlePromptClick(prompt)}
              className="prompt-chip"
              data-cursor="pointer"
            >
              <Sparkles size={12} className="chip-sparkle" />
              <span>{prompt}</span>
            </button>
          ))}
        </div>

        {/* Messages Stream */}
        <div className="edith-messages-stream" ref={messagesContainerRef}>
          {messages.map((msg) => {
            const isAI = msg.sender === 'edith';
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`edith-message-row ${isAI ? 'row-edith' : 'row-user'}`}
              >
                <div className={`message-avatar ${isAI ? 'avatar-edith' : 'avatar-user'}`}>
                  {isAI ? <Bot size={16} /> : <User size={16} />}
                </div>

                <div className={`message-bubble ${isAI ? 'bubble-edith' : 'bubble-user'}`}>
                  <div className="bubble-header">
                    <span className="bubble-author">{isAI ? 'EDITH' : 'You'}</span>
                    <span className="bubble-time">{msg.time}</span>
                  </div>
                  <div className="bubble-body">
                    {renderFormattedText(msg.text)}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {isTyping && (
            <div className="edith-message-row row-edith">
              <div className="message-avatar avatar-edith">
                <Bot size={16} />
              </div>
              <div className="message-bubble bubble-edith typing-bubble">
                <div className="typing-indicator">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Console Input Bar */}
        <form onSubmit={handleSendMessage} className="edith-input-form">
          <div className="input-field-wrapper">
            <span className="terminal-prefix">&gt;</span>
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask EDITH about projects, RAG systems, skills, or hiring..."
              className="edith-input"
            />
          </div>
          <button
            type="submit"
            disabled={!inputQuery.trim()}
            className="btn-edith-send"
            data-cursor="pointer"
          >
            <span>Ask</span>
            <Send size={15} />
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Edith;
