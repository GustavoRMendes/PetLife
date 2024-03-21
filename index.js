const elementosDuvida = document.querySelectorAll('.duvida')
const botao = document.querySelector('.botao')
elementosDuvida.forEach(function(duvida){
  duvida.addEventListener('click',function (){
    duvida.classList.toggle('ativa')
  })
})

botao.addEventListener('click', function (){
  alert('Vamos te mandar para uma conversa com a nossa secretária para você agendar um dia!')
})