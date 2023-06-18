// Efeito scroll da tela --------------------------------------------------


function scrollToAnchor(event) {
    event.preventDefault();
  
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  }
  
  
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");
  smoothScrollLinks.forEach(function(link) {
    link.addEventListener("click", scrollToAnchor);
  });

//-------------------------------------------------------------------------




// Modo Dark / legth ------------------------------------------------------


//------------------------------------------------------------------------






//Menu --------------------------------------------------------------------
const menu = document.querySelector('.logoMenu');
const menuUm = document.querySelector('.menu');
let ativado = true

menu.addEventListener('click', () => {
    if(ativado){
        menuUm.classList.add('menuUm')
        ativado = false
    } else{
        menuUm.classList.remove('menuUm')
        ativado = true
    }
})

//---------------------------------------------------------------------------


// Efeito Digitação ----------------------------------------------------------
let texto = "Desenvolvedor Front End."
const velocidade = 200

const textoElemento = document.querySelector('.texto-desenvolvedor')

function exibeLetra(texto, index) {
    textoElemento.textContent = texto.slice(0, index);

    if (index < texto.length) {

        setTimeout(() => exibeLetra(texto, index + 1), velocidade)
    }

    else if (index == texto.length) {
        setTimeout(() => {
            texto = textoElemento.textContent = ""
        }, 4000)

        setTimeout(() => {
            texto = textoElemento.textContent = "Desenvolvedor Front End"
            exibeLetra(texto, 0)
        }, 4000)

    }

}

exibeLetra(texto, 0)

//------------------------------------------------------------------------------




// Modo Dark / ligth


const botao = document.querySelector('.botao');
const portifolio = document.querySelector('html')
let modo = document.querySelector('.modo')
const imgSuporte = document.querySelector(".imgContatos")

botao.addEventListener('click', () => {

    if(botao.checked) {
        portifolio.classList.add('dark')
        modo.textContent = "Dark"
        imgSuporte.src = "css/img/suporteEscuro.png";
     
    } else{
        portifolio.classList.remove('dark')
        modo.textContent = "Ligth"
        imgSuporte.src = "css/img/suporteClaro.png";
    }
})






// Efeito Caixa Projetos -------------------------------------------------------
const caixaUm = document.querySelector('.um');
const caixaDois = document.querySelector('.dois');
const caixaTres = document.querySelector('.tres');
const caixaQuatro = document.querySelector('.quatro');
const caixaCinco = document.querySelector('.cinco');
const caixaEvento = document.querySelector('.evento');
let teste = true


caixaEvento.addEventListener('click', () => {
    if (teste) {
        caixaEvento.style.width = "0"
        caixaEvento.style.height = "0"
        caixaUm.classList.add('caixaUm');
        caixaDois.classList.add('caixaDois');
        caixaTres.classList.add('caixaTres');
        caixaQuatro.classList.add('caixaQuatro');
        caixaCinco.classList.add('caixaCinco');
        teste = false
    } else{
        caixaEvento.style.width = "100px"
        caixaEvento.style.height = "100px"
        caixaUm.classList.remove('caixaUm');
        caixaDois.classList.remove('caixaDois');
        caixaTres.classList.remove('caixaTres');
        caixaQuatro.classList.remove('caixaQuatro');
        caixaCinco.classList.remove('caixaCinco');
        teste = true

    }


})



// Botao Up


window.addEventListener('scroll', () => {
    var botaoUp = document.querySelector('.botaoUp');

    if(window.scrollY > 300) {
        botaoUp.classList.add('botaoAtivado')
    } else{
        botaoUp.classList.remove('botaoAtivado')
    }
})




