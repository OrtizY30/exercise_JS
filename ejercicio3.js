/*Para tributar un determinado impuesto se debe ser mayor de 19 años y tener unos ingresos iguales o superiores a 2.500.000 mensuales. Escribir un programa que tenga 2 variables su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.*/

let edad = 20
let ingresos = 100000000

if( edad > 19 & ingresos > 2500000){
  console.log('Debes tributar')
}
else{
  console.log('no debes tributar')
}