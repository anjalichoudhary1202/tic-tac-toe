import { useState, useEffect } from "react";

const initialBoard = (size) => Array(size * size).fill(null);
const useTictacToe = (boardSize) => {
  const [board, setBoard] = useState(initialBoard(boardSize));
  const [isONext, setIsONext] = useState(true);

  // Reset board when boardSize changes
  useEffect(() => {
    setBoard(initialBoard(boardSize));
    setIsONext(true);
  }, [boardSize]);

  const handleClick = (index)=>{
    const winner = getWinner();
    if(winner) return;
    const newBoard = [...board];
    newBoard[index] = isONext ? "O" : "X";
    setIsONext(!isONext);
    setBoard(newBoard);
  }

  const generateWinningPatterns = (size) => {
    const patterns = [];
    
    // Horizontal patterns and vertical patterns
    for (let i = 0; i < size; i++) {
      const row = [];
      const col = [];
      for (let j = 0; j < size; j++) {
        row.push(i * size + j);
        col.push(j * size + i);
      }
      patterns.push(row);
      patterns.push(col);
    }
    
    // Diagonal patterns
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < size; i++) {
      diagonal1.push(i * size + i);
      diagonal2.push(i * size + (size - 1 - i));
    }
    patterns.push(diagonal1);
    patterns.push(diagonal2);
    
    return patterns;
  };

  const resetBoard = () => {
    setBoard(initialBoard(boardSize));
    setIsONext(true);
  }

  const getWinner = () => {
    const winningPatterns = generateWinningPatterns(boardSize);
    for(let i=0;i<winningPatterns.length;i++) {
      const pattern = winningPatterns[i];
      const firstValue = board[pattern[0]];
      if(firstValue && pattern.every(index => board[index] === firstValue)) {
        return firstValue;
      }
    }

    return null;
  }

  const getStatusMessage = () => {
    const winner = getWinner();
    if(winner) return  `Player ${winner} wins!`;
    if(!board.includes(null)) return "Match draw"

    return `Player ${isONext ? 'O' : 'X'} turn`;
  }

  return  {board, handleClick, resetBoard, getStatusMessage};
}

export default useTictacToe;