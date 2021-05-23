import styled from "styled-components";

const StyledTopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #1f1f1f;
  height: 5rem;
  font-weight: bold;
  .back {
    position: absolute;
    left: 0;
    margin-left: 1em;
  }
  .save {
    position: absolute;
    right: 0;
    margin-right: 1em;
  }
`;

function TopBar({ title, onBackClick, onSaveClick }) {
  return (
    <StyledTopBar>
      <button onClick={onBackClick} className="back">
        Voltar
      </button>
      <p>{title}</p>
      {onSaveClick && (
        <button onClick={onSaveClick} className="save">
          Salvar
        </button>
      )}
    </StyledTopBar>
  );
}

export default TopBar;
