import styled from '@emotion/styled'
import { dummyData, dummyDataTwo, stockDataList } from './utils';
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import {
  Paper,
  Card,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// =============== Styles =================
const StockChartContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100vw',
  justifyContent: 'center',
  marginTop: '0.5em',
})

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#282c34',
          borderRadius: '10px',
          width: '100%',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'gainsboro',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '15px',
          backgroundColor: 'rgb(34,37,45)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 'clamp(150px, 80%, 1000px)',
        }
      }
    }
  }
});
// ========================================
interface TimeSeriesValue {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
}
// ========================================

const StockChart = () => {  
  const [stockData, setStockData] = React.useState([]);

  const handleConversionFunction = (companyData: any) => {
    return Object.entries(companyData['Time Series (5min)']).map(([timestamp, values]) => {
      const typedValues = values as TimeSeriesValue;
      return {
        x: new Date(timestamp).getTime(),
        y: [
          parseFloat(typedValues["1. open"]),
          parseFloat(typedValues["2. high"]),
          parseFloat(typedValues["3. low"]),
          parseFloat(typedValues["4. close"]),
        ],
      };
    });
  };

  const recentClosePrice = (companyData: any) => {
    const lastClosePrice = companyData['Time Series (5min)'][Object.keys(companyData['Time Series (5min)'])[0]]['4. close']
    const secondLastClosePrice = companyData['Time Series (5min)'][Object.keys(companyData['Time Series (5min)'])[1]]['4. close']
    if (lastClosePrice < secondLastClosePrice) {
      return (
        <Typography variant="h5" component="div" sx={{color: 'red'}}>-{Number(secondLastClosePrice - lastClosePrice).toFixed(4)}</Typography>
      )
    } else {
      return (
        <Typography variant="h5" component="div" sx={{color: 'green'}}>+{Number(lastClosePrice - secondLastClosePrice).toFixed(4)}</Typography>
      )
    }
  }
  // const chartData = dummyDataTwo['Time Series (5min)']

  // const transformedData = Object.entries(chartData).map(([timestamp, values]) => {
  //   return {
  //     x: new Date(timestamp).getTime(),
  //     y: [
  //       parseFloat(values["1. open"]),
  //       parseFloat(values["2. high"]),
  //       parseFloat(values["3. low"]),
  //       parseFloat(values["4. close"]),
  //     ],
  //   };
  // });
  
  // console.log("HIT", transformedData)

  // const series = [
  //   {
  //     data: transformedData,
  //   }
  // ]

  const options = {
    chart: {
      type: 'candlestick',
      height: 140,
    },
    title: {
      text: 'Candlestick Chart',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };
  // const apiKey = 'ASYECO18CLUATPFG';
  // const companies = ['MSFT', 'AAPL', 'GOOGL', 'AMZN', 'TSLA', 'FB', 'NVDA', 'CRM', 'PYPL', 'ADBE'];

  // const fetchStockData = async (symbol: string) => {
  //   try {
  //     const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EOG&interval=5min&apikey=${apiKey}`;
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  //     // Process and use the data here (e.g., display or store it).
  //     console.log(data);
  //     // setStockData((prevData) => [...prevData, data])
  //   } catch (error) {
  //     console.error(`Error fetching data for ${symbol}:`, error);
  //   }
  // }

  return (
    <StockChartContainer>
      <ThemeProvider theme={theme}>
        {stockDataList.map((company: any) => { 
          const series = [
            {
              data: handleConversionFunction(company),
            }
          ]
          const recentPrice = recentClosePrice(company)
          return (
            <Card sx={{ height: '550px'}}>
              <Paper sx={{ height: '450px'}}>
                {/* @ts-ignore */}
                <ReactApexChart options={options} series={series} type="candlestick" height={400} />
              </Paper>
              <Typography variant="h3" component="div">{company['Meta Data']['2. Symbol']}</Typography>
              <Typography variant="h5">Recent Close Price: {recentPrice}</Typography>
            </Card>
          )
        })}
      </ThemeProvider>
    </StockChartContainer>
  )
}

export default StockChart