import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createListing, deleteListing} from '../controllers/listing.contoller.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;
