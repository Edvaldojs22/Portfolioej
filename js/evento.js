
// Efeito Digitação ----------------------------------------------------------
let texto = "Desenvolvedor Fronte End"
const velocidade = 200

const textoElemento = document.querySelector('.texto-desenvolvedor') 

function exibeLetra (texto, index) {
    textoElemento.textContent = texto.slice(0, index);

    if (index < texto.length) {
        setTimeout(() => exibeLetra(texto, index + 1),velocidade)
    }
     
}

exibeLetra(texto, 0)
//------------------------------------------------------------------------------




// Efeito Caixa Projetos -------------------------------------------------------
const caixaUm = document.querySelector('.um');
const caixaDois = document.querySelector('.dois');
const caixaTres = document.querySelector('.tres');
const caixaQuatro = document.querySelector('.quatro');
const caixaCinco = document.querySelector('.cinco');
const caixaEvento = document.querySelector('.evento')


caixaEvento.addEventListener('click', () => {[
    caixaEvento.style.display = "none"
]
    caixaUm.classList.add('caixaUm');
    caixaDois.classList.add('caixaDois');
    caixaTres.classList.add('caixaTres');
    caixaQuatro.classList.add('caixaQuatro');
    caixaCinco.classList.add('caixaCinco');
   
})
//------------------------------------------------------------------------------


