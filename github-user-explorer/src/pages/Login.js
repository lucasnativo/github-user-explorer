import { Redirect } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import fetchAllUserData from "../utils/fetchAllUserData";

function Login({ main }) {
  const { data, setData } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("aniltonveiga");

  if (data) {
    return <Redirect to="/home"></Redirect>;
  }

  async function login(username) {
    setIsLoading(true);
    console.log(username);

    const response = await fetchAllUserData(username);

    setData(response);
  }

  return (
    <>
      <label>
        User:
        <input
          disabled={isLoading}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <button onClick={() => login(username)} disabled={isLoading}>
        {isLoading ? "Carregando" : "Entrar"}
      </button>
    </>
  );
}

export default Login;
