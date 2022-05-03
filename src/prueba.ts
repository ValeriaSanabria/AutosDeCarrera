/*let vuelta1: number = dato1.value;
let vuelta2: number = dato2.value;
let vuelta3: number = dato3.value;
let vuelta4: number = dato4.value;



btnEnv.addEventlistener("click", () => {
  let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("Tiempo total:", tiempoTotal);
console.log("Promedio de vuelta:", tiempoTotal / 4);
calculo.innerHTML= "Promedio de Vuelta:" + tiempoTotal/4
}); */
let tiempoTotal = document.getElementById("tiempoTotal");
let btnEnv = document.getElementById("btnEnv");

btnEnv.addEventlistener("click", () => {
  console.log("Tiempo total: ", tiempoTotal.value);
  console.log("Promedio de vuelta:", tiempoTotal.value / 4);
});

//HTML

<html>
  <head>
    <title>Ingreso de datos</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Tiempo total y promedio de vuelta</h2>
    <p id="vuelta1">Ingrese la vuelta 1:</p>
		<input type="number" id="vuelta1" />
		<p id="vuelta2">Ingrese la vuelta 2:</p>
		<input type="number" id="vuelta2" />
		<p id="vuelta3">Ingrese la vuelta 3:</p>
		<input type="number" id="vuelta3" />
		<p id="vuelta4">Ingrese la vuelta 4:</p>
    <input type="number" id="vuelta4" />
    <button type="text" id="btnEnv">Enviar</button>
    <script src="src/index.ts"></script>
  </body>
</html>
