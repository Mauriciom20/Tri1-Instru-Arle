/*1ro*
let usuario = ""
	usuario = prompt("¿cuál es tu nombre?")
	alert("Bienvenid@ " + usuario)


let salarioPorHora = ""
let horasDeTabajo = ""
    horasDeTabajo = Number( prompt("Ingrese las horas laboradas"))
	alert("Horas laboradas: " + horasDeTabajo)
    if(horasDeTabajo <= 10 && horasDeTabajo >=1){
        salarioPorHora = 30000
    } else if(horasDeTabajo >= 10)
        salarioPorHora = 33000
    alert("su pago es: " + horasDeTabajo*salarioPorHora)

/*2. Dado un numero, determinar si el numero es positivo o negativo.
let numero = ''
    numero = prompt("que numero deseas ver si es positivo o negativo?")
let resultado = numero >= 0 ? "positivo" : "negativo"
alert(`El numero es ${resultado}.`)*/


/*3. Una empresa que se encarga de alquilar lavadoras necesita una aplicacion
que calcule el costo a pagar, asi:
El usuario digita 1, corresponde a lavadora grande.
El usuario digita 2, lavadora pequena.
La lavadora grande vale a 4000 por hora prestada.
La lavadora pequena cobra a 3000 por hora prestada.
Si alquilan mas de 3 lavadoras, se obtiene un descuento del 3%.

const precioHoraLavadoraGrande = 4000
const precioHoraLavadoraPequena = 3000
const descuentoPorTresLavadoras = 0.03

let eleccionLavadora = prompt("Ingrese 1 para lavadora grande o 2 para lavadora pequeña:")
let cantidad = Number(prompt("Ingrese cuantas lavadoras desea alquilar:"))
const costoTotal = (eleccionLavadora === '1' ? precioHoraLavadoraGrande : precioHoraLavadoraPequena) * cantidad

const descuento = cantidad > 3 ? costoTotal * descuentoPorTresLavadoras : 0

const costoFinal = costoTotal - descuento

alert(`El costo total a pagar por hora es: ${costoFinal} pesos.`)*/

/*4. Determinar si un numero ingresado por el usuario es par o impar.

const a = "es par"
const b = "es impar"

let num = prompt("Ingrese un numero para identificar si es par o impar(par = true, impar = false)") 
let espar = num % 2 === 0 ? a : b;
    alert(espar)*/ //agregar respuesta//

/*5. Escriba un programa ingresar calificaciones de cinco materias: Fisica, Quimica,
Biologia, Matematicas e Informatica. Calcule el porcentaje y la calificacion de acuerdo
con lo siguiente:
Las notas son de 0 a 10.
Si el promedio, esta entre 0 y 5.9 9: la calificacion es mala.
Entre 6 y 8: la calificacion es buena.
Mayor a 8: la calificacion es buena.

let fisica = Number(prompt("Ingrese la calificacion de Fisica (0-10):"))
let quimica = Number(prompt("Ingrese la calificacion de Quimica (0-10):"))
let biologia = Number(prompt("Ingrese la calificacion de Biologia (0-10):"))
let matematicas = Number(prompt("Ingrese la calificaciin de Matematicas (0-10):"))
let informatica = Number(prompt("Ingrese la calificacion de Informatica (0-10):"))

let promedio = (fisica + quimica + biologia + matematicas + informatica) / 5

let calificacion = promedio >= 0 && promedio < 6 ? "mala" : (promedio >= 6 && promedio <= 8 ? "buena" : "excelente")

alert(`El promedio de las calificaciones es: ${promedio}`)
alert(`La calificacion es: ${calificacion}`)*/

/*6. Escriba un programa para encontrar cual es el numero mayor entre tres numeros
ingresados por el usuario.

let num1 = Number(prompt("Ingrese el primer numero:"))
let num2 = Number(prompt("Ingrese el segundo numero:"))
let num3 = Number(prompt("Ingrese el tercer numero:"))

let numeroMayor = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3)

alert(`El numero mayor es: ${numeroMayor}`)*/

/*7. Escriba un programa para calcular el valor recibido mensual de una persona por
ayuda de la alcaldia, donde:
si el genero de la persona es femenino y su edad mayor a 50 años se le da 120000.
Si es mujer entre 30 y los 50 años recibe solo el apoyo de 100000.
Si es hombre el apoyo es de $40000

let genero = Number(prompt("Ingrese su genero (1 para Femenino/2 para Masculino):"))
let edad = Number(prompt("Ingrese su edad:"))

let valorRecibidoMensual = genero === 1 ?
    edad > 50 ? 120000 : (edad >= 30 && edad <= 50 ? 100000 : 0) :
    genero === 2 ? 40000 : 0

alert(`El valor recibido mensualmente es: ${valorRecibidoMensual}`)*/

/*8. Calcular los costos que paga un cliente a un gimnasio por una mensualidad teniendo
en cuenta la siguiente tabla:
Mensualidad 15 dias = 18000 / 30 dias = 35000 / 3 meses = 86000

let duracion = prompt("Ingrese la duracion de la mensualidad deseada (15, 30 o 90 dias):")

let costo = duracion === "15" ? 18000 : duracion === "30" ? 35000 : duracion === "90" ? 86000 : "0"

alert(`El costo de la mensualidad es: ${costo}`)*/

