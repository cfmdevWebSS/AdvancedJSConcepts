import React, {useState} from 'react';
import ToggleButton from './ToggleButton';

function LightBulb1() {

  const [on, setOn] = useState(true);
  const [count, setCount] = useState(0);

  document.title = on ? 'Light is on!' : 'Light is off!';
  document.body.style.backgroundColor = on ? 'orange' : 'white';
  console.log('Changing title and background color.');

  return (
    <div className="container">
      <ToggleButton on={on} setOn={setOn} />
      <button className="btn btn-primary" onClick={() => {
        setCount(count + 1);
      }}>{count}</button>
    </div>
  )
}
export default LightBulb1;