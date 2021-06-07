let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.fillStyle = "white";

let colors = ["white","yellow","red","green","blue","pink","orange","purple","lime","cyan"];
let mode = "menu";