import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>home</h1>
      <button onClick={navigate("/registration/step1")}>registration</button>
    </div>
  );
}

export default Home;
