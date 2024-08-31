let currentCard = 1;
let shownCards = []; // Array untuk menyimpan card yang sudah ditampilkan

function showCard(cardNumber) {
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`card${i}`).style.display = 'none';
    }
    document.getElementById(`card${cardNumber}`).style.display = 'flex';
}

function nextCard(cardNumber) {
    currentCard = cardNumber;
    shownCards.push(cardNumber); // Simpan card yang ditampilkan
    showCard(currentCard);
}

function showResponse(cardNumber) {
    if (cardNumber === 8) {
        currentCard = cardNumber;
        shownCards = []; // Reset shown cards
    } else if (cardNumber === 'random') {
        // Display a random card from 5 to 7 that hasn't been shown
        let availableCards = [5, 6, 7].filter(card => !shownCards.includes(card));
        if (availableCards.length === 0) {
            // All cards have been shown, reset the shownCards array
            availableCards = [5, 6, 7];
            shownCards = [];
        }
        currentCard = availableCards[Math.floor(Math.random() * availableCards.length)];
    } else {
        currentCard = cardNumber;
    }
    shownCards.push(currentCard); // Simpan card yang ditampilkan
    showCard(currentCard);
}

function finish() {
    document.getElementById('card8').style.display = 'none';
    // Optional: reset shownCards if you want to start fresh next time
    shownCards = [];
}

// Initialize the first card
showCard(currentCard);
