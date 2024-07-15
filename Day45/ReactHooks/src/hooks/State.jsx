import { useState } from "react";

// useState hook allows you to add state to function based componets, its basically a data...

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1320px] flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-[40px] font-bold">useState HOOK</h1>
      <p className="text-red-500 text-[30px]">Count:{count}</p>
      <button
        className="py-4 px-5 bg-black text-white rounded-xl m-2  "
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click Me!
      </button>
    </div>
  );
};

export default State;
