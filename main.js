// VARIABILI

const array = [`<img src="img/01.webp" alt="Immagine1">`,
    `<img src="img/02.webp" alt="Immagine2">`,
    `<img src="img/03.webp" alt="Immagine3">`,
    `<img src="img/04.webp" alt="Immagine4">`,
    `<img src="img/05.webp" alt="Immagine5">`]

const imgContainer = document.getElementById("imgContainer")
const thumbnailsContainer = document.getElementById("thumbnailsContainer")

let activeItem = 0; 


// Inserisco nel thumbnailsContainer le immagini
const thumbnailsImage = array.forEach(element => {
    let immagine = `<div class="thumbnailsImg opacityYes">${element}</div>`
    thumbnailsContainer.innerHTML += immagine
});

// Definisco la nodelist di classi di thumbnailsImg
const miniatura = document.querySelectorAll(".thumbnailsImg")
miniatura[activeItem].classList.add("active")
miniatura[activeItem].classList.remove("opacityYes")


// Inserisco nel imgContainer l'immagine con activeItem = 0
imgContainer.innerHTML = array[activeItem]




// Gestisco l'evento sul click sul NEXT
rightButton.addEventListener("click",
    function () {

        // Definisco la variabile immagine
        let immagine = array[activeItem+1]

        // Rimuovo la classe activeItem dall'elemento
        miniatura[activeItem].classList.remove("active")
        miniatura[activeItem].classList.add("opacityYes")

        // Se non sono all'ultimo elemento
        if (activeItem == array.length - 1) {
            activeItem = 0
            immagine = array[activeItem]
        }

        else {
            activeItem++
        }

        // Aggiungo la classe activeItem all'elemento
        miniatura[activeItem].classList.add("active")
        miniatura[activeItem].classList.remove("opacityYes")

        // Incollo l'immagine a imgContainer
        document.getElementById("imgContainer").innerHTML = immagine
    }
)



// Gestisco l'evento sul click sul BEFORE
leftButton.addEventListener("click",
    function () {

        // Definisco la variabile immagine
        let immagine = array[activeItem-1]

        // Rimuovo la classe activeItem dall'elemento
        miniatura[activeItem].classList.remove("active")
        miniatura[activeItem].classList.add("opacityYes")

        // Se non sono al primo elemento
        if (activeItem == 0) {
            activeItem = array.length-1
            console.log(activeItem);
            immagine = array[activeItem]
        }

        else {
            activeItem--
        }
    
        // Aggiungo la classe activeItem all'elemento
        miniatura[activeItem].classList.add("active")
        miniatura[activeItem].classList.remove("opacityYes")

        // Incollo l'immagine a imgContainer
        document.getElementById("imgContainer").innerHTML = immagine
    }
)

