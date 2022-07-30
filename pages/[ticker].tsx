import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { Stat, Center, Text,StatNumber, StatHelpText, StatArrow, Flex, Box} from '@chakra-ui/react'

export const getServerSideProps: GetServerSideProps = async (context) => {

  const query = context.query;
  const ticker: string = query.ticker as string;

  const key = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  const url = `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${key}`;
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.status === 'ERROR') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  data["ticker"]=ticker;
    return {
      props: { data }, // will be passed to the page component as props
    }
}


function ValueCard({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  let x = "";
  data.d >= 0 ? x = "+" + data.d.toString() : x = "-" + data.d.toString(); 
  let y = "";
  data.dp >= 0 ? y = "+" + data.dp.toString() : y = "-" + data.dp.toString();
  let atype = "increase";
  let color = "green";
  if (data.d < 0) {
    atype = "decrease";
    color = "red";
  }
  return (
      <Stat className="h-24 w-72 bg-gray-500 shadow-lg border border-r-2">
        <Flex className="h-10 w-100% space-between justify-between">
          <StatNumber className="p-2 text-4xl">{data.ticker}</StatNumber>
          <StatNumber className="p-2 text-4xl">{data.pc}</StatNumber>
      </Flex>
      <Center className="h-12">
        <Text className={`text-3xl pr-2 text-${color}-500`}>
          <StatArrow type='increase' />
           {y} ({x})
        </Text>
      </Center>
      </Stat>
  
  )
}


const Details = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Box className="h-screen">
      <ValueCard data={data} />
    </Box>
  )
}

export default Details