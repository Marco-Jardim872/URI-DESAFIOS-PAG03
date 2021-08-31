var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let notas=[];
let count=0;
let media=0;
let num;
while(dados.length > 0){
    num=parseFloat(dados.shift());
    if((num>=0) && (num<=10)){
        notas.push(num);
        count++;
        
        if(count==2){
            media = ((notas[0]+notas[1])/2).toFixed(2);
            console.log("media = " + media);
            notas=[];
            console.log("novo calculo (1-sim 2-nao)");
           
        }
        if((count>2)&&(num!==1 && num!==2)){
            console.log("novo calculo (1-sim 2-nao)");
            notas=[];
        }
        if((count>2)&&(num==2)){
           break;
        } 
        if((count>2)&&(num==1)){
            notas=[];
            count=0;
         }

    }else{
        console.log("nota invalida");
    }
    
}
