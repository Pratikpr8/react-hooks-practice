import React,{useContext} from "react";
import { AppContext } from "./UseContext";

export default function User() {

    const {uName}=useContext(AppContext)
  return <>{uName}</>;
}
