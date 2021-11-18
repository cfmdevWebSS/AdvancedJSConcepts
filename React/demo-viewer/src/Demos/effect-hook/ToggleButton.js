import React from 'react';

function ToggleButton({on, setOn}) {

  let toggleClass = on ? 'btn btn-danger m-3' : 'btn btn-success m-3';
  let toggleText = on ? 'Turn Off' : 'Turn On';
  
  return ( 
    <button className={toggleClass} onClick={() => {setOn(!on)}}>
      {toggleText}
    </button>
  )
}
export default ToggleButton;