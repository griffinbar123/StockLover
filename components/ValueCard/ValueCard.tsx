export default function ValueCard({ data }: any) {
    return (
      <div className="flex h-28 w-min-auto bg-transparent shadow-sm overflow-visible text-white  ">
        <div className=" h-48 w-fit mt-8 text-5xl">{data.c}</div>
        <div className=" pt-3 w-fit">
          <div className="flex h-10 justify-evenly">
            <div className=" pt-2 text-lg">{ data.description} <div className=" inline italic ">({data.ticker})</div></div>
          </div>
          <div className="h-12 w-fit">
            <div className={"text-3xl "+data.color}>
                {data.string_dp} ({data.string_d})
            </div>
          </div>
        </div>
      </div>
    )
  }