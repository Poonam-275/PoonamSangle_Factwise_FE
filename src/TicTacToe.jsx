// TicTacToe.jsx
import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);

  const currentPlayer = isXNext ? 'X' : 'O';

  // Win conditions
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  // Check for winner
  const calculateWinner = (squares) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (squares[a] && 
          squares[a] === squares[b] && 
          squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Check for draw
  const checkDraw = (squares) => {
    return squares.every(square => square !== null) && !calculateWinner(squares);
  };

  // Handle cell click
  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    
    setBoard(newBoard);
    setIsXNext(!isXNext);
    
    // Update history
    const newHistory = history.slice(0, step + 1);
    setHistory([...newHistory, newBoard]);
    setStep(step + 1);
    
    // Check for winner or draw
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (checkDraw(newBoard)) {
      setWinner('Draw');
    }
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setHistory([Array(9).fill(null)]);
    setStep(0);
  };

  // Time travel to previous move
  const jumpTo = (step) => {
    setBoard(history[step]);
    setIsXNext(step % 2 === 0);
    setStep(step);
    setWinner(null);
  };

  // Render cell
  const renderCell = (index) => (
    <button
      className={`cell ${board[index] ? 'filled' : ''}`}
      onClick={() => handleClick(index)}
      disabled={!!board[index] || !!winner}
    >
      {board[index]}
    </button>
  );

  // Status message
  const getStatusMessage = () => {
    if (winner === 'X' || winner === 'O') {
      return `Winner: ${winner}! 🎉`;
    }
    if (winner === 'Draw') {
      return "It's a Draw! 🤝";
    }
    return `Next Player: ${currentPlayer}`;
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      
      <div className="status">{getStatusMessage()}</div>
      
      <div className="board">
        <div className="board-row">
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </div>
        <div className="board-row">
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </div>
        <div className="board-row">
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </div>
      </div>
      
      <div className="controls">
        <button onClick={resetGame} className="reset-btn">
          Reset Game
        </button>
      </div>
      
      <div className="history">
        <h3>Move History</h3>
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button 
                onClick={() => jumpTo(move)}
                className={move === step ? 'current-move' : ''}
              >
                {move === 0 ? 'Go to game start' : `Go to move #${move}`}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TicTacToe;