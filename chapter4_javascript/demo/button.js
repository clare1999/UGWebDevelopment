let button = document.querySelector('#button');
let mouseEventDemo1 = document.querySelector('#mouseEventDemo1');
button.addEventListener('mouseup', logMouseButton);

function logMouseButton(e) {
  if (typeof e === 'object') {
    switch (e.button) {
      case 0:
        mouseEventDemo1.textContent = `Left button clicked: ${e.button}`;
        break;
      case 1:
        mouseEventDemo1.textContent = `Middle button clicked: ${e.button}`;
        break;
      case 2:
        mouseEventDemo1.textContent = `Right button clicked: ${e.button}`;
        break;
      case 3:
        mouseEventDemo1.textContent = `backward button clicked: ${e.button}`;
        break;
      case 4:
        mouseEventDemo1.textContent = `forward button clicked: ${e.button}`;
        break;
      default:
        mouseEventDemo1.textContent = `Unknown button code: ${e.button}`;
    }
  }
}
