import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'



function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
      <ChakraProvider>
       <Component {...pageProps} />
    </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
