//Variables
const d = document;

//Evento de carga de pagina
document.addEventListener("DOMContentLoaded", (event) => {
    const board = document.getElementById("board");

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            
            if ((row + col) % 2 === 0) {
                cell.classList.add('white');
            } else {
                cell.classList.add('black');
            }
            
            board.appendChild(cell);
        }
    }

    // dragStart => Arrastrar (elemento que vamos a mover)
    // dragOver => Me posiciono sobre el objetivo 
    // drop => Soltar (termina el evento de arrastrar)
    // dataTransfer => objetivo que captura al objeto arrastrado, este metodo captura algo.

    const checkers = document.querySelectorAll('img')
    const cell = document.querySelectorAll('.cell')

    checkers.forEach(c => c.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('target', e.target.id);
        console.log('me estas arrastrando')
    }))
    cell.forEach( c =>{
        c.addEventListener('dragover', (e) =>{
            e.preventDefault()
            console.log('Preveniste evento por defecto')
        });
        c.addEventListener('drop', (e) => {
            const id = e.dataTransfer.getData('target');
            const element = document.getElementById(id);
            e.target.appendChild(element);
        });
    })
});
