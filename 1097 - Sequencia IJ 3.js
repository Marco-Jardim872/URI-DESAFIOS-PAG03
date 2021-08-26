var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let I=1;
let max=7;
let min=4;
while(I<=9){
    for(let j = max; j > min; j--){
        console.log("I=" + I + " J="+j);
       
    }
    I+=2;
    max+=2;
    min+=2;
}