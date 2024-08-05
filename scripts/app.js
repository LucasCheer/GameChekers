//Clases Piece y Board

class Piece {
    constructor(id,color,isKing){
        this.id = id;
        this.color = color;
        this.isKing = isKing;
    }
    makeKing(){
        this.isKing = true;
    }
};

class Board{
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
                    cell.classList.add('white');
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

// dragStart => Arrastrar (elemento que vamos a mover)
// dragOver => Me posiciono sobre el objetivo 
// drop => Soltar (termina el evento de arrastrar)
// dataTransfer => objetivo que captura al objeto arrastrado, este metodo captura algo en este caso ID.

//Evento de carga de pagina
document.addEventListener("DOMContentLoaded", (event) => {
    const board = new Board();
    console.log(board.createBoard());

    // Declaro todas las pieces y celdas
    const pieces = document.querySelectorAll('.piece');
    const cells = document.querySelectorAll('.cell');

    //Por cada pieza agrego el evento dragstart
    pieces.forEach(piece => piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('target', e.target.id);
        console.log('me estas moviendo', e.target.id);
    }))
    //Por cada celda agrego el dragover y drop
    cells.forEach(cell => {
        cell.addEventListener('dragover' , (e) => {
            e.preventDefault();
        });
        cell.addEventListener('drop', (e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData('target');
            const element = document.getElementById(id);
            if(element && e.target.classList.contains ('cell')){
                e.target.appendChild(element);
            }
            
        })
    })


});


