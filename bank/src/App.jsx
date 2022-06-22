import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import RegStep1 from "./pages/registration/regStep1";
import RegStep2 from "./pages/registration/regStep2";
import RegStep3 from "./pages/registration/regStep3";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration/step1" element={<RegStep1 />} />
          <Route path="/registration/step2" element={<RegStep2 />} />
          <Route path="/registration/step3" element={<RegStep3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
