import React from 'react'
import { useState } from 'react';
import "./counter.css"


const Counter = () => {
    // let count=0;
     const [count,setcount]=useState(0)

     //we can create a seperete function like below or we can directly add the function at the button itself
    // const increment=()=>{
    //     setcount(count+1);

    // }
    
  return (
    <div>
      

        <h1 className={count%2==0 ? "counter1" : "counter"}>Counter App:{count}</h1>
        {/* <button className={todo.status===true ? "togglebutton" : "togglebutton1"} onClick={()=> */}

        <button onClick={()=>setcount(count+1)}>Increment </button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
        <button onClick={()=>setcount(count*2)}>Double</button>
      
    </div>
  )
}

export default Counter
