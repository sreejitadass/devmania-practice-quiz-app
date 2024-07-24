import quizComplete from "./../assets/quiz-complete.png";
import QUESTIONS from "./../questions.js";

export default function Summary({ userAnswers }) {
  const skipped = userAnswers.reduce((acc, answer) => {
    if (answer === null) {
      acc++;
    }
    return acc;
  }, 0);

  const correct = userAnswers.reduce((acc, answer, index) => {
    if (answer === QUESTIONS[index].answers[0]) {
      acc++;
    }
    return acc;
  }, 0);

  const wrong = userAnswers.reduce((acc, answer, index) => {
    if (answer !== QUESTIONS[index].answers[0]) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div id="summary">
      <img src={quizComplete} alt="quiz-complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correct}</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrong}</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let ansClass = "user-answer ";
          if (answer === null) ansClass += " ";
          else if (answer === QUESTIONS[index].answers[0])
            ansClass += "correct";
          else ansClass += "wrong";

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={ansClass}>{answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
