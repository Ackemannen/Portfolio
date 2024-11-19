const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.4 // Trigger when 40% of the element is visible
});

// Observe each project card
const projectCards = document.querySelectorAll('.project.card');
projectCards.forEach(card => {
    observer.observe(card);
});

const contactDiv = document.querySelector('.contact-div');
    observer.observe(contactDiv);