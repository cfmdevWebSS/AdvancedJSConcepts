import React from 'react';

export default function NumberButton(props) {
    return (
        <button className="btn btn-primary btn-sm" 
            onClick={() => {props.handleClick(props.value)}}>
                {props.value}
        </button>
    )
}