/*9. Un triangulo es valido si la suma de los tres angulos es igual a 180 grados. Escriba un
programa que le pida al usuario que ingrese tres numeros enteros como angulos y
verifique si un triangulo es valido o no.

let angulo1 = Number(prompt("Ingrese el primer angulo del triangulo:"))
let angulo2 = Number(prompt("Ingrese el segundo angulo del triangulo:"))
let angulo3 = Number(prompt("Ingrese el tercer angulo del triangulo:"))

let esValido = angulo1 + angulo2 + angulo3 === 180 ? true : false

alert(`Los angulos ingresados ${esValido ? "forman" : "no forman"} un triangulo valido.`)*/

/*10. Los precios de impresion de una fotocopiadora se basan normalmente en la cantidad
de copias que se van a imprimir. Por ejemplo:
0 - 499 copias $120 por copia
500 - 749 copias $ 100 por copia
750 - 999 copias $ 80 por copia
1000 copias o mas $ 50 por copia
Cree una aplicacion que solicite al usuario el numero de copias que desea imprimir, se
muestra el precio por copia y el precio total.

let cantidadCopias = Number(prompt("¿cuantas copias desea imprimir?"))

let precioPorCopia = cantidadCopias < 500 ? 120 : cantidadCopias < 750 ? 100 : cantidadCopias < 1000 ? 80 : 50

let precioTotal = cantidadCopias * precioPorCopia

alert(`El costo total seria: ${precioTotal}`)*/

/*11. Cree una aplicacion de resolucion de problemas de computadora que determine el
estado de la computadora.
Si emite un pitido al iniciarse y si el disco duro gira, esta averiada. Si emite un pitido y
la unidad gira, haga que la aplicacion muestre “Pongase en contacto con el tecnico
apoyo”.
Si emite un pitido y la unidad no gira, haga que la aplicacion muestre "Verificar
contactos de la unidad".
Si no emite un pitido y el disco duro no gira, haga que la aplicacion muestre "Traiga la
computadora para repararla en la central." Por ultimo, si no emite un pitido y el disco
duro gira, haga que la aplicacion muestre "Compruebe las conexiones de altavoces ".

const emitePitido = true
const discoDuroGira = false

if (emitePitido) {
    if (discoDuroGira) {
        alert("Pongase en contacto con el soporte tecnico.")
    } else {
        alert("Verificar contactos de la unidad.")
    }
} else {
    if (discoDuroGira) {
        alert("Compruebe las conexiones de altavoces.")
    } else {
        alert("Traiga la computadora para repararla en la central.")
    }
}*/

/*12. Una empresa automotriz produjo algunos modelos de automoviles para el 2024, que
pueden ser dificiles de conducir porque las ruedas del automovil no son exactamente
redondas. Se han encontrado autos con los numeros de modelo 119, 179, 189 a 195,
221 y 780 tener este defecto. Cree una aplicacion que solicite al cliente el numero de
modelo de su carro para averiguar si esta defectuoso. Aparece el mensaje "Su
automovil no esta defectuoso" si el usuario escribio un numero de modelo sin defecto;
De lo contrario, el mensaje "el automovil esta defectuoso, llevar a garantia”.

let numeroModelo = Number(prompt("Ingrese el numero de modelo de su automovil:"));

if (numeroModelo === 119 ||
    numeroModelo === 179 ||
    numeroModelo === 189 ||
    (numeroModelo >= 190 && numeroModelo <= 195) ||
    numeroModelo === 221 ||
    numeroModelo === 780
) {
    alert("El automovil está defectuoso, llevar a garantia.")
} else {
    alert("Su automovil no esta defectuoso.")
}*/

/*13. Cree una aplicacion CeluMovil para el paquete de promocion febrero 2023, solicitando
al usuario el operador: claro, Tigo o movistar. Cada operador tiene estos servicios:
(llamada internacional, paquete de datos). Asi:
Tigo: cargo fijo $45000, valor minuto internacional $200, $valor paquete de datos
$12000
Claro: cargo fijo $30000, valor minuto internacional $100, $valor paquete de datos
$18000
Movistar: cargo fijo $40000, valor minuto internacional $250, $valor paquete de datos
$8000
El usuario debe escoger el tipo de operador al que pertenece y la cantidad de minutos
internacionales consumidos.

let operador = Number(prompt("Ingrese el operador (1 para Claro, 2 para Tigo o 3 para Movistar):"))
if (operador === 1 || operador === 2 || operador === 3) {
    let minutosInternacionales = Number(prompt("Ingrese la cantidad de minutos internacionales consumidos:"))

    let cargoFijo = ''
    let valorMinutoInternacional = '' 
    let valorPaqueteDatos = ''

    if (operador === 1) {
        cargoFijo = 30000
        valorMinutoInternacional = 100
        valorPaqueteDatos = 18000
    } else if (operador === 2) {
        cargoFijo = 45000
        valorMinutoInternacional = 200
        valorPaqueteDatos = 12000
    } else {
        cargoFijo = 40000
        valorMinutoInternacional = 250
        valorPaqueteDatos = 8000
    }

    let costoMinutosInternacionales = minutosInternacionales * valorMinutoInternacional
    let costoTotal = cargoFijo + costoMinutosInternacionales + valorPaqueteDatos

    alert(`El costo total del paquete de promocion para ${operador} es: $${costoTotal}`)
} else {
    alert("Operador no valido. Por favor, ingrese un operador valido (Claro(1), Tigo(2) o Movistar(3)).")
}*/

