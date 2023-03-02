const Square = ({id, player}) => {
  const [color, setColor] = React.useState("green");
  const palet = ["red", "blue", "green"];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];

  // keep track of state of the Square
  return (
    <button
      onClick={(e) => {
        setColor(getRandomColor());
        e.target.style.background = color;
      }}
    >
      <h1>{id}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  function renderSquare(i) {
    return <Square id={i}></Square>;
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
