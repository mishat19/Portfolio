window.onload = function() {
    // Appeler la fonction pour l'élément avec l'ID 'class'
    const element = document.getElementById('class');
    if (element) {
        changeUpdateDate(element);
    }

    const element2 = document.querySelectorAll('.progress-bar-fond-projets .progress-bar-projets');
    element2.forEach(function(bar){
        animateProgressBarProjets(bar);
    })

    const progressBarElement = document.querySelectorAll('.percent');

    progressBarElement.forEach(function(progressBarElement){
        animateProgressBar(progressBarElement);
    });
};

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        arrow.style.transform = 'rotate(0deg)';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        arrow.style.transform = 'rotate(90deg)';
    }
}

function animateProgressBar(element) {
    const progress = element;
    const targetWidth = parseInt(progress.textContent, 10); // Convertit le texte en nombre
    let currentWidth = 0;

    const interval = setInterval(function() {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
        } else {
            currentWidth++;
            progress.style.width = currentWidth + '%';
            progress.textContent = currentWidth + '%';
        }
    }, 30); // Vitesse de l'animation (en millisecondes)
}

function animateProgressBarProjets(element) {
    const progress = element;
    const targetWidth = parseInt(progress.classList[2], 10); // Convertit le texte en nombre
    let currentWidth = 0;

    const interval = setInterval(function() {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
        } else {
            currentWidth++;
            progress.style.width = currentWidth + '%';
        }
    }, 15); // Vitesse de l'animation (en millisecondes)
}

function changeUpdateDate(element) {
    // Sélectionnez l'élément avec la classe 'maj-auto'
    const dateElement = element.querySelector('.maj-auto');
    if (dateElement) {
        // Mettre à jour le contenu avec la date fixe
        dateElement.innerHTML = '<b>07/04/2025 - 21h</b>';
    }
}

const verifTout = () =>{
    const langage = document.querySelector('.filtre-container input[type="checkbox"][name="tout"]');
    langage.checked = !langage.checked;
}

function filtreLangage() {
    const langages = document.querySelectorAll('.filtre-container input');
    const projets = document.querySelectorAll('.langages-container .langage-item');

    const message = document.querySelector('.langages-container .message-container');

    if(langages[8].checked){ //Tout
        projets.forEach(function(projet) {
            projet.style.display = 'flex';
        })
        message.style.display = 'none';
    } else{
        projets.forEach(function(projet) {
            projet.style.display = 'none';
        })
        message.style.display = 'block';
    }

    if (langages[1].checked) { //CSS
        projets.forEach((projet) => {
            const texteAbsoluteElements = projet.querySelectorAll('.item .image-container .absolute-elements .absolute-item .texte-absolute2');

            let contientCss = false;
            texteAbsoluteElements.forEach((element) => {
                if (element.classList.contains('css')) {
                    contientCss = true;
                }
            });

            if (!contientCss) {
                projet.style.display = 'none';
            }
        });
        verifTout();
    }
}