var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let num=[];
let pares=[];

while(dados.length){
    num.push(dados.shift().split(" "));
outer:for(i=0;i<num.length; i++){
        pares = num.shift();
        if((pares[0]>0)&&(pares[1]>0)){
            console.log("primeiro");
        }else if((pares[0]>0)&&(pares[1]<0)){
            console.log("quarto");
        }else if((pares[0]< 0)&&(pares[1]<0)){
            console.log("terceiro");
        }else if((pares[0]< 0)&&(pares[1]>0)){
            console.log("segundo");
        }else if((parseInt(pares[0])=== 0)||(parseInt(pares[1])===0)){
            break outer;
        }
    }
}
 
  