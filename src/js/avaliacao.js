document.addEventListener('DOMContentLoaded', function () {
    // Verifica se a tela é mobile (max-width: 768px)
    const mobile = window.matchMedia('(max-width: 768px)').matches;

    if (mobile) {
        // Lógica para mobile
        console.log('Executando lógica para mobile');

        const cards = document.querySelectorAll('.avaliacao-card');
        const setaEsquerda = document.getElementById('seta-esquerda');
        const setaDireita = document.getElementById('seta-direita');
        let indiceAtual = 0;

        // Função para mostrar o card atual e ocultar os outros
        function mostrarCardAtual() {
            cards.forEach((card, index) => {
                card.style.display = index === indiceAtual ? 'block' : 'none';
            });
        }

        // Evento para a seta direita
        setaDireita.addEventListener('click', function () {
            indiceAtual = indiceAtual < cards.length - 1 ? indiceAtual + 1 : 0;
            mostrarCardAtual();
        });

        // Evento para a seta esquerda
        setaEsquerda.addEventListener('click', function () {
            indiceAtual = indiceAtual > 0 ? indiceAtual - 1 : cards.length - 1;
            mostrarCardAtual();
        });

        // Inicializa o carrossel mostrando o primeiro card
        mostrarCardAtual();
    } else {
        // Lógica para desktop
        console.log('Executando lógica para desktop');

        const cards = Array.from(document.querySelectorAll('.avaliacao-card'));
        const setaEsquerda = document.getElementById('seta-esquerda');
        const setaDireita = document.getElementById('seta-direita');

        let ordemAtual = cards.map((card, index) => index);

        console.log('Ordem inicial:', ordemAtual); // Mostra a ordem inicial

        setaDireita.addEventListener('click', () => {
            console.log('Seta direita clicada'); // Verifica se o clique foi registrado
            const primeiroCard = ordemAtual.shift();
            ordemAtual.push(primeiroCard);
            console.log('Nova ordem após seta direita:', ordemAtual); // Mostra a nova ordem
            atualizarOrdem();
        });

        setaEsquerda.addEventListener('click', () => {
            console.log('Seta esquerda clicada'); // Verifica se o clique foi registrado
            const ultimoCard = ordemAtual.pop();
            ordemAtual.unshift(ultimoCard);
            console.log('Nova ordem após seta esquerda:', ordemAtual); // Mostra a nova ordem
            atualizarOrdem();
        });

        function atualizarOrdem() {
            console.log('Atualizando ordem dos cards...'); // Verifica se a função está sendo chamada
            cards.forEach((card, index) => {
                card.style.order = ordemAtual[index];
            });
        }
    }
});