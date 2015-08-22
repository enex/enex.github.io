var canvas = document.getElementById("c");
console.log(canvas);
var ctx = canvas.getContext("2d");

//Festlegen von Färbungen
ctx.fillStyle="rgb(255,100,100)"; //Flächenfüllung
ctx.strokeStyle="rgb(50,255,50)"; //Umrandung

//Variable für die Winkelbewegung
var w = 0;

//Definition von render
function render(t){
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //Qi
  ctx.fillStyle = "black";
  var lb = new Path2D();
  lb.arc(canvas.width/2, canvas.height/2, 260, 0, 2*Math.PI, false);
  ctx.fill(lb);

  ctx.fillStyle = "white";
  var lw = new Path2D();
  lw.arc(canvas.width/2, canvas.height/2, 260, 0+w, Math.PI+w, true);
  ctx.fill(lw);

  ctx.fillStyle = "black";
  var mb = new Path2D();
  mb.arc(canvas.width/2-Math.cos(w)*130, canvas.height/2-Math.sin(w)*130, 130, 0, 2*Math.PI, false);
  ctx.fill(mb);

  ctx.fillStyle = "white";
  var mw = new Path2D();
  mw.arc(canvas.width/2+Math.cos(w)*130, canvas.height/2+Math.sin(w)*130, 130, 0, 2*Math.PI, false);
  ctx.fill(mw);

  ctx.fillStyle = "black";
  var sb = new Path2D();
  sb.arc(canvas.width/2+Math.cos(w)*130, canvas.height/2+Math.sin(w)*130, 60, 0, 2*Math.PI, false);
  ctx.fill(sb);

  ctx.fillStyle = "white";
  var sw = new Path2D();
  sw.arc(canvas.width/2-Math.cos(w)*130, canvas.height/2-Math.sin(w)*130, 60, 0, 2*Math.PI, false);
  ctx.fill(sw);

  //Text
  ctx.fillStyle="rgb(50,150,255)";
  ctx.font = 'italic 40pt Calibri';
  ctx.fillText("Maddin",canvas.width/2-82.5,canvas.height/2+310);

  //Winkelbewegung
  if(w<2*Math.PI){
    w+=2*Math.PI/200;
    if(w>=2*Math.PI){
      w=0;
    }
  }

  window.requestAnimationFrame(render);
}
//Ende der Definition von render

//Ausführung von render
render();

/*
var canvas = {
  getContext: function(art){
    return {
      fillStyle: "",
      clearReact: function(){}
    }
  }
};
var ctx = canvas.getContext("2d");*/
