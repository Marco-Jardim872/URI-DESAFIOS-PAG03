var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());

if(num > 2 && num < 1000){
    for (let i = 1; i <= 10; i++){
        console.log(i + " x "+ num + " = " + (i*num));
    }
}
