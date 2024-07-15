import State from "../hooks/State";
import Effect from "../hooks/Effect";
import Reducer from "../hooks/Reducer";
import Ref from "../hooks/Ref";
import Memo from "../hooks/Memo";
import Sidebar from "../components/Sidebar";

import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="w-full flex ">
      <div className="w-[300px] ">
        <Sidebar />
      </div>
      <div className="w-full  flex  flex-col items-center justify-center bg-slate-800">
        <State />
        <Effect />
        <Ref />
        <Reducer />
        <Memo />
      </div>
    </div>
  );
};

export default Home;
