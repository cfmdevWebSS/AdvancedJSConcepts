import React from 'react';
import HelloMessage from './HelloMessage';

function Greeting() {
    return (
      <div>
        <HelloMessage helloTo="Greta" />
        <HelloMessage helloTo="Todd" />
        <HelloMessage helloTo="Chris" />
      </div>
    );
}

export default Greeting;