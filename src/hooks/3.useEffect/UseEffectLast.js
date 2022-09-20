import React, { useEffect } from "react";
import axios from "axios";

const API="https://jsonplaceholder.typicode.com"

export default function UseEffectLast() {

    const[data,setData]=React.useState([])
    const[isError,setIsError]=React.useState("")

  useEffect(() => {
    axios.get(`${API}/comments`)
    .then((res)=>setData(res.data))
    .catch((err)=>setIsError(err.message))
  },[]);

  return <>
    <h1>UseEffect</h1>
    {isError != null && <p>{isError}</p>}
        {data.map((item)=> {
            return <div key={item.id}>
                <h2>{item.name}</h2>
                <h4>{item.email}</h4>
            </div> 
        })}
  </>;
}
