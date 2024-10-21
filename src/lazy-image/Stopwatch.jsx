import React, { useEffect, useRef, useState } from 'react';

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  let timeRef = useRef(null);

  // Function to start the timer
  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  // Function to stop the timer
  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null; // Reset the reference
  };

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  return (
    <div className='container text-center'>
      <h2 className='bg-danger text-center p-2 rounded text-white'>StopWatch</h2>
      <h3 className='fs-1 font-monospace'><span className='bg-secondary p-1 rounded-circle'>{timer}</span></h3>
      <button onClick={startTimer} className='btn btn-success '>Start</button>
      <button onClick={stopTimer} className='btn btn-danger ms-2'>Stop</button>  
      <button onClick={() => setTimer(0)} className='btn btn-warning ms-2'>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
