import NavBar from "./NavBar"
import { useContext } from "react";
import { Redirect } from "react-router";
import { DataContext } from "../context/DataContext";

// let a = {
//   name: "adsd",
//   description: null,
//   stargazers_count: 0,
// };

function Repos() {
  const { data, setData } = useContext(DataContext);

  if (!data) {
    return (
      <Redirect to="/"></Redirect>
    )
  }

  return (
    <>
      <ul>
        {data.repos.map((repo) => (
          <li>{repo.name}</li>
        ))}
      </ul>
      <NavBar />
    </>
  );
}

export default Repos
