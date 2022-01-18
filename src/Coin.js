import React from "react";

export const Coin = ({ name, image, symbol, volume, price, marketCap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin-image" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p>{volume}</p>
          <p>${price}</p>
          <p>${marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
