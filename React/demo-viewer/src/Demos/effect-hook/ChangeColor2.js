import React, {useEffect, useState} from 'react';

function ChangeColor1() {

  const [bg, setBg] = useState(false);

  useEffect(() => {
    if (!bg) return;
    console.log('Setting timer.');
    const timer = setTimeout(() => {
      document.body.style.backgroundColor = 'red';
    }, 2000);
    return () => {
      clearTimeout(timer);
      console.log('Clearing timer.');
    }
  }, [bg]);

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = 'white';
    }
  }, []);

  return (
    <button className="btn btn-success m-3"
      onClick={() => {setBg(true)}}>Change Color</button>
  );
}

export default ChangeColor1;