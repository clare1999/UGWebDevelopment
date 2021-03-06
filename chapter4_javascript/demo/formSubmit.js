const form = document.getElementById('form');
const error = document.getElementById('error');
const city = document.getElementById('city');
const thanks = document.getElementById('thanks');

city.oninvalid = invalid;
form.onsubmit = submit;

function invalid(event) {
    error.removeAttribute('hidden');
}

function submit(event) {
    form.setAttribute('hidden', '');
    thanks.removeAttribute('hidden');
    
    // For this example, don't actually submit the form
    event.preventDefault();
}
