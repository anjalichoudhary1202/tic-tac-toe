import React, { useState } from 'react'
import useTictacToe from '../hooks/use-tic-tac-toe';

const TicTacToe = ({boardSize = 3}) => {

  const { board, getStatusMessage, resetBoard, handleClick} = useTictacToe(boardSize);
  console.log("board", board);
  
  return (
    <div className='game-board' style={{"--board-size": boardSize.toString()}}>
      {board.length !== 0 && (
        <div className='status-container'>
          <div className='status'>{getStatusMessage()}</div>
          <button className='reset' onClick={resetBoard}>Reset</button>
        </div>
      )}

      <div className='board'>
        { board.map((b, index)=>{
          return <button className='cell' onClick={()=>handleClick(index)} key={index} disabled={b !== null}>{b}</button>
        })}
      </div>
    </div>
  )
}

export default TicTacToe
