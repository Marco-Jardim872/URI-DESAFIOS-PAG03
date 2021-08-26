var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let I=1;
let j=60;
while(j>=0){
    console.log("I=" + I + " J="+j);
    I= I+3;
    j=j-5;
   
}