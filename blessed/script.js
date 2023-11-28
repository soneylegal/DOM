const paragrafo = document.querySelector('p');
paragrafo.textContent = "Resultado Calculadora";

const h1Element = document.querySelector('h1');
h1Element.textContent = "Calculadora";

document.title = "DOM";

const body = document.getElementsByTagName('body')[0];

function mudarFundo() {
    body.classList.toggle('claro');
    body.classList.toggle('escuro');
    paragrafo.style.color = body.classList.contains('escuro') ? 'white' : 'black';
    h1Element.style.color = body.classList.contains('escuro') ? 'white' : 'black';
}

function calcular() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resultadoSoma = numero1 + numero2;
    let resultadoMultiplicacao = numero1 * numero2;
    let resultadoDivisao = numero1 / numero2;
    let resultadoSubtracao = numero1 - numero2;

    document.getElementById('resultado').innerHTML = 
    `Soma: ${resultadoSoma}<br>
     Multiplicação: ${resultadoMultiplicacao}<br>
     Divisão: ${resultadoDivisao}<br>
     Subtração: ${resultadoSubtracao}`;

}