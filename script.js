function random(start, end) {
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
        let val = e.target.style.backgroundColor
        if (val === ''){
            val1 = random(0, 255);
            val2 = random(0, 255);
            val3 = random(0, 255);
            e.target.style.cssText += `background-color: rgb(${val1}, ${val2}, ${val3});`;
        }
        else {
            val = val.slice(4, -1).split(",");
            e.target.style.backgroundColor = `rgb(${val[0] / 1.1}, ${val[1] / 1.1}, ${val[2] / 1.1})`;
        }
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

