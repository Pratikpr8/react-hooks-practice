import React, { useState } from "react";

export default function CustomHooks() {
  const { name, setName } = useState("");

  return (
    <>
      <input 
        type="text"
        onChange={(event)=> setName(event.target.value)} 
      />
    </>
  );
}
