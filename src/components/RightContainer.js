import React from "react";

const RightContainer = () => {
  return (
    <div className="right-container">
      <div className="member-container">
        <div className="amount-container">
        <span className="counter">70</span>
          Total Members
        </div>
        <div className="active-members">
          <h2>Active Members</h2>
          <div className="member-list">
          <ul className="member-table">
          <li className="member-name">NAME</li>
          <li className="member-name">JAN</li>
          <li className="member-name">FEB</li>
          <li className="member-name">MAR</li>
          <li className="member-name">APR</li>
          <li className="member-name">MAY</li>
          <li className="member-name">JUN</li>
          <li className="member-name">JUL</li>
          <li className="member-name">AUG</li>
          <li className="member-name">SEP</li>
          <li className="member-name">OCT</li>
          <li className="member-name">NOV</li>
          <li className="member-name">DEC</li>
        </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
