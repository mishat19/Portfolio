//Envoi d'emails
// Initialisation de EmailJS quand le DOM est prêt => éviter problème de déclaration de emailjs.init
document.addEventListener('DOMContentLoaded', function () {
    // Initialisation de EmailJS avec ta clé publique
    emailjs.init("Uls6ioH6tk28He3Dy");

    // Sélection du formulaire et ajout de l'événement "submit"
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', sendEmail);
});

// Fonction d’envoi d’email
function sendEmail(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Vérification anti-bot
    const verif = document.querySelector('#verification').value.trim();
    if (verif.toLowerCase() !== "france") {
        alert("Vérification incorrecte.");
        return;
    }

    // Paramètres pour EmailJS
    const templateParams = {
        lname: document.querySelector('#nom').value,
        fname: document.querySelector('#prenom').value,
        email: document.querySelector('#email').value,
        subject: document.querySelector('#objet').value,
        message: document.querySelector('#message').value,
    };

    // Envoi de l’email
    emailjs.send("service_ggy3nzu", "template_89ubpeg", templateParams)
        .then(() => {
            alert("Email envoyé !");
            // Réinitialise le formulaire après envoi
            event.target.reset();
        })
        .catch((error) => {
            console.error("Erreur pendant l'envoi", error);
            alert("Une erreur est survenue pendant l'envoi. Veuillez réessayer.");
        });
}