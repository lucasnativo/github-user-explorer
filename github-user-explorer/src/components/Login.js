import { Redirect } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (isLoggedIn) {
    return (
      <Redirect to="/home"></Redirect>
    )
  }

  async function login () {
    setIsLoading(true)
    const data = await fetchUserData("lucasnativo")

    setIsLoading(false)
    console.log(data)
    setIsLoggedIn(true)
  }

  return (
    <>
      <label>User:
        <input disabled={isLoading}></input>
      </label>
      <button onClick={login} disabled={isLoading}>Enter</button>
    </>
  )
}

export default Login
