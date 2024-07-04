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

class Persona{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    saludar(){
        console.log("Hola mi nombre es " + this.name + " y mi apellido es " + this.lastName)
    }
}

const persona1 = new Persona("Juan", "Perez");
persona1.saludar();

const persona2 = new Persona("Muzan","Demon");
persona2.saludar();