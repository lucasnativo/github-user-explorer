import { useContext } from "react";
import { Redirect } from "react-router";

import { DataContext } from "../context/DataContext";

import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

import styled from "styled-components";

// let a = {
//   login: "lucasnativo",
//   avatar_url: "https://avatars.githubusercontent.com/u/39594922?v=4",
//   name: "Lucas Sampaio",
//   location: null,
//   email: null,
//   bio: null,
//   public_repos: 19,
//   followers: 0,
//   following: 0,
// };

const HomeStyle = styled.div`
  border: 0;
  height: 812px;
  width: 100%;
`;

function Home() {
  const { data, setData } = useContext(DataContext);

  if (!data) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <HomeStyle>
      <Profile user={data.user} />
      <button onClick={() => setData(null)}>Sair</button>
      <NavBar />
    </HomeStyle>
  );
}

export default Home;
