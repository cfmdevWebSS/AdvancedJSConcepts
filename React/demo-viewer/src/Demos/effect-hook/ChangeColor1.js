import React from 'react';

function ChangeColor1() {
  
  function changeColor() {
    setTimeout(() => {
      document.body.style.backgroundColor = 'red';
    }, 2000);
  }

  
  return (
    <button className="btn btn-success m-3"
      onClick={changeColor}>Change Color</button>
  );
}

export default ChangeColor1;