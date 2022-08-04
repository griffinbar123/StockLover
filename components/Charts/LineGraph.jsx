import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import {useState, useEffect} from 'react';
// import data from "/pages/api/data.json";


export default function Candlestick({ticker, data2}){
  
  if(data2.s !== "ok"){
    console.log("error");
  }
  let data = [];
  // console.log("no error")
  for (let i = 0; i < data2.t.length; i++) {
    let d3=[];
    d3.push(data2.t[i]*1000, data2.o[i], data2.h[i], data2.l[i], data2.c[i], data2.v[i]);
    data.push(d3);
}


  const options =  {
    colors: ['#ff00ff', '#00ff80', '#00ff80', '#00ff80', '#00ff80',
        '#00ff80', '#00ff80', '#00ff80', '#00ff80', '#00ff80'], 
    chart: {
      renderTo: 'container',
      backgroundColor: 'rgba(0,0,0,0)'
  },

    rangeSelector: {
      selected: 1
    },

    title: {
      text: ticker+' Stock Price',
      style : {
        color: '#ffffff'
      }
    },

    series: [{
      type: 'candlestick',
      name: ticker.ticker+' Stock Price',
      data: data,
      dataGrouping: {
        units: [
          [
            'day',
            [1, 2, 3,4, 5, 6, 7]
          ]
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
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
  )

}
