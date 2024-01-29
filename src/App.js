import react from "react";
import Hello from "./Components/Hello";
import Counter from "./Components/Counter";



const App = ()=>{



  return(
    <div>
      {/* <p>I am jadu </p> */}
           {/* <Hello/>
           <Hello name="Akashay"/>
           <Hello/> */}
           <Hello>
            <p>I am jadu</p>
            <button>Click me</button>
           </Hello>
          <Hello>
            <p>i am the creater of web</p>
          <button>Click me</button>
          </Hello>
          <Hello>
           <Counter/>
          </Hello>

    </div>
  )
}

export default App;