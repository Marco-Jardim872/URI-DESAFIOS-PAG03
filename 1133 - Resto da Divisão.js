var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let ini = parseInt(dados.shift());
let fim =  parseInt(dados.shift());

if(ini<fim){
    for(let i=ini+1; i<fim;i++){
        if((i%5==2)||(i%5==3)){
            console.log(i);
        }
    }
}else{
    for(let i=fim+1; i<ini;i++){
        if((i%5==2)||(i%5==3)){
            console.log(i);
        }
    }
}