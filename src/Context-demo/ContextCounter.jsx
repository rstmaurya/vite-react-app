import React, { createContext, useContext, useState } from 'react';

let counterContext = createContext(null);

const ContextCounter = () => {                 //Main Fun1

 const[count,setCount]=useState(0)

   function counterInce(){
    setCount(count+1)
   }
  return (
    <div className='container-fluid bg-warning p-4'>
     <counterContext.Provider value={count}>
     <h2> Parent component</h2>
     <button onClick={counterInce}>click me</button>
     <p> counter::{count}</p>
     < Button/>
     </counterContext.Provider>
   
    </div>
  )
}

export default ContextCounter


 function Button (){                        //Child Fun2
   
   let context1 = useContext(counterContext)

  return(
  <div className='container bg-info p-2'>
  <h2>Button Component</h2>
  <button>click here</button> <span className='h1 text-white'>{context1}</span>
  <Navbar/>
  </div>
  )
 }

 function Navbar (){                            //GrandChild Fun3

  let context = useContext(counterContext)

  return(
  <div className='container m-1 bg-secondary'  >
  <h2>Navbar Component</h2>
  <p>hi:{context}</p>
  </div>
  )
 }