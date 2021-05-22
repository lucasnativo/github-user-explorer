import { Redirect } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import { DataContext } from "../context/DataContext"

async function fetchUserData(user) {
  const userUrl = `https://api.github.com/users/${user}` 
  const userResponse = await axios.get(userUrl)

  const followingUrl = `https://api.github.com/users/${user}/following`
  const followingResponse = await axios.get(followingUrl)

  const followersUrl = `https://api.github.com/users/${user}/followers`
  const followersResponse = await axios.get(followersUrl)

  const reposUrl = `https://api.github.com/users/${user}/repos`
  const reposResponse = await axios.get(reposUrl)
  
  return {
    user: userResponse.data,
    repos: reposResponse.data,
    following: followingResponse.data,
    followers: followersResponse.data,
  }
}

function Login({main}) {
  const { data, setData } = useContext(DataContext)
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")

  if (data) {
    return (
      <Redirect to="/home"></Redirect>
    )
  }

  async function login (username) {
    setIsLoading(true)
    console.log(username)

    const response = await fetchUserData(username)

    setData(response)
  }

  return (
    <>
      <label>User:
        <input disabled={isLoading} value={username} onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <button onClick={() => login(username)} disabled={isLoading}>{isLoading ? "Carregando" : "Entrar"}</button>
    </>
  )
}

export default Login
