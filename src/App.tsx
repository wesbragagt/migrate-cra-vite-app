import logo from './logo.svg';
import './App.css';

function App() {
  const appEnv = import.meta.env.VITE_APP_ENV;
  const description = import.meta.env.VITE_DESCRIPTION;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit this with Vite and experience speed
        </p>
        <div>
          <p style={{color: 'yellow'}}>
            {appEnv}
          </p>
          <p style={{color: 'yellow'}}>{description}</p>
        </div>
        <a
          className="btn bg-blue-500 px-4 py-2 rounded my-2"
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
