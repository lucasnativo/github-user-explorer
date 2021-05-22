import NavBar from "../components/NavBar";
import { useContext } from "react";
import { Redirect } from "react-router";
import { DataContext } from "../context/DataContext";

// let a = {
//   login: "brunomb",
//   avatar_url: "https://avatars.githubusercontent.com/u/5151786?v=4",
// };

function Followers() {
  const { data, setData } = useContext(DataContext);

  if (!data) {
    return (
      <Redirect to="/"></Redirect>
    )
  }

  return (
    <>
      <ul>
        {data.followers.map((user) => (
          <li>{user.login}</li>
        ))}
      </ul>
      <NavBar />
    </>
  );
}

export default Followers;