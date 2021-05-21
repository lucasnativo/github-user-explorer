import { Link } from "react-router-dom"

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

export default Login
