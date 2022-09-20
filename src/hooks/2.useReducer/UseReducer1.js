import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseState() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function Increment() {
    dispatch({ type: "increment" });
  }

  function Decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <div>
        <button onClick={Decrement}>-</button>
        {state.count}
        <button onClick={Increment}>+</button>
      </div>
    </>
  );
}
