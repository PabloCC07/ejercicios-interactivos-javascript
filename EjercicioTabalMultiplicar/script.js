const formulario = document.getElementById("formulario");
const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

// Rellenar el select con números del 1 al 10
for (let i=1; i<=10; i++) {
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    numero.appendChild(opcion);
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let valor = Number(numero.value);
    let tabla = "";

    for (let i=1; i<=10; i++) {
        tabla += valor + " x " + i + " = " + valor * i + "<br>";
    }

    resultado.innerHTML = tabla;
});
