import ListItem from "./ListItem";
import Avatar from "./Avatar";
import styled from "styled-components";

const StyledListItem = styled(ListItem)`
  display: flex;
  position: relative;
  align-items: baseline;
  height: 6rem;
  border-bottom: 0.5px solid hsl(0 0% 100% / 0.1);
  img {
    position: absolute;
    align-self: center;
    top: 16%;
    left: 1.5em;
    border: 4px solid white;
  }
  .text {
    margin-left: 33%;
    align-self: center;
    font-weight: bold;
  }
  .dot {
    position: absolute;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    left: 0;
    top: 25%;
    width: 0.55em;
    height: 2.4em;
    background-color: #ffcf3c;
  }
  .arrow {
    position: absolute;
    right: 0;
    top: 40%;
    margin-right: 2em;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid white;
  }
`;

function ProfileListItem({ user, onClick }) {
  return (
    <StyledListItem onClick={() => onClick(user.login)}>
      <div className={"dot"}></div>
      <div>
        <Avatar src={user.avatar_url} alt={`avatar de ${user.login}`} />
      </div>
      <div className="text">{`#${user.login}`}</div>
      <div className={"arrow"}></div>
    </StyledListItem>
  );
}

export default ProfileListItem;
