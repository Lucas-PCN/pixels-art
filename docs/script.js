const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

const number1 = Math.random() * 255 + 1;
const number2 = Math.random() * 255 + 1;
const number3 = Math.random() * 255 + 1;
const number4 = Math.random() * 255 + 1;
const number5 = Math.random() * 255 + 1;
const number6 = Math.random() * 255 + 1;
const number7 = Math.random() * 255 + 1;
const number8 = Math.random() * 255 + 1;
const number9 = Math.random() * 255 + 1;

secondColor.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
thirdColor.style.backgroundColor = `rgb(${number4}, ${number5}, ${number6})`;
fourthColor.style.backgroundColor = `rgb(${number7}, ${number8}, ${number9})`;

const board = document.querySelector('#pixel-board');

function addInitialBoard() {
    const lines = 5;
    const columns = 5;
    for (let i = 0; i < lines; i += 1) {
    const addSection = document.createElement('section');
    addSection.classList.add('group');
    board.appendChild(addSection);
        for (let j = 0; j < columns; j += 1) {
            const addDiv = document.createElement('div');
            addDiv.classList.add('pixel');
            addSection.appendChild(addDiv);
        }
    }
}

addInitialBoard();

const paletas = document.querySelector('#color-palette');
function selectColor (event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}
paletas.addEventListener('click', selectColor);

function paintSquare (e) {
    const select = document.querySelector('.selected')
    const background = window.getComputedStyle(select, null).getPropertyValue('background-color');
    e.target.style.backgroundColor = background;
}
board.addEventListener('click', paintSquare)

const botao = document.querySelector('#clear-board')
function clean () {
    const quadro = document.querySelectorAll('.pixel');
    for (let index = 0; index < quadro.length; index += 1) {
        quadro[index].style.backgroundColor = 'white';
    }
}
botao.addEventListener('click', clean);

const input = document.querySelector('input');
const botaoGerador = document.querySelector('#generate-board');

function confereInput(numero) {
  if (numero < 5) {
    return 5;
  }
  if (numero > 50) {
    return 50;
  }
  return numero;
}

function removeInitialBoard () {
    const group = document.querySelectorAll('.group');
    for (let index = 0; index < group.length; index += 1) {
        board.removeChild(group[index]);
    }
}

function addUserBoard () {
    if (!input.value) {
        alert('Board inválido!');
    } else {
        removeInitialBoard();
        const N = confereInput(input.value);
        const lines = N;
        const columns = N;
        for (let i = 0; i < lines; i += 1) {
            const addSection = document.createElement('section');
            addSection.classList.add('group');
            board.appendChild(addSection);
            for (let j = 0; j < columns; j += 1) {
                const addDiv = document.createElement('div');
                addDiv.classList.add('pixel');
                addSection.appendChild(addDiv);
            }
        }
    }
}

botaoGerador.addEventListener('click', addUserBoard);
