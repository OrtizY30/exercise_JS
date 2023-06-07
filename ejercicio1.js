/*Escribir un programa que con dos variables en el que se almacenen dos números y muestre por pantalla su división. Si el divisor o el dividendo es cero el programa debe mostrar un error.*/

let num1= 5
let num2= 6

let res = num1 / num2


if (num1 == 0 || num2 == 0){
  console.log('Error')
}
else{
  console.log('El resultado es:', res)
}