import { useState, useCallback } from "react";

import QUESTIONS from "./../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  //state management
  const [userAnswers, setUserAnswers] = useState([]);

  //if answered, we should stick to current question
  const currentQuestion = userAnswers.length;
  //determine if quiz questions are exhausted/quiz is over
  const isQuizOver = currentQuestion === QUESTIONS.length;

  //useCallback is used because the dependency is a function which recreates itself in memory
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    //store user answers
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  //if-check to conditionally output content
  if (isQuizOver) {
    return <Summary userAnswers={userAnswers} />;
  }

  //key is added to timer to unmount and remount it every time new question is shown
  return (
    <div id="quiz">
      <Question
        key={currentQuestion}
        Qkey={currentQuestion}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
