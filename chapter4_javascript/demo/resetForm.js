const formOnresetDemo = document.getElementById('formOnresetDemo');
const logOnresetDemo = document.getElementById('logOnresetDemo');

function logReset(event) {
    logOnresetDemo.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
  }
  
formOnresetDemo.onreset = logReset;