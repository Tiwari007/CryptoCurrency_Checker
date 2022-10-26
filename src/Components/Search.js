import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import classes from "./Styles/Search.module.css";
import FetchCryptoCurrencyData from "./API's/FetchCryptoCurrencyData";

const Search = (props) => {
  const [currencyNameInput, setCurrencyNameInput] = useState();

  const { data, isLoading, isError, error } = useQuery("CurrencyName", FetchCryptoCurrencyData);

  if(isError) console.log(error);
  if(isLoading) return <h1>Loading...</h1>

  console.log(data);
  
  const submitHandler = (e) => {
    e.preventDefault();
    props.CurrencyNameData(data.filter(currencyDatas => currencyDatas.name === currencyNameInput)[0]);
  };

  return (
    <div className={classes.searchBar}>
      <form onSubmit={submitHandler}>
        <select id="animeNames" onChange={(e) => setCurrencyNameInput(e.target.value)}>
          {data?.map((currencyData, index) => {
            return (
              <option key={index} value={currencyData?.name}>
                {currencyData?.name}
              </option>
            );
          })}
        </select>

        <div className={classes.button}>
          <button type="submit">
            <span>🔎</span> Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
