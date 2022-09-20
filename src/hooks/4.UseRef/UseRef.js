import React, { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current.value)
    inputRef.current.focus(); 
    inputRef.current.value="";
  }

  return (
    <>
      <h1>Input your name!</h1>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={handleClick}>Click to Submit</button>
    </>
  );
}
