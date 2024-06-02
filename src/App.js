import React, { useState } from 'react';
import Input from './Input.js';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">Counter</h2>
      <span className="mr-2">{count}</span>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <button className="btn btn-primary mr-2" onClick={decrement} >Decrease</button>
        <button className="btn btn-primary" onClick={increment}>Increase</button>
      </div>
      <Input />
    </div>
  );
}

export default Counter;
