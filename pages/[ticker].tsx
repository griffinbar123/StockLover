import ValueCard from "../components/ValueCard/ValueCard";

import type { InferGetServerSidePropsType } from 'next';


export const getServerSideProps = async (context:any) => {

  const query = context.query;
  const ticker = query.ticker;

  const key = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  let url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${key}`;
  let response = await fetch(url);
  let data = await response.json();
  
  if (data.status === 'ERROR') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  url = `https://finnhub.io/api/v1/search?q=${ticker}&token=${key}`;
  response = await fetch(url);
  let data2 = await response.json();

  if (data2.status === 'ERROR') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  data["description"] = data2.result[0].description;
  data["ticker"] = ticker;
  
  data.d=(parseFloat(data.d).toFixed(2));
  data.dp = parseFloat(data.dp).toFixed(2);
  let string_d = "";
  let string_dp = "";
  data.d >= 0 ? string_d = ("+" + data.d.toString()) : string_d=("-" + data.d.toString());
  data.dp >= 0 ? string_dp = ("+" + data.dp.toString() + "%") : string_dp = ("-" + data.dp.toString() + "%");
  data["string_d"] = string_d;
  data["string_dp"] = string_dp;
  data["color"] = data.d >= 0 ? "text-green-500" : "text-red-500";
  console.log(data);
    return {
      props: { data }, // will be passed to the page component as props
    }
}



function Details({data} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 h-screen">
      <ValueCard data={data} />
    </div>
  )
}

export default Details