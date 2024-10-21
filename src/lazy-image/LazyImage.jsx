import React, { useState, useEffect } from 'react';

function DelayedImage() {
  const [isLoaded, setIsLoaded] = useState(false); // State to control when the image loads

  useEffect(() => {
    // Set a timeout to load the image after 2 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set the image to load after 2 seconds
    }, 4000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="image-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoaded ? (
        <img
          src="../../public/images/menFashion3.jpg"
          alt="Delayed"
          style={{ border: '2px solid #007bff', borderRadius: '8px' }}
        />
      ) : (
        <h2>Loading image...</h2>
      )}
    </div>
  );
}

export default DelayedImage;
