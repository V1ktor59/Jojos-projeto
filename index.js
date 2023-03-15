const botoescarrossel = document.querySelectorAll('.botao');
const imagem = document.querySelectorAll('.imagem');


botoescarrossel.forEach((botao, indice) => {
botao.addEventListener('click', () => { 

const botaoselecionado = document.querySelector('.selecionado');
botaoselecionado.classList.remove('selecionado');

botao.classList.add('selecionado');

const imagemativa = document.querySelector('.ativa')
imagemativa.classList.remove('ativa');

imagem[indice].classList.add('ativa');

  })
  
})