import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Buyflow from "./buyflow/Buyflow";
import { WELCOME_NOTE, GET_STARTED, ProductIds } from "./constants/constants";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/">
            <p>{WELCOME_NOTE}</p>
            <Link to="/buy/insurance_dev">{GET_STARTED}</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
