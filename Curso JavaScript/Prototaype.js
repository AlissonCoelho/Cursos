//--------------------------------------------------------
//Construtor
//--------------------------------------------------------

function Client(nome, cpf, email, saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const alisson = new Client("Alison", "55899635347", "alisonah@gmail.com", 100);

//console.log(alisson);

//--------------------------------------------------------
//Herança
//--------------------------------------------------------

function ClientPoup(nome, cpf, email, saldo, saldoPoup)
{
    Client.call(this,nome, cpf, email, saldo, saldoPoup)
    this.saldoPoup = saldoPoup
}

const ju = new ClientPoup("Ju", "12345678910", "juju@gmail.com", 100, 200);

//console.log(ju);

//--------------------------------------------------------
//Adicionar uma função/metodo no objeto ja criado
//-------------------------------------------------------

ClientPoup.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

ju.depositarPoup(30);

//console.log(ju);

console.log(alisson.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(alisson instanceof Client)
console.log(typeof alisson)
console.log(typeof ju)
console.log(ju instanceof ClientPoup)
console.log(Function.prototype.isPrototypeOf(Client))
console.log(Client.constructor === Function)