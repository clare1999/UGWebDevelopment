const abortFunction = () => {
    alert('Load aborted.');
}


const inputBlur = () => {
    let input = document.querySelector('input');
    input.value = 'Focus has been lost';
}


const inputFocus = () => {
    let input = document.querySelector('input');
    input.value = 'Focus is here';
}

// const upperCase = (id) => {
//     let elt = document.getElementById(id)
//     elt.value = elt.value.toUpperCase();
// }

const upperCase = (e) => {
    e.target.value = e.target.value.toUpperCase();
}
let inputDemo1 = document.getElementById('onchangeDemo1');
inputDemo1.onchange = upperCase; // without parenthesis
// functionRef is a function name or a function expression. 
// The function receives an Event object as its sole argument. 
// Within the function, e.target will be the element upon which the 
// event was triggered.


const handleChange = (e) => {
    log.textContent = `The field's value is
        ${e.target.value.length} character(s) long.`;
}

let inputDemo2 = document.getElementById('onchangeDemo2');
let log = document.getElementById('log');
inputDemo2.onchange = handleChange;



function ismetaKey(e) {
    document.querySelector("#output").textContent = 
                    "metaKey pressed? " + e.metaKey;
}
