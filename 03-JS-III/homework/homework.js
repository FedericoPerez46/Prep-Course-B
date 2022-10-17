// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var suma = 0;
    for (a = 0; a < numeros.length; a++) {
      suma = suma + numeros[a];
    }
    return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  arrayDePares = [];
  for (a = 0; a < array.length; a++) {
    if (array[a] % 2 === 0) {
    arrayDePares.push(array[a])
    }
  }
  return arrayDePares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  arrayAlCuadrado = [];
  for(numero of array) {
    arrayAlCuadrado.push(Math.pow(numero, 2))
  }
  return arrayAlCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma = array.reduce(function (acc, numero) {
    return acc + numero;
  });
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var str = num.toString();
  return str.length;
 
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
