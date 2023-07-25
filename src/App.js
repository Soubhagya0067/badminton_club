import "./App.css";
import LeftContainer from "./components/LeftContainer";
import PaymentContainer from "./components/PaymentContainer";
import RightContainer from "./components/RightContainer";
import Store from "./components/Store";


function App() {
  return (
    <div className="App">
      <h1 className="header">TCS Badminton Club</h1>
      <div className="navigation-bar">
        <ul className="nav-style">
          <li className="nav-list nav-active">Home</li>
          <li className="nav-list">Members</li>
          <li className="nav-list">Tracker</li>
          <li className="nav-list">Store</li>
          <li className="nav-list">Add Member</li>
          <li className="nav-list">Add Items</li>
        </ul>
      </div>
      <div className="notice-container">
        <h4 className="notice-banner">
          Please contribute Rs 200/- each month towards Monthly subscription.
        </h4>
      </div>
      <div className="main-container">
        <LeftContainer />
        <RightContainer />
      </div>
      <PaymentContainer />
      <Store />
    </div>
  );
}

export default App;
