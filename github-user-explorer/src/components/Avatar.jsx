import styled from "styled-components"

const StyledAvatar = styled.img`
  border-radius: 50%;
  border: 4px solid white;
  min-height: 64px;
`

function Avatar({ src, alt, className }) {
  return <StyledAvatar className={className} src={src} alt={alt} />
}

export default Avatar
