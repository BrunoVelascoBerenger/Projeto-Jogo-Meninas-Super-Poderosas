const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        
        const NomeSelecionado = personagem.getAttribute('data-name');
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/images/${idSelecionado}.png`;
        
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        nomeJogador1.innerHTML = NomeSelecionado;
    })
})