import express from "express";
import { google, signin, signup, signOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post('/google', google);
router.get('/signout', signOut)

// public routes
// router.post('/send-reset-password-email', auth.Controller.sendUserPasswordResetEmail)
// router.post('/reset-password/:id/:token', auth.Controller.userPasswordReset)


router.get('/api/user/listings/:username', (req, res) => {
    // Your code here
  });
export default router;
