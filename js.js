const titulo = document.querySelector("h2.banner__h2")
const texto = document.querySelector("h2.banner__h2--texto")

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () { elemento.innerHTML += letra }, 75 * i)
    });
}

typeWriter(titulo)