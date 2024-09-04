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
});

    // Por cada pieza agrego el evento dragstart
    // pieces.forEach(piece => piece.addEventListener('dragstart', (e) => {
    //     e.dataTransfer.setData('text/plain', e.target.id);
    //     console.log('Empezaste a mover', e.target.id);
    // }));

    // // Por cada celda agrego dragover y drop
    // cells.forEach(cell => {
    //     cell.addEventListener('dragover', (e) => {
    //         e.preventDefault();  // Permite el drop en esta celda
    //     });

    //     cell.addEventListener('drop', (e) => {
    //         e.preventDefault();
    //         const id = e.dataTransfer.getData('text/plain');
    //         const draggedElement = document.getElementById(id);

    //         // Asegurarse de que el elemento arrastrado exista y que se suelte en una celda válida
    //         if (draggedElement && e.target.classList.contains('cell')) {
    //             e.target.appendChild(draggedElement);
    //         }
    //     });
    // });
