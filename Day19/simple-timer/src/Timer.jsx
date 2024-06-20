import React from "react";

import { useState, useEffect } from "react";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => {
                  if (prevHours === 23) {
                    return 0;
                  }
                  return Number(prevHours) + 1;
                });
                return 0;
              }
              return Number(prevMinutes) + 1;
            });
            return 0;
          }
          return Number(prevSeconds) + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div>
      <h1>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </h1>
      <div className="buttons">
        <button onClick={handleStart} className="start">
          Start
        </button>
        <button onClick={handleStop} className="stop">
          Stop
        </button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}
