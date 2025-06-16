window.onload = function() {
        //MAJ date derniere modification
        changeUpdateDate();

    // Page PROJETS — bars de progression
    const element2 = document.querySelectorAll('.progress-bar-fond-projets .progress-bar-projets');
    element2.forEach(function(bar){
        animateProgressBarProjets(bar);
    })

    // Page COMPETENCES — bars de progression
    const progressBarElement = document.querySelectorAll('.percent');
    progressBarElement.forEach(function(progressBarElement){
        animateProgressBar(progressBarElement);
    });

    //Panneau latéral
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

    // Page PROJETS — filtre de langages
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

    //Fenêtre modale — ouverture
    const modalContainer = document.querySelector('.visionnage');
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach(modal => {modal.addEventListener('click', toggleModal)});

    function toggleModal() {
        if(modalContainer.classList.contains('active')) {
            modalContainer.style.visibility = 'hidden';
            modalContainer.classList.remove('active');
        } else{
            modalContainer.style.visibility = 'visible';
            modalContainer.classList.add('active');
            body.classList.add('no-scroll');
        }
    }

    //Fenêtre modale — Image agrandie
    const link = document.querySelector('.media-container a')
    const image = document.querySelector('.media-container img')
    const medias = document.querySelectorAll('.medias img');

    medias.forEach(media => {
        media.addEventListener('click', () => {
            if(media.classList.contains('media1')){
                link.href = `${media.src}`;
                image.src = `${media.src}`;
            } else if(media.classList.contains('media2')){
                link.href = `${media.src}`;
                image.src = `${media.src}`;
            } else if(media.classList.contains('media3')){
                link.href = `${media.src}`;
                image.src = `${media.src}`;
            }
        })
    })
};

function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
}

// Optionnel : fermer avec la touche Échap
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeSidebar();
})

