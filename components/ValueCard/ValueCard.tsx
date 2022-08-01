export default function ValueCard({ data3 }: any) {
    return (
      <div className="flex h-28 w-fit bg-transparent shadow-sm overflow-visible text-white  ">
        <div className=" h-48 w-fit mt-8 text-5xl">{data3.c}</div>
        <div className=" pt-3 w-fit">
          <div className="flex h-10 justify-evenly">
            <div className=" pt-2 text-lg">{ data3.description} <div className=" inline italic ">({data3.ticker})</div></div>
          </div>
          <div className="h-12 w-fit">
            <div className={"text-3xl "+data3.color}>
                {data3.string_dp} ({data3.string_d})
            </div>
          </div>
        </div>
      </div>
    )
  }