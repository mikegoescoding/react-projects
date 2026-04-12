import { useState } from "react";
import Editor from "./Editor";
import Display from "./Display";
import NameTag from "./NameTag";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  return (
    <>
      <Editor onNameChange={setDisplay} />
      <h1>{display ? display : "...nothing yet"}</h1>
      <Display display={display} />
      <Display display={display} />
      <NameTag display={display} />
    </>
  );
}

export default App;
