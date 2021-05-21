import { Link } from "react-router-dom"
import NavBar from "./NavBar"

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

export default Repos
