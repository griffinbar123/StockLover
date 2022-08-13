import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import {useState, useEffect} from 'react';
import { dehydrate, QueryClient, useQuery } from "react-query";

async function getDat( key)   {
  //  console.log("hi");
  let response = await fetch('/api/Chart/AAPL');
  let data3 = await response.json();
  console.log(JSON.stringify(data3.data));
  return data3.data;
}


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState( 
    {
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []
  ); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Candlestick({ticker}){
  // console.log(ticker);
  let size = useWindowSize();
  
  
  const { data, isLoading, isError } = useQuery(["ticker2", ticker], getDat);


  const options =  {
    colors: ['#ff00ff', '#00ff80', '#00ff80', '#00ff80', '#00ff80',
        '#00ff80', '#00ff80', '#00ff80', '#00ff80', '#00ff80'], 
    chart: {
      renderTo: 'container',
      backgroundColor: 'rgba(0,0,0,0)', 
      width : size.width-50
  },

    rangeSelector: {
      selected: 1
    },

    title: {
      text: ticker+' Stock Price',
      style : {
        color: '#ffffff',
        fontSize: '30px'
      }
    },

    series: [{
      type: 'candlestick',
      name: ticker+' Stock Price',
      data: data,
      dataGrouping: {
        units: [
          [
            'day',
            [1, 2, 3,4, 5, 6, 7]
          ],
          [
            'week', // unit name
            [1] // allowed multiples
          ], [
            'month',
            [1, 2, 3, 4 , 6]
          ]
        ]
      }
    }]
  };
  return(
    <div className = "mt-8 w-full  flex justify-center ">
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
  )

}