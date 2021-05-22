import ListItem from "./ListItem";
import Avatar from "./Avatar";

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

export default ProfileListItem;
