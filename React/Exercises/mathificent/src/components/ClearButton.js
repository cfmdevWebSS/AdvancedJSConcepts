import React from 'react';

export default function ClearButton(props) {
    return (<button className="btn btn-primary" 
        style={{width: "4.2em"}} 
        onClick={() => {props.handleClick('');}}>Clear</button>)
}
