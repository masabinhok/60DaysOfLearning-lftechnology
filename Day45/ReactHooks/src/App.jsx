import React from "react";
import State from "./hooks/State";
import Effect from "./hooks/Effect";

const App = () => {
  return (
    <main className="flex items-center justify-center flex-col w-full">
      <State />
      <Effect />
    </main>
  );
};

export default App;
