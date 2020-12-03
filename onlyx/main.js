function hello() {
    alert("нажми где нибудь, чтобы переместить меня))");
}

let lastPos = 0;

function move(evt) {
    dragon = document.querySelector('#drg');
    if (lastPos < evt.clientX) {
        dragon.style.transform = "scale(1, 1)";
    }   else {
        dragon.style.transform = "scale(-1, 1)";
    }
    dragon.style.left = evt.clientX + "px";
    lastPos = evt.clientX;
}