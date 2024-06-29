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

    
})