import express from 'express';
import {deleteUser, test, updateUser,  getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import Subscriber from '../models/Subscriber.js'; // Import your Subscriber model

const router = express.Router();

// Route to handle email subscription

router.post('/subscribe', async (req, res) => {
    const { email } = req.body;
  
    try {
      // Check if the email already exists in the database
      const existingSubscriber = await Subscriber.findOne({ email });
  
      // If the email exists, return an error
      if (existingSubscriber) {
        return res.status(400).json({ success: false, message: 'Email already subscribed' });
      }
  
      // If the email doesn't exist, create a new subscriber
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
  
      // Send confirmation email (assuming you already have the transporter set up)
  
      res.json({ success: true, message: 'Subscription successful' });
    } catch (error) {
      console.error('Error subscribing:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
  
router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)

export default router;
