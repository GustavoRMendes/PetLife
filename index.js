const elementosDuvida = document.querySelectorAll(".duvida");
const botao = document.querySelector(".botao");
elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});

botao.addEventListener("click", function () {
  let confirmation = confirm("Confirma sua escolha?");
  if (confirmation) {
    alert(
      "Vamos te mandar para uma conversa com a nossa secretária para você agendar um dia!"
    );
  } 
});
