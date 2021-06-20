 
//A nav por tab vai dar a possibilidade de um menu ser interativo, atraves dessa interacao nos iremos ter acesso ao conteudo

// primeiro devemos dar uma classe ao html a ul dos itens que vamos interagir, podemos usar o js na frente da classe para dar a entender que // ela esta sendo manipulada no js, e tambem iremos incluir a classe no content
function initTabMenu (){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  /*
  Neste caso colocamos o li pois nao queremos falar com a ul e sim com o seu conteudo. com o conento falaremos com o seu conteudo, no caso a section que tem tudo dentro (que é o que vai aparecer quando interagirmos)
  */
  const tabContent = document.querySelectorAll('[data-tab="content"] section')
  /*
  A function abaixo passando o index que vai se repetir na array do tabContent, isso fara com que o index escolhido seja manipulado no  tabContent e add a class ative, neste caso o index vai ser a section do content

  Existe um problema, quando algum deles fica ativo e selecionamos outro, tambem ficara ativo, mas nos nao queremos isso, apenas um deve   ficar ativo entao colocaremos antes do tabContento um for each removendo todos os ativos antes de add, isso fará com que apenas um fique  ativos - basicamente é remova todo se tiver, e depois add no escolhido, se o processo for repetido, sera removido novamente e depois add
  */
  //o item abaixo sera explicado no final do codigo

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add("ativo")

    function activeTab(index) {
      tabContent.forEach((section)=>{
      section.classList.remove("ativo")
      })
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direction)
    }

    /*
    Agora vamos relacionar o tabMenu com o content, de forma que quando ele clique no menu ative o content correspondente.
    pegamso e passamos um foreach por cada item do menu, por isso itemMenu, e podemos passar o segundo argumento ao lado de itemMenu, que é o index, e esse index será o mesmo que queremos ativar. O fato do número de index ser o mesmo facilitará muito e tambem dele ja estar organizado na mesma ordem. É possivel tambem fazer comparando, por exemplo, o menu com class raposa com o content da class raposa, e a comparação sendo igual faz a selecao. 
    */
    /*
    abaixo pegamos cada item do menu e add um evento para acionar, nesse caso o clique, sempre que clicarmos acionaremos uma funcao, no caso a activeTab. mas precisaremos passar o index dentro dessa funcao, e passar ela apos o click (evento) pode dar problemas futuros, entao fazemos uma funcao qualquer e dentro dela passamos a activeTab, essa function que ja esta dentro de uma function a gente transforma em uma arrow function
    */
    tabMenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener("click", ()=> {
      activeTab(index)
    })
    })
  }
}
  // agora alteraremos o css para esconder todos elementos e mostrar o que estiver ativo, que é o clicado.

  /*
  primeiro fazemos a section sumir
  .js-tabcontent section {
    display: none;
  }
  e depois a section aparecer, lembrando que isso para acessibilidade é ruim pelo fato dela sumir dos leitores de tela.
  .js-tabcontent section.ativo {
    display: block !important;
    animation: show 0.5s forwards; essa animacao o show é o nome dela, o .5 a duracao e o forwards é que ela fique na posicao to do keyframes se nao ela volta para o from
  }

  para nao ficar seco, fazemos uma animacao
  o show é o nome da animacao, fazemos ela ficar invisivel com o opacity 0 e o transforma 3d fara ela sair do -30 esquerda de onde esta, ate o to que é 0 ou seja onde ela esta no codigo. e a animacao é chamada no section ativo.
  @keyframes show {
    from {
      opacity: 0;
      transform: translate3d(-30px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  normalmente a lista nao era clicavel, entao nao tera um cursor, entao temos que inserir para indicar que é clicavel com cursor pointer;
  e temos que dizer no codigo que o primeiro item deve estar ativo no momento que o site é aberto, se nao ficara sem nenhuma informação, ou inserimos o ativo na section 0 do html, e sempre ele estara ativo de começo ou fazemos via js.
  para isso iremos inserir la em cima o tabContent[0].classList.add("ativo")

  nos faremos uma verificacao a fim de confirmar que os items existem, pois se eles nao forem carregados, nada aparecera, e o usuario ficara perdido, para verificarmos faremos o comando if(tabMenu.length && tabContent.length) passando dentro das chaves todo o codigo {}
  o length mostra se há algo, o if so fara se for verdadeiro, se nao houver nada, será 0 e 0 é false, logo nao fara o js.

  Outra otimizacao para usuarios que nao estao com js ativos, ficarao sem o .ativo que deixa os itens hide, para isso iremos inserir o js como class do html, que é pai de tudo, e na frente das classes que criamos no css colocaremos o .js, dai ele so vai ativar a classe do css quando o .js estiver ativo la no html, o problema é que para os usuarios que estao com ele ativo o .js nao existira e logo os itens nao vao sumir, para isso criamos um script no head
  esse script add o js ao html e faz com que apareça entao os itens
   <script>
    document.documentElement.className = "js"
  </script>
  o ultimo problema desse script é que ele sobrepoe as classes que por ventura ja estejam no html, para resolver isso, colocamos o += e colocar um espaço para nao contatenar grudado.
  <script>
    document.documentElement.className += " js"
  </script>

  nesse caso o js é incluido no html com js, se ele nao estiver habilitado, ele nao ira adicionar, se ele nao adicionar, ele nao lê o css que tem .js na frente, esse css faz o hide e o active, logo tudo funciona, sem interatividade, mas com funcionalidade para os sem suportes a js.
  */

// Agora vamos isolar tudo no escopo com iniTabMenu.
initTabMenu();