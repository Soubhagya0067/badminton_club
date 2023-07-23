import React from "react";


const PaymentContainer = () => {
  return (
    <div className="payment-tracker">
      <h2>Payment Tracker</h2>
      <div className="payments">
        <ul className="payment-table">
          <li className="table-header-name">NAME</li>
          <li className="table-header">JAN</li>
          <li className="table-header">FEB</li>
          <li className="table-header">MAR</li>
          <li className="table-header">APR</li>
          <li className="table-header">MAY</li>
          <li className="table-header">JUN</li>
          <li className="table-header">JUL</li>
          <li className="table-header">AUG</li>
          <li className="table-header">SEP</li>
          <li className="table-header">OCT</li>
          <li className="table-header">NOV</li>
          <li className="table-header">DEC</li>
        </ul>
        <ul className="payment-table-data">
          <li className="table-header-data-name">Member 1</li>
          <li className="table-header-data">200</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">200</li>
          <li className="table-header-data">200</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
        </ul>
        <ul className="payment-table-data">
          <li className="table-header-data-name">Member 2</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">200</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">200</li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
        </ul>
        <ul className="payment-table-data">
          <li className="table-header-data-name">Member 3</li>
          <li className="table-header-data">200</li>
          <li className="table-header-data">200</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data">0</li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
          <li className="table-header-data"></li>
        </ul>
      </div>
      
    </div>
  );
};

export default PaymentContainer;
