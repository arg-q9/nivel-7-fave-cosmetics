const track = document.getElementById("hero-track");

const slides = document.querySelectorAll('.hero-slide');
const slideTotal = slides.length;

let indiceActual = 0;

function moverHero(){
    indiceActual++;

    if(indiceActual >= slideTotal){
        indiceActual = 0;

    }

    const desplazamiento = -(indiceActual*100);
    track.style.transform = `translateX(${desplazamiento}%)`;

    
}
setInterval(moverHero,3000);

const whis = document.querySelectorAll(".btn-wishlist");

whis.forEach(btn => {
    btn.addEventListener("click",function(){

        this.classList.toggle("active");


    });
});


