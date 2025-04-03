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