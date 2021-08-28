var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let arr=[];
let result=[];
let elements=[];
let cort=[];

while(dados.length>0){
    arr.push( ((dados.shift()).split(" ")).sort((a, b)=> a-b) );
}

outer:for(let j=0; j<=arr.length;j++){
    result = arr.shift();
    let soma=0;
    let ini = (parseInt(result[0]));
    let end = (parseInt(result[1]));
    for(let i=ini ; i<=end ; i++){
       
      
        elements.push(i);
        soma +=i;
        if((ini<=0)||(end<=0)) break outer;
    }
    cort = elements.join(" ");
    elements=[];
    console.log(cort + " Sum="+soma);

}
