var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let I=1;

while(I<=9){
    for(let j=7;j>4;j--){
        console.log("I=" + I + " J="+j);
    }
    I+=2;
}