
import { useState } from 'react'
import './App.css'
import TicTacToe from './components/TicTacToe'

function App() {

  const [value, setValue] = useState("");
  const [size, setSize] = useState(0);

  const handleSubmit = ()=>{
    const numValue = parseInt(value);
    if (numValue && numValue > 0) {
      setSize(numValue);
      setValue(""); // Clear the input after submission
    } else {
      alert("Please enter a valid board size between 1 and 10");
    }
  }

  return (
    <>
      <input 
        value={value} 
        onChange={(e)=>setValue(e.target.value)} 
        placeholder="Enter board size (1-10)"
        type="number"
        min="1"
      />
      <button onClick={handleSubmit}>Play</button>
      <TicTacToe boardSize={size} /></>
  )
}

export default App
