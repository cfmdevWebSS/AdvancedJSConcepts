import React, {useState} from 'react';

function ChangeCount2() {

  const [count, setCount] = useState(0);
  console.log(`Rendering. Count is : ${count}.`);
  
  function increment() {
    setCount(count + 1);
    console.log(`Button clicked. Count is ${count}.`);
  }

  return (
    <div className="container">
      <button className="btn btn-primary"
        onClick={increment}>{count}</button>
    </div>
  );
}

export default ChangeCount2;