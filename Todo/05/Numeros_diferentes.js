//A tu equipo de desarrollo el cliente les ha pedido realizar un algoritmo de indexación y optimización de
//almacenamiento en el proceso de inventario.
//
//Sin embargo el equipo tiene problemas con un método que no saben como realizar de forma óptima y te
//han pedido ayuda para resolverlo.
//
//Siguiendo el Principio de responsabilidad única (SRP), vas a construir una función que tiene como única
//responsabilidad calcular la cantidad de números diferentes dentro de una lista dada.
//
//Function Description
//Complete la función en el editor abajo, la función recibe la lista de tareas, y debe retornar la cantidad de
//valores únicos que existen.
//
//Constraints
//0 ≤ N ≤ 100.000
//0 ≤ Xi ≤ 1.000.000.000

function cantidadMinimaDeDias(x) {
    // Create an empty set to store unique values
    const uniqueValues = new Set();
    
    // Loop through the array and add each value to the set
    for (let i = 0; i < x.length; i++) {
      uniqueValues.add(x[i]);
    }
    
    // Return the size of the set, which is the number of unique values
    return uniqueValues.size;
  }
  