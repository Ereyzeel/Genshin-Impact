
// Passo 1- dar um jeito de pegar o elemento HTML dos botões
const botoesCarousel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('imagem');

// Passo 2 - Dar um jeito de identificar o clique do usuário no botão
botoesCarousel.forEach((botao,indice) => {
    botao.addEventListener('click', () =>{

        // Passo 3 -desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // Passo 4 - marcar o botão clicado como se yivesse selecionado
        botao.classList.add('selecionado');

        //passo 5- esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('ativa'); imagemAtiva.classList.remove('ativa')

        // Passo 6 -fazer aparecer a imagem do fundo correspondente ao botão clicado
       imagens[indice].classList.add('ativa')
    })
})