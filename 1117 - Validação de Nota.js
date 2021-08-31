var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let notas=[];
let count=0;
let media=0;
while(dados.length > 0){
    let num=parseFloat(dados.shift());
    if((num>=0) && (num<=10)){
        notas.push(num);
        count++;
        if(count==2)break;
    }else{
        console.log("nota invalida");
    }
   
}
media = ((notas[0]+notas[1])/2).toFixed(2);
console.log("media = " + media);