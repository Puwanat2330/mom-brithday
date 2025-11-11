document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    if (audio) {
        audio.play().catch(error => {
            console.log('Autoplay was prevented, waiting for user interaction.');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded!');

    // --- Logic for Home Page (Confetti Background) ---
    const homeBackground = document.getElementById('homeBackground');
    if (homeBackground) {
        function createHomeConfetti() {
            const confetti = document.createElement('div');
            confetti.classList.add('home-confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 5 + 's'; // Stagger start times
            homeBackground.appendChild(confetti);
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
        // Generate confetti continuously for the home page
        setInterval(createHomeConfetti, 300); // Adjust interval for more/less confetti
    }


    // Logic for Letter Page (envelope interaction)
    const envelope = document.querySelector('.envelope');
    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('open');
            // Optional: Play a sound when opening
        });
    }

    // Logic for Puzzle Page (card flip)
    const puzzleCards = document.querySelectorAll('.puzzle-card');
    puzzleCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Confetti effect for finale page (already in finale.html, but can be moved here if preferred)
    // For now, keep it in finale.html as per previous instruction.
});