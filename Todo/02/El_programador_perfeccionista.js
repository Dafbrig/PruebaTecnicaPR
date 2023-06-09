//Ricardo es miembro de nuestro equipo, y aunque suele ser muy productivo, sufre de un impulso que le
//lleva a perfeccionar y reescribir una parte del trabajo que hace cada día.
//Cada día es capaz de escribir F cantidad de funciones nuevas, pero su impulso lo lleva el mismo día a
//borrar R cantidad de las funciones, y así cada día, increíblemente cuando termina su trabajo no vuelve a
//refactorizar ninguna función, sino que envía el pull request a review.
//
//Todos aman el trabajo de Ricardo, pero el arquitecto del equipo está preocupado por el deadline(fecha de
//entrega) de las historias que le asigna a Ricardo, y te pide ayuda con un programa que determine si
//Ricardo podrá cumplir con su asignación.
//
//Para ello el arquitecto te entregará un numero D correspondiente al número de días del deadline de
//entrega, T la cantidad de funciones totales que espera el cliente que realice Ricardo, F la cantidad de
//funciones nuevas que escribirá Ricardo por día, R la cantidad de funciones que borrará Ricardo cada día
//al finalizar su trabajo.

//Calcule si Ricardo puede o no cumplir con las tareas asignadas.
//true Lo logrará
//false No lo logrará

//La plantilla convertirá el true en 1 y false en 0 automáticamente

function podraCumplir(caso) {
    let D = caso[0] + 1;
    let T = caso[1];
    let F = caso[2];
    let R = caso[3];
  
    let result = D * (F - R) - T;
    return result >= 0;
  }
  
  function podraCumplirLista(casos) {
    return casos.map(caso => podraCumplir(caso));
  }
  