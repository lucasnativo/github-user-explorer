import styled from "styled-components"
import Avatar from "./Avatar"
import Dot from "./Dot"
import ArrowRight from "./icons/ArrowRight"

const StyledListItem = styled.div`
  display: flex;
  height: 6em;
  align-items: center;
  border-bottom: 1px solid hsl(0 0% 100% / 0.1);

  .login {
    flex: 1;
    font-weight: bold;
  }

  .avatar {
    width: 64px;
    margin-right: 25px;
  }
`
function ProfileListItem({ user, onClick }) {
  return (
    <StyledListItem onClick={() => onClick(user.login)}>
      <Dot className="dot" />
      <Avatar
        className="avatar"
        src={user.avatar_url}
        alt={`avatar de ${user.login}`}
      />
      <div className="login">{`#${user.login}`}</div>
      <ArrowRight className="arrow" />
    </StyledListItem>
  )
}

export default ProfileListItem
