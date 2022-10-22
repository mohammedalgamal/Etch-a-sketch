parent = document.querySelector('.container');
for (let i = 1; i <= 256; i++) {
    const cdiv = document.createElement('div');
    cdiv.className = `inside`;
    parent.appendChild(cdiv);
};

let divs = document.querySelectorAll('.inside');

divs.forEach(div => div.addEventListener('mouseenter', (e) => {
    e.target.style.cssText = "background-color: black;";
}));