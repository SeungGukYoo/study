import './App.css';
import Home from './Home';
import logo from './logo.svg';

function App() {
  let text = 'hello JO';
  let b = 'ABC';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{text}!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React111
          <Home />
        </a>
      </header>
    </div>
  );
}

export default App;
