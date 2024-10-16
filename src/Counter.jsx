import { useState } from "react";

export default function Counter() {
  // using state management
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1; //counted the value 1 per click
    setCount(newCount);
  };

  //Reduce the count value using the handle
  const handleReduce = () => {
    const reduceCount = count - 1;
    setCount(reduceCount);
  };

  return (
    <div
      style={{
        border: "1px solid green",
        padding: "15px",
        borderRadius: "5px",
        marginBottom: "15px",
      }}
    >
      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add Count</button>
      <button onClick={handleReduce}>Reduce Count</button>
    </div>
  );
}
