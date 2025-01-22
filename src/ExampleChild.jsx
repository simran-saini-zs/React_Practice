import './App.css';
import React from 'react';

function ExampleChild({ onclick,number }) {
   console.log("Second component rendered!");
  return (
    <div>
        <h2>Child Component</h2>
        <h2>{number}</h2>
      <button onClick={onclick}>Click Me</button>
    </div>
  );
};

export default React.memo(ExampleChild);
