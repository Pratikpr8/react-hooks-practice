import React, { useState,useEffect } from "react";
import axios from "axios";

export default function UseEffectAxios() {

  const[myData,setMyData] = useState([])
  const[isError,setIsError] = useState("")
  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> setMyData(res.data))
    // .catch((error)=>console.log(error.message))
    .catch((error)=>setIsError(error.message))
  },[]);
  return (
    <>
      <h1>UseEffect with axios</h1>
      <br />
      {isError != null && <p>{isError}</p>}
      {myData.map((data)=>{
        const {id , title , body} = data;
        
        return <div key={id}>

          <h2>{title}</h2>
          <p>{body}</p>
          <br />
        </div>

      })}

    </>
  );
}
