import React, { useState } from "react";

function App() {
  const [isRaining, setIsRaining] = useState(true);

  function onSunClick() {
    setIsRaining(false);
    console.log(isRaining); 
  }

  function onRainClick() {
    setIsRaining(true);
    console.log(isRaining); 
  }

  function getTitle() {
    return isRaining ? "Rain Time" : "Sun Time";
  }

  function getBackgroundColor() {
      return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
