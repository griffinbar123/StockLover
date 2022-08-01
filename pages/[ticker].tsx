import ValueCard from "../components/ValueCard/ValueCard";
import type { InferGetServerSidePropsType } from 'next';
import Navbar from "../components/Navbar/Navbar";

export const getServerSideProps = async (context: any) => {

  const query = context.query;
  let ticker = query.ticker;
  const key = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  let name = query.name;
  console.log(name, query)
  // console.log(data2);

  let url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${key}`;
  let response = await fetch(url);
  let data = await response.json();

  data["description"] = name;
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
  // console.log(data);
    return {
      props: { data }, // will be passed to the page component as props
    }
}



function Details({data} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 h-screen">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-start-2 col-span-3">
          <Navbar />
          <ValueCard data={data}/>
        </div>
      </div>
    </div>
  )
}

export default Details;