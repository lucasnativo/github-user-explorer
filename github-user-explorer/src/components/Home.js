import { Link } from "react-router-dom"
import NavBar from "./NavBar"

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

export default Home
