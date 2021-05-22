import { NavLink } from "react-router-dom"

function NavBar () {
  return (
    <nav>
      <NavLink to="/home" activeClassName="selected">
        <button>Home</button>
      </NavLink>
      <NavLink to="/following" activeClassName="selected">
        <button>Following</button>
      </NavLink>
      <NavLink to="/followers" activeClassName="selected">
        <button>Followers</button>
      </NavLink>
      <NavLink to="/repos" activeClassName="selected">
        <button>Repos</button>
      </NavLink>
    </nav>
  )
}

export default NavBar
