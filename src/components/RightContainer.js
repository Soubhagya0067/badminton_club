import React from "react";

const RightContainer = () => {
  return (
    <div className="right-container">
      <div className="member-container">
        <div className="balance-container">
          <div className="amount-container">
            <span className="counter">70</span>
            Total Members
          </div>
          <div className="amount-container">
            <span className="counter">15</span>
            Active Count
          </div>
          <div className="amount-container">
            <span className="counter">55</span>
            Defaulters Count
          </div>
        </div>
        <div className="detail-members">
          <div className="active-members">
            <h2>Active Members</h2>
            <div className="member-list">
              <ul className="member-table">
                <li className="member-name">Member 1</li>
                <li className="member-name">Member 2</li>
                <li className="member-name">Member 3</li>
                <li className="member-name">Member 4</li>
              </ul>
            </div>
          </div>
          <div className="active-members">
            <h2>Defaulters</h2>
            <div className="member-list">
              <ul className="member-table">
                <li className="member-name">Member 1</li>
                <li className="member-name">Member 2</li>
                <li className="member-name">Member 3</li>
                <li className="member-name">Member 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
