//Declaramos las constantes
const tarea = document.getElementById("tarea");
const botonAñadir = document.getElementById("añadir");
const listaTareas = document.getElementById("listaTareas");

/*Al presionar el botón de añadir se ejecutará la función
que añade a la lista las tareas
*/
botonAñadir.addEventListener("click", function() {

    /*Variables para guardar la tarea introducida
    y para crear una sección "li" en el documento HTML
    donde se irán añadiendo las tareas nuevas
    */
    let textoTarea = tarea.value;
    let nuevaTarea = document.createElement("li");

    /*Introduce dentro del <li> el texto que escribió 
    el usuario
    */
    nuevaTarea.innerHTML = textoTarea;

    /*Introduce nuevaTarea dentro de listaTareas usando la función
    appendChild que introduce un elemento hijo dentro de otro elemento
    */
    listaTareas.appendChild(nuevaTarea);

    //Vacía la caja de texto para poder añadir otra tarea
    tarea.value = "";
});
