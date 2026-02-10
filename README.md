Tic Tac Toe Game - ReactJS

A fully functional, interactive Tic Tac Toe game built with ReactJS featuring time travel, win detection, and responsive UI.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Features
Core Gameplay
- Alternate turns between X and O
- Interactive 3x3 game board
- Real-time win/draw detection
- Input validation (prevent overwrites)

Win Detection
- 8 winning patterns (3 rows, 3 columns, 2 diagonals)
- Automatic winner announcement
- Game freeze on win

Advanced Features
- Move History - Track all moves
- Time Travel - Jump to any previous game state
- Game Statistics - Score tracking
- Responsive Design - Works on all devices

UX Enhancements
- Clean, modern UI with animations
- Visual feedback on hover/click
- Status messages for game state
- Reset functionality

Installation & Setup
Prerequisites
- Node.js (v14 or higher)
- npm or yarn

Local Development
1. Clone the repository
```bash
git clone https://github.com/yourusername/tic-tac-toe-react.git
cd tic-tac-toe-react
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start development server
```bash
npm start
# or
yarn start
```

4. Open in browser
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   └── TicTacToe.jsx    # Main game component
├── styles/
│   └── TicTacToe.css    # Game styles
├── utils/
│   └── gameLogic.js     # Win detection utilities
├── App.js               # Root component
├── index.js             # Entry point
└── index.html           # HTML template
```

How to Play

1. Starting the Game
   - The game begins with Player X
   - Click any empty cell to place your mark

2. Game Rules
   - Players alternate turns (X → O → X...)
   - First to get 3 in a row wins
   - Game ends in draw if all cells are filled

3. Advanced Features
   - Use History Panel to review moves
   - Click any move to time travel to that state
   - Press Reset Game to start fresh

Technical Implementation
State Management
```javascript
const [board, setBoard] = useState(Array(9).fill(null));
const [isXNext, setIsXNext] = useState(true);
const [winner, setWinner] = useState(null);
const [history, setHistory] = useState([Array(9).fill(null)]);
const [step, setStep] = useState(0);
```

Win Detection Algorithm
```javascript
const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];
```

Key Functions
- `calculateWinner()` - Checks all win conditions
- `handleClick(index)` - Processes player moves
- `resetGame()` - Resets to initial state
- `jumpTo(step)` - Time travel functionality

Responsive Design
The game is fully responsive:
- Desktop: Full game with history panel
- Tablet: Optimized board size
- Mobile: Stacked layout, touch-friendly buttons

Testing

Run test suite:
```bash
npm test
# or
yarn test
```

Test Coverage
- Game logic unit tests
- Win condition detection
- State management tests
- UI component tests

Poonam Sangale
