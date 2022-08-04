import { Input, Link, FormControl, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import Router from "next/router";


type AppProps = {
    InitialColor: string;
    SecondColor: string;
    className: string;
    data: Array<any>;
}


export default function Navbar({ InitialColor, SecondColor, className, data}: AppProps) {
  
  
  const [ticker, setTicker] = useState("");
  const handleInputChange = (e:any) => {
  setTicker(e.target.value.toUpperCase());
  };
  const handleClick = () => {
    // console.log("boi");
    let ind = "";
    let jnd = "";
      for (let i:number = 0; i < data.length; i++) {
        // console.log(i);
        if (ind !== "" ) {
          jnd = data[i];
          Router.push("/" + ind+"?name="+jnd);
          break;
        }
          if (data[i] === ticker) {
              ind = data[i];
          }
      }
    

  }
  return (
    <div className={`${className}`}>
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
          placeholder="Enter Company Ticker: AAPL" />      
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
  InitialColor : "bg-gradient-to-r from-violet-400 via-indigo-400 to-indigo-300",
  SecondColor : "hover:from-purple-700 hover:via-violet-800 hover:to-purple-700",
  className: "" ,
  data:[],
}