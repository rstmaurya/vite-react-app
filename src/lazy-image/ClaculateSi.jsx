import React, { useState } from 'react'

const CalculateSI = () => {
  
 const[amount, setAmount]=useState(1000);
 const[years,setYears] =useState(1);
 const [rate, setRate] = useState(5);
 const[SI,setSI] = useState(0)

 function handleAmount(e){
  setAmount(e.target.value)
 }
 function handleYears(e){
  setYears(e.target.value)
 }
 function handleRate(e){
  setRate(e.target.value)
 }

 function CalculateSimpleInterest(){
var p =amount;
var R = rate;
var T = years;
var SimpInterest=(p*R*T/100)
setSI(SimpInterest)

 }

  return (
    <div className='container-fluid bg-secondary p-4' >
          <h4 className='text-center text-info fs-2'>Simple Interest(SI) Calculator</h4>

          <div className=" container bg-light text-dark rounded rounded-2 mt-4 p-4">
           <div className='row'>
            <div className='col-lg-4 col-sm-12'>
           Amount you need <input className='form-control' type="text" onChange={handleAmount} value={amount}/>
            </div>

         
           <div className='col-lg-4 col-sm-12'>
          for <input className='form-control' type="text" size="4" onChange={handleYears} value={years}/> years
           </div>

          
           <div className='col-lg-4 col-sm-12'>
         Interest Rate <input className='form-control' type="text" size="5" onChange={handleRate} value={rate}/> %
           </div>

           

          

           </div>

           <div className='row mt-4'>
      <div className='col'>
      &#8377; 1000 <input type="range" step="1000" min="1000" max="500000" onChange={handleAmount} onMouseMove={CalculateSimpleInterest}  value={amount}  />  &#8377; 5,00,000
      </div>
      <div className='col'>
      1 Year <input type="range" min="1" max="10" onChange={handleYears} onMouseMove={CalculateSimpleInterest}    value={years} /> 10 Year
      </div>
      <div className='col'>
     5% <input type="range"  min="5" step="0.01" onChange={handleRate} onMouseMove={CalculateSimpleInterest}    value={rate}  max="21" /> 21%
      </div>

     </div>
     <div className='text-end'>
     <button className='btn btn-success' onClick={CalculateSimpleInterest}>Calculate SI</button>
     </div>
     <div className='text-center'>
     <span className='fs-2 text-danger'> Interest is:{SI}   &#8377;</span>
     </div>
     
           </div>

   
    </div>
  )
}

export default CalculateSI
