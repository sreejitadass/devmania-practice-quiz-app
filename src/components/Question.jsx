import { useState } from "react";

import QUESTIONS from "./../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({ Qkey, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[Qkey].answers[0],
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let currentAnswer = "";

  if (answer.selectedAnswer) {
    currentAnswer = answer.isCorrect ? "correct" : "wrong";
  }

  return (
    <div id="question">
      <QuestionTimer targetTime={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[Qkey].text}</h2>
      <Answers
        answers={QUESTIONS[Qkey].answers}
        selectedAnswer={answer.selectedAnswer}
        currentAnswer={currentAnswer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
