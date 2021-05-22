import NavBar from "../components/NavBar";
import { useContext } from "react";
import { Redirect } from "react-router";
import { DataContext } from "../context/DataContext";
import userEvent from "@testing-library/user-event";

// let a = {
//   name: "adsd",
//   description: null,
//   stargazers_count: 0,
// };

function Repos() {
  const { data, setData } = useContext(DataContext);

  if (!data) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <>
      <ul>
        {data.repos.map((repo) => (
          <Repo name={repo.name} key={repo.name} />
        ))}
      </ul>
      <NavBar />
    </>
  );
}

function Repo({ name }) {
  return <li>{name}</li>;
}

export default Repos;
