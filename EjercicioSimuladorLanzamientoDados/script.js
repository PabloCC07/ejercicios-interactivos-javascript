const boton = document.getElementById("lanzar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let texto = "";

    for (let i=1; i<=10; i++) {
        let dado = Math.floor(Math.random() * 6) + 1;
        texto += "Lanzamiento " + i + ": " + dado + "<br>";
    }

    resultado.innerHTML = texto;
});
