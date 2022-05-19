let button = document.querySelector('#button');
let mouseEventDemo1 = document.querySelector('#mouseEventDemo1');
button.addEventListener('mouseup', logMouseButton);

function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        mouseEventDemo1.textContent = 'Left button clicked.';
        break;
      case 1:
        mouseEventDemo1.textContent = 'Middle button clicked.';
        break;
      case 2:
        mouseEventDemo1.textContent = 'Right button clicked.';
        break;
      default:
        mouseEventDemo1.textContent = `Unknown button code: ${e.button}`;
    }
  }
}
