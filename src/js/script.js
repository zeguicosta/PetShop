let imagens = ['../src/assets/cachorro1Ed.png', '../src/assets/gato1Ed.png', '../src/assets/cachorro2Ed.png', '../src/assets/gato2Ed.png'];
let index = 0;
let time = 5000;

function slideShow() {
    document.getElementById('imgSlide').src=imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }

    setTimeout('slideShow()', time);
}

slideShow();

document.addEventListener("DOMContentLoaded", () => {
    const homeUrl = '#cabecalho';  // Defina aqui a URL da sua página home
    if (window.location.pathname !== homeUrl) {
      window.location.href = homeUrl;  // Redireciona para a home
    }
});