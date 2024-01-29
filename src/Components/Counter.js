import React,{useState} from "react";





const Counter = ()=>{
 let[count,setCount]=useState(0);

  function inc(){
    setCount(count + 1);
  }
  function dec(){
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }



    return(
        <div>
            <h1>Counter App</h1>
            <p>count:{count}</p>
              <button onClick={inc}>inc</button>
              <button onClick={dec}>dec</button>
              <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter;