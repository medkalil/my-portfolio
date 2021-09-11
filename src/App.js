import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Projetcs from "./Projetcs";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <div className="m-0">
      <Router>
        <Navbar />
        <Home />
        <About />
        <Projetcs />
        <Contact />
        {/*         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projetcs" component={Projetcs} />
          <Route path="/Contact" component={Contact} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
