//1
console.log("¡Hola! Soy Lei y este es mi primer proyecto de node :)");
//2
let valoresArray = [1, 2];
const mostrarValores = (valoresArray) => {
    console.log(valoresArray);
}

function mostrarTrad (valoresArray) {
    console.log(valoresArray);
}

mostrarValores(valoresArray);
mostrarTrad(valoresArray);

//3

valoresArray.push(`Holi`);
mostrarValores(valoresArray);

//4

console.log(valoresArray.lastIndexOf(2));

//5

var arrayNum = [3, 4, 1];
console.log(arrayNum.reduce((accumulator, currentValue) => {return accumulator+currentValue}, 0));

//6

console.log(valoresArray.reverse());

//7

console.log(arrayNum.sort());

//8

const numMayor = 2;
console.log(arrayNum.filter((num) => num > numMayor));

//9

var contador = 0;
const elementoEspecifico = 1;
for(const elemento in valoresArray){
    if(elemento == elementoEspecifico){
        contador++;
    }
}
console.log(contador);