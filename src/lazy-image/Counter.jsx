import React from 'react'
import { useState } from 'react'

const Counter = () => {

 const[counter,setCounter]=useState(0)

 function handleIncrement(){
  setCounter(prev=>prev+1)
   setCounter(prev=>prev+1)
   setCounter(prev=>prev+1)
   setCounter(prev=>prev+1)
 }
  return (
    <div className='container'>
      <h2>Counter Increment</h2>
      <button className='btn btn-light border-danger' onClick={handleIncrement}>increment</button>
      <p>{counter}</p>
    </div>
  )
}

export default Counter
