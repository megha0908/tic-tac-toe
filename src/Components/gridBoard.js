import Square from "./squareContainer";
import styled from "styled-components";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
`;

const GridBoard = ({ squares, onClick }) => {
  console.log("Squares:", squares);

  return (
    <BoardContainer>
      {Array.isArray(squares) && squares.length > 0 ? (
        squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))
      ) : (
        <p>No squares available</p>
      )}
    </BoardContainer>
  );
};

export default GridBoard;
