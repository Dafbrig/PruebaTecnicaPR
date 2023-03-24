//La NASA nos ha contratado y como empresa llevaremos nuestro primer robot a Marte.

//Nuestro robot se mueve 1 metro en cada dirección con el comando Izquierda (L) Derecha (R) Arriba (U) Abajo (D).
//La NASA prepara una lista de indicaciones para el movimiento del robot desde la base de carga en el
//ejemplo marcada como punto 0.

//Sin embargo están preocupados porque en caso de una emergencia el robot pueda regresar a tiempo a la
//base de carga y quieren que evaluemos los planes de movimiento en un simulador, y les digamos la
//cantidad de instrucciones máximas que deberíamos enviar al robot cuando se encuentre en su punto más
//lejano para que pueda retornar a la base.

//Calcule cuál es el número máximo de instrucciones que debería enviarse al robot para que en algún punto
//del recorrido regrese a la base.
//Function Description

//Complete la función abajo para completar la tarea requerida, la función tendrá una lista de planes a
//ejecutar, evalúe cada uno y retorne una lista con el numero máximo de instrucciones

//Constraints
//len(instruccion) <= 10000

function calcularMaximoRetorno(instrucciones) {
    let posX = 0;
    let posY = 0;
    
    for (let i = 0; i < instrucciones.length; i++) {
      if (instrucciones[i] === 'L') {
        posX--;
      } else if (instrucciones[i] === 'R') {
        posX++;
      } else if (instrucciones[i] === 'U') {
        posY++;
      } else if (instrucciones[i] === 'D') {
        posY--;
      }
    }
    
    let distancia = Math.abs(posX) + Math.abs(posY);
    
    return [2 * distancia];
  }
  