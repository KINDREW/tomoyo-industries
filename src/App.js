import "./App.css";
import Navbar from "./components/Navbar";
import Map from "./components/map";
import Home from "./containers/Home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Services from "./containers/services";
import Team from "./containers/team";
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
      <Team />
      <Map />
      <Contact />
    </div>
  );
}

export default App;
