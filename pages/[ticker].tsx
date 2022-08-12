import ValueCard from "../components/ValueCard/ValueCard";
import InfoCard from "../components/ValueCard/InfoCard";
import Candlestick from "../components/Charts/LineGraph";
import type { InferGetServerSidePropsType } from 'next';
import Navbar from "../components/Navbar/Navbar";
import HomeL from "../components/Buttons/HomeL";
import {Center} from '@chakra-ui/react';


export const getServerSideProps = async (context: any) => {
  // let data3 :any = {};
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


    return {
      props: { ticker , name, data4}, // will be passed to the page component as props
    }
}



function Details({ticker, name, data4} : InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <div className="bg-gradient-to-b bg-scroll from-gray-900 via-purple-900 to-violet-600 ">
      <div className="grid grid-flow-row auto-rows-min px-2 grid-cols-12 gap-4  ">
        <div className=" flex h-fit justify-center col-start-1 col-span-12 pt-2 px-">
            <HomeL className = "mr-4" />
            <Navbar className = {" grow "} 
            InitialColor = {" bg-gradient-to-r from-violet-300 to-violet-500"} />
        </div>
        <div className = " col-span-12 row-span-4 flex flex-col pt-5" >
          <Center className="">
            <ValueCard ticker = {ticker} name = {name} />
          </Center>
          <div className = "">
            <InfoCard ticker={ticker} />
          </div>
        </div>
        <div className = " flex justify-center bg-transparent col-start-1 col-span-12 row-span-4)">
          <Candlestick ticker = {ticker} data2  = {data4} />
        </div>
      </div>
    </div>
  )
}

export default Details;