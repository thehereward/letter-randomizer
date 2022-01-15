import React, { useState } from "react";
import "./App.css";

function App() {
  const title = "Letter Randomiser";
  const [text, setText] = useState("");
  const [randomised, setRandomised] = useState("");

  function random(inputString: string): string {
    var inputArray = Array.from(inputString);
    inputArray = inputArray.filter((char) => char.trim().length == 1);
    var result = shuffleArray(inputArray);
    return result.join("");
  }

  // See https://stackoverflow.com/a/12646864/1548379
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <div>{randomised}</div>
        <form onSubmit={onFormSubmit} className="App-body">
          <label>Input</label>
          <textarea
            autoFocus
            className="App-input-text"
            value={text}
            onKeyUp={onKeyUp}
            onChange={onInputChange}
          />
          <button type="submit">Randomise</button>
        </form>
      </header>
    </div>
  );

  function formatText(text: string) {
    return random(text.toUpperCase());
  }

  function setRandomisedText(text: string) {
    setRandomised(formatText(text));
  }

  function onKeyUp(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.currentTarget.value == "10") {
      setRandomisedText(text);
    }
  }

  function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    var newText = e.target.value.trim();
    setText(newText);
    setRandomisedText(newText);
  }

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRandomisedText(text);
  }
}

export default App;
