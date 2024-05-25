/*Ejercicio 1:
Enunciado: Se requiere desarrollar un sistema que permita a los clientes de 
una lavandería seleccionar y cotizar diferentes servicios de lavado de ropa.
Requisitos:
• El sistema debe presentar al usuario las siguientes opciones de servicios:
• Lavado básicox
• Lavado premium (incluye secado y planchado)x
• Cada tipo de servicio tiene un precio diferente por pieza de ropa:
• Lavado básico: $2000x
• Lavado premium: $4000x
• El usuario debe seleccionar el tipo de servicio deseado.x
• Basado en la selección del usuario, el sistema debe calcular un estimado del costo total del servicio.x
• El usuario ingresa la cantidad de piezas de ropa para lavar.x
• El sistema presenta el costo total como resultado.x
Reglas de negocio:
• Solo se permite seleccionar una opción de servicio por transacciónx
• La cantidad mínima de piezas por transacción es de 1
• La cantidad máxima de piezas por transacción es 20
• Si el usuario selecciona una opción inválida, se debe mostrar un mensaje de error*/

const precioLavadoBasico = 2000
const precioLavadoPremium = 4000
let tipoLavado = Number(prompt("Ingrese el lavado que desea realizar (1 o 2): \n1. basico \n2. premium"))
let piezas = Number(prompt("Ingrese la cantidad de piezas que desea lavar"))
let costoTotalPorTransaccion
let salir = true
function transaccion(){
    while(salir){
    switch(transaccion){
        case 1:{if(tipoLavado == 1 && piezas >= 1 && piezas <= 20){
            costoTotalPorTransaccion = piezas * precioLavadoBasico
            alert(`el costo total es ${costoTotalPorTransaccion}`)
            } else if(tipoLavado == 2){
            costoTotalPorTransaccion = piezas * precioLavadoPremium
            alert(`el costo total es ${costoTotalPorTransaccion}`)
            }
            break
        }
        case 2: if(tipoLavado == 1){
            costoTotalPorTransaccion = piezas * precioLavadoBasico
            alert(`el costo estimado de la transaccion es: ${costoTotalPorTransaccion}`)
            } else if(tipoLavado == 2){
            costoTotalPorTransaccion = piezas * precioLavadoPremium
            alert(`el costo estimado de la transaccion es: ${costoTotalPorTransaccion}`)
            break
        }
        case 3: { salir = false
                  break }
        default:{
            alert("valores incorrectos, lavadora(basico - premium), piezas (1 a 20) por transaccion")
        }
    }
    }
}

costoTotalPorTransaccion = alert(Number(prompt("ingrese la accion que desea realizar (1, 2 o 3) \n1. Iniciar transaccion \n2. Revisar Costo \n3. Salir")))
if (costoTotalPorTransaccion == 1 ) {
    transaccion(1)
} else if (costoTotalPorTransaccion == 2){
    transaccion(2)
} else if (costoTotalPorTransaccion == 3){
    transaccion(3)
} else ("Error, elige una opcion valida (1, 2 o 3)")

