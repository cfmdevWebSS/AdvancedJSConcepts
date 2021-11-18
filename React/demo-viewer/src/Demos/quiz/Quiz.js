import React, {useState} from 'react';
import Question from './Question';
import Answer from './Answer';
import Message from './Message';
import Scoreboard from './Scoreboard';
import quiz from './presidents-quiz';

function Quiz() {

  const [qNum, setQNum] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctResponses, setCorrectResponses] = useState(0);
  const [message, setMessage] = useState('');

  const quizTitle = quiz.title;

  // All of these will be updated when qNum changes
  const question = quiz.questions[qNum];
  const questionText = question['question'];
  const correctAnswer = question['correct'];
  const answers = question['answers'].map((answer) => 
    <Answer answer={answer} key={answer} checkAnswer={checkAnswer} />
  );

  function checkAnswer(answer) {
    setTotalAttempts(totalAttempts + 1);
    if (answer === correctAnswer) {
      setCorrectResponses(correctResponses + 1);
      nextQuestion();
    } else {
      setMessage('Wrong!');
    }
  }

  function nextQuestion() {
    const nextQNum = qNum + 1;
    setMessage('');
    if (nextQNum === answers.length) {
      setQNum(0); // Go back to first question
    } else {
      setQNum(nextQNum);
    }
  }
  
  return (
    <div className="container">
      <h1>{quizTitle}</h1>
      <Scoreboard totalAttempts={totalAttempts}
        correctResponses={correctResponses} />
      <Question question={questionText} />
      {answers}
      <Message msg={message} />
    </div>
  );
}

export default Quiz;