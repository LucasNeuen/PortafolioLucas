/* MENU HAMBURGUESA */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




/* NAVEGACION */
let secciones = document.querySelectorAll('section');
let NavLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    secciones.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            NavLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* QUITAR MENU */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


/* Aninacion */

const animacion =  new Typed('.multiple-text', {
    strings: ['Desarrollador Frontend'],
    animacionSpeed: 100,
    backSpeed: 150,
    backDelay: 500,
    loop: true
})







/* CERTIFICADOS */
/* document.getElementById('certificados').addEventListener('click', function() {

    var certificados = ['./img/Desarrollo Web.png']


    var container = document.getElementById('certificados-container');


    container.innerHTML = '';


    certificados.forEach(function(certificadoSrc) {
        var img = document.createElement('img');
        img.src = certificadoSrc;
        img.className = 'certificados-img';
        container.appendChild(img);
    });


    container.style.display = 'flex';
}); */