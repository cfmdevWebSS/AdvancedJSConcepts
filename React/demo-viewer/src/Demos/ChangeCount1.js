import React from 'react';

function ChangeCount1() {
  
  let count = 0;
  
  function increment(e) {
    count++;
    console.log(`Count is ${count}.`);
    // e.target.innerHTML = count;
  }

  return (
    <div className="container">
      <button className="btn btn-primary"
        onClick={increment}>{count}</button>
    </div>
  );
}

export default ChangeCount1;