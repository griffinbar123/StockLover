import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official';
import data from "/pages/api/data.json";



export default function Candlestick({ticker}){
  const options =  {
    rangeSelector: {
      selected: 1
    },

    title: {
      text: ticker+' Stock Price'
    },

    series: [{
      type: 'candlestick',
      name: ticker+' Stock Price',
      data: data,
      dataGrouping: {
        units: [
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
