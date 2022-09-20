import React,{useState,useEffect} from 'react';
import axios from 'axios';


const API = "https://jsonplaceholder.typicode.com"

export default function UseEffectAxiosAsAw() {

  const [myData,setMyData]=useState([])
  const [isError,setIsError]=useState("")


  const getApiData = async(url)=>{
    try{
      const res = await axios.get(url)
      setMyData(res.data);
    }
    catch(error){
      setIsError(error.message)
    }
  }

  useEffect(()=>{
    getApiData(`${API}/posts`);
     
  },[])

  return (
    <>
    <h1>Axios-React</h1>
    <br />
    {isError != null && <p>{isError}</p>}
    <br />
    {myData.map((data)=>{
      const {id,title,body} = data
     return(
      <div key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
     ) 
    })}
    </>
  )
}
