import { dehydrate, QueryClient, useQuery } from "react-query";

async function getData2( key:any)   {
  // console.log(name);
  let response = await fetch('/api/Infocard/'+key.queryKey[1]);
  let data3 = await response.json();
  return data3.data;
}






export default function InfoCard({ ticker }: any) {
  const { data, isLoading, isError } = useQuery(["ticker3", ticker], getData2);
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Loading,,,</div>;
  } else {
    return (
      <div className="grid md:mt-16  xl:mt-20 2xl:mt-32 [&>*]:p-2 [&>*]:py-3  grid-cols-2 grid-rows-5 gap-2 [&>*]:flex [&>*]:justify-center
         md:[&>*]:text-3xl xl:[&>*]:text-4xl 2xl:[&>*]:text-5xl">
        <div className="col-start-1 col-span-1 row-start-1 row-span-1 text-white font-extralight text-sm "> Prevoius Close: <div className="pl-2 font-medium text-md ">{data.pc}</div></div>
        <div className="col-start-1 col-span-1 row-start-2 row-span-1 text-white font-extralight text-sm">Open: <div className="pl-2 font-normal text-md">{data.open}</div></div>
        <div className="col-start-1 col-span-1 row-start-3 row-span-1 text-white font-extralight text-sm">High: <div className="pl-2 font-normal text-md">{data.high}</div></div>
        <div className="col-start-1 col-span-1 row-start-4 row-span-1 text-white font-extralight text-sm">Low: <div className="pl-2 font-normal text-md">{data.low}</div></div>
        <div className="col-start-1 col-span-1 row-start-5 row-span-1 text-white font-extralight text-sm">M-Cap: 
        <div className="pl-2 text-md font-normal ">{(data.marketCapitalization).toFixed(2)}</div></div>
        <div className="col-start-2 col-span-1 row-start-1 row-span-1 text-white text-sm font-extralight">Country: <div className="pl-2 font-normal text-md">{data.country}</div></div>
        <div className="col-start-2 col-span-1 row-start-3 row-span-1 text-white font-extralight text-sm">Exchange: <div className="pl-2 font-normal text-md">{(data.exchange).slice(0,10)}</div></div>
        <div className="col-start-2 col-span-1 row-start-2 row-span-1 text-white text-sm font-extralight">Currency: <div className="pl-2 font-normal text-md">{data.currency}</div></div>
        <div className="col-start-2 col-span-1 row-start-4 row-span-1 text-white font-extralight text-sm">IPO Date: <div className="pl-2 font-normal text-md">{data.ipo}</div></div>
        <div className="col-start-2 col-span-1 row-start-5 row-span-1 text-white text-sm font-extralight">Share OS: <div className="pl-2 font-normal text-md">{
        (data.shareOutstanding).toFixed(2)}</div></div>
        
      </div>
    )
  }
}