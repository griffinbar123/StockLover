import { NextApiResponse , NextApiRequest } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const key = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
    const { ticker } = req.query;
    if (!ticker) {
        return res.status(400).json({ error: 'ticker is required' });
    }
    let url = `https://finnhub.io/api/v1/search?q=${ticker}&token=${key}`;
    let response = await fetch(url);
    let data= await response.json();

    if (data.count === 0) {
        return res.status(400).json({ ok: false });
    }
    return res.status(200).json({ok: true, data: data.result[0].description});
}