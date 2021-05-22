import NavBar from "../components/NavBar";
import { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import fetchUserData from "../utils/fetchUserData";
import Profile from "../components/Profile";

// let a = {
//   login: "brunomb",
//   avatar_url: "https://avatars.githubusercontent.com/u/5151786?v=4",
// };

function Following() {
  const { data, setData } = useContext(DataContext);
  const [selectedUser, setSelectedUser] = useState(null);

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

  // if (selectedUser) {
  //   Voltar = (
  //     <a href="/following" onClick={() => setSelectedUser(null)}>
  //       Voltar
  //     </a>
  //   );
  // }

  return (
    <>
      <div>{Voltar}</div>
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
