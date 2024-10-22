// TypedEffect.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './runningEffect.css'

const RunningEffects = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Web Developer', 'Graphics Designer', 'Angular Developer', 'React Developer'],
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
    <div className="mains">
      Hi, My name is <span>Rajnish</span> and I am a Passionate <span id="element" ref={typedElement}></span>
    </div>
  );
};



export default RunningEffects
