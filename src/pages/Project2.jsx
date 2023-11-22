// src/components/Project2.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';

const Project2 = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment by 2</button>
      <button onClick={() => dispatch(decrement())}>Decrement by 2</button>
    </div>
  );
};

export default Project2;
