// Importaciones 
import Board from './board.js';

// Evento de carga de pagina
document.addEventListener("DOMContentLoaded", (event) => {
    const board = new Board();
    console.log(board.createBoard());

    // Declaro todas las pieces y celdas
    const pieces = document.querySelectorAll('.piece');
    const cells = document.querySelectorAll('.cell');
    let pieceSelected = null;

    pieces.forEach(piece => piece.addEventListener('click', (e) => {
        //Si tiiene la clase selected, se remueve
        if(pieceSelected){
            pieceSelected.classList.remove('selected')
        }
        //Obtengo el HTML Element de la pieza clikeada
        pieceSelected = e.target;
        //Agrego className
        pieceSelected.classList.add('selected');

        console.log(pieceSelected)

    }))
    cells.forEach(cell => cell.addEventListener('click', (e) => {
        // Mueva la pieza selecionada
        e.target.appendChild(pieceSelected);
        // Remuevo la clase "selected" y limpio la variable pieceSelected
        pieceSelected.classList.remove('selected');
        pieceSelected = null;
    }))
});
