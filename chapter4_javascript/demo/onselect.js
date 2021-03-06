const logSelection = (event) => {
    const log = document.getElementById('logOnselectDemo');
    const selection = event.target.value.substring(
        event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}

const textarea = document.querySelector('textarea');
textarea.onselect = logSelection;