const nome = document.getElementById('nome');
const botao = document.getElementById('botao');
const caixas = document.getElementById('caixas')



botao.addEventListener('click', () => {
nome.innerText = 'gustavo da mãe boa';
caixas.classList.add('testejs')

});