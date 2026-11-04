console.log("JavaScript conectado correctamente");
const userName = "Pablo";

let messageCounter = 0;

const productPrice = 100;

let gameScore = 80;

console.log("Nombre de usuario: ", userName);

console.log("Número de mensajes enviados: ", messageCounter);

console.log("Precio del producto: ", productPrice);

console.log("Puntaje de juego: ", gameScore);

function saludar(name) {
  let saludo = "Hola, " + name;
  console.log(saludo);
  return saludo;
}

saludar("Pablo");

saludar("Mauro");

saludar("Sara");

saludar("Judith");

function calcularDoble(num) {
  let resultado = num * 2;
  console.log(resultado);
  return resultado;
}

calcularDoble(2);
calcularDoble(4);
calcularDoble(6);

let tareas = ["Estudiar Japonés", "Estudiar programación", "Ir al gimnasio"];

console.log(tareas);

console.log(tareas.length);

console.log(tareas[0]);
console.log(tareas[2]);

function addTask(task) {
  tareas.push(task);
  return tareas;
}
let newTaskList = addTask("Revisar la tarea");
console.log(newTaskList);

function clasificarNota(num) {
  if (num >= 60) {
    console.log();

    return "Aprobado con " + num;
  } else if (num < 60) {
    return "Desaprobado";
  }
}

console.log(clasificarNota(80));
console.log(clasificarNota(40));
console.log(clasificarNota(20));
console.log(clasificarNota(100));

function clasificarNotaTernario(num) {
  return num < 60 ? "Desaprobado" : "Aprobado";
}

console.log(clasificarNotaTernario(60));
console.log(clasificarNotaTernario(70));
console.log(clasificarNotaTernario(10));

console.log("Aquí va el for");

for (let index = 0; index < tareas.length; index++) {
  const element = tareas[index];
  console.log(element);
}

console.log("Aquí sigue forEach");

tareas.forEach((element) => {
  console.log(element);
});

console.log("Aquí se resuelve la tarea Math.random y Math.floor");

const elemntoAleatorio = Math.floor(Math.random() * tareas.length);
const elementoElegido = tareas[elemntoAleatorio];

console.log("El índice selecionado fue: ", elemntoAleatorio);
console.log("El elemento elegido fue: ", elementoElegido);
