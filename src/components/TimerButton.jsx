import React, { useState, useEffect } from "react";

export default function ClickCounterWithTimer() {
  const [clickCount, setClickCount] = useState(0); 
  const [timeLeft, setTimeLeft] = useState(10); 
  const [isRunning, setIsRunning] = useState(false); 

  const startTimer = () => {
    setIsRunning(true);
    setClickCount(0); 
  };

  const handleClick = () => {
    if (isRunning) {
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
    if (timeLeft === 0) {
      setIsRunning(false); 
    }
    return () => clearTimeout(timer); 
  }, [timeLeft, isRunning]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-2xl font-bold mb-4">No of Clicks until timer expires</div>
      <div className="bg-orange-400 p-10 rounded-md shadow-lg text-center">
        <div className="text-5xl font-bold mb-2">{clickCount}</div>
        <div className="text-lg mb-4">Time left: {timeLeft} seconds</div>
        {isRunning ? (
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition duration-300"
          >
            +
          </button>
        ) : (
          <button
            onClick={startTimer}
            className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition duration-300"
          >
            Start Timer
          </button>
        )}
      </div>
    </div>
  );
}
