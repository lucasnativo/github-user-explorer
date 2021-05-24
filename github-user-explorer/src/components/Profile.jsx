import Avatar from "./Avatar"

import Dot from "./Dot"
import styled from "styled-components"

import { useHistory } from "react-router-dom"

const StyledAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 16px;
  margin-bottom: 50px;
  background: linear-gradient(
    to bottom,
    #1f1f1f 0%,
    #1f1f1f 50%,
    #292929 50%,
    #292928 100%
  );
`

const StyledBio = styled.div`
  display: flex;
  align-items: center;
`
const StyledBioLabel = styled.h2`
  text-transform: uppercase;
  margin-bottom: 12px;
`
const StyledBioContent = styled.p`
  font-size: 18px;
  margin: 0 25px;
`
const StyledAvatar = styled(Avatar)`
  width: 120px;
`
const StyledInfo = styled.div`
  margin-bottom: 30px;
`
const StyledNameContainer = styled.div`
  display: flex;
  align-items: center;
`
const StyledName = styled.h2`
  text-transform: uppercase;
  margin: 0;
`
const StyledEmailLocation = styled.div`
  margin-left: 25px;
`
const StyledCounters = styled.div`
  display: flex;
  background-color: #383838;
  justify-content: space-between;
  padding: 18px 24px;
  margin-bottom: 24px;
`
const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledNumber = styled.div`
  font-weight: bold;
  font-size: 2.5em;
`

function Profile({ user, enableNavigation }) {
  const history = useHistory()

  function navigate(url) {
    if (enableNavigation) {
      history.push(url)
    }
  }

  return (
    <div>
      <StyledAvatarContainer>
        <StyledAvatar src={user.avatar_url} alt={`avatar de ${user.login}`} />
      </StyledAvatarContainer>
      <StyledInfo>
        <StyledNameContainer>
          <Dot />
          <StyledName>{user.name || user.login}</StyledName>
        </StyledNameContainer>
        {(user.email || user.location) && (
          <>
            <StyledEmailLocation>
              <div>{user.email}</div>
              <div>{user.location}</div>
            </StyledEmailLocation>
          </>
        )}
      </StyledInfo>
      <StyledCounters>
        <StyledCounter onClick={() => navigate("/followers")}>
          <StyledNumber>{user.followers}</StyledNumber>
          <div>Seguidores</div>
        </StyledCounter>
        <StyledCounter onClick={() => navigate("/following")}>
          <StyledNumber>{user.following}</StyledNumber>
          <div>Seguindo</div>
        </StyledCounter>
        <StyledCounter onClick={() => navigate("/repos")}>
          <StyledNumber>{user.public_repos}</StyledNumber>
          <div>Repos</div>
        </StyledCounter>
      </StyledCounters>
      {user.bio && (
        <>
          <StyledBio>
            <Dot />
            <StyledBioLabel>Bio</StyledBioLabel>
          </StyledBio>
          <StyledBioContent>{user.bio}</StyledBioContent>
        </>
      )}
    </div>
  )
}

export default Profile
