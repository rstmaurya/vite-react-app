import React, { useState, useEffect, useRef } from "react";
import Counter from "./CountingEffect";
import Footer from "./Footer";
import { useCookies } from 'react-cookie'
import {useNavigate} from 'react-router-dom'


export function Cards({name,title,image}){
  return(
    <div className="card text-center bg-info">
      <div className="card-header">
        <img src={image} width='90%' height='234px' alt="" />
      </div>
      <div className="card-body">
        <h2 className="fs-1 text-white">{title}</h2>
      </div>
      <div className="card-footer ">
        <p className="text-white">{name}</p>
        <button className="w-100 bg-info rounded text-white fw-bold rounded-3 mb-5 mt-5 p-3">DISCOVER MORE</button>
      </div>

    </div>

  )
}

function Contact() {

  let navigate=useNavigate()

  const [time, setTime] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(['user-id']);


  const timerId = useRef(null);

  useEffect(() => {

    if(cookies['user-id']==null){
      navigate('/')
    }else{

      timerId.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
  

    }
   
    // Properly clear the interval on component unmount
    return () => clearInterval(timerId.current);
  }, []);

  return (
    <div>
      <p>Time: {time}</p>
      <button
        className="btn btn-danger"
        onClick={() => clearInterval(timerId.current)}
      >
        Stop Timer
      </button>
      <hr />
      <p className="p-2 text-justify">
        Spread operator: The spread operator helps us expand an iterable such as
        an array where multiple arguments are needed, it also helps to expand
        the object expressions. In cases where we require all the elements of an
        iterable or object to help us achieve a task, we use a spread operator.
        Note: There can be more than one spread operator in javascript
        functions.
      </p>
      <hr/>
    <div className="container">

    <div className="row">
        <div className="col-md-6 col-lg-4 col-sm-12 mt-2">
        <Cards name='Something that distinguishes us from other resellers is our unique ‘Day in the Life’ Implementation Methodology!' 
      image='https://www.the365people.com/hubfs/Website%20Assets/banner-unique-methodolgy-600x600.png'
       title='Our Unique Methodology'/>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12 mt-2">
        <Cards name='Together we have over 4,000 years experience with Dynamics NAV Dynamics  Business Central making us the most experienced reseller in the UK' 
      image='https://www.the365people.com/hubfs/Website%20Assets/banner-our-incredible-people-600x600.png'
       title='Our Incredible People'/>
        </div>
        <div className="col-md-6 col-lg-4 col-sm-12 mt-2">
        <Cards name='We have worked with Dynamics NAV since version 1.0 and to this day it is the only ERP system that we will work with - making us true obsessionists!' 
      image='https://www.the365people.com/hubfs/Website%20Assets/banner-our-love-600x600-2.png'
       title='Our Love Of Dynamics!'/>
        </div>
      </div>
    </div>

    <section className="bg-section text-white mt-2">
      <div className="container d-flex justify-content-around flex-wrap align-items-center ">
        <div className="text-center img-trans" >
          <img src="https://www.the365people.com/hubfs/Website%20Assets/clipboard.png" height='85' loading="lazy" width='85' alt="" />
          <p style={{fontSize:'70px',fontWeight:'700'}}> <Counter targetValue={367} duration={2000} /> 
          </p>
          <p style={{fontSize:'26px'}}>Members of Staff</p>
        </div>
        <div className="text-center img-trans"> 
          <img src="https://www.the365people.com/hubfs/Website%20Assets/bulb.png" height='85' width='85' loading="lazy" alt="" />
          <p style={{fontSize:'70px',fontWeight:'700'}}><Counter targetValue={4405} duration={2000} /> 
          </p>
          <p style={{fontSize:'26px'}}>Years of Experience</p>
        </div> 
        <div className="text-center img-trans">
          <img src="https://www.the365people.com/hubfs/Website%20Assets/tel.png" height='85' width='85' loading="lazy" alt="" />
          <p style={{fontSize:'70px',fontWeight:'700'}}><Counter targetValue={61} duration={1000} /> </p>
          <p style={{fontSize:'26px'}}>People in the Support Team</p>
        </div>
        <div className="text-center img-trans">
          <img src="https://www.the365people.com/hubfs/Website%20Assets/user-2.png" height='85' width='85' loading="lazy" alt="" />
          <p style={{fontSize:'70px',fontWeight:'700'}}><Counter targetValue={49896} duration={2000} /> </p>
          <p style={{fontSize:'26px'}}> User licences under our care</p>
        </div>
        <div className="text-center img-trans">
          <img src="https://www.the365people.com/hubfs/Website%20Assets/rocket.png" height='85' width='85' loading="lazy" alt="" />
          <p style={{fontSize:'70px',fontWeight:'700'}}><Counter targetValue={712} duration={2000} /> </p>
          <p style={{fontSize:'26px'}}>Customers</p>
        </div>
      </div>

    </section>

           {/* Footer starts Here........................... */}

    
     
<p className="text-center "><Footer/></p>



    </div>
  );
}

export default Contact;
