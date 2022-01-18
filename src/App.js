import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Coin } from "./Coin";
function App() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredCoins = coin.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coin-app">
      <div className="coin-search">
        <div className="coin-text">
          <h1>Enter Crypto To Search</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={changeHandler}
            />
          </form>
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.volume}
            price={coin.current_price}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
