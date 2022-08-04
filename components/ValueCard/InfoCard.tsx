export default function InfoCard({ data }: any) {
    return (
      <div className="grid  [&>*]:flex [&>*]:p-2 [&>*]:py-3  grid-cols-2 grid-rows-5 gap-2 ">
        <div className="col-start-1 col-span-1 row-start-1 row-span-1 text-sm"> Prevoius Close: <div className="pl-2 text-md font-bold">{data.pc}</div></div>
        <div className="col-start-1 col-span-1 row-start-2 row-span-1 text-sm">Open: <div className="pl-2 font-bold text-md">{data.open}</div></div>
        <div className="col-start-1 col-span-1 row-start-3 row-span-1 text-sm">High: <div className="pl-2 font-bold text-md">{data.high}</div></div>
        <div className="col-start-1 col-span-1 row-start-4 row-span-1 text-sm">Low: <div className="pl-2 font-bold text-md">{data.low}</div></div>
        <div className="col-start-1 col-span-1 row-start-5 row-span-1 text-sm">Market Cap: 
        <div className="pl-2 font-bold text-md">{(data.marketCapitalization).toFixed(2)}</div></div>
        <div className="col-start-2 col-span-1 row-start-1 row-span-1 text-sm">Country: <div className="pl-2 font-bold text-md">{data.country}</div></div>
        <div className="col-start-2 col-span-1 row-start-2 row-span-1 text-sm">Currency: <div className="pl-2 font-bold text-md">{data.currency}</div></div>
        <div className="col-start-2 col-span-1 row-start-3 row-span-1 text-sm">Exchange: <div className="pl-2 font-bold tect-xs">{(data.exchange).slice(0,10)}</div></div>
        <div className="col-start-2 col-span-1 row-start-4 row-span-1 text-sm">IPO Date: <div className="pl-2 font-bold text-md">{data.ipo}</div></div>
        <div className="col-start-2 col-span-1 row-start-5 row-span-1 text-sm">Share Outstanding: <div className="pl-2 font-bold text-md">{
        (data.shareOutstanding).toFixed(2)}</div></div>
        
      </div>
    )
  }