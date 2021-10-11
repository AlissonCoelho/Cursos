//Arrays
const notas = [10, 6.5, 8, 7];

//Metodo push - cria nova posição
notas.push(8);
//console.log(notas);
notas.push();
//console.log(notas.length);

//Metodo pop - deleta posição
notas.pop();
//console.log(notas);
//console.log(notas.length);

//Metodo Slice - Dividir o array
const nomes = ["Arthur", "Gabriel","João","Vitor","Arthur","Miguel","Luiz","Felipe","Carlos",
"Eduardo","Luiz","Gustavo","Davi","Luiz","Luiz","Henrique","Davi","Miguel","Luiz","Miguel", "Alisson"];
//console.log(nomes.length);
const sala1 = nomes.slice(0,nomes.length/2);
const sala12 = nomes.slice(nomes.length/2);

//console.log(sala1);
//console.log(sala12);

//console.log(sala1.length + sala12.length);

//Metodo Splice - Dividir o array
let nome0 = nomes[0];
nomes.splice(0,1,nomes[20]);
nomes.pop();
nomes.push(nome0);
//console.log(nomes);
//console.log(nomes.length);

//Metodo concatenar arrays
const todosAlunos = sala1.concat(sala12);
// console.log("todos alunos: " + todosAlunos);
// console.log(todosAlunos.length);
// console.log(todosAlunos);

//arrys de duas dimentssões
const Alunos = ["Arthur", "Gabriel","João","Vitor","Arthur"];
const notas1 = [10, 6.5, 8, 7, 8];

let AlunosNotas = [Alunos, notas1];
// console.log(AlunosNotas);

//Função para buscar aluno e nota
const exibeNomeNota = (nomeAluno) => {

    if (AlunosNotas[0].includes(nomeAluno)){

        indice = AlunosNotas[0].indexOf(nomeAluno)

        return `O indice é: ${indice}\nO nome do aluno é: ${AlunosNotas[0][indice]}\nMedia é: ${AlunosNotas[1][indice]}.`
    } else {
        return "Aluno não cadastrado"
    }
}

//console.log(exibeNomeNota("João"));

//Instrução FOR

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i< numeros.length; i++)
{
    //console.log(i, numeros[i]);
}

//----------------------------------------------------
//Metodo Callback Foreach
//----------------------------------------------------
let somaDasNotas = 0;
notas1.forEach( nota => {
    somaDasNotas += nota
})

//console.log("\nMedia das notas",somaDasNotas/notas1.length);

function Imprimir(print, i)
{
    console.log(i, print);
}
//console.log("\nForeach\n");
//Alunos.forEach(Imprimir, indice);

//----------------------------------------------------
//Metodo Callback Map()
//----------------------------------------------------

const notas2 = [10, 9, 8, 7, 6];

const notas2Atualizadas = notas2.map( nota2 => nota2 < 10 ? nota2 = nota2+1 : nota2 );

//notas2Atualizadas.forEach(valor => console.log(valor));

const Nomes2 = ["ana Julia", "Caio vinicios","BIA silvia"];

const Nomes2Padronixados = Nomes2.map( nomes => nomes.toUpperCase());

//Nomes2Padronixados.forEach(valor => console.log(valor));

//----------------------------------------------------
//Metodo Callback Filter()
//----------------------------------------------------

const Alunos3 = ["Arthur", "Gabriel","João","Vitor","Arthur"];
const notas3 = [10, 5.5, 8, 4, 8];
const AlunosNotas3 = [Alunos3,notas3];
console.log(AlunosNotas3);

const Reprovados = Alunos3.filter((nomes, i) => notas3[i] < 6);

const Reprovados2 = AlunosNotas3.filter( (_AlunosNotas,i) => AlunosNotas[1][i] < 6 );

//console.log(Reprovados);
//Reprovados.forEach(valor => console.log("\nReprovado: ", valor));

console.log(Reprovados2);
//Reprovados2.forEach(valor => console.log(`Aluno ${valor[0]} com nota: ${valor[1]} está reprovado`));


//----------------------------------------------------
//Metodo Callback reduce()
//----------------------------------------------------

const salasJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salasJava = [6, 5, 8, 9, 5, 6];
const salasPython = [7, 3.5, 8, 9.5];

function MediaSala (notasDaSala)
{
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador,0);
    return somaDasNotas/notasDaSala.length;
}

console.log(`Media sala JS: ${MediaSala(salasJs)}`);
console.log(`Media sala java: ${MediaSala(salasJava)}`);
console.log(`Media sala Python: ${MediaSala(salasPython)}`);