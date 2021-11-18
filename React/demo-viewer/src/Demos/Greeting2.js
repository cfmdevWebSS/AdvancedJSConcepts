import React from 'react';
import HelloMessage from './HelloMessage';

function Greeting2() {
    const firstName = 'Nat';
    return (
      <div>
        <HelloMessage helloTo="Greta" />
        <HelloMessage helloTo="Todd" />
        <HelloMessage helloTo="Chris" />
        <HelloMessage helloTo={firstName} />
      </div>
    );
}

export default Greeting2;