var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let num;
let com = [];
let alc = 0;
let gas = 0;
let die = 0;

while(dados.length > 0){
    num = parseInt(dados.shift());
    com.push(num);
    
        switch(com[0]){
            case 1:
                alc++;
                com=[];
                break;
            case 2:
                gas++; 
                com=[];
                break;
            case 3:
                die++;
                com=[];
                break;
            case 4:
                break;
            default:
                
                com=[];
        }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alc);
console.log("Gasolina: " + gas);
console.log("Diesel: " + die);