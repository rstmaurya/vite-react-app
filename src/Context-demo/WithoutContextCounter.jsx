import React, { createContext, useContext, useState } from 'react';



const WithoutContextCounter = () => {  //USING PROPS METHOD TO ACCESSING VALUE IN NAVBAR

 const[count,setCount]=useState(0)

   function counterInce(){
    setCount(count+1)
   }
  return (
    <div className='container mt-4 rounded bg-warning p-4'>
    
     <h2> Parent component</h2>
     <button onClick={counterInce}>click me</button>
     <p> counter::{count}</p>

     < Button count={count}/>
     
   
    </div>
  )
}

export default WithoutContextCounter


 function Button ({count}){          //Fun2
   
   
  return(
  <div className='container bg-info p-2'>
  <h2>Button</h2>
  <button>click here</button> <span className='h1 text-white'>{count}</span>
  <Navbar count={count}/>
  </div>
  )
 }

 function Navbar ({count}){           //FUN3

  

  return(
  <div className='container m-1 bg-secondary'  >
  <h2>Navbar</h2>
  <p>hi:{count}</p>
  </div>
  )
 }