const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

// Filtrar Pares - Opção 1
function filtro (n) {
    return n % 2 === 0;
}

const opt1 = array.filter(filtro);
console.log(opt1);

// Filtrar Pares - Opção 2
const opt2 = array.filter(function filtro (n) {
    return n % 2 === 0;
});
console.log(opt2);

// Filtrar Pares - Opção 3
const opt3 = array.filter(function (n) {
    return n % 2 === 0;
});
console.log(opt3);

// Filtrar Pares - Opção 4
const opt4 = array.filter((n) => {
    return n % 2 === 0;
});
console.log(opt4);

// Filtrar Pares - Opção 5
const opt5 = array.filter(n => {
    return n % 2 === 0;
});
console.log(opt5);

// Filtrar Pares - Opção 6
const opt6 = array.filter(n => n % 2 === 0);
console.log(opt6);

// Filtrar Pares - Opção 7
const opt7 = array.filter(n => !(n % 2));
console.log(opt7);
