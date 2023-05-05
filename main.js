// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
// Prima di partire a scrivere codice:
// Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
// Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti.
// Non dedichiamo però al ripasso più di una mezz’ora, così da non perdere di vista il focus dell’esercizio.


const array = [`<img src="img/01.webp" alt="Immagine1">`,
    `<img src="img/02.webp" alt="Immagine2">`,
    `<img src="img/03.webp" alt="Immagine3">`,
    `<img src="img/04.webp" alt="Immagine4">`,
    `<img src="img/05.webp" alt="Immagine5">`]


// Setto un indice per segnare l'item attivo al momento
let activeItem = 0;

let immagine = array[activeItem]

document.getElementById("imgContainer").innerHTML = immagine




// Gestisco l'evento sul click sul next
rightButton.addEventListener("click",
    function () {

        // Se non sono all'ultimo elemento
        if (activeItem < array.length - 1) {

            activeItem ++

            let immagine = array[activeItem]

            document.getElementById("imgContainer").innerHTML = immagine

            // Passare all'item successivo 
            console.log(activeItem)
        }

        // Se sono all'ultimo elemento faccio sparire il next
        else if (activeItem === (array.length - 1)) {
            activeItem == 0

            immagine = array[activeItem]

            document.getElementById("imgContainer").innerHTML = immagine

        }

    }
)



// Gestisco l'evento sul click sul before
leftButton.addEventListener("click",
    function () {

        // Se non sono all'ultimo elemento
        if (activeItem > 0) {

            activeItem -= 1

            let immagine = array[activeItem]

            document.getElementById("imgContainer").innerHTML = immagine
        }

        // Se sono al primo elemento faccio sparire il before
        else if (activeItem == 0) {
            activeItem == array.length - 1

            immagine = array[activeItem]

            document.getElementById("imgContainer").innerHTML = immagine

        }

    }
)

// for (let i = 0; i < array.length; i++) {
//     const immagine = array[i];
//     document.getElementById("imgContainer").innerHTML = immagine
// }