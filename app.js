
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
                    cell.appendChild(pieceElement);
                }
                
                boardElement.appendChild(cell);
            }
        }
    }
};

//Evento de carga de pagina
document.addEventListener("DOMContentLoaded", (event) => {
    const board = new Board();
    console.log(board.createBoard());

});




//     // dragStart => Arrastrar (elemento que vamos a mover)
//     // dragOver => Me posiciono sobre el objetivo 
//     // drop => Soltar (termina el evento de arrastrar)
//     // dataTransfer => objetivo que captura al objeto arrastrado, este metodo captura algo en este caso ID.
//     const checkers = document.querySelectorAll('img')
//     const cell = document.querySelectorAll('.cell')

//     checkers.forEach(c => c.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('target', e.target.id);
//         console.log('me estas arrastrando')
//     }))
//     cell.forEach( c =>{
//         c.addEventListener('dragover', (e) =>{
//             e.preventDefault()
//             console.log('Preveniste evento por defecto')
//         });
//         c.addEventListener('drop', (e) => {
//             const id = e.dataTransfer.getData('target');
//             const element = document.getElementById(id);
//             e.target.appendChild(element);
//         });
//     })
// });

