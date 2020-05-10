import React from 'react';
import './App.css';
import { TestButton } from "../src/Components/Button/TestButton";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tutorial for Unit Testing in React.
        </p>
        <TestButton label={"Click Me!"}/>
      </header>
    </div>
  );
}

export default App;
