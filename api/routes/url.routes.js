import express from "express";
import {
  handleGenerateShortUrl,
  handleUnlockShortUrl,
} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/generate", handleGenerateShortUrl);
router.post("/unlock", handleUnlockShortUrl);

export default router;
