import Login from "./Components/Login";
import React from "react";
import Profile from "./Components/Profile";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div>
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Route path="/login" element={<Login />} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
