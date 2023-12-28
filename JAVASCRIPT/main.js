// mostrar menu

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

const abrir_2 = document.querySelector("#abrir-2");

abrir_2.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// cambiar imagen hero

const img_1 = document.querySelector("#imagen1"); 
const img_2 = document.querySelector("#imagen2");
const flecha_izq = document.querySelector("#flecha-izquierda");
const flecha_der = document.querySelector("#flecha-derecha");

flecha_der.addEventListener("click", () => {
    if (img_1.classList.contains("visible")){
        img_1.classList.remove("visible");
        img_2.classList.add("visible");
    } else{
        img_2.classList.remove("visible");
        img_1.classList.add("visible");
    };
});

flecha_izq.addEventListener("click", () => {
    if (img_1.classList.contains("visible")){
        img_1.classList.remove("visible");
        img_2.classList.add("visible");
    } else{
        img_2.classList.remove("visible");
        img_1.classList.add("visible");
    };
});

const img_1_bolso = document.querySelector("#imagen1-2"); 
const img_2_bolso = document.querySelector("#imagen2-2");
const flecha_izq_2 = document.querySelector("#flecha-izquierda-2");
const flecha_der_2 = document.querySelector("#flecha-derecha-2");

flecha_der_2.addEventListener("click", () => {
    if (img_1_bolso.classList.contains("visible")){
        img_1_bolso.classList.remove("visible");
        img_2_bolso.classList.add("visible");
    } else{
        img_2_bolso.classList.remove("visible");
        img_1_bolso.classList.add("visible");
    };
});

flecha_izq_2.addEventListener("click", () => {
    if (img_1_bolso.classList.contains("visible")){
        img_1_bolso.classList.remove("visible");
        img_2_bolso.classList.add("visible");
    } else{
        img_2_bolso.classList.remove("visible");
        img_1_bolso.classList.add("visible");
    };
});

