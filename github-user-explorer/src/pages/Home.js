import NavBar from "../components/NavBar";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Redirect } from "react-router";
import Profile from "../components/Profile"

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
      <Profile user={data.user} />
      <button onClick={() => setData(null)}>Sair</button>
      <NavBar />
    </>
  );
}

export default Home;
