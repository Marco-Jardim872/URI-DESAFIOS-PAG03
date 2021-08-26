var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let ts = parseInt(dados.shift());
let count = 0;
let arr = [];

while(count < ts){
arr.push(dados.shift());
count++;
}

let cl= arr.filter((value)=>value.match(/C/g));
let rt= arr.filter((value)=>value.match(/R/g));
let sp= arr.filter((value)=>value.match(/S/g));
let tc =[];
let tr=[];
let tsp=[];

for(let i=0;i<cl.length;i++){
let elec = cl[i].split(" ");
tc.push(Number(elec[0]));
}
for(let i=0;i<rt.length;i++){
    let eler = rt[i].split(" ");
    tr.push(Number(eler[0]));
}
for(let i=0;i<sp.length;i++){
    let eles = sp[i].split(" ");
    tsp.push(Number(eles[0]));
}
    
let totalCoelhos = tc.reduce((total,value)=>total+value,0);
let totalRatos = tr.reduce((total,value)=>total+value,0);
let totalSapos = tsp.reduce((total,value)=>total+value,0);
let totalCobaias = (totalCoelhos+totalSapos+totalRatos);

console.log("Total: " + totalCobaias +" cobaias");
console.log("Total de coelhos: " + totalCoelhos);
console.log("Total de ratos: " + totalRatos);
console.log("Total de sapos: " + totalSapos);
console.log("Percentual de coelhos: " + ((totalCoelhos*100)/totalCobaias).toFixed(2) + " %");
console.log("Percentual de ratos: " + ((totalRatos*100)/totalCobaias).toFixed(2) + " %");
console.log("Percentual de sapos: " + ((totalSapos*100)/totalCobaias).toFixed(2) + " %");