function panneauContenu(element){
    const titre = document.querySelector('.panneau-lateral .introduction h2');
    const objet = document.querySelector('.panneau-lateral .introduction p');
    const video = document.querySelector('.panneau-lateral .introduction video');
    const explications = document.querySelector('.panneau-lateral .explications');
    const medias = document.querySelectorAll('.panneau-lateral .galerie-medias .medias img');

    if(element === "grattage"){
        titre.innerHTML = "Grattage";
        objet.innerHTML = "Réalisation d'un <b>ticket à gratter</b> tout en Javascript. Réalisé en 2024, je souhaitais apprendre ce langage web" +
            " très utile pour gérer les <b>contenus dynamiques</b> ainsi que pour réaliser des tâches plus <b>complexes</b>.";

        const source = video.querySelector('source');
        source.src = '../images/grattage-video.mp4';
        video.load();

        explications.innerHTML = "Pour ce <b>premier projet</b> en JavaScript, j'ai utilisé très <b>peu d'aide</b> puisque j'avais de bonnes bases grâce à mes cours" +
            " de <b>NSI</b> de Terminale et que j'ai pu réussir facilement à comprendre la mise en place d'un graphe via une <b>bibliothèque JS</b> et de la gestion des" +
            " probabilités qui n'étaient que des <b>calculs mathématiques</b>.";

        const mediaSources = ['../images/grattage-image1.png', '../images/grattage-image2.png', '../images/grattage-image3.png'];

        medias.forEach((media, i) => {
            if (mediaSources[i]) {
                media.style.display = 'block';
                media.src = `../images/${mediaSources[i]}`;
            } else {
                media.style.display = 'none';
            }
        });
    } else if (element === "portfolio"){
        titre.innerHTML = "Portfolio";
        objet.innerHTML = "Le <b>Portfolio</b> a été mon tout premier projet en tant que <i>programmeur</i>. Ceci est la <b>deuxième version</b> de mon site." +
            " Je préfère vous épargner une présentation de la toute première version...";

        const source = video.querySelector('source');
        source.src = '../images/portfolio-video.mp4';
        video.load();

        explications.innerHTML = "Pour cette <u>v2</u> de mon Portfolio, j'ai voulu mettre l'accent sur le rendu graphique afin de pouvoir montrer mes compétences" +
            " en <b>programmation web</b> sur un site qui se veut le plus <b>professionnel</b> possible bien que j'en suis encore loin. Mais je continue (et continuerai)" +
            " à en apprendre tous les jours de ma <b>carrière d'étudiant</b> et de <b>futur programmeur</b> ! <br> J'ai essayé de mettre ce qui selon moi était le plus important afin que" +
            " vous puissiez me connaître et avoir un <b>premier aperçu</b> de mes capacités et du travail que je fournis.";

        const mediaSources = ['../images/portfolio-image1.png', '../images/portfolio-image2.png', '../images/portfolio-image3.png'];

        medias.forEach((media, i) => {
            if (mediaSources[i]) {
                media.style.display = 'block';
                media.src = `../images/${mediaSources[i]}`;
            } else {
                media.style.display = 'none';
            }
        });
    } else if (element === "messagerie"){
        titre.innerHTML = "Messagerie";
        objet.innerHTML = "Le <b>Back End</b> m'a très vite intéressé, car j'ai toujours eu un <i>esprit curieux</i> en quête de comprendre le <b>fonctionnement</b> des systèmes" +
            " qui m'entoure. C'est pour cette raison que j'ai voulu commencer par le <b>PHP</b>. Pour comprendre le fonctionnement de <b>sites internet complexes</b>.";

        const source = video.querySelector('source');
        source.src = '../images/messagerie-video.mp4';
        video.load();

        explications.innerHTML = "Cela n'a pas dû vous échapper lorsque vous avez regardé mes compétences (sinon <a href='competences.html'>Mes Compétences</a>), j'ai" +
            " peu de notions en PHP, du fait que c'est un langage plus difficile et je n'avais aucun cours qui se basait dessus. J'ai donc suivi un <b>tutoriel YouTube</b>" +
            " dans le but de découvrir et apprendre le PHP tout en développant une <b>application concrète</b>. <br> Après ce projet, je n'ai pas continué à m'exercer sur ce" +
            " langage, de ce fait, j'ai <i>perdu mes compétences</i> sur celui-ci bien que je souhaite m'y remettre incessamment sous peu.";

        const mediaSources = ['../images/messagerie-image1.png', '../images/messagerie-image2.png'];

        medias.forEach((media, i) => {
            if (mediaSources[i]) {
                media.style.display = 'block';
                media.src = `../images/${mediaSources[i]}`;
            } else {
                media.style.display = 'none';
            }
        });
    } else if (element === "morpion"){
        titre.innerHTML = "Morpion";
        objet.innerHTML = "C'est un projet que j'avais quasiment oublié et qui a failli ne pas apparaître dans cette rubrique de mon site. Néanmoins, mon cerveau a" +
            " redonné vie à ce projet qui est né du <b>Club Informatique</b> dont j'ai fait partie <b>2 ans</b> de mon lycée avec mon professeur de NSI qui m'a " +
            "<b>appris beaucoup de choses</b>.";

        const source = video.querySelector('source');
        source.src = '../images/morpion-video.mp4';
        video.load();

        explications.innerHTML = "C'est un projet qui m'a été proposé par le professeur de NSI étant chargé du <b>Club Informatique</b> - qui était également mon" +
            " professeur en cours. J'ai tout de suite était alléché par ce projet puisqu'il traitait de langages que l'on ne voyait pas en cours : <b>SQL & PHP</b>, autrement" +
            " dis, des <b>langages Back End</b>. <br> Ce Morpion est donc jouable entre <b>2 joueurs</b> en <b><abbr title='Local Area Network'>LAN</abbr></b> ou sur un <b>seul ordinateur</b>" +
            " (avec 2 navigateurs différents). Le projet n'a <b>aucune charte graphique</b> ni aucune esthétique ; cela n'était pas le but du projet de coder du <b>CSS</b>.</b>";

        const mediaSources = ['../images/morpion-image1.png', '../images/morpion-image2.png', '../images/morpion-image3.png'];

        medias.forEach((media, i) => {
            if (mediaSources[i]) {
                media.style.display = 'block';
                media.src = `../images/${mediaSources[i]}`;
            } else {
                media.style.display = 'none';
            }
        });
    } else if (element === "gps"){
        titre.innerHTML = "GPS";
        objet.innerHTML = "Dans le cadre d'une de nos <abbr title='Système Apprentissage Évalué'>SAE</abbr> de <b>Premier semestre</b>, nous avons dû réaliser un" +
            " <b>système GPS</b> qui calcule des distances à <b>vol d'oiseau</b> en <b>langage C</b>. Nous étions en équipe de <b>4 personnes</b> bien que j'ai été " +
            " le seul du groupe à réaliser cette SAE.";

        const source = video.querySelector('source');
        source.src = '../images/gps-video.mp4';
        video.load();

        explications.innerHTML = "Ce programme permet d'afficher toutes les données d'un <b>fichier CSV</b> dans un affichage structuré. Avec cela, nous avons dû" +
            "mettre en place <b>différents systèmes</b> notamment l'ajout, la suppression et la modification d'une ville. Puis, les <b>systèmes plus complexes</b> avec particulièrement :" +
            " la distance entre deux villes, la distance par rapport à une ville donnée par l'utilisateur (à l'instar de <b>Google Maps</b>) et enfin par rapport à la distance" +
            " du <b>Pôle Nord</b>. <br> Cette première SAE de <b>BUT Informatique</b> m'aura permis de découvrir la manière de s'organiser derrière un <b>cahier des charges</b> précis et une <b>deadline</b>" +
            " imposée qui était relativement proche.";

        const mediaSources = ['../images/gps-image1.png', '../images/gps-image2.png'];

        medias.forEach((media, i) => {
            if (mediaSources[i]) {
                media.style.display = 'block';
                media.src = `../images/${mediaSources[i]}`;
            } else {
                media.style.display = 'none';
            }
        });
    } else{
        titre.innerHTML = "Prochainement";
        objet.innerHTML = "Aucune information pour le moment";

        const source = video.querySelector('source');
        source.src = '';
        video.load();

        explications.innerHTML = "Description à venir";

        const mediaSources = [''];

        medias.forEach((media, i) => {
            if (mediaSources[i]) {
                media.style.display = 'block';
                media.src = `../images/${mediaSources[i]}`;
            } else {
                media.style.display = 'none';
            }
        });
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

function changeUpdateDate() {
    // Sélectionnez l'élément avec la classe 'maj-auto'
    const dateElement = document.querySelector('.update-text');
    // Mettre à jour le contenu avec la date fixe
    //dateElement.innerHTML = '<b>14/04/2025 - 00h15</b>';
    dateElement.innerHTML = "Mis à jour : 16/06/2025";
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