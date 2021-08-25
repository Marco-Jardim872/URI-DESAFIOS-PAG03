var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());

for (let i = 1; i < 10000; i++) {
    if((i % num === 2)){

        console.log(i);
    }
}