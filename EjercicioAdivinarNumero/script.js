//Declaramos las constantes que referencian los id's del código HTML
const maximo = document.getElementById("maximo");
const empezar = document.getElementById("empezar");
const juego = document.getElementById("juego");
const intento = document.getElementById("intento");
const comprobar = document.getElementById("comprobar");
const vidasTexto = document.getElementById("vidas");
const mensaje = document.getElementById("mensaje");

//Declaramos las variables que vamos a usar durante el juego
let numeroSecreto;
let vidas;
let limite;

//Oculta el apartado de juego al cargar la página
juego.style.display = "none";

/*Se le dice al botón 'empezar' que esté atento por si el usuario
hace click para ejecutar la función. Todo lo que hay dentro de la 
función se ejecutará
*/
empezar.addEventListener("click", function() {
    /*Variable para guardar el valor que introduce el usuario como
    un number, recuperando su valor del apartado 'maximo'
    */
    limite = Number(maximo.value);

    /*Comprueba si el número introducido es mayor que 1. En caso 
    de que no lo sea muestra un mensaje de error y con el return
    detiene la función.
    */
    if (limite < 1) {
        mensaje.innerHTML = "Debes escribir un número máximo válido";
        return;
    }

    /*Genera un número aleatorio entre 0 y 1, 0,43 por ejemplo. Lo multiplica
    por el límite y da como resultado un número con decimales (Ej: 2.53). Con
    'Math.floor' retiramos los decimales y nos quedamos con un número entero. 
    Finalmente usamos un +1 para que el número aleatorio vaya desde el 1 hasta
    el límite elegido
    */
    numeroSecreto = Math.floor(Math.random() * limite) + 1;

    //Declaramos una variable 'vidas' que vale 4
    vidas = 4;

    //Activa el botón 'comprobar' al empezar el juego
    comprobar.disabled = false;

    //Muestra el apartado 'juego' que antes estaba oculto
    juego.style.display = "block";
    mensaje.innerHTML = "Adivina un número entre 1 y " + limite;

    //Vacía el apartado donde el usuario escribe el número a adivinar
    intento.value = "";

    mostrarVidas();
});

/*Se le dice al botón 'comprobar' que cuando se pulse click se ejecute
el código que hay dentro de la función
*/
comprobar.addEventListener("click", function() {
    /*Variable para guardar el número que el usuario introduce, recuperando su valor
    desde el input intento y convirtiéndolo en Number
    */
    let numeroUsuario = Number(intento.value);

    /*Si el usuario introduce un número menor que uno o mayor que el límite se muestra
    un mensaje de error y se realiza un return que finaliza la ejecución de la función
    */ 
    if (numeroUsuario < 1 || numeroUsuario > limite) {
        mensaje.innerHTML = "El número debe estar entre 1 y " + limite;
        return;
    }

    /*Si el número introducido por el usuario es igual al número secreto se muestra
    un mensaje de acierto y se desactiva el botón de comprobar para que el usuario
    no pueda seguir haciéndo intentos
    */ 
    if (numeroUsuario == numeroSecreto) {
        mensaje.innerHTML = "¡Has acertado!";
        comprobar.disabled = true;
    }

    /*Si el número introducido no es igual al número secreto se resta una vida
    y se llama a la función mostrarVidas()
    */
    else {
        vidas--;
        mostrarVidas();

        /*Si las vidas son iguales a cero se muestra un mensaje anunciando que se ha perdido
        el juego, revelando el número secreto y desabilintando el botón de comprobar
        */
        if (vidas == 0) {
            mensaje.innerHTML = "Has perdido. El número era " + numeroSecreto;
            comprobar.disabled = true;
        }

        /*Se muestra un mensaje en función de si el número de usuario es mayor o menor que 
        el número secreto
        */
        else if (numeroUsuario < numeroSecreto) {
            mensaje.innerHTML = "El número secreto es mayor";
        }
        else {
            mensaje.innerHTML = "El número secreto es menor";
        }
    }
});

/*Función para mostrar las vidas que se reutiliza varias veces
*/
function mostrarVidas() {
    //Declara una variable para ir guardando las vidas
    let texto = "";

    //Bucle for para generar un texto con cuatro corazones
    for (let i=1; i<=vidas; i++) {
        texto += "❤️ ";
    }
    
    //Muestra por pantalla las vidas que tiene el usuario
    vidasTexto.innerHTML = "Vidas: " + texto;
}
