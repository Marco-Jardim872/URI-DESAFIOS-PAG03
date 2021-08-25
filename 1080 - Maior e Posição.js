var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let arr = dados.map((value)=>value);
arr.sort((a,b)=>a-b);

let num = arr.pop();
let position = dados.indexOf(num)+1;
console.log(num);
console.log(position);