import axios from "axios";
import React from "react";

const FetchCryptoCurrency = async ({queryKey}) => {
    const [_, CurrencyData] = queryKey
  const data = await axios({
    method: "get",
    url: `https://api.coinbase.com/v2/prices/BTC-${CurrencyData.id}/spot`,
    headers: { Authorization: "Bearer abd90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c" },
  });

  return data.data.data;
};

export default FetchCryptoCurrency;
