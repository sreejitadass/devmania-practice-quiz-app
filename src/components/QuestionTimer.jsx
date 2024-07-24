import { useState, useEffect } from "react";

export default function QuestionTimer({ targetTime, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(targetTime);

  useEffect(() => {
    const timer = setTimeout(onTimeout, targetTime);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, targetTime]);

  //change remaining time by 150ms
  //to make sure the code iis executed only when dependencies change
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 150);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={targetTime} value={remainingTime} />;
}
