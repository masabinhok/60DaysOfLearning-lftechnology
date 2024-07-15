import Options from "./Options";
import { Link } from "react-router-dom";

const hooks = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Challanges",
    path: "challanges",
  },
  {
    name: "Theory",
    path: "theory",
  },
  {
    name: "Solutions",
    path: "solutions",
  },
];

const Sidebar = () => {
  return (
    <aside className="box-border flex flex-col w-[300px] bg-black text-white p-10 h-full fixed  top-0 left-0 bottom-0 ">
      <div className="flex flex-col relative">
        <h1>LearnHooks</h1>
        <p className="text-[16px] mt-[-10px] text-slate-100 text-center">
          easier than ever!
        </p>
      </div>
      <div className="flex flex-col mt-10">
        {hooks.map((hook, idx) => (
          <div key={idx}>
            {" "}
            <Link to={`/${hook.path}`}>
              <Options hook={hook.name} />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
