import Url from "../modals/urls.lock.js";
import { nanoid } from "nanoid";

async function handleGenerateShortUrl(req, res) {
  const { redirectUrl, password } = req.body;
  if (!redirectUrl || !password)
    return res.status(400).json({ error: "url and password required" });
  const shortUrl = nanoid(8);

  try {
    const url = await Url.create({
      redirectUrl,
      shortUrl,
      password,
    });

    res.status(201).json({ shortUrl: url.shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleUnlockShortUrl(req, res) {
  const { shortUrl } = req.params;
  const { password } = req.body;

  try {
    const url = await Url.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({ error: "Link not found" });
    }

    if (password === url.password) {
      res.redirect(url.redirectUrl);
    } else {
      return res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
}

export { handleGenerateShortUrl, handleUnlockShortUrl };
