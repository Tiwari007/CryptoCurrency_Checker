import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import FetchCryptoCurrency from './API\'s/FetchCryptoCurrency'
import CryptoCard from './CryptoCard'
import Search from './Search'

const Dashboard = () => {
    const [CurrencyData, setCurrencyData] = useState()

    const {data, isError, error, isLoading} = useQuery(["currencyId", CurrencyData], FetchCryptoCurrency)

    


    const CurrencyNameDataHandler = (backdata) => {
      console.log("data", backdata);
      setCurrencyData(backdata)
    };

    console.log("succes", data);


  return (
    <div>
        <h1 style={{textAlign: "center"}}>BITCOIN PRICE FINDER</h1>
        <Search CurrencyNameData={CurrencyNameDataHandler}/>
        {data && data ? <CryptoCard data={data}/> : null }
    </div>
  )
}

export default Dashboard