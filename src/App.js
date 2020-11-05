import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/AboutMe/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Home from "./Components/Home/Home";
import "./App.css";

import Project1 from "./Components/Projects/ProjectList/Project1";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/about" component={About}>
            <About />
          </Route>
          <Route exact path="/projects" component={Projects}>
            <Projects />
          </Route>
          <Route exact path="/projects/project1" component={Project1}>
            <Project1 />
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
