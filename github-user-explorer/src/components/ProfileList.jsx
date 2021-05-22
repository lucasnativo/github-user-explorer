import ProfileListItem from "./ProfileListItem";

function ProfileList({ users, onClick }) {
  return (
    <ul>
      {users.map((user) => (
        <ProfileListItem key={user.login} user={user} onClick={onClick} />
      ))}
    </ul>
  );
}

export default ProfileList;
