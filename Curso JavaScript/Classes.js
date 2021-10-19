//--------------------------------------------------------
//Criando uma classe
//--------------------------------------------------------
//Nome das classes devem começar com letra maiuscula
class Cliente
{
    constructor(nome, email, cpf, saldo)
    {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    //Não precissar escrever 'function'
    depositar(valor){
        this.saldo += valor;
    }
}

const alisson = new Cliente("Alisson", "alissonahc@gmail.com", "12345678910", 100)

//console.log(alisson);
//console.log(alisson.saldo);

//--------------------------------------------------------
//Metodo call()
//--------------------------------------------------------
// Esse método permite que uma função seja chamada com
// parâmetros e valor de this específicos. Vamos ver um exemplo:

function imprimeNomeEmail(tipoCliente)
{
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}
   
const cliente1 = 
{
    nome: "Carlos",
    email: "c@email.com"
}

const cliente2 = 
{
    nome: "Fred",
    email: "f@email.com"
}

//imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

//imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

//--------------------------------------------------------
//Metodo apply()
//--------------------------------------------------------
// O método apply() funciona de forma muito semelhante ao call(),
// porém recebe os argumentos em um array ao invés de separados:

function imprimeNomeEmail(tipoCliente, agencia)
{
    console.log(`${tipoCliente} da agência ${agencia}: - nome: ${this.nome}, email: ${this.email}`)
}

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

//imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

//imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

//--------------------------------------------------------
//Metodo bind()
//--------------------------------------------------------
// O método bind() “prende” ou “liga” uma função ao
// contexto de um objeto. Por exemplo:
class Personagem 
{
    constructor(nome)
    {
        this.nome = nome;
    }

    apresentar()
    {
        return `a personagem é ${this.nome}`
    }
}

let leia = new Personagem("Pincessa Leia");

// const personagemGenerico = leia.apresentar
// console.log(personagemGenerico())
//Erro gerado
const personagemDefinido = leia.apresentar.bind(leia)
console.log(personagemDefinido())
//a personagem é Princesa Leia

//--------------------------------------------------------
//Herança entre classes - extends
//--------------------------------------------------------

class ClientePoup extends Cliente
{
    constructor(nome, email, cpf, saldo, saldoPoup)
    {
        super(nome, email, cpf, saldo);
        this.saldoPoup = saldoPoup;
    }
    depositarPoup(valor)
    {
        this.saldoPoup += valor;
    }
}
const alisson1 = new ClientePoup("Alisson", "alisson@gmail.com", "12345678910", 200, 300);
alisson1.saldo = 900;
alisson1.depositar(90);
alisson1.depositarPoup(50);
console.log(alisson1);


