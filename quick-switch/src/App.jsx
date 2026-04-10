import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lightsOn, setLightsOn] = useState(false);
  // add class to document body and use stylesheet
  // useEffect(() => {
  //   document.body.className = lightsOn ? "lightMode" : "darkMode";
  // }, [lightsOn]);
  return (
    <>
      {/* full screen div method  */}
      <div
        style={{
          backgroundColor: lightsOn ? "white" : "black",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 style={{ color: lightsOn ? "black" : "white" }}>
          {lightsOn ? "Light Mode!" : "dark mode ¡"}
        </h1>
        <button onClick={() => setLightsOn(!lightsOn)}>
          {lightsOn ? "On" : "Off"}
        </button>
      </div>
    </>
  );
}

export default App;
