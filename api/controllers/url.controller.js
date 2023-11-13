import Url from "../modals/urls.lock.js";
import { nanoid } from "nanoid";



async function handleGenerateShortUrl(req, res) {
    const { redirectUrl, password } = req.body;
    if (!redirectUrl || !password) return res.status(400).json({ error: 'url and password required' });
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
        res.status(500).send('Internal Server Error');
    }
    
}

export { handleGenerateShortUrl };