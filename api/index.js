import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import userRoutes from './routes/user.route.js'; // Import your routes



dotenv.config();

mongoose
.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  });

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'aryansharma4844@gmail.com',
    pass: 'mrejbdjcatkpdpca',
    authMethod: 'PLAIN'
  }
});


const app = express();
app.use(cors());

app.use(express.json());

app.use(cookieParser());
app.use('/api/user', userRoutes); // Use user routes

// Route to handle email subscription
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Subscription Confirmation',
      html: `
        <html>
          <head>
            <style>
              /* Add your CSS styles here */
              body {
                font-family: Arial, sans-serif;
                background-color: #f8f8f8;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                overflow: hidden;
              }
              .header {
                background-color: #007bff;
                padding: 20px;
                text-align: center;
                color: #ffffff;
              }
              .content {
                padding: 40px;
                text-align: center;
              }
              .button {
                display: inline-block;
                background-color: #007bff;
                color: #ffffff;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s ease;
              }
              .button:hover {
                background-color: #0056b3;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Subscription Confirmation</h1>
              </div>
              <div class="content">
                <p><img src="https://example.com/logo.png" alt="Logo" style="max-width: 200px;"></p>
                <p>Thank you for subscribing to our newsletter!</p>
                <p>You'll now receive the latest updates and exclusive offers directly in your inbox.</p>
                <p>Stay tuned!</p>
                <a href="https://example.com" class="button">Visit Our Website</a>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    res.json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


app.listen(3000, () => {
  console.log("Server running on port 3000!");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
// app.post('/forgot-password', forgotPassword);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
