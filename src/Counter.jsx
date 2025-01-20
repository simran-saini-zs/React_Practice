import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); 
  const foc = useRef();
  useEffect(()=>{
    renderCount.current = count;
    if(count == 3)
    {
      foc.current.focus();
    }
  },[count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <input ref = {foc} value={renderCount.current}/>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;