import "./App.css";
import LeftContainer from "./components/LeftContainer";
import PaymentContainer from "./components/PaymentContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <div className="App">
      <h1>TCS Badminton Club</h1>
      <div className="notice-container">
        <h4>
          Please contribute Rs 200/- each month towards Monthly subscription.
        </h4>
      </div>
      <div className="main-container">
        <LeftContainer />
        <RightContainer />
      </div>
      <PaymentContainer />
    </div>
  );
}

export default App;
