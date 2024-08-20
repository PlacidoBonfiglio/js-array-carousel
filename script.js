console.log('JS OK');

// Prendere elementi dal DOM
// Aggiungo la classe active alla prima immagine
// Rendere funzionanti i bottoni next e prev
// Rimuovere la classe active all'immagine corrente ed aggiungerla alla successiva

//Prendere elementi dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('#carousel img');

// Aggiungo la classe active alla prima immagine
let currentActiveIndex = 0
images[currentActiveIndex].classList.add('active');

// Aggiungere funziona al pulsante next
nextButton.addEventListener('click', function() {
    // Rimozione della classe active dall'immagine corrente
    images[currentActiveIndex].classList.remove('active');

    // Incremento l'indice quindi passo all'immagine successiva
    currentActiveIndex++;

    // Aggiungo la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
})


// Aggiungere funziona al pulsante prev
prevButton.addEventListener('click', function() {
    // Rimozione della classe active dall'immagine corrente
    images[currentActiveIndex].classList.remove('active');

    // Decremento l'indice quindi passo all'immagine precedente
    currentActiveIndex--;

    // Aggiungo la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
})

