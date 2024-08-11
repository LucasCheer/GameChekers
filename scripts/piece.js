export default class Piece {
    constructor(id,color,isKing){
        this.id = id;
        this.color = color;
        this.isKing = isKing;
    }
    makeKing(){
        this.isKing = true;
    }
}