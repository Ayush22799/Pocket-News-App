import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <News key="c1" pageSize={8} country="in" category="general" />
            </Route>
            <Route path="/business" exact>
              <News key="c2" pageSize={8} country="in" category="business" />
            </Route>
            <Route path="/entertainment" exact>
              <News key="c3" pageSize={8} country="in" category="" />
            </Route>
            <Route path="/general" exact>
              <News key="c4" pageSize={8} country="in" category="general" />
            </Route>
            <Route path="/health" exact>
              <News key="c5" pageSize={8} country="in" category="health" />
            </Route>
            <Route path="/science" exact>
              <News key="c6" pageSize={8} country="in" category="science" />
            </Route>
            <Route path="/sports" exact>
              <News key="c7" pageSize={8} country="in" category="sports" />
            </Route>
            <Route path="/technology" exact>
              <News key="c8" pageSize={8} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
