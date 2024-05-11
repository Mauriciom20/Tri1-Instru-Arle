/*let opcion = "a"

switch(opcion) {
    case "c":{
        console.log("es la a")
        break
    }
    case "b":{

    }
}*/

/*Ejercicio 1:
Enunciado: Se requiere desarrollar un sistema que permita a los clientes de 
una lavandería seleccionar y cotizar diferentes servicios de lavado de ropa.

Requisitos:
• El sistema debe presentar al usuario las siguientes opciones de servicios:
• Lavado básico
• Lavado premium (incluye secado y planchado)
• Cada tipo de servicio tiene un precio diferente por pieza de ropa:
• Lavado básico: $2000
• Lavado premium: $4000
• El usuario debe seleccionar el tipo de servicio deseado.
• Basado en la selección del usuario, el sistema debe calcular un estimado del costo total del servicio.
• El usuario ingresa la cantidad de piezas de ropa para lavar.
• El sistema presenta el costo total como resultado.
Reglas de negocio:
• Solo se permite seleccionar una opción de servicio por transacción
• La cantidad mínima de piezas por transacción es de 1
• La cantidad máxima de piezas por transacción es 20
• Si el usuario selecciona una opción inválida, se debe mostrar un mensaje de error


let tipoLavado = prompt("Ingrese el tipo de lavado que desea(1 para basico a 2000 por pieza y 2 para premium a 4000 por pieza)")
let piezas = Number(prompt("Ingrese la cantidad de piezas que desea lavar"))
let precioBasico = 2000
let precioPremium = 4000
let costoTotal

if(tipoLavado >=1 && tipoLavado <=2 && piezas >= 1 && piezas <= 20){ 
    switch(tipoLavado){
        case "1":{
        costoTotal = piezas * precioBasico
        alert(`el costo total es ${costoTotal}`)
        break
        }
        case "2":{
            alert(`el costo total es ${piezas * precioPremium}`)
            break
        }
        default:{
            alert("opcion incorrecta")
        }
        }
    } else {
    alert("valores incorrectos, lavadora(1 basico - 2 premium), piezas 1-20")
    }*/

    /*Ejercicio 2:
    Enunciado: Se requiere un sistema que permita a los estudiantes pagar su matrícula en la universidad, 
    seleccionando formas de pago y visualizando el valor total.
    Requisitos:
    • El sistema debe presentar las siguientes opciones de pago:
    • Pago completo (5% de descuento) x
    • Pago en 2 cuotas x
    • Pago en 3 cuotas x
    • El valor base de la matrícula es de $7.000.000 x
    • El estudiante debe seleccionar la opción de pago deseada. x
    • Según la opción elegida, el sistema debe:
    • Si es pago completo, aplicar 5% de descuento x
    • Si es en 2 cuotas, dividir el pago en partes iguales x
    • Si es en 3 cuotas, dividir el pago en partes iguales x
    • Mostrar al estudiante el valor total a pagar según la opción elegida.
    Reglas de negocio:
    • Solo permite seleccionar una opción de pago por transacción x 
    • El número máximo de cuotas es 3 x
    • Si se elige una opción inválida, mostrar un mensaje de error x
    • Los pagos en cuotas tienen un interés del 2% mensual sobre el saldo. x

let cuotasPago = parseInt(prompt("Ingrese 1 para pago completo 2 para pago en 2 cuotas y 3 para pago en 3 cuotas)"))
let matricula = 7000000
let descuento = matricula * 0.05
let interes = matricula * 0.02
let pagoCompleto
let cuota1
let cuota2
let cuota3
let interescuota2

if(cuotasPago >=1 && cuotasPago <=3){ 
    switch(cuotasPago){
        case 1:{
        pagoCompleto = matricula - descuento
        alert(`el costo a pagar total es ${pagoCompleto}`)
        break
        }
        case 2:{

            alert(`el costo de las cuotas es: cuota1: ${cuota1 = matricula / 2} cuota2: ${cuota2 = (matricula / 2) + interes} para un costo total de ${cuota1+cuota2}`)
            break
        }
        case 3:{
            alert(`el costo de las cuotas es: cuota1: ${cuota1 = matricula / 3} cuota2: ${cuota2 = (matricula / 3) + interes} cuota3: ${cuota3 = (matricula / 3) + interes} para un costo total de ${cuota1+cuota2+cuota3}`)
            break
            }
        default:{
            alert("opcion incorrecta")
        }
        }
    } else {
    alert("valores incorrectos, (1, pago completo - 2, pago en 2 cuotas - 3, pago en 3 cuotas")
    }*/

    /*Ejercicio 3:
    Enunciado: Se requiere un sistema que permita gestionar la venta de zapatos deportivos en una tienda, 
    seleccionando modelos, tallas y calculando precios.
    Requisitos:
    • El sistema debe permitir seleccionar entre los siguientes modelos de tenis:
    • Clásicos x
    • Running x
    • Basketball x
    • Para cada modelo hay tallas desde 35 a 44 x
    • Los precios base por modelo son:
    • Clásicos: $500.000 x
    • Running: $800.000 x
    • Basketball: $1.000.000 x
    • El usuario debe seleccionar: modelo de tenis, talla y cantidad a comprarx
    • El sistema debe calcular el total a pagar incluyendo descuentos
    Reglas de negocio:
    • Existe un 10% de descuento para compras de 3 pares o más
    • No se puede seleccionar una talla fuera del rango permitido x
    • La cantidad mínima que se puede comprar es de 1 par x
    • La cantidad máxima es de 5 pares por transacción x
    • Si se ingresa una opción inválida se debe mostrar un mensaje al usuario x*/

const clasicos = 500000
const running = 800000
const basketball = 1000000

let tenis = Number(prompt("1 Tenis Clasicos 2 Tenis Running 3 Tenis Basketball)"))
let tallas = Number(prompt("Ingrese una talla entre 35 y 44"))
let cantidadTenis = Number(prompt("Ingrese cuantos Tenis desea comprar(maximo 5)"))

let descuentoClasicos = clasicos * 0.10
let descuentoRunning = running * 0.10
let descuentoBasketball = basketball * 0.10

let descuento =  cantidadTenis > 3? (tenis = 1? clasicos - descuentoClasicos: tenis = 2? running - descuentoRunning : tenis = 3? basketball - descuentoBasketball:console.log("se compraron menos de 3 pares de tenis, no hay descuento")):0
let costo 
let CostoTotal

if(tenis >=1 && tenis <=3 && tallas >=35 && tallas <=44 && cantidadTenis >=1 && cantidadTenis <=5){ 
    switch(tenis){
        case 1:{
            CostoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${descuento}`)
        break
        }
        case 2:{
            CostoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${descuento}`)
            break
        }
        case 3:{
            CostoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${descuento}`)
            break
            }
        default:{
            alert("opcion incorrecta")
        }
        }
    } else {
    alert("valores incorrectos, recuere: 1 para Tenis Clasicos 2 para Tenis Running 3 para Tenis Basketball", "solo manejamos tallas de 35 a 44", "solo vendemos un maximo de 5 pares de tenis por usuario")
    }
