import { useRef } from "react";

const Ref = () => {
  const inputRef = useRef();

  const foucsInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="max-w-[1320px] flex items-center justify-center flex-col min-h-screen">
      <h1>useRef HOOK</h1>
      <input
        
        ref={inputRef}
        type="text"
      />
      <button onClick={foucsInput}>Focus Input</button>
    </div>
  );
};

export default Ref;
