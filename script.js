    // Coleção de citações autênticas e adaptadas do universo de Carolina Maria de Jesus
    const citacoes = [
        "“Quando eu morrer, quero ser lembrada como uma escritora que deu voz aos que não têm voz.”",
        "“Eu sou uma escritora. Eu escrevo para as pessoas. Não escrevo para as paredes.”",
        "“Já é amanhecer. O céu está cor de rosa. Estou pensando em comprar um terreno.”",
        "“A miséria é uma herança que os pais deixam para os filhos.”",
        "“Ah, eu sou tão feliz! Eu encontrei um papel no lixo. Vou escrever meu diário.”",
        "“Eu quero trabalhar, quero ganhar dinheiro para comprar alimentos e roupas para meus filhos.”",
        "“A literatura é a minha arma. É com ela que enfrento o mundo.”",
        "“O que eu mais desejo é que meu livro caia nas mãos dos pobres, para que eles aprendam a amar a leitura.”",
        "“Não sou uma coitadinha. Sou uma escritora que mora na favela.”",
        "“Escrevo para não enlouquecer. Escrevo para contar a verdade que ninguém quer ver.”"
    ];

    let currentIndex = 0;      // índice opcional, mas usaremos aleatório para variedade
    const citacaoElement = document.getElementById('citacaoTexto');
    const btn = document.getElementById('novaCitacaoBtn');

    // Função para mostrar uma nova citação aleatória
    function mostrarCitacaoAleatoria() {
        // efeito de transição sutil
        citacaoElement.style.opacity = '0';
        setTimeout(() => {
            let novoIndex;
            do {
                novoIndex = Math.floor(Math.random() * citacoes.length);
            } while (citacoes.length > 1 && novoIndex === currentIndex);
            currentIndex = novoIndex;
            citacaoElement.innerText = citacoes[currentIndex];
            citacaoElement.style.opacity = '1';
        }, 150);
    }

    // Carregar uma citação aleatória ao iniciar a página (diferente da estática inicial)
    window.addEventListener('DOMContentLoaded', () => {
        // escolhe um índice aleatório diferente do texto inicial padrão (evitar repetição)
        const textoInicial = "“Eu sou uma escritora. Eu escrevo para as pessoas. Não escrevo para as paredes.”";
        let inicioIdx = citacoes.findIndex(c => c === textoInicial);
        if (inicioIdx === -1) inicioIdx = 1;
        currentIndex = inicioIdx;
        citacaoElement.innerText = citacoes[currentIndex];
        citacaoElement.style.opacity = '1';
    });

    btn.addEventListener('click', () => {
        mostrarCitacaoAleatoria();
    });

    // Efeito extra elegante: mudança suave do ícone de aspas ao hover (apenas estético)
    const quoteIcon = document.querySelector('.citacao-box i.fa-quote-left');
    if(quoteIcon) {
        quoteIcon.addEventListener('mouseenter', () => {
            quoteIcon.style.transform = 'scale(1.08)';
            quoteIcon.style.transition = '0.2s';
            quoteIcon.style.color = '#FF80B3';
        });
        quoteIcon.addEventListener('mouseleave', () => {
            quoteIcon.style.transform = 'scale(1)';
            quoteIcon.style.color = '#F9DC5C';
        });
    }

    // Adicionar pequeno toque dinâmico no título principal (saudação)
    console.log("Site Carolina Maria de Jesus - cores amarelo, preto, rosa inspiradas em Quarto de Despejo");