import "./App.css";
import Customers from "./components/Customers";
import { useState } from "react";

function App() {
  const [showCustomers, setShowCustomers] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowCustomers(!showCustomers);
        }}
      >
        {showCustomers ? "Feel free to click!" : "Click to see!"}
      </button>
      {showCustomers ? <Customers /> : null}
    </div>
  );
}

export default App;
