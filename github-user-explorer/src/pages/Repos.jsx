import { useContext } from "react"
import { Redirect, useHistory } from "react-router"

import { DataContext } from "../context/DataContext"

import TopBar from "../components/TopBar"
import NavBar from "../components/NavBar"
import Star from "../components/Star"
import Dot from "../components/Dot"

import styled from "styled-components"

// let a = {
//   name: "adsd",
//   description: null,
//   stargazers_count: 0,
// };

const StyledRepoList = styled.div``
const StyledCounterStar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
`
const StyledRepoItem = styled.div`
  margin-bottom: 0.5em;
  width: 100%;
  padding: 12px 25px 25px 0px;
  border-bottom: 0.5px solid hsl(0 0% 100% / 0.1);
`
const StyledTitle = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin: auto 0;
`

const StyledDescription = styled.p`
  margin-top: 0;
  margin-left: 25px;
  width: 100%;
  margin-bottom: 0.3em;
  line-height: 1.3em;
`

const StyledTitleContainer = styled.div`
  display: flex;
`

function ReposList({ repos }) {
  return (
    <StyledRepoList>
      {repos.map((repo) => (
        <StyledRepoItem key={repo.name}>
          <StyledTitleContainer>
            <Dot />
            <StyledTitle>{repo.name}</StyledTitle>
          </StyledTitleContainer>
          <StyledDescription>{repo.description}</StyledDescription>
          <StyledCounterStar>
            <Star />
            <span className={"star"}>{repo.stargazers_count}</span>
          </StyledCounterStar>
        </StyledRepoItem>
      ))}
    </StyledRepoList>
  )
}

function Repos() {
  const { data } = useContext(DataContext)
  const history = useHistory()

  if (!data) {
    return <Redirect to="/"></Redirect>
  }

  return (
    <>
      <TopBar
        title={`${data.repos.length} repositórios`}
        onBackClick={() => history.push("/home")}
      ></TopBar>
      <ReposList repos={data.repos} />
      <NavBar />
    </>
  )
}

export default Repos
