
import {Text } from '@chakra-ui/react'



export default function ValueCard({ data }: any) {
    return (
      <div className="flex h-28 w-min-auto bg-transparent shadow-sm overflow-visible text-white  ">
        <div className=" h-48 w-fit mt-8 text-5xl">{data.c}</div>
        <div className=" pt-3 w-fit">
          <div className="flex h-10 justify-evenly">
            <Text className=" pt-2 text-lg">{ data.description} <Text className=" inline italic ">({data.ticker})</Text></Text>
          </div>
          <div className="h-12 w-fit">
            <Text className={`text-3xl text-${data.color}-500`}>
                {data.string_dp} ({data.string_d})
            </Text>
          </div>
        </div>
      </div>
    )
  }