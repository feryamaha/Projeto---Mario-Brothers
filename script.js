
let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")


function cliqueiNoBotao() {
    formulario.style.left = "40px"
    mascara.style.visibility = "visible"
}

function sumirFormulario() {
    formulario.style.left = "-100px"
    mascara.style.visibility = "hidden"
}


function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {

        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 60 * i)

    });
}
const titulo = document.querySelector('p');
typeWrite(titulo);


const f = document.getElementById("foo");
document.addEventListener(
    "click",
    (ev) => {
        f.style.transform = `translateY(${ev.clientY - 25}px)`;
        f.style.transform += `translateX(${ev.clientX - 25}px)`;
    },
    false,
);