import type { NextPage } from 'next'
import { Input, Center, Text, Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'



const Home: NextPage = () => {
  return (
    <Center h='80vh'>
      <Stack  h = "70%" w="90%">
        <Box>
            <Text className = "text-center shadow-lg text-gray-300" h = "100%" w="100%" fontSize='9xl'>Welcome To <br/>StockLovers!</Text>
        </Box>
        <Stack className="w-1/3" spacing={4} direction = {"row"} alignSelf = "center" justifySelf="center">
          <Input placeholder='Enter Company Ticker: ' />
          <Button>Submit</Button>
        </Stack>
      </Stack>
    </Center>
  )
}

export default Home
