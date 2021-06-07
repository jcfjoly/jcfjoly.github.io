document.addEventListener("keydown", function (e) {
  keyDown[e.keyCode] = true;
  //console.log(keyDown);
});

document.addEventListener("keyup", function (e) {
  delete keyDown[e.keyCode];
  //console.log(keyDown);
});
let keyDown = {};

function clavier() {
  //console.log(e)
  if (32 in keyDown && player.onGround) {
    player.onGround = false;
    player.groundEntity = {};
    player.vy -= 9;
    playSound(soundPaths.jump);
  }

  if (37 in keyDown) {
    if (player.vx > -6.5) {
      player.vx -= 0.6;
    }
  }
  if (39 in keyDown) {
    if (player.vx < 6.5) {
      player.vx += 0.6;
    }
  }

  if (
    (keyDown[37] == undefined && keyDown[39] == undefined) ||
    (39 in keyDown && 37 in keyDown)
  ) {
    if (player.vx > 0) {
      if (player.vx > 0.6) {
        player.vx -= 0.6;
      } else {
        player.vx = 0;
      }
    } else if (player.vx < 0) {
      if (player.vx < -0.6) {
        player.vx += 0.6;
      } else {
        player.vx = 0;
      }
    }
  }

  /*
	if(38 in keyDown &&joueur.y>0){
		joueur.y-=joueur.speed
		}
	if(40 in keyDown &&joueur.y<canvas.height-joueur.h){
		joueur.y+=joueur.speed
		}	
	*/
}

let waitForSpace = () => {
  if (32 in keyDown) {
    playSound(soundPaths.click);
    gameMode = "play";
  }
};
