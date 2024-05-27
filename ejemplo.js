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
Cada tipo de servicio tiene un precio diferente por pieza de ropa:
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
Enunciado: Se requiere un sistema que permita a los estudiantes pagar su matrícula en la universidad, seleccionando formas de pago y visualizando el valor total.
Requisitos:
    • El sistema debe presentar las siguientes opciones de pago:
    • Pago completo (5% de descuento) x
    • Pago en 2 cuotas x
    • Pago en 3 cuotas x
    • El valor base de la matrícula es de $7.000.000 x
    • El estudiante debe seleccionar la opción de pago deseada. x
Según la opción elegida, el sistema debe:
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
Enunciado: Se requiere un sistema que permita gestionar la venta de zapatos deportivos en una tienda, seleccionando modelos, tallas y calculando precios.
Requisitos:
    • El sistema debe permitir seleccionar entre los siguientes modelos de tenis:
    • Clásicos x
    • Running x
    • Basketball x
    • Para cada modelo hay tallas desde 35 a 44 x
Los precios base por modelo son:
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
    • Si se ingresa una opción inválida se debe mostrar un mensaje al usuario x

let clasicos = 500000
let running = 800000
let basketball = 1000000

let tenis = parseInt(prompt("1 Tenis Clasicos 2 Tenis Running 3 Tenis Basketball)"))
let tallas = parseInt(prompt("Ingrese una talla entre 35 y 44"))
let cantidadTenis = parseInt(prompt("Ingrese cuantos Tenis desea comprar(maximo 5)"))

let descuentoClasicos = (clasicos * cantidadTenis) * 0.10
let descuentoRunning = (running * cantidadTenis) * 0.10
let descuentoBasketball = (basketball * cantidadTenis) * 0.10

//let descuento = console.log(cantidadTenis >= 3? (tenis == 1? descuentoClasicos: tenis == 2? descuentoRunning: tenis == 3? descuentoBasketball : Number(0) ):Number(0))
let valorTenis = tenis == 1? console.log(clasicos * cantidadTenis): tenis == 2? console.log(running * cantidadTenis): tenis == 3? console.log(basketball * cantidadTenis):alert("Error")
let valorDescuento = tenis == 1? console.log(clasicos - descuentoClasicos): tenis == 2? console.log(running - descuentoRunning): tenis == 3? console.log(basketball - descuentoBasketball):alert("Error")
let costoTotal

