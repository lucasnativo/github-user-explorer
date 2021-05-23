import { useContext } from "react";
import { Redirect, useHistory } from "react-router";

import { DataContext } from "../context/DataContext";

import TopBar from "../components/TopBar";
import ListItem from "../components/ListItem";
import NavBar from "../components/NavBar";

// let a = {
//   name: "adsd",
//   description: null,
//   stargazers_count: 0,
// };

function Repos() {
  const { data } = useContext(DataContext);
  const history = useHistory();

  if (!data) {
    return <Redirect to="/"></Redirect>;
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
