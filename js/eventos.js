
alert("Olá, Meu portfólio esta em progresso, em breve estará completo,  Sinta-se à vontade para dar uma olhada.🤗 ")


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
smoothScrollLinks.forEach(function (link) {
    link.addEventListener("click", scrollToAnchor);
});

//-------------------------------------------------------------------------



//Menu --------------------------------------------------------------------
const menu = document.querySelector('.logoMenu');
const menuUm = document.querySelector('.menu');
const header = document.querySelector('.painel-perfil')
let ativado = true

menu.addEventListener('click', () => {
    if (ativado) {
        menuUm.classList.add('menuUm')
        ativado = false
    } else {
        menuUm.classList.remove('menuUm')
        ativado = true
    }
})
//---------------------------------------------------------------------------



// Efeito Digitação ----------------------------------------------------------
let texto = "Software developer."
const velocidade = 100

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
            texto = textoElemento.textContent = "Software developer."
            exibeLetra(texto, 0)
        }, 4000)

    }

}

exibeLetra(texto, 0)
//------------------------------------------------------------------------------




// Modo Dark / ligth / cores
const botao = document.querySelector('.botao');
const portifolio = document.querySelector('html')
let modo = document.querySelector('.modo')
const imgSuporte = document.querySelector(".imgContatos")

botao.addEventListener('click', () => {

    if (botao.checked) {
        portifolio.classList.add('ligth')
        modo.textContent = "Ligth"
        imgSuporte.src = "css/img/suporteClaro.png";
    } else {
        portifolio.classList.remove('ligth')
        modo.textContent = "Dark";
        imgSuporte.src = "css/img/suporteEscuro.png";
    }
})

const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const yellow = document.querySelector('#yellow');
const grenn = document.querySelector('#green');
const pink = document.querySelector('#pink');
const purple = document.querySelector('#purple')
const listaCores = [red, blue, yellow, grenn, pink, purple]

listaCores.forEach((cor) => {
    cor.addEventListener('click', () => {
        if (cor.id == 'red') {
            portifolio.classList.remove('corPink');
            portifolio.classList.remove('corGreen');
            portifolio.classList.remove('corYellow');
            portifolio.classList.remove('corBlue');
            portifolio.classList.add('corRed');

        } else if (cor.id == 'blue') {
            portifolio.classList.remove('corPink');
            portifolio.classList.remove('corGreen');
            portifolio.classList.remove('corYellow');
            portifolio.classList.remove('corRed');
            portifolio.classList.add('corBlue');

        } else if (cor.id == 'yellow') {
            portifolio.classList.remove('corPink');
            portifolio.classList.remove('corGreen');
            portifolio.classList.remove('corBlue');
            portifolio.classList.add('corRed');
            portifolio.classList.add('corYellow');

        } else if (cor.id == 'green') {
            portifolio.classList.remove('corPink');
            portifolio.classList.remove('corBlue');
            portifolio.classList.remove('corRed');
            portifolio.classList.remove('corYellow');
            portifolio.classList.add('corGreen');

        } else if (cor.id == 'pink') {
            portifolio.classList.remove('corGreen');
            portifolio.classList.remove('corBlue');
            portifolio.classList.remove('corRed');
            portifolio.classList.remove('corYellow');
            portifolio.classList.remove('corGreen');
            portifolio.classList.add('corPink')

        } else if (cor.id == 'purple') {
            portifolio.classList.remove('corGreen');
            portifolio.classList.remove('corBlue');
            portifolio.classList.remove('corRed');
            portifolio.classList.remove('corYellow');
            portifolio.classList.remove('corGreen');
            portifolio.classList.remove('corPink');
            portifolio.classList.remove('corPink')
        }
    })
})


const corSeta = document.querySelector('#seta');
const painelCores = document.querySelector('.painel-opcao');
let t = true
corSeta.addEventListener('click', () => {
    painelCores.style.display = 'flex'

})


document.querySelector('#esconder').addEventListener('click', () => {
    painelCores.style.display = 'none';
})


// ---------------------------------------------------------------------------------


// Efeito Caixa Projetos -------------------------------------------------------
const caixaUm = document.querySelector('.um');
const caixaDois = document.querySelector('.dois');
const caixaTres = document.querySelector('.tres');
const caixaQuatro = document.querySelector('.quatro');
const caixaCinco = document.querySelector('.cinco');
const caixaEvento = document.querySelector('.evento');
const caixaProjetos = document.querySelectorAll('.caixa-projetos')
let teste = true


caixaEvento.addEventListener('click', () => {
    if (teste) {

        caixaProjetos.forEach((a) => {
            a.style.display = 'flex'
        })
       
        caixaUm.classList.add('caixaUm');
        caixaDois.classList.add('caixaDois');
        caixaTres.classList.add('caixaTres');
        caixaQuatro.classList.add('caixaQuatro');
        caixaCinco.classList.add('caixaCinco');
        teste = false
    } else {

        caixaProjetos.forEach((a) => {
            a.style.display = 'none'
        })

        caixaUm.classList.remove('caixaUm');
        caixaDois.classList.remove('caixaDois');
        caixaTres.classList.remove('caixaTres');
        caixaQuatro.classList.remove('caixaQuatro');
        caixaCinco.classList.remove('caixaCinco');
        teste = true

    }


})
// ---------------------------------------------------------------------------------

// Botao Up

window.addEventListener('scroll', () => {
    var botaoUp = document.querySelector('.botaoUp');

    if (window.scrollY > 300) {
        botaoUp.classList.add('botaoAtivado')
    } else {
        botaoUp.classList.remove('botaoAtivado')
    }
})



const sr = ScrollReveal();


sr.reveal('.painel-sobre-mim, .painel-habilidadesUm, .painel-projetosUm, .painel-formacao, .painel-contatos', {
    origin: 'bottom',
    distance: '20px',
    duration: 1300,
    delay: 200,
    easing: 'ease-out',
    reset: true,
});





