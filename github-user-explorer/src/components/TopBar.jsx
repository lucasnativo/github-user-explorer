import styled from "styled-components"
import ArrowLeft from "./icons/ArrowLeft"
import SignIn from "./icons/SignIn"

const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  padding-left: 12px;
  height: 5rem;
  position: relative;
`

const StyledTitle = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  flex: 1;
`

const StyledSignInContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  position: absolute;
  right: 0;
  svg {
    margin-left: 10px;
  }
`
const StyledArrowLeft = styled(ArrowLeft)`
  position: absolute;
`

function TopBar({ title, onBackClick, onSaveClick }) {
  return (
    <StyledTopBar>
      <StyledArrowLeft onClick={onBackClick} />
      <StyledTitle>{title}</StyledTitle>
      {onSaveClick && (
        <StyledSignInContainer>
          Salvar
          <SignIn onClick={onSaveClick} />
        </StyledSignInContainer>
      )}
    </StyledTopBar>
  )
}

export default TopBar
