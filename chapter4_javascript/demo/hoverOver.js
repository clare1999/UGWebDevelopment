const mousemoveDemo1 = document.getElementById('mousemoveDemo1');
mousemoveDemo1.onmouseover = logMouseOver;
mousemoveDemo1.onmouseout = logMouseOut;

function logMouseOver() {
    mousemoveDemo1.textContent = 'MOUSE OVER detected';
}

function logMouseOut() {
    mousemoveDemo1.textContent = 'MOUSE OUT detected';
}