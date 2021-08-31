var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let val=[];
let inter = 0;
let gremio = 0;
let empate= 0;
let grenal=[];
while(dados.length > 0){
    let par = (dados.shift()).split(" ");
    val.push(par);
}

for(let i = 0; i < val.length; i++){
    grenal.push(...val[i]);
    
    if(grenal.length>1){
        
        if(parseInt(grenal[0])>parseInt(grenal[1])){
            inter++;
        }else if(parseInt(grenal[0])<parseInt(grenal[1])){
            gremio++;
        }else if(parseInt(grenal[0]) === parseInt(grenal[1])){
            empate++;
        }
        console.log("Novo grenal (1-sim 2-nao)");
        grenal=[];
    }else{
        if(grenal[0]==1){
           grenal=[];
            continue;
        }else if(grenal[0]==2){
            console.log(inter+gremio+empate+" grenais");
            console.log("Inter:"+inter);
            console.log("Gremio:"+gremio);
            console.log("Empates:"+empate);
            if(inter>gremio){
                console.log("Inter venceu mais");
            }else if(inter<gremio){
                console.log("Gremio venceu mais");
            }else if(inter==gremio){
                console.log("Nao houve vencedor");
            }
            break;
        }
    }
}