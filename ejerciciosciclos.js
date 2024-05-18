//Hacer los ejercicios al menos con dos tipos de ciclos.
//1. Escribe un programa que imprima los números del 1 al 10.

/*let i = 1
while (i <= 10){
    console.log(i)
    i++
}*/

/*for(let i = 1; i<= 10;i++){
    console.log(i)
}

let f = 1*/

/*let f = 1
do{
    console.log(f)
    f++
}while(f >= 1 && f <= 10)*/

//2. Escribe un programa que calcule la suma de los números impares entre 1 y 20.

/*let suma = 0
let i = 1

while (i <= 20){
    suma+=i
    i+= 2
}
console.log(suma)*/

/*let suma = 0
for(let i = 1; i<= 20;suma+=i, i+=2){    
}
console.log(suma)*/

/*let suma = 0
let f = 1
do{
    suma+=f
    f+=2
}while(f >= 1 && f <= 20)
console.log(suma)*/

//3. Escribe un programa que imprima la tabla de multiplicar del número ingresado por el usuario.

let numero = parseInt(prompt("Ingrese el numero del que quiere ver su tabla de multiplicar"))

let suma = 0

while(numero <= 10){
    suma *= numero
    (numero++)
}
console.log(suma)

//4. Imprimir los números del 10 al 5
//5. Repita un menú de 3 opciones hasta que el usuario digite el numero 4
//6. Usando un cilo imprima los números 3,6,9,12
//7. Imprima la palabra “hola” 5 veces
//8. Imprima los números del 1 al 7 sin imprimir el 3
