const colorPalette = document.getElementById('color-palette');
const butonReset = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');
const boardSize = document.getElementById('board-size');
const buttonGenerate = document.getElementById('generate-board');
const othercolours = document.getElementById('othersColors');

// functions
function createDivClass(numbers, local, clas) {
  for (let index = 1; index <= numbers; index += 1) {
    const element = document.createElement('div');
    element.className = clas;
    local.appendChild(element);
  }
}

// cria cores aleatórias
function rgbCode() {
  const red = parseInt((Math.random() * 250), 10);
  const green = parseInt((Math.random() * 250), 10);
  const blue = parseInt((Math.random() * 250), 10);
  return `rgb(${red}, ${green}, ${blue})`;
}

// adiciona background color aos elementos de class color.
function addbackgroundColor(index, color) {
  colors[index].style.backgroundColor = color;
}

function createColors(nun) {
  for (let index = 2; index <= nun; index += 1) {
    addbackgroundColor(index, rgbCode());
  }
}

// seletor de cores
function removeClassColor() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].removeAttribute(colors[index].className = 'color');
  }
}

function selecteColor() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', () => {
      removeClassColor();
      colors[index].className += ' selected';
    });
  }
}

// pintor de pixels.
function pixelColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      const color = document.querySelector('.selected');
      event.target.style.backgroundColor = color.style.backgroundColor;
    });
  }
}

// botão de limpar o quadro.
butonReset.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

function sizeFilter() {
  const size = parseInt(boardSize.value);
  if (size < 5) {
    return 5;
  }
  if (size > 40) {
    return 40;
  }
  return size;
}

function deletPixel() {
  const pixelLine = document.querySelectorAll('.pixelLine');
  for (let index = 0; index < pixelLine.length; index += 1) {
    pixelBoard.removeChild(pixelLine[index]);
  }
}

function widthRegulator() {
  const value = sizeFilter();
  const width = value * 43;
  pixelBoard.style.width = `${width}px`;
}

function pixelCreator(size) {
  createDivClass(size, pixelBoard, 'pixelLine display');
  const pixelLine = document.querySelectorAll('.pixelLine');
  for (let index = 0; index < pixelLine.length; index += 1) {
    createDivClass(size, pixelLine[index], 'pixel');
  }
}
pixelCreator(5);

function pixelsLength() {
  const size = sizeFilter();
  if (isNaN(size)) {
    return alert('Invalid board!');
  }
  deletPixel();
  widthRegulator();
  pixelCreator(size);
}

function button() {
  buttonGenerate.addEventListener('click', () => {
    pixelsLength();
    pixelColor();
  });
  othercolours.addEventListener('click', () => {
    createColors(23);
  });
}

// chama as funções
createDivClass(24, colorPalette, 'color');
addbackgroundColor(0, 'black');
addbackgroundColor(1, 'white');
createColors(23);
selecteColor();
pixelColor();
button();

window.onload = () => {
  colors[0].className += ' selected';
};
