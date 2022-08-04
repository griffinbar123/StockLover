/* eslint-disable react/jsx-key */
import { Center, Text, Box } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  // console.log(res);
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 h-screen">
      <Center h='80vh'>
        <Stack  h = "70%" w="90%">
          <Box>
              <Text className = " font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-violet-500 via-purple-500 to-gray-300 text-center text-7xl sm:7xl md:text-8xl xl:text-9xl " >Welcome To <br/>StockLovers!</Text>
          </Box>
          <Stack className="w-1/3"  alignSelf="center" justifySelf="center">
            <Navbar InitialColor="bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-300" SecondColor="hover:from-purple-700 hover:via-violet-800 hover:to-purple-700" />  
          </Stack>
        </Stack>
      </Center>
    </div>
  )
}

export default Home
