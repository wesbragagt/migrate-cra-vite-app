import logo from './logo.svg';
import './App.css';

function App() {
  const appEnv = import.meta.env.VITE_APP_ENV;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit this with Vite and experience speed
        </p>
        <p>
          {appEnv}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
