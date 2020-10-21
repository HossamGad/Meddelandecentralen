

var canvas = document.getElementById('art');
var ctx = canvas.getContext('2d');

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function mouseMove(evt) {
    var mousePos = getMousePos(canvas, evt);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
}

canvas.addEventListener('mousedown', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    evt.preventDefault();
    canvas.addEventListener('mousemove', mouseMove, false);
});

canvas.addEventListener('mouseup', function () {
    canvas.removeEventListener('mousemove', mouseMove, false);
}, false);

document.getElementById('reset').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);

var colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink', 'black', 'white', 'ebebeb'];
var size = [1, 3, 5, 10, 15, 20];
var sizeNames = ['default', 'three', 'five', 'ten', 'fifteen', 'twenty'];

function listener(i) {
    document.getElementById(colors[i]).addEventListener('click', function () {
        ctx.strokeStyle = colors[i];
    }, false);
}

function fontSizes(i) {
    document.getElementById(sizeNames[i]).addEventListener('click', function () {
        ctx.setLineWidth = size[i];
    }, false);
}

for (var i = 0; i < colors.length; i++) {
    listener(i);
}

for (var i = 0; i < size.length; i++) {
    fontSizes(i);
}

