import React, { useEffect, useState } from 'react'

const Logical = () => {

 const[age,setAge]=useState(0);
 const[msg,setMsg]=useState('');
 const[color,setColor]=useState('');

 const [theme, setTheme] = useState('bg-white text-dark');
 const [btnColor, setBtnColor] = useState('btn btn-dark');
 const [spanColor, setSpanColor] = useState('bg-dark text-white p-2 fw-bold  rounded');



 function themeChange(e){
        
  if(e.target.checked){
      setTheme('bg-dark text-white');

      setBtnColor('btn btn-info fw-bold text-white')
      setSpanColor('bg-white text-dark p-2 fw-bold rounded')
  }else{
      setTheme('bg-secondary bg-opacity-10 text-dark');
      setBtnColor('btn btn-dark fw-bold text-white')
      setSpanColor('bg-dark text-white p-2 fw-bold  rounded')


  }
  
}


 useEffect(()=>{
  if (age <= 0) {
    setMsg("");
    // setColor('text-secondary')
  } else if (age < 18) {
    setMsg('You are under age...');
    setColor('text-danger')
  } else if(age >= 18 && age<100) {
    setMsg('You are eligible.');
    setColor('text-success')
  }else{
    setMsg('you do not exist!!!')
    setColor('text-light bg-danger p-1 ms-2')
  }
 },[age])



  return (
    <div className='container-fluid' >
      <h2> Age verification.........</h2>
        <div className="row">
          <div className="col-md-3 col-sm-12">
          <div>
       <input type="number" className='form-control mb-2 border-4 border-black' onChange={(e)=>setAge(e.target.value)}  placeholder='enter age'/>
      </div>
          </div>
        </div>
      <span className={`${color} mt-2`}>{msg}</span>


      {/* card style start here */}


      <hr/>
      <div>
      <div className={`card ms-4 ${theme}  card-styless`} >
     
        <div className="row">
          <div className="col-md-12 col-lg-4 img-cardss col-sm-12">
            <img className='card-img-top' src="/images/oversized.webp"  alt="" loading='lazy' />
          </div>
          <div className={`col-lg-8 col-md-12  col-sm-12`}>
       <div className='d-flex justify-content-end me-3'>
       <div className='form-switch '>
            <input type="checkbox" onChange={themeChange} className='form-check-input'/>
            <span>Dark Mode  </span>
        </div>
       </div>
            <div className='d-flex mt-4  justify-content-between'>
              <div className='h4'>Classic Utility Jacket</div>
              <div className='h4 text-secondary me-5'>$100.00</div>
            </div>
            <p className='h6 text-opacity-75 text-warning  mb-4'>In stock</p>
            <div className='d-flex justify-content-between w-50'>
              <span className={spanColor}>XS</span>
              <span className='p-2'>S</span>
              <span className='p-2'>M</span>
              <span className='p-2'>L</span>
              <span className='p-2'>XL</span>
            </div>
            <hr/>
            <div className='d-flex justify-content-between' >
              <div>
                <span className={` me-5  ${btnColor}`}>Buy Now</span>
                <span className='btn btn-light  border-2   '>Add to bag</span>
              </div>
              <span className='me-4  border-2 p-2 rounded'><span className='bi bi-heart  p-2'> </span></span>
            </div>
            <p className='mt-3 '>Free shipping on all continental US orders.</p>
          </div>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Logical


