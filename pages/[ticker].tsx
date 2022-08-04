import ValueCard from "../components/ValueCard/ValueCard";
import Candlestick from "../components/Charts/LineGraph";
import type { InferGetServerSidePropsType } from 'next';
import Navbar from "../components/Navbar/Navbar";
import HomeL from "../components/Buttons/HomeL";
import {Center} from '@chakra-ui/react';
import Script from 'next/script'

export const getServerSideProps = async (context: any) => {
  let data3 = {};
  const query = context.query;
  let ticker = query.ticker;
  const key = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

  let now :number = Math.trunc(Date.now()/1000);
    const then = now-(24*60*60*365);
    // now = now-(24*60*60);
    const resolution = 'D';
    let url = `https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=${resolution}&from=${then}&to=${now}&token=${key}`;
    let response = await fetch(url);
    let data4 = await response.json();




  let name = query.name;
  // console.log(name, query)
  // console.log(data2);
  url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${key}`;
  response = await fetch(url);
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
  Object.assign(data3, {"string_dp": string_dp, "string_d": string_d, "color": color, "ticker": ticker, "description": name, "c": c});
    return {
      props: { data3 , data4}, // will be passed to the page component as props
    }
}



function Details({data3, data4} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log(data3); 
  return (
    <div className="bg-gradient-to-b bg-scroll h-screen from-gray-900 via-purple-900 to-violet-600 ">
      <div className="grid grid-flow-row auto-rows-min px-2 grid-cols-12 gap-4 [&>*]:shadow-lg">
        <div className=" flex h-fit justify-center col-start-1 col-span-12 pt-2 px-">
            <HomeL className = "mr-4" />
            <Navbar className = {" grow "} 
            InitialColor = {" bg-gradient-to-r from-violet-300 to-violet-500"} />
        </div>
        <div className = "col-start-1 col-span-3 row-span-4 flex flex-col pt-5" >
          <Center className="">
            <ValueCard data3={data3} />
          </Center>
          <div className = "">

          </div>
        </div>
        <div className = " bg-transparent col-start-4 col-span-9 row-span-4">
          <Candlestick ticker = {data3.ticker} data2  = {data4} />
        </div>
      </div>
    </div>
  )
}

export default Details;