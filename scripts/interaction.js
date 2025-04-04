function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.faq-question .arrow');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        arrow.style.transform = 'rotate(0deg)';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        arrow.style.transform = 'rotate(90deg)';
    }
}

function changeUpdateDate(element) {
    // Sélectionnez l'élément avec la classe 'maj-auto'
    const dateElement = element.querySelector('.maj-auto');
    if (dateElement) {
        // Mettre à jour le contenu avec la date fixe
        dateElement.innerHTML = '<b>04/04/2025 - 01h27</b>';
    }
}

window.onload = function() {
    // Appeler la fonction pour l'élément avec l'ID 'class'
    const element = document.getElementById('class');
    if (element) {
        changeUpdateDate(element);
    }
};