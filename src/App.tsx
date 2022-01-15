import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const title = "Letter Randomiser";

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
        <h2>{random(title).toUpperCase()}</h2>
        <label>Input</label>
        <textarea
          autoFocus
          className="App-input-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label>Output</label>
        <textarea
          className="App-output-text"
          value={random(text.toUpperCase())}
        />
      </header>
    </div>
  );
}

export default App;
