// access the canvas element and its context
window.onload = init;

function init(){
  var canvas = document.getElementById("testCanvas");
  var context = canvas.getContext("2d");

  function drawCircle(pos,canvas){
    posx = pos.x;
    posy = pos.y;
    context.fillStyle = randomColor();

  // fill a circle
    context.beginPath();
    context.arc(posx,posy, 30, 0, 2 * Math.PI, true);
    context.fill();
    context.closePath();

  }

  function randomColor() {
   var color = [];
   for (var i = 0; i < 4; i++) {
    color.push(Math.floor(Math.random() * 256));
   }
   return 'rgba(' + color.join(',') + ')';
  }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
    } ;
  }

  canvas.addEventListener('click', function(evt){
    var mousePos = getMousePos(canvas,evt);
    drawCircle(mousePos,canvas);
  },false);
}