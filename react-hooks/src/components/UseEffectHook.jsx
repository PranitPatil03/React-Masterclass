import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("The Count is:", count);

    return () => {
      console.log("The count is cleared up");
    };
  }, [count]);

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

export default UseEffectHook;
