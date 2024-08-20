console.log('JS OK');

// Creazione costante con le immagini
// Prendere elementi dal DOM
// Creare le immagini
// Aggiungo la classe active alla prima immagine
// Rendere funzionanti i bottoni next e prev
// Rimuovere la classe active all'immagine corrente
// Controllo se vado fuori Array 
// Aggiungo la classe active all'immagine successiva


// Creazione costante con le immagini
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

//Prendere elementi dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');

// Creo l'elemento immagine e lo stampo in pagina
let imgs = '';

for (let i = 0; i < sources.length; i++) {
    imgs += `<img alt="immagine-${i + 1}" src="${sources[i]}">`;
}

carouselGallery.innerHTML = imgs;

const images = document.querySelectorAll('#carousel img');

// Aggiungo la classe active alla prima immagine
let currentActiveIndex = 0
images[currentActiveIndex].classList.add('active');

// Aggiungere funziona al pulsante NEXT
nextButton.addEventListener('click', function() {
    // Rimozione della classe active dall'immagine corrente
    images[currentActiveIndex].classList.remove('active');

    // Incremento l'indice quindi passo all'immagine successiva
    currentActiveIndex++;

    // Controllo se vado fuori dall arrayù
    if (currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }

    // Aggiungo la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
})

// Aggiungere funziona al pulsante PREV
prevButton.addEventListener('click', function() {
    // Rimozione della classe active dall'immagine corrente
    images[currentActiveIndex].classList.remove('active');

    // Decremento l'indice quindi passo all'immagine precedente
    currentActiveIndex--;

    // Controllo se vado fuori dall arrayù
    if (currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }

    // Aggiungo la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
})

