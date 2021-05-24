import { NavLink } from "react-router-dom"

import Friends from "./icons/Friends"
import GitHubLogo from "./icons/GitHubLogo"
import Home from "./icons/Home"
import styled from "styled-components"

const NavBarStyled = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color: white;
  border-top-left-radius: 0.6em;
  border-top-right-radius: 0.6em;
  display: flex;
  margin-bottom: -2px;

  .selected {
    color: black;
  }
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: gray;
  text-decoration: none;
  text-shadow: 3px;
  text-align: center;
  font-weight: bold;
  svg {
    margin-bottom: 4px;
  }
`

function NavBar() {
  return (
    <NavBarStyled>
      <StyledNavLink to="/home" activeClassName="selected">
        <Home />
        Home
      </StyledNavLink>
      <StyledNavLink to="/repos" activeClassName="selected">
        <GitHubLogo />
        Repos
      </StyledNavLink>
      <StyledNavLink to="/followers" activeClassName="selected">
        <Friends />
        Seguidores
      </StyledNavLink>
      <StyledNavLink to="/following" activeClassName="selected">
        <Friends />
        Seguindo
      </StyledNavLink>
    </NavBarStyled>
  )
}

export default NavBar
