import { useContext } from "react";
import { Redirect } from "react-router";

import NavBar from "../components/NavBar";
import ListItem from "../components/ListItem";

import { DataContext } from "../context/DataContext";

// let a = {
//   name: "adsd",
//   description: null,
//   stargazers_count: 0,
// };

function Repos() {
  const { data } = useContext(DataContext);

  if (!data) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <>
      <ReposList repos={data.repos} />
      <NavBar />
    </>
  );
}

function ReposList({ repos }) {
  return (
    <ul>
      {repos.map((repo) => (
        <ListItem name={repo.name} key={repo.name}>
          {repo.name}
        </ListItem>
      ))}
    </ul>
  );
}

export default Repos;
