// TypedEffect.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';               //[npm install typed.js] for this library
import './runningEffect.css';

const RunningEffects = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Web Developer.', 'Graphics Designer.', 'Angular Developer.', 'React Developer...'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
   <div className='header container-fluid mt-4 bg-info bg-opacity-50 d-flex align-items-center' style={{height:'80vh'}}>
    <div className="row ">
      <div className="col-md-6">
      <div className="mains">
      Hi, My name is <span>Rajnish</span> and I am a Passionate <span id="element" ref={typedElement}></span>
    </div>
      </div>
      <div className="col-md-6 ">
      <img src='images/rajni.png' height='350px' alt=""  />
      </div>
    </div>
    
    
   </div>
  );
};



export default RunningEffects
