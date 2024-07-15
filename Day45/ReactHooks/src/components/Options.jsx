import React from "react";

const Options = ({ hook }) => {
  return (
    <div className="px-5 py-4 border-2 w-full my-2 rounded-xl hover:bg-[#242424] cursor-pointer">
      {hook}
    </div>
  );
};

export default Options;
