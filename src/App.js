import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import About from "./containers/about";
import Services from "./containers/services";
import Why from "./containers/why";
import { Link as ScrollLink, Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Home id="home" />
      </Element>
      <Element name="about">
        <About id="about" />
      </Element>
      <Element name="services">
        <Services id="services" />
      </Element>
      <Why />
    </div>
  );
}

export default App;
