import React,{useState} from 'react';

export default function UseState() {

    const [count, setCount] = useState(0)
    const [on,setOn]=useState(false)
    const [name,setName]=useState("NoOne")

function handleAdd(){
    setCount(count=> count + 1)
}

function handleSubtract (){
    setCount(count => count - 1)
}

function handleStateChange(){
    setOn(prevOn=> !prevOn)
}

function handleChange(event){
    const enteredName = event.target.value
    setName(enteredName)
}

  return (
    <>
    <div>
        <button onClick={handleAdd}>+</button>
        {count}
        <button onClick={handleSubtract}>-</button>
    </div>
    <br />
    <div className = {on ? "green" : "red"}>
        What color is this?
    </div>
    <br />
    <div>
        <button onClick={handleStateChange}>Change state</button>
        {on && <p>The condition is on.</p>}
    </div>
    <br />
    <div>
        <input 
            type="text" 
            placeholder="Enter your name!"
            onChange={handleChange}
        />
        <p>Hello, {name}</p>
    </div>
    </>
  )
}