/*14. Cree una aplicacion SandwichOrder que cree un pedido de sandwich y calcule el valor
a pagar por el cliente: solicitando al usuario el tamaño (pequeño o grande) y los
ingredientes adicionales (tocineta, jalapeño, pavo, Queso).
Un sandwich pequeño cuesta $ 6000 y un sandwich grande cuesta $ 12000. El
jalapeño es gratis, la tocineta y el pavo $3000 y el queso $2500.

let tamaño = Number(prompt("¿de que tamaño desea el sandwich?(1 para pequeño / 2 para grande):"))

let costoSandwich

if (tamaño === 1) {
    costoSandwich = 6000;
} else if (tamaño === 2) {
    costoSandwich = 12000;
} else {
    alert("Tamaño de sandwich no valido. Por favor, ingrese 'pequeño(1)' o 'grande(2)'.");
}

let tocineta = Number(prompt("¿Desea agregar tocineta(3000)? (si(1)/no(2)):")) === 1 ? 3000 : 0
let jalapeño = Number(prompt("¿Desea agregar jalapeño(0)? (si(1)/no(2)):")) === 1 ? 0 : 0
let pavo = Number(prompt("¿Desea agregar pavo(3000)? (si(1)/no(2)):")) === 1 ? 3000 : 0
let queso = Number(prompt("¿Desea agregar queso(2500)? (si(1)/no(2)):")) === 1 ? 2500 : 0

let costoTotal = costoSandwich + tocineta + pavo + queso

alert(`El costo total del pedido es: $${costoTotal}`)*/

/*15. Cree una aplicacion GameOf21 para simular una version simplificada del juego "21"
contra la computadora.
Se utiliza una baraja con cartas que pueden tener del 1 al 10 y se puede repetir
cualquier numero. El programa comienza repartiendo al usuario dos cartas elegidas al
azar y lo mismo lo hace para la maquina, pero no lo revela. Luego para los dos
jugadores, una carta elegida al azar que no se revela hasta que el usuario seleccione
A.
El ganador es el que tiene la puntuacion mas alta menor o igual a 21. Si una
puntuacion es superior a 21 y la otra tiene 21 o menos, el jugador con 21 o menos es
declarado ganador.

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let determinarGanador = (puntuacionUsuario, puntuacionComputadora) => {
    if (puntuacionUsuario > 21 && puntuacionComputadora <= 21) {
        return "¡La computadora gana!"
    } else if (puntuacionComputadora > 21 && puntuacionUsuario <= 21) {
        return "¡Tu ganas!"
    } else if (puntuacionUsuario === puntuacionComputadora) {
        return "¡Es un empate!"
    } else if (puntuacionUsuario > puntuacionComputadora) {
        return "¡Tu ganas!"
    } else {
        return "¡La computadora gana!"
    }
};

let cartaUsuario1 = aleatorio(1,10)
let cartaUsuario2 = aleatorio(1,10)
let cartaComputadora1 = aleatorio(1,10)
let cartaComputadora2 = aleatorio(1,10)
let cartaUsuarioExtra = aleatorio(1,10)
let cartaComputadoraExtra = aleatorio(1,10)


alert(`Tus cartas son: ${cartaUsuario1} y ${cartaUsuario2}`)
let puntuacionUsuario = ((cartaUsuario1) + (cartaUsuario2))
    console.log(puntuacionUsuario)
    alert("Tu puntuacion es " + puntuacionUsuario)

alert(`Las cartas de la computadora son: ${cartaComputadora1} y ${cartaComputadora2}`)
let puntuacionComputadora = cartaComputadora1 + cartaComputadora2
    console.log("La puntuacion de tu oponente es " + puntuacionComputadora )

let tomarOtraCarta = Number(prompt("¿Deseas tomar otra carta? (Escribe '1' para si o '2' para plantar):")) === 1
if (tomarOtraCarta) {
    alert(`Tu nueva carta es: ${cartaUsuarioExtra}`)
}   let puntuacionUsuarioExtra = puntuacionUsuario + cartaUsuarioExtra
    alert("Tu puntuacion es " + puntuacionUsuarioExtra)

let tomarOtraCartaComputadora = (puntuacionComputadora <= 21? console.log(`Tu nueva carta es: ${cartaComputadoraExtra}`) : 0 )

let puntuacionComputadoraExtra = puntuacionComputadora + cartaComputadoraExtra

alert(`La puntuacion de tu oponente es ${puntuacionComputadoraExtra}`)


let resultado = determinarGanador(puntuacionUsuarioExtra, puntuacionComputadoraExtra)
alert(resultado)*/
