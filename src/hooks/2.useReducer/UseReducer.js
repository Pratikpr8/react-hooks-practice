import React,{useReducer} from 'react';


function reducer(state,action){
    switch(action.type){
        case "increment":
            return{count:state.count + 1,showText:state.showText}
        case "toggleText":
            return{count:state.count,showText:!state.showText}
        default:
            return state;     
    }
    
}

export default function UseReducer() {
    const [state,dispatch]=useReducer(reducer,{count:0, showText:false})


    function increment(){
        dispatch({type:"increment"})
        dispatch({type:"toggleText"})
    }
  return (
    <>
        {state.count}
        <br />
        <button onClick={increment}>Click here</button>
        <br />
        <br />
        {state.showText && <p>Hello</p>}
    </>
  )
}
