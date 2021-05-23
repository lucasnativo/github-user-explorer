function TopBar({ title, onBackClick, onSaveClick }) {
  return (
    <div>
      <button onClick={onBackClick}>Voltar</button>
      <h1>{title}</h1>
      {onSaveClick && <button onClick={onSaveClick}>Salvar</button>}
    </div>
  );
}

export default TopBar;
