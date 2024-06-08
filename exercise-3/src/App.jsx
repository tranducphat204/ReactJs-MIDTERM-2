import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState("");

/* You will need some function to handle the key pressed and button events */
  const onCalculate = () => {
    if (isNaN(a) || isNaN(b)) {
      setResult("A and B shall be numbers");
    } else {
      setResult(parseFloat(a) + parseFloat(b));
    }
  };

  const handleAChange = (event) => {
    setA(event.target.value);
  };

  const handleBChange = (event) => {
    setB(event.target.value);
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={handleAChange} />

      <label>B =</label>
      <input onChange={handleBChange} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input
        disabled
        value={result}
        style={{ color: isNaN(result) ? "red" : "white" }}
      />
      <button onClick={onCalculate}>Compute</button>
    </main>
  );
}

export default App;
