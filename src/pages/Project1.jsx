import React, { useState, useEffect } from 'react';

function Project1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;

    if (count < 15) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div>
      <h1>I've rendered {count} times!</h1>
    </div>
  );
}

export default Project1;
