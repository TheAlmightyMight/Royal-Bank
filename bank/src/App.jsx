//Router
import { Routes, Route, useLocation } from "react-router-dom";

//Pages
import RegStep1 from "./pages/registration/regStep1";
import RegStep2 from "./pages/registration/regStep2";
import RegStep3 from "./pages/registration/regStep3";
import Home from "./pages/home/home";

//Animation lib
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div className="App">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/registration/step1" element={<RegStep1 />} />
          <Route path="/registration/step2" element={<RegStep2 />} />
          <Route path="/registration/step3" element={<RegStep3 />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
