import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./LoginButton";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton></LoginButton>
        <Logout></Logout>
        {user ? JSON.stringify(user, null, 2) : null}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sakib's website
        </a>
      </header>
    </div>
  );
}

export default App;
