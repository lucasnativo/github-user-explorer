import { Redirect } from "react-router-dom"
import { useContext, useState } from "react"

import { DataContext } from "../context/DataContext"
import fetchAllUserData from "../utils/fetchAllUserData"

import styled from "styled-components"
import GitHubLogo from "../components/GitHubLogo"
import ArrowRight from "../components/ArrowRight"

const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 812px;
  width: 100%;
`

const InputStyle = styled.input`
  width: 90%;
  border-radius: 0.6rem;
  height: 3rem;
  padding: 5%;
  font-size: 1.3em;
  margin-bottom: 3%;
`

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  border-radius: 0.6rem;
  height: 3rem;
  background-color: #ffcf3c;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.3em;
`

const ErrorStyle = styled.div`
  color: red;
  font-size: 0.8em;
  width: 90%;
  padding-left: 5%;
  margin-bottom: 3%;
`

const StyledGitHubLogo = styled(GitHubLogo)`
  color: #ffcf3c;
  width: 100px;
  margin-top: 200px;
  margin-bottom: 45px;
`
const StyledArrowRight = styled(ArrowRight)`
  margin-left: 8px;
  width: 13px;
`

function Login({ main }) {
  const { data, setData } = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [error, setError] = useState(null)

  if (data) {
    return <Redirect to="/home"></Redirect>
  }

  async function login(username) {
    if (username === "") {
      return setError("Campo Obrigatório")
    }

    setError(null)
    setIsLoading(true)

    try {
      const response = await fetchAllUserData(username)
      setData(response)
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Usuário não encontrado")
      } else {
        setError("Error em comunicar com o GitHub")
      }
      setIsLoading(false)
    }
  }

  function onChangeUsername(e) {
    if (username !== "") {
      setError(null)
    }
    setUsername(e.target.value)
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      return login(username)
    }
  }

  return (
    <LoginStyle>
      <StyledGitHubLogo />
      <InputStyle
        placeholder="Usuário"
        disabled={isLoading}
        value={username}
        onChange={(e) => onChangeUsername(e)}
        onKeyPress={handleEnter}
      ></InputStyle>
      {error && <ErrorStyle>{error}</ErrorStyle>}
      <ButtonStyle onClick={() => login(username)} disabled={isLoading}>
        {isLoading ? "Carregando" : "Entrar"}
        <StyledArrowRight />
      </ButtonStyle>
    </LoginStyle>
  )
}

export default Login
