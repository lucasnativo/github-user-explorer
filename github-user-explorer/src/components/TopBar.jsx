import styled from "styled-components";

const TopBarStyled = styled.div`
  position: fixed;
  bottom: 0;
`;

function TopBar({ title, onBackClick, onSaveClick }) {
  return (
    <TopBarStyled>
      <button onClick={onBackClick}>Voltar</button>
      <h1>{title}</h1>
      {onSaveClick && <button onClick={onSaveClick}>Salvar</button>}
    </TopBarStyled>
  );
}

export default TopBar;
