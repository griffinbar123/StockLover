import { NextApiResponse , NextApiRequest } from "next";


export default async function Handler(req:NextApiRequest, res:NextApiResponse) {
    const key = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
    const { ticker } = req.query;
    // console.log(ticker);

  let now :number = Math.trunc(Date.now()/1000);
    const then = now-(24*60*60*365);
    // now = now-(24*60*60);
    const resolution = 'D';
    let url = `https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=${resolution}&from=${then}&to=${now}&token=${key}`;
    let response = await fetch(url);
    let data4 = await response.json();
    let data2 = [];
    // console.log("no error")
    for (let i = 0; i < data4.t.length; i++) {
      let d3=[];
      d3.push(data4.t[i]*1000, data4.o[i], data4.h[i], data4.l[i], data4.c[i], data4.v[i]);
      data2.push(d3);
  }

    // console.log(JSON.stringify(data2));
    return res.status(200).json({ok: true, data: data2});
}