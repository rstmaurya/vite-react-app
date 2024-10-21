import React, { createContext, useContext, useState } from 'react'


let contextCreate = createContext(null)


const ContextDemo = () => {


  const [userName, setUsername] = useState('raj')

  return (
    <div className='container p-4 text-white bg-dark'>
      
      <contextCreate.Provider value={userName}>

        <h3>Parents Components</h3>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='enter name' />

        <span className='ms-3'>{userName}</span>
       
        <hr />
        <ChildOne />
        <ChildThree/>

      </contextCreate.Provider>

    </div>
  )
}

export default ContextDemo

function ChildOne() {
  let contextC1 = useContext(contextCreate)

  return (
    <div className='container p-4 text-white bg-info'>
      <h3>Child1 Components <span>{contextC1}</span></h3>

      <ChildTwo />


    </div>
  )
}

function ChildTwo() {
  let contextC2 = useContext(contextCreate)
  return (
    <div className='container p-4 text-white bg-warning '>
      <h3>Child-2 Components: <span>{contextC2}</span></h3>


    </div>
  )
}

function ChildThree() {
   let contextC3 = useContext(contextCreate)
  return (
    <div className='container p-4 text-white bg-success '>
      <h3>Child-2 Components: <span>{contextC3}</span></h3>


    </div>
  )
}