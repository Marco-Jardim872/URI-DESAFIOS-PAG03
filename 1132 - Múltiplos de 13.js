var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let ini = parseInt(dados.shift());
let fim =  parseInt(dados.shift());
let soma = 0;
if(ini<fim){
    for(let i=ini; i<=fim;i++){
        if(i%13!==0){
            soma +=i;
        }
    }
}else{
    for(let i=fim; i<=ini;i++){
        if(i%13!==0){
            soma +=i;
        }
    }
}

console.log(soma);