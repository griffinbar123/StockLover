import { Input, Link, FormControl, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import Router from "next/router";

type AppProps = {
    InitialColor: string;
    SecondColor: string;
}


export default function Navbar({ InitialColor, SecondColor}: AppProps) {
  
  
  const [ticker, setTicker] = useState("");
  const handleInputChange = (e:any) => {
  setTicker(e.target.value.toUpperCase());
  };
  const handleClick = async () => {
      let res = await fetch('api/' + ticker);
      let data = await res.json();
    // console.log(check, value);
    if (res.status === 200) {
      Router.push("/" + data.symbol+"?name="+data.description);
    }

  }
  return (
    <div>
    <FormControl className="col-start-2 col-span-4">
      <Stack className="" align={"center"} spacing={4} direction={"row"}>
        <Input  onKeyPress={(ev) => {
          if (ev.key === "Enter") {                    ev.preventDefault();
            handleClick();
          }
        }}
          className="shadow-lg justify-center text-gray-100 "    
          value={ticker}
          onChange={handleInputChange}
          placeholder="Enter Company Ticker" />      
        <button
          onClick={handleClick}
          className={`rounded-lg font-bold p-4 shadow-md ${InitialColor} ${SecondColor}`}
          disabled={ticker.length <= 0}>
          Submit
        </button>
          
          </Stack>
        </FormControl>
        
    </div>
  )
}
Navbar.defaultProps = {
  InitialColor : "bg-gradient-to-r from-violet-300 to-violet-400",

  SecondColor : "hover:from-purple-700 hover:via-violet-800 hover:to-purple-700",
}