// Creation d'un canvas en Javascript au lieu de HTML 
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1280 - 150;
canvas.height = 1024 - 150
canvas.style.border = "10px white solid";
canvas.style.backgroundColor = "black";
canvas.style.display = "block";
canvas.style.margin = "auto"
document.body.appendChild(canvas);