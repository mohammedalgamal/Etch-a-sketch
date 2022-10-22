function rnadom(start, end) {
    return Math.floor((Math.random() * (end - start))) + start;
}

function makeGrid(num=16){
    parent = document.querySelector('.container');
    let equation = (416 - 2*num) / num;
    console.log(equation); 
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
makeGrid();
colorGrid();