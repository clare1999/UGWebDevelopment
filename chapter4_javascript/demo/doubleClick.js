const displayDoubleClick = (e) => {
  doubleClickDemo.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}

let doubleClickDemo = document.getElementById('doubleClickDemo');
doubleClickDemo.ondblclick = displayDoubleClick;
