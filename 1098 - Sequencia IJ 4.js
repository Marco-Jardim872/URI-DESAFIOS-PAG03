var input = require('fs').readFileSync('/dev/stdin', 'utf8');


let I=0;
let max=3;
let min=1;
while(I<=2){
  
    for(let j = min; j <= max; j++){
        
        if((I < 0.1) || (I > 0.9 && I < 1.1) || (I > 1.9 && I < 2)){
            console.log("I=" + I.toFixed(0)  + " J="+ j.toFixed(0));
        }else{
            console.log("I=" + I.toFixed(1) + " J="+ j.toFixed(1));
        }
    }
    I+=0.2;
    max+=0.2;
    min+=0.2;
}