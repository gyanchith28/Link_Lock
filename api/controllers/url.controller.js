import Url from "../modals/urls.lock.js";
import { nanoid } from "nanoid";
import bcryptjs from 'bcryptjs';
import { parse } from 'url';

async function handleGenerateShortUrl(req, res) {
  const { redirectUrl, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  if (!redirectUrl || !password)
    return res.status(400).json({ error: "url and password required" });
  const shortUrl = nanoid(8);

  try {
    const url = await Url.create({
      redirectUrl,
      shortUrl,
      password: hashedPassword,
    });

    res.status(201).json({ shortUrl: url.shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleUnlockShortUrl(req, res) {
  const { pathname } = parse(req.body.shortUrl);
  const { password } = req.body;

  try {
    const shortUrl = pathname.slice(1);
    const url = await Url.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({ error: "Link not found" });
    }
    const validPassword = bcryptjs.compareSync(password, url.password)
    if (validPassword) {
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
