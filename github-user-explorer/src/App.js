import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

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

function Login() {
  return (
    <>
      <label>User:
        <input></input>
      </label>
      <Link to="/home">
        <button>Enter</button>
      </Link>
    </>
  )
}

function Home() {
  return (
    <>
      <h2>Name</h2>
      <Link to="/">
        <button>Sair</button>
      </Link>
      <NavBar />
    </>
  );
}

function Followers() {
  return (
    <>
      <Link to="/home">
        <button>Voltar</button>
      </Link>
      <NavBar />
    </>
  );
}

function Following() {
  return (
    <>
      <Link to="/home">
        <button>Voltar</button>
      </Link>
      <NavBar />
    </>
  );
}

function Repos() {
  return (
    <>
      <Link to="/home">
        <button>Voltar</button>
      </Link>
      <NavBar />
    </>
  );
}

function NavBar() {
  return (
    <nav>
      <NavLink to="/home" activeClassName="selected">
        <button>Home</button>
      </NavLink>
      <NavLink to="/followers" activeClassName="selected">
        <button>Seguidores</button>
      </NavLink>
      <NavLink to="/following" activeClassName="selected">
        <button>Seguindo</button>
      </NavLink>
      <NavLink to="/repos" activeClassName="selected">
        <button>Repos</button>
      </NavLink>
    </nav>
  );
}
