document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.avaliacao-card');
    const setaEsquerda = document.getElementById('seta-esquerda');
    const setaDireita = document.getElementById('seta-direita');
    let currentIndex = 0;

    // Função para mostrar o card atual e ocultar os outros
    function showCurrentCard() {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.style.display = 'block'; // Mostra o card atual
            } else {
                card.style.display = 'none'; // Oculta os outros cards
            }
        });
    }

    // Evento para a seta direita
    setaDireita.addEventListener('click', function() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta ao primeiro card se estiver no último
        }
        showCurrentCard();
    });

    // Evento para a seta esquerda
    setaEsquerda.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1; // Vai para o último card se estiver no primeiro
        }
        showCurrentCard();
    });

    // Inicializa o carrossel mostrando o primeiro card
    showCurrentCard();
});