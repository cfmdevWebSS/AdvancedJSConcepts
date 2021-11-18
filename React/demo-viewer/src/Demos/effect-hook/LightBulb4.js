import React, {useState, useEffect} from 'react';

function LightBulb4() {

  const [on, setOn] = useState(true);

  document.body.style.backgroundColor = on ? 'orange' : 'white';

  useEffect(() => {
    window.addEventListener('click', () => {
      setOn(!on);
    })
  }, []);

  return (
    <div className="container">
      {on ? 'Light is on!' : 'Light is off!'}
    </div>
  )
}
export default LightBulb4;