import { useState, useMemo } from "react";

const ExpensiveComponent = ({ number }) => {
  const computeExpensiveValue = (num) => {
    console.log("Computing...");
    return num * 2;
  };

  const computedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return <p>Computed value: {computedValue}</p>;
};

const Memo = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="max-w-[1320px] flex flex-col items-center justify-center min-h-screen">
      <h1>useMemo HOOK</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value, 10))}
      />
      <ExpensiveComponent number={number} />
    </div>
  );
};

export default Memo;
