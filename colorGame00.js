const Square = () => {
  return (
    <button> </button>
  )
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  function renderSquare(i) {
    return <Square></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <h1> {status} </h1>
      </div>
    </div>
  );
};


// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <Board/>
root.render(element);
