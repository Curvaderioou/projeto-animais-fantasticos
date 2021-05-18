//Iremos animar cada seção, para que quando o scroll desça até ela, ela anime e apareça

function initAnimaScroll(){

  //Primeiro iremos colocar uma classe nas sections, para podermos manipula-las
  const sections = document.querySelectorAll(".js-section-scroll");

  //a seguir veremos se a sections existem, para somente acontecer se existir
  if (sections.length){

    // abaixo a const que pega a altura da tela e multiplicando por 0.6 nos da 60% que é a altura ideal para a animação acontecer
    const windowsHalf = window.innerHeight * 0.6;

    // criamos uma função de animar o scroll
    function animaScroll(){
      //agora temos que saber a distancia de cada elemento do topo, para nao ficar ativando full time
      sections.forEach((section)=>{
        /*
        abaixo criamos uma const para guardar a distancia, e aplicamos o getboundingclientrect, ele da todas as distancias, pondo o top no fim, dará só o top.
        a frente do top tem que ter alguma referencia de numero que permita animar antes de chegar no 0, pois se nao a animacao ocorre somente quando estamos exatamente no 0, quando o ideal é antes, para isso criamos uma const que permita pegar % da tela, se fosse valor fixo, prejudicaria a depender do dispositivo do usuario.
        */
        const sectionTop = section.getBoundingClientRect().top - windowsHalf;
        if (sectionTop < 0){
          section.classList.add("ativo")
        }
        //caso queiramos remover para animar denovo quando o usuario sobe, basta fazer um else com section.classList.remove("ativo")
      })    
    };
  }

  //Abaixo acionamos a função a primeira vez para ativar ele na entrada.
  animaScroll()

  // criamos o evento para disparar a function de cima, ele é no window por que é onde ocorre o scroll

  window.addEventListener("scroll", animaScroll);
}
initAnimaScroll();