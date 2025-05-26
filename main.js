const botoes = document.querySelectorAll(".botoes");
console.log(botoes)
for(ist i=0;i<botoes.length; i++){

    botoes[i].onclick = function(){
        botoes[i].classList.add("ativo");
    }
}
