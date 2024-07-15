import { useState } from "react";

// useState hook allows you to add state to function based componets, its basically a data...

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1320px] flex items-center justify-center flex-col min-h-screen">
      <h1>useState HOOK</h1>
      <p>Count:{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Me!</button>
    </div>
  );
};

export default State;
