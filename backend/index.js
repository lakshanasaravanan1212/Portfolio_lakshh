const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Sample Portfolio Data Endpoint
app.get('/api/portfolio-data', (req, res) => {
  res.json({
    name: "Nikyn V S",
    title: "Generative AI & Machine Learning Engineer",
    summary: "Solutions-driven Generative AI and Machine Learning Engineer specializing in architecting scalable Retrieval-Augmented Generation (RAG) pipelines, autonomous agents, and NLP applications.",
    socials: {
      github: "https://github.com/Nikynsuresh",
      linkedin: "https://linkedin.com/in/nikyn-suresh",
      leetcode: "https://leetcode.com/u/nikyn_suresh"
    }
  });
});

// Contact Form POST Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Required fields are missing." });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.log(`[SMTP Not Configured] Simulating message from ${name} (${email}): ${subject} - ${message}`);
    return res.json({ 
      success: true, 
      message: "Thank you for reaching out! (Local simulation mode - configure EMAIL_USER and EMAIL_PASS to send real emails)" 
    });
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true' || process.env.EMAIL_PORT === '465',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${emailUser}>`,
    replyTo: email,
    to: process.env.EMAIL_RECEIVER || emailUser,
    subject: `New Portfolio Message: ${subject}`,
    text: `You received a new message from your portfolio contact form:\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Subject: ${subject}\n\n` +
          `Message:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Thank you for reaching out! Your message has been sent." });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ success: false, message: "Failed to send email. Please check server configuration." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
