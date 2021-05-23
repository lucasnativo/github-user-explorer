import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavBarStyled = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color: white;
  border-top-left-radius: 0.6em;
  border-top-right-radius: 0.6em;
  display: flex;
  a {
    width: 100%;
    color: gray;
    text-decoration: none;
    text-shadow: 3px;
    text-align: center;
    font-weight: bold;
    padding-top: 2em;
  }
  .selected {
    color: black;
  }
`;

function NavBar() {
  return (
    <NavBarStyled>
      <NavLink to="/home" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/repos" activeClassName="selected">
        Repos
      </NavLink>
      <NavLink to="/followers" activeClassName="selected">
        Seguidores
      </NavLink>
      <NavLink to="/following" activeClassName="selected">
        Seguindo
      </NavLink>
    </NavBarStyled>
  );
}

export default NavBar;
