import { useState, useEffect } from "react";

function Greeting() {
  const [inputTime, setInputTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(inputTime);
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setInputTime(value);
    setTimeLeft(value);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <label>
        Set Time (seconds):
        <input
          type="number"
          value={inputTime}
          onChange={handleChange}
        />
      </label>

      <p>Time Left: {timeLeft} seconds</p>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Greeting;