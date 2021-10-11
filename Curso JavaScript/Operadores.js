//Comparação implicita ( == )
const n = 5;
const sn = "5";
console.log( n == sn );
console.log( n === sn );

//typeof
console.log(typeof n);
console.log(typeof sn);

// == compara só o valor
// === compara valor e tipo

//Covesão explicita
Number(sn);
String(n);

//-----------------------------------------------
//Operador ternário (três operações)
//-----------------------------------------------
const idadeMinima = 18;
const idadeCliente = 19;

//Operação classica com IF - ELSE
if (idadeCliente >= idadeMinima) {
    console.log('cerveja');
} else {
    console.log('suco');
}


//Mesma operação utilizando ternario
//(expressão logica ? resultado verdadeiro : resultado falso)
console.log(idadeCliente >= idadeMinima ? 'cerveja' : 'suco');

//-----------------------------------------------
//Templates Strings
//-----------------------------------------------
const nome = "Alisson";
const idade = 2021 - 1993;
const naturalidade = "Belo Horizonte";

const apresentacao = "Meu nome é " + nome + ", tenho " + idade +" anos de idade e nasci em " + naturalidade;
const tempalateString = `Meu nome é ${nome}, tenho ${idade} anos de idade e nasci em ${naturalidade}`;

console.log(apresentacao);
console.log(tempalateString);





