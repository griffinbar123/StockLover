import { dehydrate, QueryClient, useQuery } from "react-query";

async function getData( key:any)   {
  let name = key.queryKey[2];
  // console.log(name);
  let response = await fetch('/api/Valuecard/'+key.queryKey[1]+"?name="+name);
  let data3 = await response.json();
  return data3.data;
}

export default function ValueCard({ ticker, name }: any) {
  const { data, isLoading, isError } = useQuery(["ticker", ticker, name], getData);


  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error</div>;
  } else {
  
    return (
      <div className="flex h-28 w-fit  bg-transparent shadow-sm overflow-visible text-white  ">
        <div className=" h-48 w-fit mt-7 md:mt-6 2xl:mt-7 md:text-8.5xl 2xl:text-6.7xl text-5xl">{data.c}</div>
        <div className=" pt-3 pl-2 w-fit">
          <div className="flex h-10 justify-evenly">
            <div className=" pt-2 text-1.5xl md:text-4xl xl:text-4.5xl 2xl:text-5xl">{ data.description} <div className=" inline italic ">({data.ticker})</div></div>
          </div>
          <div className="h-12 w-fit">
            <div className={" text-3xl md:text-6xl 2xl:mt-4 xl:text-7xl "+data.color}>
                {data.string_dp} ({data.string_d})
            </div>
          </div>
        </div>
      </div>
    )
  }
}