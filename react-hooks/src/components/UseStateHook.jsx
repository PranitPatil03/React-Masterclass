import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter using State hook</h1>

      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
    </>
  );
};

export default UseStateHook;
