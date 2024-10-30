import React, { useCallback, useState } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // increment` function only created once

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
};

export default UseCallback;

const ChildComponent = React.memo(({ increment }) => (
  <button onClick={increment}>Increment</button>
));
