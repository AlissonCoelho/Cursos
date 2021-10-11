//Função declarada
function minhafuncao (parametros){
    return 0;
}

//Função expressa (espressão de função)
const soma = function(nun1, num2) {return nun1 + num2};

//Diferenças
console.log(retornaOla());

function retornaOla(){
    return "olá";
}
//Da erro de inicialização caso utiliza a função espressa antes da chamada
//console.log(soma2);
const soma2 = function(nun1 = 0, num2 = 0) {return nun1 + num2};
console.log(soma2());

//-----------------------------------
//ARROW FUNCTION
//-----------------------------------

//Função tradicional
function CunctionTradicional(){
    return "Arrowfunction";
}
//Função arrow
const Arrowfunction = nome => "Arrowfunction";
const somaArrow = (num1, num2) => num1 + num2;
const somaArrow2 = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente numeros menores que 10";
    } else{
        return num1 + num2;
    }
}

console.log(somaArrow2(1,2));