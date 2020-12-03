function hello() {
    alert("нажми где нибудь, чтобы переместить меня))");
}

function move(evt) {
    console.log(evt.clientX);
    console.log(evt.clientY);
    dragon = document.querySelector('#drg');
    dragon.style.left = evt.clientX + "px";
    dragon.style.top = evt.clientY + "px";
}