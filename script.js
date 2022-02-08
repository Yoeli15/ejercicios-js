console.log("Primer ejercicio")
const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

let contador = 2
let primo = 0
const primos = []

for (let indice = 0; indice < ejercicio1.length; indice++){
  while(contador < ejercicio1[indice]){
    if(ejercicio1[indice]%contador == 0){
      primo = primo + 1
      //console.log("no es primo: ", ejercicio1[indice], "se divide entre: ", contador)
      break;
    }
    contador = contador + 1      
  }

  if(primo == 0){
    primos.push(ejercicio1[indice])
  }
  contador = 2
  primo = 0
}

console.log(`Los números primos son: ${primos}`)

console.log("\nSegundo ejercicio")
const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

const acceso = []

for(let indice2 = 0; indice2 < ejercicio2.length; indice2++){
  if(ejercicio2[indice2].edad >= 18 && ejercicio2[indice2].esFamiliar){
    acceso.push(ejercicio2[indice2].nombre)
  }
}

console.log(`Las personas que se admitirán son: ${acceso}`)

console.log("\nTercer ejercicio")
let inicio = 1
let apoyo = 1
let suma = 0
let conteo = 0

while(conteo < 50){
  console.log(inicio)
  suma = inicio + apoyo
  inicio = apoyo
  apoyo = suma
  conteo +=1
}