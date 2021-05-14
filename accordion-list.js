/*
A primeira coisa que vamos fazer é adicionar uma classe na pergunta do nosso FAQ.
*/

//o init abaixo guarda tudo em um escopo e é iniciado la embaixo.
function initAccordion (){

  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo"
  if (accordionList.length){
    /*
    o codigo abaixo serve para deixar o primeiro item do FAQ ja aberto para mostrar para o usuario que da para interagir. fazemos o mesmo com next elemento pois a resposta tambem deve estar visivel.
    */

    //como todas as class sao string ativo, trocamos por uma const com o mesmo sentido.

    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    /*
    criamos a função com o this que se refere ao item abaixo, ou seja, ele proprio.
    colocamos que sempre que a função for ativa ela add a class ativo no elemento a sua frente, ou seja a resposta do FAQ, mas add tambem no 
    proprio elemento pois faremos um efeito na pergunta.
    */

    function activeAccordion(){
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    //aqui criamos a funcion para passar por todos os itens da lista e ativar a função que criamos
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion)
    })
  }   
}

initAccordion();

/*
css

aqui tiramos o display das respostas do FAQ o dd
.js .js-accordion dd {
  display: none;
}

inserimos um pointer no dt para saber que é clicavel
.js .js-accordion dt {
  cursor: pointer;
}

inserimos uma setinha 
.js .js-accordion dt::after {
  content: "⮯";
  margin-left: 10px;
}

inserimos outra setinha quando estiver com a class ativo
.js .js-accordion dt.ativo::after {
  content: "⮭";
}

a class do dd ativo com a animação
.js-accordion dd.ativo {
  display: block;
  animation: showAccordion 0.5s forwards;
}


a animação, poderiamos trocar o transform por max-heigth, pois so heigth nao funciona, dai a animação viria debaixo, mas nesse caso precisariamos colocar uma valor que com certeza ficasse maior que o conteudo, para nao dar problemas.
@keyframes showAccordion {
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}


*/