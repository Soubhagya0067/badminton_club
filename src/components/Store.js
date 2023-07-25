import React from "react";

const Store = () => {
  return (
    <div className="store-container">
      <h2>Store Items Tracker</h2>
      <div className="stores">
        <ul className="store-table">
          <li className="store-table-header-name">Items</li>
          <li className="store-table-header">Quantity Bought</li>
          <li className="store-table-header">Quantity Damaged</li>
          <li className="store-table-header">Quantity Remaining</li>
        </ul>
        <ul className="store-table-data">
          <li className="store-table-header-data-name">Item 1</li>
          <li className="store-table-header-data">200</li>
          <li className="store-table-header-data">0</li>
          <li className="store-table-header-data">200</li>
        </ul>
        <ul className="store-table-data">
          <li className="store-table-header-data-name">Item 1</li>
          <li className="store-table-header-data">200</li>
          <li className="store-table-header-data">0</li>
          <li className="store-table-header-data">200</li>
        </ul>
        <ul className="store-table-data">
          <li className="store-table-header-data-name">Item 1</li>
          <li className="store-table-header-data">200</li>
          <li className="store-table-header-data">0</li>
          <li className="store-table-header-data">200</li>
        </ul>
      </div>
    </div>
  );
};

export default Store;
