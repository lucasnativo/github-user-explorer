import { Link } from "react-router-dom"
import NavBar from "./NavBar"

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

export default Followers
