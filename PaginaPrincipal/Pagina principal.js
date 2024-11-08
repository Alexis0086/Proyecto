// Función para mostrar u ocultar la lista al hacer clic
function toggleYuda() {
    const yuda = document.getElementById("yuda");
    if (yuda.style.display === "none" || yuda.style.display === "") {
        yuda.style.display = "block";
    } else {
        yuda.style.display = "none";
    }
    let Opciones = yuda.querySelectorAll('li')
    Opciones.forEach(Opcion => {
        Opcion.addEventListener('click', function(){
            let OpcionElegida = Opcion.innerText
            localStorage.setItem('OpcionElegida', OpcionElegida)
            window.location.href = '../PaginaDePais/PaginaDePais.html'
        })
    })
}

// Cerrar la lista si se hace clic fuera de ella
window.onclick = function(event) {
    const yuda = document.getElementById("yuda");
    const button = document.querySelector('.yuda-button');
    if (!button.contains(event.target) && !yuda.contains(event.target)) {
        yuda.style.display = "none";
    }
};

const btns = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".video-slide")
const contents = document.querySelectorAll(".content")

var sliderNav = function(manual){
btns.forEach((btn) => {
btn.classList.remove("active");
});

slides.forEach((slide) => {
slide.classList.remove("active");
});

contents.forEach((content) => {
content.classList.remove("active");
});

btns[manual].classList.add("active");
slides[manual].classList.add("active");
contents[manual].classList.add("active");
}
btns.forEach((btn, i) => {
btn.addEventListener("click", () => {
sliderNav(i);
})
})
