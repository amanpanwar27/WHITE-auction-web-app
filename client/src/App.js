import Login from "./Components/Login";
import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
