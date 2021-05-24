import styled from "styled-components"

const StyledDot = styled.div`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 10px;
  height: 40px;
  margin-right: 13px;
  background-color: #ffcf3c;
`
export default function Dot({ className }) {
  return <StyledDot className={className} />
}
