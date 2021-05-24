import { useContext } from "react"
import { Redirect } from "react-router"

import { DataContext } from "../context/DataContext"

import NavBar from "../components/NavBar"
import Profile from "../components/Profile"

import styled from "styled-components"

const HomeStyle = styled.div`
  border: 0;
  height: 812px;
  width: 100%;
  .topbar {
    display: flex;
    background-color: #1f1f1f;
    justify-content: space-between;
    height: 6em;
  }
  .img {
    width: 100px;
    border-radius: 50%;
    border: 4px solid white;
  }
`

function Home() {
  const { data, setData } = useContext(DataContext)

  if (!data) {
    return <Redirect to="/"></Redirect>
  }

  return (
    <HomeStyle>
      <div className="topbar">
        <p>{`#${data.user.login}`}</p>
        <button onClick={() => setData(null)}>Sair</button>
      </div>
      <Profile user={data.user} enableNavigation />
      <NavBar />
    </HomeStyle>
  )
}

export default Home