/*Ejercicio 2:
Enunciado: Se requiere un sistema que permita a los estudiantes pagar su matrícula en la universidad, 
seleccionando formas de pago y visualizando el valor total.
Requisitos:
• El sistema debe presentar las siguientes opciones de pago:
• Pago completo (5% de descuento)
• Pago en 2 cuotas
• Pago en 3 cuotas
• El valor base de la matrícula es de $7.000.000
• El estudiante debe seleccionar la opción de pago deseada.
• Según la opción elegida, el sistema debe:
• Si es pago completo, aplicar 5% de descuento
• Si es en 2 cuotas, dividir el pago en partes iguales
• Si es en 3 cuotas, dividir el pago en partes iguales
• Mostrar al estudiante el valor total a pagar según la opción elegida.
Reglas de negocio:
• Solo permite seleccionar una opción de pago por transacción
• El número máximo de cuotas es 3
• Si se elige una opción inválida, mostrar un mensaje de error
• Los pagos en cuotas tienen un interés del 2% mensual sobre el saldo.
Ejercicio 3:
Enunciado: Se requiere un sistema que permita gestionar la venta de zapatos deportivos en una tienda, 
seleccionando modelos, tallas y calculando precios.
Requisitos:
• El sistema debe permitir seleccionar entre los siguientes modelos de tenis:
• Clásicos
• Running
• Basketball
• Para cada modelo hay tallas desde 35 a 44
• Los precios base por modelo son:
• Clásicos: $500.000
• Running: $800.000
• Basketball: $1.000.000
• El usuario debe seleccionar: modelo de tenis, talla y cantidad a comprar
• El sistema debe calcular el total a pagar incluyendo descuentos
Reglas de negocio:
• Existe un 10% de descuento para compras de 3 pares o más
• No se puede seleccionar una talla fuera del rango permitido
• La cantidad mínima que se puede comprar es de 1 par
• La cantidad máxima es de 5 pares por transacción
• Si se ingresa una opción inválida se debe mostrar un mensaje al usuario
Ejercicio 4:
Enunciado: Se requiere un sistema para una fábrica de escobas que permita seleccionar modelos, materiales y 
opciones para cotizar el producto según las especificaciones del cliente.
Requisitos:
• El usuario debe poder seleccionar el modelo de escoba entre:
• Escoba dura
• Escoba suave
• cepillo
• Para la fabricación se utilizan dos tipos de materiales:
• Cerdas sintéticas
• Cerdas naturales
• El usuario puede escoger opciones adicionales como mango largo o gancho en la punta
• El sistema debe calcular el precio de cada configuración según las siguientes tarifas:
• Escoba dura sintética: $8.000
• Escoba dura natural: $10.000
• cepillo sintético: $12.000
• cepillo natural: $15.000
• Mango largo: $2.000 adicionales
• Gancho en punta: $500 adicionales
• El usuario indica la cantidad de escobas a cotizar.
Reglas de negocio:
• Solo se permite un tipo de material por producto
• No se pueden combinar mango largo y gancho en punta
• La cantidad mínima de fabricación es 3 escobas, la máxima 30
• En caso de selección inválida mostrar mensaje de error.
Ejercicio 5:
Enunciado: Se requiere un sistema que permita gestionar los préstamos de libros en una biblioteca pública. Los 
usuarios podrán seleccionar libros a solicitar y el sistema calculará las fechas y condiciones de préstamo.
Requisitos:
• El sistema clasifica los libros en tres categorías:
• Bestsellers (novedades)
• Literatura
• Académicos
• Cada categoría tiene una tarifa de préstamo por día diferente:
• Bestsellers: $500 por día
• Literatura: $100 por día
• Académicos: préstamo gratuito
• El usuario selecciona los libros a solicitar, ingresando título y categoría
• El usuario indica la cantidad de días que necesita el préstamo
• El sistema calcula el costo del préstamo basado en:
• Categoría del libro
• Número de días solicitado
• Para préstamos mayores a 10 días se aplica 10% de descuento
Reglas de negocio:
• El préstamo puede ser de 1 a 30 días
• Se pueden solicitar máximo 5 libros por préstamo
• Académicos siempre son gratuitos independiente de los días
Ejercicio 6:
Enunciado: Se requiere un sistema para un servicio de entrega a domicilio que permita a los clientes pedir comida 
de diferentes restaurantes, seleccionar opciones y calcular el valor total del pedido.
Requisitos:
• El usuario puede elegir restaurantes asociados como:
• Hamburguesas
• Pizzería
• Comida China
• Cada restaurante tiene varias opciones de menú con precios establecidos. Por ejemplo:
• Hamburguesa simple ($25000)
• Pizza familia ($85000)
• Fideos con pollo ($18000)
• El usuario selecciona el restaurante, el menú deseado y la cantidad para cada opción.
• El sistema calcula el subtotal por ítems y el total del pedido incluyendo:
• Costo de los artículos
• Costo de envío ($5000)
• Se muestra al usuario el resumen del pedido y valor total a pagar.
Reglas de negocio:
• Solo se puede pedir de un restaurant a la vez.
• Mínimo de compra $23000 por pedido.
• Tiempo de delivery 45 minutos a 1 hora.
• El pago solo puede ser en efectivo o con tarjeta débito/crédito.
Ejercicio 7:
Enunciado: Se requiere un sistema de venta de boletas para un concierto que permita seleccionar la ubicación en 
el escenario y calcular los costos de acuerdo con la localidad.
Requisitos:
• El escenario tiene las siguientes localidades:
• General
• Preferencial
• VIP
• Los precios para cada localidad son:
• General: $50000
• Preferencial: $150000
• VIP: $300000
• El usuario selecciona:
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
• La compra puede ser pagada en efectivo o con tarjeta de crédito
Ejercicio 8:
Enunciado: Se requiere un sistema para que los usuarios puedan apostar en carreras de carros, seleccionando 
pilotos, montos y tipos de apuestas.
Requisitos:
• El usuario debe poder seleccionar carreras disponibles con sus respectivos pilotos y cuotas. Por ejemplo:
• Carrera 1: (Piloto A (1.5), Piloto B (2.3), Piloto C(1.8))
• El usuario puede hacer dos tipos de apuestas:
• Ganador de la carrera
• Posiciones exactas (seleccionar 1ro y 2do puesto)
• El sistema debe permitir ingresar el monto a apostar y registrar la apuesta.
• Una vez terminada la carrera, el sistema determina si el usuario ganó y calcula las ganancias según las 
cuotas.
Reglas de negocio:
• El usuario solo puede apostar en carreras habilitadas por el sistema.
• El monto mínimo por apuesta es $10000
• El monto máximo por evento es $1000.000
• Solo mayores de edad pueden apostar según su número de identificación.*/