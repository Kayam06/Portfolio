import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    try {
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return res.status(500).json({ 
          success: false, 
          error: 'Email credentials missing. Please configure SMTP_USER and SMTP_PASS in AI Studio secrets.' 
        });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'kayampthn0786@gmail.com',
        subject: `New Contact from Portfolio: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error('Email error:', error);
      res.status(500).json({ success: false, error: error.message || 'Failed to send email' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
