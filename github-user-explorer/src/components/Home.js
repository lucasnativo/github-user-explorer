import NavBar from "./NavBar";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Redirect } from "react-router";

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

function Home() {
  const { data, setData } = useContext(DataContext);

  if (!data) {
    return (
      <Redirect to="/"></Redirect>
    )
  }

  return (
    <>
      <h2>
        {data.user.login}
      </h2>
      <div>{data.user.name}</div>
      <div>{data.user.location}</div>
      <div>{data.user.email}</div>
      <div>{data.user.bio}</div>
      <div>{data.user.public_repos}</div>
      <div>{data.user.followers}</div>
      <div>{data.user.following}</div>
      
      <button onClick={() => setData(null)}>Sair</button>
      <NavBar />
    </>
  );
}

export default Home;
