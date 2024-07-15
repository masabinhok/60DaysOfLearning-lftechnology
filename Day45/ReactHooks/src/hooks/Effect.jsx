import React, { useState, useEffect } from "react";

// useEffect hook lets you perform side effects in function-based components.

const Effect = () => {
  const [seconds, setSeconds] = useState(0);

  // This function resets the seconds state to 0 when called.
  const reset = () => {
    setSeconds(0);
  };

  useEffect(() => {
    // Set up an interval that updates the seconds state every second.
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    // or before the next effect runs if dependencies change.
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once when the component mounts.

  return (
    <div className="max-w-[1320px] flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[40px] font-bold">useEffect HOOK</h1>
      <p className="text-[30px] text-red-500">Seconds: {seconds}</p>
      <button
        onClick={reset}
        className="py-5 px-5 m-2 bg-black text-white rounded-xl"
      >
        Reset timer
      </button>
    </div>
  );
};

export default Effect;
