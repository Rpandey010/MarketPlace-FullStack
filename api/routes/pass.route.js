// const express = require('express');
// const router = express.Router();
// const { sendPasswordResetOTPEmail } = require('../controller/user.controller');

// router.post("/", async (req, res) => {
//     try{
//         const {email} = req.body;
//         if (!email) throw Error ("Email is required")

//         const createdPasswordResetOTP = await
//         sendPasswordResetOTPEmail(email);
//         res.status(200).json(createdPasswordResetOTP);
//     }catch (error){
//         res.status(400).json({message: error.message});
//     }
// }
// );

// module.exports = router;