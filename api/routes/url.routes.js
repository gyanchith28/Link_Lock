import express from 'express';
import { handleGenerateShortUrl } from '../controllers/url.controller.js';

const router = express.Router();

router.post('/generate', handleGenerateShortUrl);

export default router;