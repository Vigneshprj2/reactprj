import React from "react";
function Counter() {
  //let count = 1;
  const [count, setcount] = React.useState(0);
  const increment = () => {
    //count = count + 1;
    setcount(count+1);
    console.log(count);
  };
  const decrement = () => {
    //count = count - 1;
    setcount(count-1);
    console.log(count);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => decrement()}>-</button>
      <span style={{ fontSize: "30px", margin: "10px" }}> {count}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

export default Counter;
