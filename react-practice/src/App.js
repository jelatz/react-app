import logo from "./logo.svg";
import "./App.css";
import MainButton from "../src/GlobalComponents/globalComponents";
import PrimaryLink from "../src/GlobalComponents/globalComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MainButton />
      </header>
    </div>
  );
}

export default App;

export const data = () => {
  return;
};
