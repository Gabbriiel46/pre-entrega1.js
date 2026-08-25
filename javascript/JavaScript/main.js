console.log ("Bienvenido a la carga de datos correspondientes!");

//Consigna Nro 1:

// 1. Captura de datos (solicitar al menos tres datos al usuario)
//
// Dato 1: Nombre del usuario (Texto)
const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
const apellidoUsuario = prompt("Por favor, ingresa tu apellido:");

// Dato 2: Año de nacimiento (Texto a número entero)
const anioNacimientoTexto = prompt("Por favor, ingresa tu año de nacimiento:");
const anioNacimiento = parseInt(anioNacimientoTexto);

// Dato 3: Un monto o precio (Texto a numero decimal/float)
const precioConsultaTexto = prompt("Por favor, ingresa el precio de la consulta:");
const precioConsulta = parseFloat(precioConsultaTexto);

//Consigna Nro 2:
// 2. Procesamiento de datos (realizar al menos dos operaciones matemáticas y una transformación de texto)
//
// Año actual (se usa constante)
const ANIO_ACTUAL = 2026;

// Operacion matematica 1: Calcular la edad aproximada
let edadCalculada = ANIO_ACTUAL - anioNacimiento;

// Operación matematica 2: Aplicar un 15% de descuento al precio ingresado
const porcentajeDescuento = 0.15;
let descuento = precioConsulta * porcentajeDescuento;
let precioFinal = precioConsulta - descuento;

// Transformacion de texto:
let mensajePersonalizado = "¡Hola, " + nombreUsuario + "! " +
                          "Tenes aproximadamente " + edadCalculada + " años. " +
                          "El precio original del producto era $" + precioConsulta.toFixed(2) + ". " +
                          "Con un 15% de descuento, el total a pagar es $" + precioFinal.toFixed(2) + ".";

// 3. COMUNICAR RESULTADOS (Salida de datos)
// --------------------------------------------------
// Muestra por alerta al usuario
alert(mensajePersonalizado);

// Muestra detallada por consola
console.log("---RESUMEN---");
console.log("Nombre del usuario:", nombreUsuario);
console.log("Año de nacimiento ingresado:", anioNacimiento);
console.log("Edad calculada:", edadCalculada);
console.log("Precio original:", precioConsulta);
console.log("Descuento (15%):", descuento);
console.log("Precio final con descuento:", precioFinal);