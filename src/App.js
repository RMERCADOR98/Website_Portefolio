import React from "react";
//Components
import About from "./Components/AboutMe/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Home from "./Components/Home/Home";
import Project1 from "./Components/Projects/ProjectList/Project1";
//Styling
import "./App.css";
import { AnimatePresence } from "framer-motion";
//Routing
import { Route, Switch, useLocation } from "react-router-dom";

import NavbarBlack from "./Components/NavbarBlack";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <NavbarBlack location={location} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/project1">
            <Project1 />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
