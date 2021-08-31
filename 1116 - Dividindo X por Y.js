var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let num=parseInt(dados.shift());
let count = 0;


while(count<num){
    let val = (dados.shift().split(" "));
    
     let div = (parseInt(val[0])/parseInt(val[1]));
     
        if((isNaN(div)) || (div == -Infinity)||(div==Infinity)){
            console.log("divisao impossivel");
        }else{
            console.log(div.toFixed(1));
        }
    
    count++;
}
 var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let num=parseInt(dados.shift());
let count = 0;


while(count<num){
    let val = (dados.shift().split(" "));
    
     let div = (parseInt(val[0])/parseInt(val[1]));
     
        if((isNaN(div)) || (div == -Infinity)||(div==Infinity)){
            console.log("divisao impossivel");
        }else{
            console.log(div.toFixed(1));
        }
    
    count++;
}
 