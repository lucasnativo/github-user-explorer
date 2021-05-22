import NavBar from "../components/NavBar";
import { useContext, useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import fetchUserData from "../utils/fetchUserData";
import fetchAllUserData from "../utils/fetchAllUserData";
import Profile from "../components/Profile";

// let a = {
//   login: "brunomb",
//   avatar_url: "https://avatars.githubusercontent.com/u/5151786?v=4",
// };

function Following() {
  const { data, setData } = useContext(DataContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const history = useHistory();

  if (!data) {
    return <Redirect to="/"></Redirect>;
  }

  async function viewUser(login) {
    const user = await fetchUserData(login);
    setSelectedUser(user);
  }

  let Voltar = (
    <Link to="/home">
      <button>Voltar</button>
    </Link>
  );

  if (selectedUser) {
    Voltar = <button onClick={() => setSelectedUser(null)}>Voltar</button>;
  }

  let Entrar = (
    <button onClick={() => switchUser(selectedUser.login)}>Entrar</button>
  );

  async function switchUser(login) {
    const user = await fetchAllUserData(login);
    setData(user);
    history.push("/home");
    console.log(user);
  }

  return (
    <>
      <div>
        {Voltar}
        {selectedUser && Entrar}
      </div>
      {selectedUser ? (
        <Profile user={selectedUser} />
      ) : (
        <ul>
          {data.following.map((user) => (
            <li key={user.login} onClick={() => viewUser(user.login)}>
              {user.login}
            </li>
          ))}
        </ul>
      )}
      <NavBar />
    </>
  );
}

export default Following;
