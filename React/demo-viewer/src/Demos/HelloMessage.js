import React from 'react';

function HelloMessage(props) {
    return (
     <p>Hello, {props.helloTo}!</p>
    );
}

export default HelloMessage;