import react from "react";


             // name
const Hello =(props)=>{

    console.log(props)



    return(
       <div>
              <h1>I am software developer </h1>
              {
                // name="akashay" && <h2>my name is {name}</h2>
              }
              <p>I am also an instructor </p>
              {props.children}
              <hr/>
       </div> 
    )
}

export default Hello;