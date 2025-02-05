document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.avaliacao-container');
    const cards = document.querySelectorAll('.avaliacao-card');
    const setaEsquerda = document.getElementById('seta-esquerda');
    const setaDireita = document.getElementById('seta-direita');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 98; // Calcula o deslocamento
        container.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
        console.log(`Current Index: ${currentIndex}, Offset: ${offset}%`); // Debugging
    }

    setaDireita.addEventListener('click', function() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta ao primeiro card se estiver no último
        }
        updateCarousel();
    });

    setaEsquerda.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1; // Vai para o último card se estiver no primeiro
        }
        updateCarousel();
    });

    updateCarousel(); // Inicializa o carrossel na posição correta
});