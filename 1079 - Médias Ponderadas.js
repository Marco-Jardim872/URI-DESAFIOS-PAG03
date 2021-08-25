var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let ts = parseInt(dados.shift());

let count = 0;

while(count<ts){
    let val = dados.shift();
    let num = val.split(" ");
    let media = (((num[0]*2)+(num[1]*3)+(num[2]*5))/10).toFixed(1);
    console.log(media);
    count++;
}