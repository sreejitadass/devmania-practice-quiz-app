import quizLogo from "./../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="quiz logo image" />
      <h1>DevMania</h1>
    </header>
  );
}
