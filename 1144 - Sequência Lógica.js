var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let num = parseInt(dados.shift());
let arr=[0,0,0];
 
for (let i = 0; i < num ; i++) {
    arr[0]++;
    arr[1]=arr[0]*arr[0];
    arr[2]=arr[0]*arr[0]*arr[0];
    console.log( arr.join(' '));
    arr[0];
    arr[1]=(arr[0]*arr[0]) + 1;
    arr[2]=(arr[0]*arr[0]*arr[0]) + 1;
    console.log( arr.join(' '));
      
}