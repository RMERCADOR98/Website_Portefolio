import React from "react";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/AboutMe/About";
import "./App.css";

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;