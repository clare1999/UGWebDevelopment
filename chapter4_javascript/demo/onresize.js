const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = resize;