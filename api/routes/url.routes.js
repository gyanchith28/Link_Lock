import express from "express";
import {
  handleGenerateShortUrl,
  handleUnlockShortUrl,
} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/generate", handleGenerateShortUrl);
router.get("/unlock/:shortUrl", handleUnlockShortUrl);

export default router;
