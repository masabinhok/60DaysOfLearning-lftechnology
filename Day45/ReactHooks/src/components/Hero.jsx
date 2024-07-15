import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-[1320px] flex  flex-col items-center justify-center min-h-screen w-full text-white p-20">
      <h1 className="text-[80px] p-10 text-center">LEARN REACT HOOKS</h1>
      <Link to="/challanges">
        <button className="text-[20px] border-2 bg-slate-800 text-white">
          GET STARTED
        </button>
      </Link>
    </div>
  );
};

export default Hero;
