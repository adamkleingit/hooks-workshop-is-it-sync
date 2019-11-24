import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [, setCount] = useState(0);
  console.log("render");
  const onClick = () => {
    setCount(val => val + 1);
    console.log("after set");
  };
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
