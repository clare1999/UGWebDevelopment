let input = document.getElementById('charCodeInput');
let charCodeElt = document.getElementById('charCode');

input.addEventListener('keypress', function(e) {
    charCodeElt.innerText = 
            `Key pressed: ${String.fromCharCode(e.charCode)}
            \ncharCode: ${e.charCode}
            \nkeyCode: ${e.keyCode}`;
});
