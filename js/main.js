/*----- constants -----*/
const players = {
    '1': {
        name: 'X',
        score: 0
    },
    '-1': {
        name: 'O',
        score: 0
    },
    'null': {
        name: '',
        score: 0
    }
}; 

const howToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*----- app's state (variables) -----*/
let currentPlayer;
let gameStatus;
let grid;
let turn;

/*----- cached element references -----*/
const gridEl = document.getElementById("grid");
const buttonEl = document.getElementById("replay");
const numberCells = document.querySelectorAll("section div");
const msgEl = document.getElementById("msg");

/*----- event listeners -----*/
document.querySelector("section").addEventListener("click", handleCellClick);
document.getElementById("replay").addEventListener("click", init);
/*----- functions -----*/
init();

function init() {
    gameStatus = null;
    grid = new Array(9).fill(null);
    currentPlayer = 1;
    
    render();
}

function render () {
   
    buttonEl.style.visibility = gameStatus ? "visible" : "hidden";
    
    renderMessage();
    renderGrid();
}

function renderGrid() {
    numberCells.forEach(function(cellEl, idx) {
      cellEl.innerText = players[grid[idx]].name;
    });
  }

function renderMessage() {
    if(gameStatus === "tie") {
        msgEl.innerText = "Cats Game";
    } else if(gameStatus) {
        msgEl.innerText = `${players[gameStatus].name} WINS!`; 
    } else {
        msgEl.innerText = "Good Luck!";
    }    
}

function handleCellClick(evt) {
    const idx = parseInt(evt.target.id.replace("cell", ""));
    if(grid[idx] || gameStatus) return;
    grid[idx] = currentPlayer;
    currentPlayer *= -1;
    gameStatus = getWinner();
        
    render();
}

function getWinner () {
    if(Math.abs(grid[0] + grid[1] + grid[2]) ===3) return grid[0];
    if(Math.abs(grid[3] + grid[4] + grid[5]) ===3) return grid[3];
    if(Math.abs(grid[6] + grid[7] + grid[8]) ===3) return grid[6];
    if(Math.abs(grid[0] + grid[3] + grid[6]) ===3) return grid[0];
    if(Math.abs(grid[1] + grid[4] + grid[7]) ===3) return grid[1];
    if(Math.abs(grid[2] + grid[5] + grid[8]) ===3) return grid[2];
    if(Math.abs(grid[0] + grid[4] + grid[8]) ===3) return grid[0];
    if(Math.abs(grid[2] + grid[4] + grid[6]) ===3) return grid[2];
    if(grid.includes(null)) return null;
    return "tie"
}