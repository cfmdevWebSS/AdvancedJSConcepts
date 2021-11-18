import React from 'react';

function Scoreboard(props) {

  function getGrade() {
    if (props.totalAttempts === 0) {
      return 0;
    }
    const grade = (props.correctResponses / props.totalAttempts) * 100;
    return Math.round(grade);
  }

  return (
    <div>
      <strong>Total Attempts: </strong>
      {props.totalAttempts} <br />

      <strong>Correct Responses: </strong>
      {props.correctResponses} <br />

      <strong>Grade: </strong>
      {getGrade()}%
    </div>
  );
}

export default Scoreboard;