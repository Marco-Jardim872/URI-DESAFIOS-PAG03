var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let ts = parseInt(dados.shift());
let count=0;
let arr = [];
let int= [];

while(count<ts){
    let num = dados.shift();
    arr.push(num);
    count++;
}
for(let i=0; i<arr.length; i++){
   let v =  arr[i].split(" ");
  int.push(v);
   
}

for(let i=0; i<ts; i++){
    let numeros = int[i];
    numeros.sort((a,b)=>a-b);
    let soma=0;
    for(let j=(parseInt(numeros[0]) + 1); j <parseInt(numeros[1]);j++){
        
        if( (((numeros[1])-(numeros[0])) <= 1)){
           soma =0;
           
        }else if(( ((numeros[1])-(numeros[0]))>1) && (j%2!==0)){
            soma = soma + j;
        }
       
    }
    console.log(soma);         
}
