/*----- constants -----*/
const players = {
    '1': {
        name: '',
        score: 0
    },
    '-1': {
        name: '',
        score: 0
    }
}; // Not sure where this goes yet

/*----- app's state (variables) -----*/
let currentPlayer;
let gameStatus;
let board;

/*----- cached element references -----*/
const gridEl = document.getElementById("grid");
const buttonEl = document.getElementById("replay");
const gameStatusEl = document.getElementById("game-status");
const numberCells = document.getElementsByClassName("cell");

/*----- event listeners -----*/
document.getElementsByClassName("cell").addEventListener("click", handleCellClick);
document.getElementById("replay").addEventListener("click", init);
/*----- functions -----*/
init();

function init() {
    gameStatus = null;


    render();
}

function render () {

}

function handleCellClick(evt) {
    if(evt.target.tagName !== "CELL") return;
    
    const cell = evt.target.textContent;
    
    render();
}