var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let num = parseInt(dados.shift());
let arr=[];
let apr=[];
for (let i = 1; i <= 4*num; i++) {
    arr.push(i);
}
while(arr.length>0){
    apr = arr.splice(0,4);
    for (let i = 1; i <= apr.length; i++) {
        
        if(apr[i] % 4 === 0){
            apr[i]= "PUM";
           
            console.log( apr.join(' '));
        }
    }
}
