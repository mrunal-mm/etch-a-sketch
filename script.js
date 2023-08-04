const RAINBOW_COLORS = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3'  // Violet
];
  
const grid = document.querySelector('.grid');
let defaultDrawingColor = "black"
let drawingColor = defaultDrawingColor;
let eraserActive = false;
let rainbowMode = false;

function createGrid(row, column){
    const totalItems = row*column;

    for (let i=0; i<totalItems; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        square.addEventListener('mouseenter', paint);
    }
}

function resetCanvas(){
    for (let i=0; i<squareElements.length; i++){
        squareElements[i].style.cssText = 'background-color: white';
    }
    eraserButton.classList.remove('click-effect');
    rainbowButton.classList.remove('click-effect');
    customButton.classList.remove('click-effect');
    rainbowMode = false;
    drawingColor = defaultDrawingColor;
}

function toggleEraser(){
    eraserActive = !eraserActive;
    rainbowMode = false;
    rainbowButton.classList.remove('click-effect');
    customButton.classList.remove('click-effect');
    if (eraserActive){
        eraserButton.classList.add('click-effect')
        drawingColor = "white";
    }
    else{
        eraserButton.classList.remove('click-effect')
        drawingColor = defaultDrawingColor;
    }
}

function toggleRainbowMode(){
    rainbowMode = !rainbowMode;
    eraserActive = false;
    eraserButton.classList.remove('click-effect');
    customButton.classList.remove('click-effect');
    if (rainbowMode){
        rainbowButton.classList.add('click-effect')
    }
    else{
        rainbowButton.classList.remove('click-effect')
        drawingColor = defaultDrawingColor;
    }
}

function randomColorGenerator(){
    let index = Math.floor(Math.random()*RAINBOW_COLORS.length);
    return RAINBOW_COLORS[index];
}

function showColorPicker() {
    const colorPicker = document.getElementById('color-picker');
    colorPicker.click(); // Trigger the color picker
}

function chooseCustomColor(e){
    customButton.classList.add('click-effect');
    eraserButton.classList.remove('click-effect');
    rainbowButton.classList.remove('click-effect');
    const customColor = e.target.value;
    drawingColor = customColor;  
}   

function paint(e){
    let square = e.target;
    square.style.cssText = `background-color: ${drawingColor};`

    if (rainbowMode){
        drawingColor = randomColorGenerator();
    }
}

createGrid(16,16);
let squareElements = document.querySelectorAll('.square');
let eraserButton = document.querySelector('.eraser');
let rainbowButton = document.querySelector('.rainbow');
let customButton = document.querySelector('.custom')
let colorPicker = document.getElementById('color-picker')
colorPicker.addEventListener('input', chooseCustomColor);