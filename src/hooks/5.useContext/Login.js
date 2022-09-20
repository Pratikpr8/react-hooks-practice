import React,{useContext} from "react";
import { AppContext } from "./UseContext";

export default function Login() {

    const {setUName}=useContext(AppContext)
  return (
  <div>
  <input 
    type="text"
    onChange={(event)=>
        setUName(event.target.value)
    } 
/>
  </div>
  )}