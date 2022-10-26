import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import FetchCryptoCurrency from "./API's/FetchCryptoCurrency";
import CryptoCard from "./CryptoCard";
import Search from "./Search";

import classes from "./Styles/Dashboard.module.css";

const Dashboard = () => {
  const [CurrencyData, setCurrencyData] = useState();

  const { data, isLoading } = useQuery(
    ["currencyId", CurrencyData],
    FetchCryptoCurrency
  );

  const CurrencyNameDataHandler = (backdata) => {
    setCurrencyData(backdata);
  };

  return (
    <div>
      <h1 className={classes.title}>BITCOIN PRICE FINDER</h1>
      <Search CurrencyNameData={CurrencyNameDataHandler} />
      {data && isLoading && (
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>Loading...</h1>
      )}
      {data && data ? (
        <CryptoCard data={data} CurrencyData={CurrencyData} />
      ) : null}
    </div>
  );
};

export default Dashboard;
