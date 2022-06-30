const getRequest = () => {

    var url = location.search;
    if (url.indexOf("?") != -1) {
      let usernameValue = url.substring(1).split('=')[1];
      document.getElementById('signin').innerText = "";
      document.getElementById('signup').innerText = "";
      document.getElementById('username').innerText = usernameValue;
      document.getElementById('signout').innerText = "SIGN OUT";
    }
}

const toggleSIGN = () => {
  window.alert("Successfully Signed Out. Goodbye!");
    window.location = 'index.html';
}


window.addEventListener('load', getRequest);

let signout = document.getElementById('signout');
signout.addEventListener('click', toggleSIGN)
