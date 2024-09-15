// Função para criar um card de personagem
function criarCard(personagem) {
    return `
        <div class="personagem">
            <img src="${personagem.imagem}" alt="${personagem.titulo}">
            <div class="personagem-info">
                <h2>${personagem.titulo}</h2>
                <p>${personagem.descricao}</p>
            </div>
        </div>
    `;
}

// Função para carregar os dados dos personagens na página inicial
function carregarPersonagens() {
    const personagensContainer = document.getElementById('personagens');
    personagensContainer.innerHTML = dados.map(criarCard).join('');
}

// Função para pesquisar personagens
function pesquisar() {
    const termoPesquisa = document.querySelector(".search-bar input").value.toLowerCase();
    const personagensContainer = document.getElementById('personagens');
    let resultados = "";

    if (termoPesquisa === "") {
        // Se o campo de pesquisa estiver vazio, mostra todos os personagens
        carregarPersonagens();
        return;
    }

    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(termoPesquisa) || dado.descricao.toLowerCase().includes(termoPesquisa)) {
            resultados += criarCard(dado);
        }
    }

    if (resultados === "") {
        resultados = `
            <div class="nenhum-resultado">
                <p>Nenhum resultado encontrado.</p>
            </div>
        `;
    }

    // Renderiza os resultados na mesma seção dos personagens
    personagensContainer.innerHTML = resultados;
}

// Listener para o evento de pesquisa com a tecla Enter
document.querySelector(".search-bar input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        pesquisar();
    }
});

// Listener para atualizar a pesquisa enquanto o usuário digita
document.querySelector(".search-bar input").addEventListener("input", pesquisar);

// Para pesquisar clicando na Lupa
document.querySelector(".search-icon").addEventListener("click", pesquisar);

// Carrega os personagens ao iniciar a página
document.addEventListener('DOMContentLoaded', carregarPersonagens);

