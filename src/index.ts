rotulo1.innerHTML = "Ingrese la vuelta 1";
rotulo2.innerHTML = "Ingrese la vuelta 2";
rotulo3.innerHTML = "Ingrese la vuelta 3";
rotulo4.innerHTML = "Ingrese la vuelta 4";

let dato1: number = 4;
let dato2: number = 7;
let dato3: number = 8;
let dato4: number = 9;

let vuelta1: number = Number(dato1.value);
let vuelta2: number = Number(dato2.value);
let vuelta3: number = Number(dato3.value);
let vuelta4: number = Number(dato4.value);

let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("tiempoTotal:", tiempoTotal);
console.log("Promedio de vuelta:", tiempoTotal / 4);
