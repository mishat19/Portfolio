window.onload = function() {
    // Message MAJ
    const element = document.getElementById('class');
    if (element) {
        changeUpdateDate(element);
    }

    // Page PROJETS - bars de progression
    const element2 = document.querySelectorAll('.progress-bar-fond-projets .progress-bar-projets');
    element2.forEach(function(bar){
        animateProgressBarProjets(bar);
    })

    // Page COMPETENCES - bars de progression
    const progressBarElement = document.querySelectorAll('.percent');
    progressBarElement.forEach(function(progressBarElement){
        animateProgressBar(progressBarElement);
    });

    // Page PROJETS - filtre de langages
    const langages = document.querySelectorAll('.filtre-container input[type="checkbox"]');
    const checkboxTout = langages[8]; // La case "Tout"

    langages.forEach((langage, index) => {
        langage.addEventListener('change', () => {
            if (index !== 8 && langage.checked) {
                checkboxTout.checked = false;
            }
            filtreLangage();
        });
    });

    checkboxTout.addEventListener('change', () => {
        if (checkboxTout.checked) {
            langages.forEach((langage, index) => {
                if (index !== 8) {
                    langage.checked = false;
                }
            });
        }
        filtreLangage();
    });

    const panneau = document.querySelector('.panneaux-container');
    const btnActivation = document.querySelectorAll('.details');
    const btnDesactivation = document.querySelector('.closeBtn');
    const body = document.body;

    btnActivation.forEach(activation => {
        activation.addEventListener('click', () => {
            panneau.classList.add('open');
            body.classList.add('no-scroll');
            //alert(activation.id);
            panneauContenu(activation.id);
        });
    })

    btnDesactivation.addEventListener('click', () => {
        panneau.classList.remove('open');
        body.classList.remove('no-scroll');
    });

    //Panneau latéral dynamique

};

function panneauContenu(element){
    const titre = document.querySelector('.panneau-lateral .introduction h2');
    if(element === "grattage"){
        titre.innerHTML = "Grattage";
    } else if (element === "portfolio"){
        titre.innerHTML = "Portfolio";
    } else{
        titre.innerHTML = "{Undefined}";
    }
}

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    //const arrow = element.querySelector('.arrow'); A REGLER PLUS TARD

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
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
        dateElement.innerHTML = '<b>09/04/2025 - 22h00</b>';
    }
}

function filtreLangage() {
    const langages = document.querySelectorAll('.filtre-container input[type="checkbox"]');
    const projets = document.querySelectorAll('.projets-elements .projet-item');
    const message = document.querySelector('.projets-elements .message-container');
    let projetVisible = false;

    if (langages[8].checked) { // "Tout" est coché
        projets.forEach(projet => {
            projet.style.display = 'flex';
        });
        message.style.display = 'none';
        return;
    }

    projets.forEach(projet => {
        const texteAbsoluteElements = projet.querySelectorAll('.item .image-container .absolute-elements .absolute-item .texte-absolute2');
        let contientLangage = false;

        texteAbsoluteElements.forEach(element => {
            langages.forEach((langage, index) => {
                if (index !== 8 && langage.checked && element.classList.contains(langage.id)) {
                    contientLangage = true;
                }
            });
        });

        if (contientLangage) {
            projet.style.display = 'flex';
            projetVisible = true;
        } else {
            projet.style.display = 'none';
        }
    });

    if (projetVisible) {
        message.style.display = 'none';
    } else {
        message.style.display = 'block';
    }
}