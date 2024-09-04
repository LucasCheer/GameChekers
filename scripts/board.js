//Importaciones
import Piece from './piece.js';

export default class Board{
    constructor(){
        this.grid = this.createBoard();
        this.placeInitialPieces();
        this.renderBoard();
    }
    createBoard() {
        const grid = [];
        for (let row = 0; row < 8; row++) {
            grid[row] = [];
            for (let col = 0; col < 8; col++) {
                grid[row][col] = null; // Inicialmente, todas las celdas están vacías
            }
        }
        return grid;
    }
    placeInitialPieces(){
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if((row + col) % 2 !== 0){
                    if(row < 3){
                        this.grid[row][col] = new Piece(`w-${row}-${col}`, 'black', false)
                    }
                    else if(row > 4){
                        this.grid[row][col] = new Piece(`w-${row}-${col}`, 'white', false)
                    }
                }
            }
        }

    }
    renderBoard(){
        const boardElement = document.getElementById('board');
         boardElement.innerHTML = '';

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {

                const cell = document.createElement('div');
                cell.classList.add('cell');
                
                if ((row + col) % 2 === 0) {
                    cell.classList.add('white','cell-invalid');
                } else {
                    cell.classList.add('red');
                }

                const piece = this.grid[row][col];
                if (piece) {
                    const pieceElement = document.createElement('div');
                    pieceElement.classList.add('piece', piece.color);
                    pieceElement.id = piece.id; 
                    pieceElement.setAttribute('draggable','true') // Le doyla clase draggable a todas las piezas
                    cell.appendChild(pieceElement);
                }
                
                boardElement.appendChild(cell);
            }
        }
    }
};