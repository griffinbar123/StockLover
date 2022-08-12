import { NextApiResponse , NextApiRequest } from "next";
import { useRouter } from "next/router";

export default async function Handler(req:NextApiRequest, res:NextApiResponse) {
    const key = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
    const { ticker } = req.query;
    const { name } = req.query;
    let data3 :any = {};
    let url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${key}`;
    let response = await fetch(url);
    let data = await response.json();

    data.d=(parseFloat(data.d).toFixed(2));
    data.dp = parseFloat(data.dp).toFixed(2);
    data.c = parseFloat(data.c).toFixed(2);
    let string_d = "";
    let string_dp = "";
    let color = "";
    let c :string = data.c.toString();
    data.d >= 0 ? string_d = ("+" + data.d.toString()) : string_d=(data.d.toString());
    data.dp >= 0 ? string_dp = ("+" + data.dp.toString() + "%") : string_dp = (data.dp.toString() + "%");
    color = data.d >= 0 ? "text-green-500" : "text-red-500";
    Object.assign(data3, {"string_dp": string_dp, "string_d": string_d, "color": color, ticker: ticker, "description": name, "c": c});
    return res.status(200).json({ok: true, data: data3});
}