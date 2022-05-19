// addEventListener('load', event => { });
window.onload = () => {
    init();
    doSomethingElse();
};


// addEventListener('unload', event => { });
window.onunload = () => {
    // back-end
    console.log('onunload: Bye!');
}


const init = () => {
    alert("onload: init");
}

const doSomethingElse = () => {
    alert("onload: doSomethingElse");
}
