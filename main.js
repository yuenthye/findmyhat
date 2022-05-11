const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');
const randomer = require('complete-randomer');
const { arrayBuffer } = require('stream/consumers');
const { table } = require('table');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;
const characterX = 0;
const characterY = 0;
const charDirection = [];
let getRow = 0;
let getCol = 0;
let getMoreRow = 0;
let getMoreCol = 0;
let evenMoreRow = 0;
let evenMoreCol = 0;
let getRowHat = 0;
let getColHat = 0;
 

class field {
    field = [];
    
    constructor() {
        this.locationY = 0;
        this.locationX = 0;

        for(let i = 0; i < row; i ++){
        this.field[i] = [];
        }
    this.generateField();
    this.printHat();
    this.getCharacter();
}

generateField() {
    for (let y = 0; y < row; y++) {
        for (let x = 0; x < col; x++) {
            this.field[y][x] = fieldCharacter;
        }

        getRow = Math.floor(Math.random() * 10); 
        getCol = Math.floor(Math.random() * 10);
        getMoreRow = Math.floor(Math.random() * 10); 
        getMoreCol = Math.floor(Math.random() * 10);
        evenMoreRow = Math.floor(Math.random() * 10); 
        evenMoreCol = Math.floor(Math.random() * 10);
        getColHat = Math.floor(Math.random() + 6);
        getRowHat = Math.floor(Math.random() + 6);
    

        this.field[getCol][getRow] = hole;
        this.field[getCol][getRow] = hole;
        this.field[evenMoreRow][evenMoreCol] = hole;
        this.field[getMoreCol][getMoreRow] = hole;

    }
}


printHat () {
    if (getColHat < 1 == 0) { 
        this.field[getRowHat][getColHat] = fieldCharacter;
    } else { this.field[getColHat][getRowHat]= hat; 
    }
    getRowHat = Math.floor(Math.random() * row); 
    getColHat = Math.floor(Math.random() * col); 

    this.field[getRow][getCol] = hat;
}

getCharacter () {
    for (let j = 0; j < row; j++) {
        for (let i = 0; i < col; i++) {
            this.field[this.locationX][this.locationY] = pathCharacter;
        }
    }

}

charMovement () {
    
    for(let q = 10; q < charDirection; q++){
        for (let g = 10; g < charDirection; g++) {
        this.field[this.locationX][this.locationY] = pathCharacter;
    }
    }

}   



print() {
    clear();
    const displayString = this.field.map(row => {
        return row.join('');
    }).join('\n');
    console.log(displayString);
}

askQuestion () {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question = prompt('Which way? enter U, D, L, R: ').toUpperCase() 

    
    if (rl.question === 'u' || rl.question === 'd' || rl.question === 'l' || rl.question === 'r') {
        rl.question = prompt('Which way? enter U, D, L, R: ').toUpperCase() 
    } else {
        rl.question = prompt('please enter U, D, L, R: ').toUpperCase() 
    }

    

}

runGame () {

    this.print();
    this.askQuestion();
}
}
const myField = new field();
myField.runGame();

