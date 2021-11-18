import React from 'react';

function Message(props) {

  return (
    <strong className="text-danger">{props.msg}</strong>
  );
}

export default Message;