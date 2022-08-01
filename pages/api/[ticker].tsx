import type { NextApiRequest, NextApiResponse } from 'next'

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
const key = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  const { ticker } = req.query;
  let url = `https://finnhub.io/api/v1//search?q=${ticker}&token=${key}`;
  let response = await fetch(url);
  let data = await response.json();
  let data2 = {};
    // console.log(data.result[0]);
    if (data === undefined) {
        res.status(404).json({ message: 'Not found' });
        return;
    }
    Object.assign(data2, {);
    
 res.status(200).json(data.result[0]);
}