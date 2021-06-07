let canvas = document.querySelector("canvas");
canvas.width = 1010;
canvas.height = 650;

let c = canvas.getContext("2d");
c.textAlign = "center";

setInterval(() => {
  for (o of phaseBlocks) {
    o.update();
  }
  if (miniSwitchActivate) {
    playSound(soundPaths.miniSwitch);
  }
}, 1000);
let level = 1;
let resetWhenDeath = true;
reset();
let gameMode = "menu";

const draw = () => {
  requestAnimationFrame(draw);
  c.clearRect(0, 0, canvas.width, canvas.height);

  if (gameMode == "play") {
    drawObstacles();
    clavier();
    player.draw();
    player.update();
  } else if (gameMode == "message") {
    c.fillStyle = "azure";
    c.font = "46px Arial";
    for (let i = 0; i < messages.length; i++) {
      c.fillText(messages[i], canvas.width / 2, 180 + i * 110);
    }
    waitForSpace();
  } else if (gameMode == "win") {
    c.fillStyle = "azure";
    c.font = "150px Courier New";
    c.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);
  }
};
draw();
