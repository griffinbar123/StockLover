import ValueCard from "../components/ValueCard/ValueCard";
import InfoCard from "../components/ValueCard/InfoCard";
import Candlestick from "../components/Charts/LineGraph";
import type { InferGetServerSidePropsType } from 'next';
import Navbar from "../components/Navbar/Navbar";
import HomeL from "../components/Buttons/HomeL";
import {Center} from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from "react-query";


export const getServerSideProps = async (context: any) => {

  const query = context.query;
  let ticker = query.ticker;
  let name = query.name;

    return {
      props: { ticker , name}, // will be passed to the page component as props
    }
}



function Details({ticker, name} : InferGetServerSidePropsType<typeof getServerSideProps>) {
 
  return (
    <div className="bg-gradient-to-b min-h-screen bg-scroll from-gray-900 via-purple-900 to-violet-600 ">
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
          <Candlestick ticker = {ticker} />
        </div>
      </div>
    </div>
  )
}

export default Details;