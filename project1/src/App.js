import logo from "./logo.svg";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import FooterMessage from "./Components/FooterMessage";
import Welcome from "./Components/Welcome";
import EndMessage from "./Components/EndMessage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <EndMessage
          title="Rasmus"
          subTitle="Hi there again!"
          color="green"
          fontSize="3em"
        />

        <Welcome title="Hi there" />

        <FooterMessage footer="Hello" />

        <WelcomeMessage title1="Peter Larsen" title2="Søren Something" />
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
