import React from 'react';

function Answer(props) {

  return (
    <button className="btn btn-primary m-3"
      onClick={() => {
        props.checkAnswer(props.answer);
      }}>{props.answer}</button>
  );
}

export default Answer;