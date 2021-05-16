/*
inserismo uma classe no nosso menu, para caso haja mais de um menu isso só afetar ele, a nao ser que todos os menus tenham o mesmo comportamento
*/

function initScrollSuave(){
  // abaixo selecionamos todos os "a" que começam com # dentro do js-menu
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']")


  /*
  a gente previne o padrao do clique, e pede para dar o alvo de onde estamos clicando, mas ele dá a linha do "a" toda, entao colocamos tambem o get attribute que nos permite pegar o atributo href que é o que vamos ligar ao id.
  */
  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    // criamos agora uma nova var que pega o atributo que criamos acima e que vai nos levar a secao que queremos
    const section = document.querySelector(href)
    /* 
    agora vamos usar o scrollIntoView que nos leva até o elemento que indicamos, no caso sera os href, ela suporta options, por isso vamos abrir a chave dentro dela. o block start serve para deixar a section sempre no topo
    */
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // fazemos com que sempre que o item seja clicado ative uma função, que é a função acima (scrollToSection)
  linksInternos.forEach((link)=>{
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();