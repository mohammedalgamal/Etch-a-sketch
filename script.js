function rnadom(start, end) {
    return Math.floor((Math.random() * (end - start))) + start;
}

function makeGrid(num=16){
    parent = document.querySelector('.container');
    parent.textContent = '';
    let equation = (416 - 2*num) / num; 
    for (let i = 1; i <= num*num; i++) {
        const cdiv = document.createElement('div');
        cdiv.style.cssText = `width: ${equation}px; height: ${equation}px;`;
        cdiv.className = 'inside';
        parent.appendChild(cdiv);
    };
}

function colorGrid(){
    let divs = document.querySelectorAll('.inside');
    divs.forEach(div => div.addEventListener('mouseenter', (e) => {
        e.target.style.cssText += "background-color: black;";
    }));
}

function getDimensions() {
    const btn = document.querySelector('button');
    let dimension = 16;
    makeGrid();
    colorGrid();
    btn.addEventListener('click', e => {
        dimension = prompt('How many pixels do you want in one side?');
        if (dimension >= 100) {
            dimension = 100;
        }
        makeGrid(dimension);
        colorGrid();
    });
}

getDimensions();

