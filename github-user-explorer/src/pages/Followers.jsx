import { useContext, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import TopBar from "../components/TopBar";
import ProfileList from "../components/ProfileList";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

import { DataContext } from "../context/DataContext";
import fetchUserData from "../utils/fetchUserData";
import fetchAllUserData from "../utils/fetchAllUserData";

function Followers() {
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

  async function switchUser(login) {
    const user = await fetchAllUserData(login);
    setData(user);
    history.push("/home");
  }

  return (
    <>
      <TopBar
        title={
          selectedUser
            ? `#${selectedUser.login}`
            : `${data.followers.length} seguidores`
        }
        onBackClick={goBack}
        onSaveClick={selectedUser ? () => switchUser(selectedUser.login) : null}
      />
      {selectedUser ? (
        <Profile user={selectedUser} />
      ) : (
        <ProfileList users={data.followers} onClick={viewUser} />
      )}
      <NavBar />
    </>
  );
}

export default Followers;
