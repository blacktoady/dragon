function hello() {
    alert("нажми где нибудь, чтобы переместить меня))");
}

function move(evt) {
    dragon = document.querySelector('#drg');
    dragon.style.left = evt.clientX + "px";
}