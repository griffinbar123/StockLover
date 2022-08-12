import { NextApiResponse , NextApiRequest } from "next";


export default async function Handler(req:NextApiRequest, res:NextApiResponse) {
    const key = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
    const { ticker } = req.query;
    let url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${key}`;
    let response = await fetch(url);
    let data = await response.json();
    url = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${key}`;
    response = await fetch(url);
    let data6 = await response.json();
    Object.assign(data6, {"open":data.o, "pc":data.pc, "high":data.h, "low":data.l});

    
    return res.status(200).json({ok: true, data: data6});
}