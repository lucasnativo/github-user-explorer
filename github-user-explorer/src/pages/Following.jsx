import NavBar from "../components/NavBar";
import { useContext, useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import fetchUserData from "../utils/fetchUserData";
import fetchAllUserData from "../utils/fetchAllUserData";
import Profile from "../components/Profile";
import styled from "styled-components";

// let a = {
//   login: "brunomb",
//   avatar_url: "https://avatars.githubusercontent.com/u/5151786?v=4",
// };

const Avatar = styled.img`
  width: 64px;
  border-radius: 50%;
`;

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

  function goBack() {
    if (selectedUser) {
      setSelectedUser(null);
    } else {
      history.push("/home");
    }
  }

  let Entrar = (
    <button onClick={() => switchUser(selectedUser.login)}>Entrar</button>
  );

  async function switchUser(login) {
    const user = await fetchAllUserData(login);
    setData(user);
    history.push("/home");
  }

  return (
    <>
      <TopBar
        title={`${data.following.length} Seguindo`}
        onBackClick={goBack}
        onSaveClick={selectedUser ? () => switchUser(selectedUser.login) : null}
      />
      {selectedUser ? (
        <Profile user={selectedUser} />
      ) : (
        <ProfileList users={data.following} onClick={viewUser} />
      )}
      <NavBar />
    </>
  );
}

function ProfileList({ users, onClick }) {
  return (
    <ul>
      {users.map((user) => (
        <ProfileListItem key={user.login} user={user} onClick={onClick} />
      ))}
    </ul>
  );
}

const ListItem = styled.li``;

function ProfileListItem({ user, onClick }) {
  return (
    <ListItem onClick={() => onClick(user.login)}>
      {user.login}
      <div>
        <Avatar src={user.avatar_url} alt={`avatar de ${user.login}`} />
      </div>
    </ListItem>
  );
}

function TopBar({ title, onBackClick, onSaveClick }) {
  return (
    <div>
      <button onClick={onBackClick}>Voltar</button>
      <h1>{title}</h1>
      {onSaveClick && <button onClick={onSaveClick}>Salvar</button>}
    </div>
  );
}

export default Following;
