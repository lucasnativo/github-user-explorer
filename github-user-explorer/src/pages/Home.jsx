import { useContext } from "react"
import { Redirect } from "react-router"
import styled from "styled-components"

import { DataContext } from "../context/DataContext"
import NavBar from "../components/NavBar"
import Profile from "../components/Profile"
import SignOut from "../components/icons/SignOut"

const HomeStyle = styled.div``

const StyledTopBarProfile = styled.div`
  display: flex;
  background-color: #1f1f1f;
  justify-content: space-between;
  height: 50px;
  padding-top: 10px;
`
const StyledSignOutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  svg {
    margin-left: 10px;
  }
`
const StyledLogin = styled.p`
  margin-left: 20px;
  font-weight: bold;
`

function Home() {
  const { data, setData } = useContext(DataContext)

  if (!data) {
    return <Redirect to="/"></Redirect>
  }

  return (
    <HomeStyle>
      <StyledTopBarProfile>
        <StyledLogin>{`#${data.user.login}`}</StyledLogin>
        <StyledSignOutContainer>
          Sair
          <SignOut onClick={() => setData(null)} />
        </StyledSignOutContainer>
      </StyledTopBarProfile>
      <Profile user={data.user} enableNavigation />
      <NavBar />
    </HomeStyle>
  )
}

export default Home
