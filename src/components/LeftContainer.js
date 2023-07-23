import React from "react";
import CollectionGraph from "./CollectionGraph";
import Chart from './Chart'

const LeftContainer = () => {
  return (
    <div className="left-container">
      <div className="balance-container">
        <div className="amount-container">
          <span className="counter">3600</span>
          July's collection
        </div>
        <div className="amount-container">
          <span className="counter">1000</span>
          Total Expenditure
        </div>
        <div className="amount-container">
          <span className="counter">5000</span>
          Total Balance
        </div>
      </div>
      <div className="graph-container">
        <h2>Collection tracker</h2>
        <Chart />
      </div>
      
    </div>
  );
};

export default LeftContainer;
