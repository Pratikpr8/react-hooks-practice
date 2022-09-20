import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = React.createContext();

export default function UseContext() {
  const [uName, setUName] = useState("");

  return (
    <AppContext.Provider value={{uName, setUName}}>
      <Login />
      <User />
    </AppContext.Provider>
  );
}
