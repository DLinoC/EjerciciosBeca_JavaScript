// Ejercicio 1:
// Digite el importe de una compra, en caso de que el importe sea 150 o más, se le descontará el 12%. 
// Mostrar el descuento otorgado y el importe de compra final 

// let importe= +prompt('Ingrese el importe de compra')

// if(importe>=150) {
//     dsct=importe*0.12
// } else{
//     alert('El importe de compra es menor que 150, por lo tanto; el monto final es '+importe)
// }

// total=importe-dsct

// alert('El descuento otorgado es ' +dsct + ' y el importe de la compra final es ' + total)


// Ejercicio 2:
// Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y el promedio de prácticas; 
// muestre el nombre del alumno y su promedio final solo si el alumno está aprobado. Tenga en cuenta que para 
// el cálculo del promedio la nota del examen final tiene peso doble.

// let alumno= prompt('Ingrese el nombre del alumno')
// alumno[0].toUpperCase
// let EP=+prompt('Ingrese la nota del examen parcial')
// let EF=+prompt('Ingrese la nota del examen final')
// let PP=+prompt('Ingrese el promedio de las practicas')

// promedio=(EP+EF*2+PP)/4

// if(promedio>=13){
//     alert('El alumno ' +alumno+ ' esta aprobado con un promedio de '+promedio)
// } else{
//     alert('Lamentablemente has sido desaprobado')
// }

// Ejercicio 1.1:
// Elaborar un programa que permita ingresar el nombre del trabajador, su sueldo básico y el número de hijos, 
// se deberá mostrar su bonificación y el sueldo final.  Tenga en cuenta que la empresa está dando una 
// bonificación del 7% del sueldo básico sólo en el caso el trabajador tuviese hijos

// let trabajador=prompt('Ingrese el nombre del trabajador')
// trabajador[0].toUpperCase
// let sbasico=+prompt('Ingrese su sueldo basico')
// let hijos=+prompt('Ingrese el numero de hijos')

// if(hijos>1){
//     bono=7/100*sbasico
// } else{
//     alert(trabajador+' usted no recibe bonificación. Su sueldo se mantiene igual ' + sbasico)
// }

// total=sbasico+bono

// alert(trabajador+' su bonificacion es de ' +bono+ ' y el sueldo final a recibir es '+total )

// Ejercicio 2.1:
// Construir un programa que permita ingresar un número, si el número es mayor de 500, 
// se debe calcular y mostrar en pantalla el 18% de este.

// let numero=+prompt('Ingrese el numero')

// if(numero>500){
//     final=18/100*numero
//     alert('El 18% de ' +numero+ ' es '+final.toFixed(2))
// }else{
//     alert('El número se mantiene igual '+numero)
// }

// Ejercicio 3.1:
// Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es 
// el producto de todos los enteros entre 1 y el propio número y se representa por el número 
// seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)

// let numero=+prompt('Ingrese el número')
// let e=1
// for(let i=numero; i>00;i--){
//     e*=i
// }
// alert('El factorial de ' +numero+ ' es '+e)