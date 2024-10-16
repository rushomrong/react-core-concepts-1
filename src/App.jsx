import "./App.css";
import Counter from "./Counter";
import Players from "./Players";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 clicked");
  };

  return (
    // empty fragment <>
    <>
      <h1>React Core Concepts 2 </h1>

      <Users></Users>

      <Players></Players>

      <Counter></Counter>

      <button onClick={handleClick}>Button</button>
      <button onClick={handleClick2}>Button 2</button>
      <button
        onClick={() => {
          alert("Third button clicked");
        }}
      >
        Button 3
      </button>
    </>
  );
}

export default App;
