import React, { useEffect, useState } from 'react';

function Counter({ targetValue, duration }) {
  const [count, setCount] = useState(0); // Start count from 0

  useEffect(() => {
   const stepTime = 10; // Interval in milliseconds for updating the counter
   const increment = targetValue / (duration / stepTime); // Calculate increment step

   // Set up a timer to update the counter
   const timer = setInterval(() => {
     setCount((prevCount) => {
       if (prevCount + increment >= targetValue) {
         clearInterval(timer); // Stop when the target value is reached
         return targetValue; // Set final value to avoid overshoot
       }
       return prevCount + increment;
     });
   }, stepTime);

   // Clear interval on component unmount
   return () => clearInterval(timer);
 }, [targetValue, duration]);

  return (
     <p>
      {Math.floor(count).toLocaleString()}
      </p>
  );
}
export default Counter;

// function App() {
//   return (
//     <div className="App">
//       <h2>React Counting Animation</h2>
//       {/* Pass targetValue and duration as props to the Counter component */}
//       <Counter targetValue={367} duration={2000} /> {/* Count from 0 to 367 in 2 seconds */}
//     </div>
//   );
// }

// export default App;
