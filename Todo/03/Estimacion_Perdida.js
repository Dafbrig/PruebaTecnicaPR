//Diego es un líder de proyectos, que muy juicioso llevaba el control de las estimaciones de las tareas
//asignadas a los diferentes equipos y personas en un Excel, pero por desgracia el archivo quedó corrupto
//y no pudo ser rescatado.
//
//Sin embargo Diego tenía un resumen que entregaba a su jefe cada semana, donde le contaba por equipo,
//la cantidad de tareas que dicho equipo tenía, el promedio aritmético de las estimaciones de tareas
//definido en horas, y la duración de la tarea con menor valor estimado.
//
//Diego necesita saber para una presentación hoy con el cliente, ¿Cuál es la máxima duración que puede
//tener una de las tareas? Y te ha pedido ayuda para resolver el problema.
//
//Function Description
//Complete la función en el editor abajo, la función recibe la lista de equipos con 3 valores (N,R,T), y debe
//retornar una lista que representa el numero de días necesario para pagar cada deuda.
//equipo[j][0] = (N) El número de tareas asignadas en el equipo j
//equipo[j][1] = (T) El número de horas promedio de las tareas en el equipo j
//equipo[j][2] = (R) La duración en horas de la tarea más pequeña en el equipo j

  function maximoNumeroHoras(equipo) {
    let maxDuracion = 0;
    for (let i = 0; i < equipo.length; i++) {
        if (equipo[i][2] > maxDuracion) {
            maxDuracion = equipo[i][2];
        }
    }
    return maxDuracion;
}
