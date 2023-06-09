//Una nueva aplicación de préstamos sin cuotas de manejo, ni intereses, quiere probar una nueva
//modalidad de pagos en los préstamos, la misma consiste en que el primer día del préstamo la persona
//deba pagar solo 1 peso, y cada día que pasa deberá pagar el doble de lo que pagó el día anterior y así
//sucesivamente. El último día solo deberá pagar lo que le falte.
//
//Los interesados en la aplicación quieren hacer un pequeño simulador, que permita conocer la cantidad de
//días que se requieren para pagar una deuda en totalidad con este sistema, dada la cantidad a prestar
//inicialmente.
//
//Dado un número N deberás devolver un entero indicando la cantidad de días requerido para resolverlo.
//
//Function Description
//Complete la función en el editor abajo, la función recibe la lista de deudas, y debe retornar una lista que
//representa el numero de días necesario para pagar cada deuda.
//Constraints
//0 ≤ deuda ≤ 9223372036854775807

function calcularDias(prestamo) {
    const dias = [];
    for (let i = 0; i < prestamo.length; i++) {
      let deuda = prestamo[i];
      let pago = 1;
      let dia = 1;
      while (deuda > 0) {
        if (deuda >= pago) {
          deuda -= pago;
          pago *= 2;
        } else {
          pago = deuda;
          deuda = 0;
        }
        dia++;
      }
      dias.push(dia);
    }
    return dias;
  }
  
