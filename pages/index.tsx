/* eslint-disable react/jsx-key */
import { Center, Text, Box } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import Navbar from "../components/Navbar/Navbar";
import type { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (context: any) => {
  const key = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  let url = "https://finnhub.io/api/v1/stock/symbol?exchange=US&token="+key;
  let response = await fetch(url);
  let data = await response.json();
  let res:string[] = [];
  for (let i:number = 0; i < data.length; i++) {
    res.push(data[i].symbol);
    res.push(data[i].description);
  }
  return {
    props: {res} , // will be passed to the page component as props
}
}

const Home = ({res}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // console.log(res);
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 h-screen">
      <Center h='80vh'>
        <Stack  h = "70%" w="90%">
          <Box>
              <Text className = " font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-violet-500 via-purple-500 to-gray-300 text-center" h = "100%" w="100%" fontSize='9xl'>Welcome To <br/>StockLovers!</Text>
          </Box>
          <Stack className="w-1/3"  alignSelf="center" justifySelf="center">
            <Navbar data={res} InitialColor="bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-300" SecondColor="hover:from-purple-700 hover:via-violet-800 hover:to-purple-700" />  
          </Stack>
        </Stack>
      </Center>
    </div>
  )
}

export default Home
