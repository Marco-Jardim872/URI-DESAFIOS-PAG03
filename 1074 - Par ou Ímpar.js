var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let qt = parseInt(dados.shift());
let cont = 0;

while(cont<qt){
let num =  parseInt(dados.shift());
    if((num % 2 === 0) && (num > 0)){
        console.log("EVEN POSITIVE");
    }else if((num % 2 === 0) && (num < 0)){
        console.log("EVEN NEGATIVE");
    }else if((num % 2 !== 0) && (num > 0)){
        console.log("ODD POSITIVE");
    }else if((num % 2 !== 0) && (num < 0)){
        console.log("ODD NEGATIVE");
    }else{
        console.log("NULL");
    }
    cont ++;

}
