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

/*let i = parseInt(prompt("Ingrese el numero del que quiere ver su tabla de multiplicar"));
let suma = 1;
let f = 1;
while(f <=10){
    suma = i * f
    f++
    console.log(suma)
};*/

/*let i = parseInt(prompt("Ingrese el numero del que quiere ver su tabla de multiplicar"))
let suma = 1
let f =1
for(i; f <=10 ; f++){
    suma = i * f;
    console.log(suma);
}*/

/*let f = parseInt(prompt("Ingrese el numero del que quiere ver su tabla de multiplicar"))
let i = 1
let suma = 1
do{
    suma= i * f
    i++
    console.log(suma)
}while(i <= 10)*/

//4. Imprimir los números del 10 al 5

/*let i = 10;
while(i >= 5 && i <= 10){
    console.log(i)
    i-=1
};*/

/*for(let i = 10; i >= 5 && i <= 10; i-=1){
    console.log(i)
};*/

/*let f = 10
do{
    console.log(f)
    f-=1
}while(f >= 5 && f <=10)*/

//5. Repita un menú de 3 opciones hasta que el usuario digite el numero 4

/*let numero = parseInt(prompt("ingrese una opcion \n1. opcion 1\n2. opcion 2\n3. opcion 3\n4. opcion 4, terminar progrma"));
while(numero!=4)
    {
        switch (numero) {
            case 1:
                alert("opcion 1");
                break;
            case 2:
                alert("opcion 2");
                break;
            case 3:
                alert("opcion 3");
                break;
        
            default:
                alert("opcion invalida");
                break;
        }
        numero = parseInt(prompt("ingrese una opcion \n1. opcion\n2. opcion\n3. opcion\n4. terminar progrma"));
    }
    alert('saliste del programa');*/

/*for(let i = parseInt(prompt("ingrese una opcion \n1. opcion 1\n2. opcion 2\n3. opcion 3\n4. opcion 4, terminar progrma")); i!=4; i)
    switch (i!=4) {
    case 1:
        alert("opcion 1");
        break;
    case 2:
        alert("opcion 2");
        break;
    case 3:
        alert("opcion 3");
        break;

    default:
        alert("opcion invalida");
        i = parseInt(prompt("ingrese una opcion \n1. opcion 1\n2. opcion 2\n3. opcion 3\n4. opcion 4, terminar progrma"))
        break;
    }

alert('saliste del programa');*/

/*let i
do{ switch (i!=4) {
    case 1:
        alert("opcion 1");
        break;
    case 2:
        alert("opcion 2");
        break;
    case 3:
        alert("opcion 3");
        break;

    default:
        i = parseInt(prompt("ingrese una opcion \n1. opcion 1\n2. opcion 2\n3. opcion 3\n4. opcion 4, terminar progrma"))
        break;
    }
}while(i!=4) {alert('saliste del programa')}*/
    
//6. Usando un cilo imprima los números 3,6,9,12

/*let i = 3

while (i <= 12){
    console.log(i)
    i+=3
}*/

/*for(let i = 3; i<= 12; console.log(i), i+=3){}*/

/*let f = 3
do{
    console.log(f)
    f+=3
}while(f <= 12)*/

//7. Imprima la palabra “hola” 5 veces

/*let i = 0;
while (i < 5) {
    console.log("hola");
    i++;
}*/

/*for (let i = 0; i < 5; i++) {
    console.log("hola");
}*/

/*let i = 0;
do {
    console.log("hola");
    i++;
} while (i < 5);*/

//8. Imprima los números del 1 al 7 sin imprimir el 3

/*let i = 1
while (i <= 7) {
    if (i === 3) {
        i++
    };
    console.log(i);
    i++;
    
}*/

/*for (let i = 1; i <= 7; i++) {
    if (i === 3) {
        i++
    }
    console.log(i)
}*/

/*let i = 1;
do {
    if (i === 3) {
        i++;
        continue; // Salta la iteración si i es igual a 3
    }
    console.log(i);
    i++;
} while (i <= 7);*/
