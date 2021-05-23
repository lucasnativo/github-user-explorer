import ProfileListItem from "./ProfileListItem";
import styled from "styled-components";

const StyledProfileList = styled.ul`
  padding: 0;
  margin-top: 1em;
`;

function ProfileList({ users, onClick }) {
  return (
    <StyledProfileList>
      {users.map((user) => (
        <ProfileListItem key={user.login} user={user} onClick={onClick} />
      ))}
    </StyledProfileList>
  );
}

export default ProfileList;
