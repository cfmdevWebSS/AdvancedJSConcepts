import React, {useState, useEffect} from 'react';

function PlayGround() {

  // Use this component to test things

  const [on, setOn] = useState(true);

  document.body.style.backgroundColor = on ? 'orange' : 'white';

  useEffect(() => {
    window.addEventListener('click', () => {
      setOn(prevOn => !prevOn);
    })
  }, []);

  return (
    <div className="container">
      {on ? 'Light is on!' : 'Light is off!'}
    </div>
  )
}
export default PlayGround;