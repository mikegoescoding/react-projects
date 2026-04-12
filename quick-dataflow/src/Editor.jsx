import { useState } from "react";

export default function Editor({ onNameChange }) {
  const [text, setText] = useState("");

  // your submit logic here
  function handleSubmit(e) {
    e.preventDefault();
    onNameChange(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        name="inputText"
        placeholder="type something..."
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
