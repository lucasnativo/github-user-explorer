import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Home from "./components/Home"
import Following from "./components/Following"
import Followers from "./components/Followers"
import Repos from "./components/Repos"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/followers">
          <Followers />
        </Route>
        <Route path="/following">
          <Following />
        </Route>
        <Route path="/repos">
          <Repos />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
