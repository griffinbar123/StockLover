import type { NextApiRequest, NextApiResponse } from 'next'

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
const key = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  const { input } = req.query;
  let url = `https://finnhub.io/api/v1//search?q=${input}&token=${key}`;
  let response = await fetch(url);
  let data = await response.json();
    console.log(data.result[0]);
    if (data.result[0] === undefined) {
        res.status(404).json({ message: 'Not found' });
        return;
    }
    
 res.status(200).json(data.result[0]);
}
    
