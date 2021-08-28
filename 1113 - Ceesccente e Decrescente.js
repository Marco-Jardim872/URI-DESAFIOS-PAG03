var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');


while(dados.length>0){
    let val= dados.shift().split(' ');
    let pares=[];
    for(let i=0; i<val.length; i++){
        pares.push( parseInt(val[i]));
    }

    if((pares[0]) == (pares[1])){
        break;
    }else if((pares[0]) < (pares[1])){
        console.log("Crescente");
    }else if((pares[0]) > (pares[1])){
        console.log("Decrescente");
    }
}
