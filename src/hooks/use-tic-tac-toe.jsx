import { useState } from "react";

const initialBoard = Array(9).fill(null);
const useTictacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isONext, setIsONext] = useState(true);

  const handleClick = (index)=>{
    const winner = getWinner();
    if(winner) return;
    const newBoard = [...board];
    newBoard[index] = isONext ? "O" : "X";
    setIsONext(!isONext);
    setBoard(newBoard);
  }

  const WINNING_PATTERNS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ];

  const resetBoard = () => {
    setBoard(initialBoard);
    setIsONext(true);
  }

  const getWinner = () => {
    for(let i=0;i<WINNING_PATTERNS.length;i++) {
      const [a,b,c] = WINNING_PATTERNS[i];
      if(board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
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