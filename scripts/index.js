// Importaciones 
import Board from './board.js';

// Evento de carga de página
document.addEventListener("DOMContentLoaded", (event) => {
    const board = new Board();
    console.log(board.createBoard());

    // Declaro todas las piezas y celdas
    const pieces = document.querySelectorAll('.piece');
    const cells = document.querySelectorAll('.cell');
    let pieceSelected = null;

    pieces.forEach(piece => piece.addEventListener('click', (e) => {
        // Si ya hay una pieza seleccionada, remueve la clase 'selected'
        if (pieceSelected) {
            pieceSelected.classList.remove('selected');
        }
        // Obtengo el elemento HTML de la pieza clickeada
        pieceSelected = e.target;
        // Agrego la clase 'selected'
        pieceSelected.classList.add('selected');

        console.log("Pieza seleccionada:", pieceSelected);
    }));

    cells.forEach(cell => cell.addEventListener('click', (e) => {
        // Verifico si es una celda válida
        if (e.target.classList.contains('cell-invalid')) {
            alert('Por favor, seleccione una celda válida');
            // Manejo de celdas no válidas
        } else {
            // Mueve la pieza seleccionada
            e.target.appendChild(pieceSelected);
            // Remueve la clase 'selected' y limpia la variable pieceSelected
            pieceSelected.classList.remove('selected');
            pieceSelected = null;
        }
    }));
});
