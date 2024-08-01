let currentCardIndex = 0;
const cards = document.querySelectorAll('.card');
const nextButtons = document.querySelectorAll('.nextBtn');

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('show');
        if (i === index) {
            card.classList.add('show');
        }
    });
}

nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const nextIndex = (currentCardIndex + 1) % cards.length;
        showCard(nextIndex);
        currentCardIndex = nextIndex;
    });
});

// Show the first card initially
showCard(currentCardIndex);
