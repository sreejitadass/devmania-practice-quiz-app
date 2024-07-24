import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  currentAnswer,
  onSelect,
}) {
  //to create it only once and prevent re-rendering
  const shuffledAnswers = useRef();

  //shuffling the answers--created once to prevent reshuffling
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let ansClass = "";

        if (currentAnswer === "answered" && isSelected) ansClass = "selected";
        if (
          (currentAnswer === "correct" || currentAnswer === "wrong") &&
          isSelected
        )
          ansClass = currentAnswer;

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={ansClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
