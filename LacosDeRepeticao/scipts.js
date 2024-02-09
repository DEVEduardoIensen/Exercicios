let multiplicando = 1001;
let multiplicador = 1;

while (multiplicador <= 10) {
    let resultado = multiplicando * multiplicador;
    console.log(`${multiplicando} x ${multiplicador} = ${resultado}`);
    multiplicador++;
}
//ggjg


let numero = 7;
let resultado = 1;
let count = 1;

while (count <= numero) {
    resultado *= count;
    count++;
}

console.log(`O fatorial de ${numero} é ${resultado}.`);
