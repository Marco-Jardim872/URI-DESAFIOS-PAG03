var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');


while(dados.length>0){
    let pas = parseInt(dados.shift());
    if(pas == 2002){
        console.log('Acesso Permitido');
        break;
    }else{
        console.log('Senha Invalida');
    }
    
}
