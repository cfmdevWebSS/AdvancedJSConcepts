import React, {useState, useEffect} from 'react';
import ToggleButton from './ToggleButton';

function LightBulb2() {

  const [on, setOn] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = on ? 'Light is on!' : 'Light is off!';
    document.body.style.backgroundColor = on ? 'orange' : 'white';
    console.log('Changing title and background color.');
    return () => {
      document.body.style.backgroundColor = 'white';
      document.title = originalTitle;
    }
  }, [on]);

  return (
    <div className="container">
      <ToggleButton on={on} setOn={setOn} />
      <button className="btn btn-primary" onClick={() => {
        setCount(count + 1);
      }}>{count}</button>
    </div>
  )
}
export default LightBulb2;