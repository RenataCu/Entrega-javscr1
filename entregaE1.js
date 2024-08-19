// 1-Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

console.log("#################EJERCICIO N°1##############")

function parImpar(num=0){
   return (num % 2 !== 0) ? `el numero ${num} es impar`: `el numero ${num} es par`;
}
console.log(parImpar(2));
console.log(parImpar(5));

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

console.log("#################EJERCICIO N°2##############")

function compara(num1=0,num2=0){
   if (num1 > num2){
      return num1 + " es mayor" + num2;
   } else if (num1 < num2) {
      return num2 + "es mayor" + num1;
   } else {
      return "Ambos números son iguales"
   }
}
console.log(compara(8, 3))
console.log(compara(2, 2))

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

console.log("#################EJERCICIO N°3##############")

function multiploDECinco (num){
   if (num % 5===0){
      return (`Si, el número ${num} es múltiplo de 5.`);
   } else{
      return (`No, el número ${num} no es múltiplo de 5`)
      
   }
}
console.log(multiploDECinco(5))
console.log(multiploDECinco(5))

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

console.log("#################EJERCICIO N°4##############")

function imprimir(num){
   let i=0;
   while (i <= num){
      console.log(i);
      i++;
   }
}
imprimir(2)

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

console.log("#################EJERCICIO N°5##############")

function repetirPalabra (palabra, numero) {
   for (let i = 0; i< numero; i++){
      console.log(palabra);
   }
}
repetirPalabra(`hola`, 2)

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

console.log("#################EJERCICIO N°6##############")

function primerarray(array){
   for (let valor of array){
      console.log(valor);
   }
}
array1 =[1,2,3,4,5];
primerarray(array1);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

console.log("#################EJERCICIO N°7##############")

function segundoArray(array2){
   let index= 0;
   for (let valor of array2){
      if (index !==4) {
         console.log(valor);
      }
      index++;
   }
}
array2=[1,2,3,4,5,6,7,8,9,10];
segundoArray(array2)

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

console.log("#################EJERCICIO N°8##############")

function multiploDeArray(array3,num){
   for(let valor of array3){
      console.log(valor * num);
   }
}
array3 = [1,2,3,4,5,6];
let multiplicador = 3;
multiploDeArray(array3, multiplicador)