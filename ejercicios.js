// Ejercicio 1:

let numH = +prompt('Ingrese la cantidad de Hombres')
let numM = +prompt('Ingrese la cantidad de Mujeres')

porcentajeH= numH*100/(numH+numM)
porcentajeM= numM*100/(numH+numM)

alert('El porcentaje de Hombres es: ' +porcentajeH.toFixed(2) + '%')
alert('El porcentaje de Mujeres es: ' +porcentajeM.toFixed(2) + '%')

// Ejercicio 2:

let monto = +prompt('Ingrese el monto de dinero destinado para la inverción')

av1 = monto*0.35
av2 = monto*0.25
av3 = monto*0.10
av4 = monto*0.15
av5 = monto -(av1+av2+av3+av4)

alert('La avenida Mar recibira: '+ av1)
alert('La avenida Abancay recibira: '+ av2)
alert('La avenida 28 de Julio recibira: '+ av3)
alert('La avenida Aviación recibira: '+ av4)
alert('La avenida Tacma recibira: '+ av5)

// Ejercicio 3:

let menores = +prompt('Cuantos de los que iran son menores de edad');
let generales = +prompt('¿Cuantos de los que iran son mayor o igual a 18 pero menor o igual a 65 años');
let cochos = + prompt('¿Cuantos de los que iran son mayores que 65?');

let general = generales * 150;
let viejos    = cochos * 50;
let niños    = menores * 80;

alert('La cantidad de dinero recaudado de las entradas para los ancianos es: ' + viejos)
alert('La cantidad de dinero recaudado de las entradas generales es: ' +  general)
alert('La cantidad de dinero recaudado de las entradas para los niños es: ' + niños)