if(tenis >=1 && tenis <=3 && tallas >=35 && tallas <=44 && cantidadTenis >=1 && cantidadTenis <=5){ 
    switch(tenis){
        case 1:  {cantidadTenis >= 3 && tenis == 1?
        costoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${(clasicos * cantidadTenis) - descuentoClasicos}`):
                costoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${clasicos * cantidadTenis}`)
                break
                }
            case 2: {cantidadTenis >= 3 && tenis == 2?
                costoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${(running * cantidadTenis) - descuentoRunning}`):
                costoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${running * cantidadTenis}`)
                break
                }
            case 3:{cantidadTenis >= 3 && tenis == 3?
                costoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${basketball * cantidadTenis - descuentoBasketball}`):
                costoTotal = alert(`Tus ${cantidadTenis} Tenis Clasicos talla: ${tallas} valen: ${basketball * cantidadTenis}`)
                break
                }
            default:{
                alert("opcion incorrecta")
            }
            }
    } else {
    alert("valores incorrectos, recuere: 1 para Tenis Clasicos 2 para Tenis Running 3 para Tenis Basketball", "solo manejamos tallas de 35 a 44", "solo vendemos un maximo de 5 pares de tenis por usuario")
    }*/
    
/*Ejercicio 4:
Enunciado: Se requiere un sistema para una fábrica de escobas que permita seleccionar modelos, materiales yopciones para cotizar el producto según las especificaciones del cliente.
Requisitos:
        • El usuario debe poder seleccionar el modelo de escoba entre:
        • Escoba durax
        • Escoba suavex
        • cepillox
Para la fabricación se utilizan dos tipos de materiales:
        • Cerdas sintéticasx
        • Cerdas naturalesx
        • El usuario puede escoger opciones adicionales como mango largo o gancho en la punta
El sistema debe calcular el precio de cada configuración según las siguientes tarifas:
        • Escoba dura sintética: $8.000
        • Escoba dura natural: $10.000
        • cepillo sintético: $12.000
        • cepillo natural: $15.000
        • Mango largo: $2.000 adicionalesx
        • Gancho en punta: $500 adicionalesx
        • El usuario indica la cantidad de escobas a cotizar.
Reglas de negocio:
        • Solo se permite un tipo de material por producto
        • No se pueden combinar mango largo y gancho en punta
        • La cantidad mínima de fabricación es 3 escobas, la máxima 30
        • En caso de selección inválida mostrar mensaje de error.
    
let tipoEscoba = Number(prompt("1 para Escoba dura 2 para Escoba suave 3 para Cepillo"))
if (tipoEscoba >= 1 && tipoEscoba <= 3) {
    alert(`Escogiste ${tipoEscoba}`)
    } else {
    alert("valores incorrectos, (1 para Escoba dura 2 para Escoba suave 3 para Cepillo)")
    }
let tipoMaterial = Number(prompt("1 para cerdas sinteticas 2 cerdas naturales"))
if (tipoMaterial >= 1 && tipoMaterial <= 2) {
    alert(`Escogiste ${tipoMaterial}`)
    } else {
        alert("valores incorrectos, (1 para cerdas sinteticas 2 cerdas naturales)")
    }
let tipoAdiciones = Number(prompt("1 para Mango largo 2 para Gancho punta"))
if (tipoAdiciones >= 1 && tipoAdiciones <= 2) {
    alert(`Escogiste ${tipoAdiciones}`)
    } else {
        alert("valores incorrectos, (1 para Mango largo 2 para Gancho punta)")
    }
let cantidadEscobas = Number(prompt("Ingrese la cantidad de escobas a comprar(3-30)"))
if(cantidadEscobas >=3 && cantidadEscobas <=30){
    alert(`Escogiste ${cantidadEscobas}  Escobas`)
    } else {
        alert("valores incorrectos, (la cantidad de escobas que se pueden comprar(3-30)")
    }
    
    
let escobaDuraSintetica = 8000
let escobaDuraNatural = 10000
let escobaSuaveSintetica = 9000
let escobaSuaveNatural = 11000
let cepilloSintetico = 12000
let cepilloNatural = 15000

let adiciones
let mangoLargo = 2000
let ganchoEnLaPunta = 500

adiciones = tipoAdiciones = 1? mangoLargo * cantidadEscobas: tipoAdiciones = 2? ganchoEnLaPunta * cantidadEscobas: 0  

let pagoCompleto

if(`${tipoEscoba >= 1 && tipoEscoba <= 3}` + `${tipoMaterial >= 1 && tipoMaterial <= 2}` + `${tipoAdiciones >= 1 && tipoAdiciones <=2}` + `${cantidadEscobas >=3 && cantidadEscobas <=30}`){ 
    switch(tipoEscoba){
        case 1:{if (tipoMaterial ==1){(
            pagoCompleto = (escobaDuraSintetica * cantidadEscobas) + adiciones)
            alert(`el costo a pagar total es ${pagoCompleto}`)
            } else if (tipoMaterial ==2){(
            pagoCompleto = (escobaDuraNatural * cantidadEscobas) + adiciones)
            alert(`el costo a pagar total es ${pagoCompleto}`)
            } else {
                alert("valores incorrectos")
            }
        break
        }
        case 2:{if (tipoMaterial ==1){(
            pagoCompleto = (escobaSuaveSintetica * cantidadEscobas) + adiciones)
            alert(`el costo a pagar total es ${pagoCompleto}`)
            } else if (tipoMaterial ==2){(
            pagoCompleto = (escobaSuaveNatural * cantidadEscobas) + adiciones)
            alert(`el costo a pagar total es ${pagoCompleto}`)
            } else {
                alert("valores incorrectos")
            }
        break
        }
        case 3:{if (tipoMaterial ==1){(
            pagoCompleto = (cepilloSintetico * cantidadEscobas) + adiciones)
            alert(`el costo a pagar total es ${pagoCompleto}`)
            } else if (tipoMaterial ==2){(
            pagoCompleto = (cepilloNatural * cantidadEscobas) + adiciones)
            alert(`el costo a pagar total es ${pagoCompleto}`)
            } else {
            alert(`el costo a pagar total es ${pagoCompleto}`)
            }
        break
        }
        default:{
            alert("valores incorrectos, (1 para Escoba dura 2 para Escoba suave 3 para Cepillo)" + "(1 para cerdas sinteticas 2 cerdas naturales)" + "(1 para Mango largo 2 para Gancho punta)" + "(la cantidad de escobas a comprar(3-30)")
        }
        }
    } else {
    alert("valores incorrectos, (1 para Escoba dura 2 para Escoba suave 3 para Cepillo)" + "(1 para cerdas sinteticas 2 cerdas naturales)" + "(1 para Mango largo 2 para Gancho punta)" + "(la cantidad de escobas a comprar(3-30)")
    }*/

/*Ejercicio 5:
Enunciado: Se requiere un sistema que permita gestionar los préstamos de libros en una biblioteca pública. Los usuarios podrán seleccionar libros a solicitar y el sistema calculará las fechas y condiciones de préstamo.
Requisitos:
El sistema clasifica los libros en tres categorías:
    • Bestsellers (novedades)
    • Literatura
    • Académicos
Cada categoría tiene una tarifa de préstamo por día diferente:
    • Bestsellers: $500 por día
    • Literatura: $100 por día
    • Académicos: préstamo gratuito
    • El usuario selecciona los libros a solicitar, ingresando título y categoría
    • El usuario indica la cantidad de días que necesita el préstamo
El sistema calcula el costo del préstamo basado en:
    • Categoría del libro
    • Número de días solicitado
    • Para préstamos mayores a 10 días se aplica 10% de descuento
Reglas de negocio:
    • El préstamo puede ser de 1 a 30 días
    • Se pueden solicitar máximo 5 libros por préstamo
    • Académicos siempre son gratuitos independiente de los días*/
/*Ejercicio 6:
Enunciado: Se requiere un sistema para un servicio de entrega a domicilio que permita a los clientes pedir comida de diferentes restaurantes, seleccionar opciones y calcular el valor total del pedido.
Requisitos:
El usuario puede elegir restaurantes asociados como:
    • Hamburguesas
    • Pizzería
    • Comida China
Cada restaurante tiene varias opciones de menú con precios establecidos. Por ejemplo:
    • Hamburguesa simple ($25000)
    • Pizza familia ($85000)
    • Fideos con pollo ($18000)
    • El usuario selecciona el restaurante, el menú deseado y la cantidad para cada opción.
El sistema calcula el subtotal por ítems y el total del pedido incluyendo:
    • Costo de los artículos
    • Costo de envío ($5000)
    • Se muestra al usuario el resumen del pedido y valor total a pagar.
Reglas de negocio:
    • Solo se puede pedir de un restaurant a la vez.
    • Mínimo de compra $23000 por pedido.
    • Tiempo de delivery 45 minutos a 1 hora.
    • El pago solo puede ser en efectivo o con tarjeta débito/crédito.*/
/*Ejercicio 7:
Enunciado: Se requiere un sistema de venta de boletas para un concierto que permita seleccionar la ubicación en el escenario y calcular los costos de acuerdo con la localidad.
Requisitos:
    El escenario tiene las siguientes localidades:
    • General
    • Preferencial
    • VIP
Los precios para cada localidad son:
    • General: $50000
    • Preferencial: $150000
    • VIP: $300000
El usuario selecciona:
    • Cantidad de boletas
    • Localidad deseada
    • El sistema calcula el total a pagar incluyendo adicionales:
    • Impuestos del 10% sobre el precio
    • Cargo por servicio por boleta de $5000
    • El usuario visualiza el desglose de cobros y total a pagar.
Reglas de negocio:
    • Las localidades tienen capacidad limitada de entradas disponibles
    • Los descuentos y promociones no aplican para la localidad VIP
    • Solo se vende un máximo de 5 boletas por transacción
    • La compra puede ser pagada en efectivo o con tarjeta de crédito*/
/*Ejercicio 8:
Enunciado: Se requiere un sistema para que los usuarios puedan apostar en carreras de carros, seleccionando pilotos, montos y tipos de apuestas.
Requisitos:
El usuario debe poder seleccionar carreras disponibles con sus respectivos pilotos y cuotas. Por ejemplo:
    • Carrera 1: (Piloto A (1.5), Piloto B (2.3), Piloto C(1.8))
    • El usuario puede hacer dos tipos de apuestas:
    • Ganador de la carrera
    • Posiciones exactas (seleccionar 1ro y 2do puesto)
    • El sistema debe permitir ingresar el monto a apostar y registrar la apuesta.
    • Una vez terminada la carrera, el sistema determina si el usuario ganó y calcula las ganancias según las cuotas.
Reglas de negocio:
    • El usuario solo puede apostar en carreras habilitadas por el sistema.
    • El monto mínimo por apuesta es $10000
    • El monto máximo por evento es $1000.000
    • Solo mayores de edad pueden apostar según su número de identificación*/
