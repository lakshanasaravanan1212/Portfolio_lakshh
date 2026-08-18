const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Required fields are missing." });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.log(`[SMTP Not Configured] Simulating message from ${name} (${email}): ${subject} - ${message}`);
      return res.status(200).json({ 
        success: true, 
        message: "Thank you for reaching out! (Simulation mode - configure EMAIL_USER and EMAIL_PASS on Vercel to send real emails)" 
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
      res.status(200).json({ success: true, message: "Thank you for reaching out! Your message has been sent." });
    } catch (error) {
      console.error("Nodemailer error:", error);
      res.status(500).json({ success: false, message: "Failed to send email. Please check server configuration." });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};
