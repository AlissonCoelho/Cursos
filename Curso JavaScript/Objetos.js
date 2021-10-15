//--------------------------------------
//Diferença objeto com Arrays
//--------------------------------------
//arrays armazena somente um tipo de informação, por exemplo aramzenar somente CPFs
const CPFs = ["111222665896", "22556699887","223336669977"];

const cliente = 
{
    nome: "Alisson",
    CPF: "11544798926",
    idade: 28,
    email: "alissonahc@gmail.com",
}
//Formas de acessar o objeto
//--------------------------------------
//notaçã por ponto
//--------------------------------------

//console.log(cliente);
//console.log(cliente.nome,"\n",cliente.CPF,"\n",cliente.idade,"\n",cliente.email);

//--------------------------------------
//notação por array
//--------------------------------------
const chaves = ["nome","CPF", "idade", "email" ];

//console.log(cliente[chaves[0]],"\n",cliente[chaves[1]],"\n",cliente[chaves[2]],"\n",cliente[chaves[3]]);
//chaves.forEach(valor => console.log(cliente[valor]));

//--------------------------------------
//notação por valor
//--------------------------------------
//console.log(cliente["nome"]);

//--------------------------------------
//Adicionar compo no objeto
//--------------------------------------

cliente.fone = "031971270466";
//console.log(cliente);

//--------------------------------------
//Deletar compo no objeto
//--------------------------------------
delete cliente.fone;
//console.log(cliente);

//--------------------------------------
//Criando um array dentro do objeto
//--------------------------------------
cliente.fone = ["031971270466", "31922262516"];

//cliente.fone.forEach(fone => console.log(fone));

//--------------------------------------
//Criando um objeto dentro do objeto
//--------------------------------------

cliente.dependentes = 
{
    parentesco: "filha",
    nome: "Sarah",
    dataNasc: "20/03/2011"
}
// console.log(cliente);
// cliente.dependentes.nome = "Sarah Silvia";
// console.log(cliente);

//--------------------------------------
//Criando um array de objeto dentro do objeto
//--------------------------------------

const cliente2 = 
{
    nome: "Alisson",
    CPF: "11544798926",
    idade: 28,
    email: "alissonahc@gmail.com",
    fone: ["031971270466", "31922262516"],
    dependentes:
    [{
        parentesco: "filha",
        nome: "Sarah Silvia",
        dataNasc: "20/03/2011"
    }]
}
cliente2.dependentes.push({
     parentesco: "filha",
     nome: "Sonia Maria",
     dataNasc: "04/05/2001"
 })
//console.log(cliente2);

//--------------------------------------
//Criando função dentro do objeto
//--------------------------------------

const cliente3 = 
{
    nome: "Alisson",
    CPF: "11544798926",
    idade: 28,
    email: "alissonahc@gmail.com",
    fone: [31971270466, 31922262516],
    dependentes:
    [{
        parentesco: "filha",
        nome: "Sonia Maria",
        dataNasc: "04/05/2001"
    },
    {
        parentesco: "filha",
        nome: "Sarah Silvia",
        dataNasc: "20/03/2011"
    }],

    saldo: 100,

    depositar:function(valor)
    {
        this.saldo += valor;
    }
}

cliente3.depositar(30);
//console.log(cliente3);

//--------------------------------------
//Informações sobre objetos
//--------------------------------------
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

//console.log(objPersonagem.nome) //Gandalf, o Cinzento
//console.log(objPersonagem2.nome) //Gandalf, o Cinzento

//A variável objPersonagem2 não fez uma cópia do objeto original,
//apenas serviu como referência para o objeto original objPersonagem.
//Assim, qualquer alteração em qualquer um dos objetos altera ambos.
//Isso porque o JavaScript, quando trabalha com objetos,
//acessa os valores deles fazendo referência ao original. mas não cria uma cópia.
//Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):
objPersonagem3 = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   
objPersonagem4 = Object.create(objPersonagem3)
objPersonagem4.nome = "Gandalf, o Cinzento"
   
//console.log(objPersonagem3.nome) //Gandalf
//console.log(objPersonagem4.nome) //Gandalf, o Cinze

//O método Object.create() cria um novo objeto utilizando como protótipo
//o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância
//diferente de objPersonagem e pode ser trabalhada de forma independente.


//--------------------------------------
//Percorrer objetos - For ...in
//--------------------------------------

let relatorio = "";

for (let info in cliente3)
{
    if(typeof cliente3[info] != "function")
    {
        if (typeof cliente3[info] != "object")
        {
            relatorio += `${info}: ${cliente3[info]}\n`;
        }
    }
    
}
//console.log(typeof cliente3.fone);
//console.log(relatorio);

//----------------------------------------------------------------
//Criar um array com as chaves do objetos - Object.keys(objeto)
//----------------------------------------------------------------

const propsClient3 = Object.keys(cliente3);
//console.log(propsClient3);

const Mariz =[0,1,2]
const propsMatriz = Object.keys(Mariz);
//console.log(propsMatriz);

const oferecerSeguro = obj =>  {
    if (Object.keys(obj).includes("dependentes")){
        console.log("Oferecer seguro para: " + obj.nome);
    }
}

//oferecerSeguro(cliente3);

const testFilter = Object.keys(cliente3).filter(valor => valor ==="dependentes");
//console.log(testFilter);

//----------------------------------------------------------------
//Criar um array com os valores das chaves - Object.values(objeto)
//----------------------------------------------------------------
const valoresClient3 = Object.values(cliente3);
//console.log(valoresClient3);

//----------------------------------------------------------------
//Criar um array com os valores e chaves - Object.entries(objeto)
//----------------------------------------------------------------

const entriesClient3 = Object.entries(cliente3);
//console.log(entriesClient3);
// [
//     [ 'nome', 'Alisson' ],
//     [ 'CPF', '11544798926' ],
//     [ 'idade', 28 ],
//     [ 'email', 'alissonahc@gmail.com' ],
//     [ 'fone', [ 31971270466, 31922262516] ],
//     [ 'dependentes', [ [Object], [Object] ] ],
//     [ 'saldo', 130 ],
//     [ 'depositar', [Function: depositar]]
// ]