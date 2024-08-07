import { useEffect, useState } from "react";
import styled from "styled-components";
import GridBoard from "./gridBoard";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Status = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory([...newHistory, squares]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  useEffect(() => {
    if (stepNumber === 9 && !calculateWinner(history[stepNumber])) {
      alert("Draw!");
    }
  }, [stepNumber, history]);

  const current = history[stepNumber];
  const winner = calculateWinner(current);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <GameContainer>
      <Status>{status}</Status>
      <GridBoard squares={current} onClick={handleClick} />
      <>
        {history.map((step, move) => (
          <button key={move} onClick={() => jumpTo(move)}>
            {move ? `Go to move #${move}` : "Go to game start"}
          </button>
        ))}
      </>
    </GameContainer>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Game;

// import { useState } from "react";
// import styled from "styled-components";
// import GridBoard from "./gridBoard";

// const GameContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Status = styled.div`
//   margin-bottom: 20px;
//   font-size: 1.5rem;
// `;

// const Game = () => {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   const handleClick = (i) => {
//     const newSquares = [...squares];
//     if (calculateWinner(newSquares) || newSquares[i]) {
//       return;
//     }
//     newSquares[i] = xIsNext ? "X" : "O";
//     setSquares(newSquares);
//     setXIsNext(!xIsNext);
//   };

//   const winner = calculateWinner(squares);

//   let status;
//   if (winner) {
//     status = `Winner: ${winner}`;
//   } else {
//     status = `Next player: ${xIsNext ? "X" : "O"}`;
//   }

//   return (
//     <GameContainer>
//       <Status>{status}</Status>
//       <GridBoard squares={squares} onClick={handleClick} />
//     </GameContainer>
//   );
// };

// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// };

// export default Game;
