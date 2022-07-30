import { Input, Center, Text, Box, FormControl } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'



const Home = () => {
  const [ticker, setTicker] = useState("");
  const handleInputChange = (e:any) => {
    setTicker(e.target.value);
  };
  
  return (
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 h-screen">

    <Center h='80vh'>
      <Stack  h = "70%" w="90%">
        <Box>
            <Text className = " font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-violet-500 via-purple-500 to-gray-300 text-center" h = "100%" w="100%" fontSize='9xl'>Welcome To <br/>StockLovers!</Text>
        </Box>
        <Stack className="w-1/3"  alignSelf="center" justifySelf="center">
          <FormControl >
            <Stack className="" spacing={4} direction={"row"}>
            <Input
              value={ticker}
              onChange={handleInputChange}
                placeholder="Enter Company Ticker" />
              <Link href={"/"+ticker}>
                <Button disabled={ticker.length <= 0}
                  className="shadow-md">
                  Submit
              </Button>
              </Link>
              </Stack>
            </FormControl>
          </Stack>
      </Stack>
      </Center>
      </div>
  )
}

export default Home
