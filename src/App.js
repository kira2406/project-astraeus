import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, I'm <code>Kushwanth P</code>
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Penguin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Penguins
        </a>
      </header>
    </div>
  );
}

export default App;
