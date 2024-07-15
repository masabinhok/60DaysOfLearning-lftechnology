import Challanges from "./routes/Challanges";
import Home from "./routes/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theory from "./routes/Theory";
import Solutions from "./routes/Solutions";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/challanges" element={<Challanges />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
