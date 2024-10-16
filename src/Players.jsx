import { useState } from "react";

export default function Players() {
  //assign state management
  const [count, setCount] = useState(11);

  const handlePlayers = () => {
    const addNew = count + 1;
    setCount(addNew);
  };

  const reducePlayers = () => {
    const minusPlayers = count - 1;
    setCount(minusPlayers);
  };

  //adding style for div using dynamic
  const divStyle = {
    border: "1px solid lightblue",
    margin: "20px",
    borderRadius: "10px",
    padding: "20px",
  };

  return (
    <div style={divStyle}>
      <h3>Players: {count}</h3>
      <button onClick={handlePlayers}>Add Players</button>
      <button onClick={reducePlayers}>Reduce Players</button>
    </div>
  );
}
