const grid = document.querySelector('.grid');

function createGrid(row, column){
    const totalItems = row*column;

    for (let i=0; i<totalItems; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        square.addEventListener('mouseenter', changeColor);
    }
}

createGrid(16,16);

function changeColor(e){
    let square = e.target;
    square.classList.add('color');
}