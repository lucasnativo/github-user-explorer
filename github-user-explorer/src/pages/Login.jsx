import { Redirect } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import fetchAllUserData from "../utils/fetchAllUserData";
import "../App.css";

function Login({ main }) {
  const { data, setData } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  if (data) {
    return <Redirect to="/home"></Redirect>;
  }

  async function login(username) {
    if (username === "") {
      return setError("Campo Obrigatório");
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetchAllUserData(username);
      setData(response);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Usuário não encontrado");
      } else {
        setError("Error em comunicar com o GitHub");
      }
      setIsLoading(false);
    }
  }

  return (
    <>
      <input
        placeholder="Usuário"
        disabled={isLoading}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      {error && <div>{error}</div>}
      <button onClick={() => login(username)} disabled={isLoading}>
        {isLoading ? "Carregando" : "Entrar"}
      </button>
    </>
  );
}

export default Login;
