let soundPaths = {
  click: "./sounds/click.wav",
  impact: "./sounds/impact.wav",
  jump: "./sounds/jump.wav",
  lava: "./sounds/lava.wav",
  miniSwitch: "./sounds/miniSwitch.wav",
  step: "./sounds/step.wav",
  switch: "./sounds/switch.wav",
  win: "./sounds/win.wav",
};

let playSound = (path) => {
  let myAudio = new Audio();
  if (path == soundPaths.impact) {
    myAudio.volume = 1;
  } else if (path == soundPaths.jump) {
    myAudio.volume = 0.6;
  }
  myAudio.src = path;
  myAudio.play();
};

let miniSwitchActivate = false;

let drawImage = (x, y, w, h, src) => {
  let myImage = new Image();
  myImage.src = src;
  c.drawImage(myImage, x, y, w, h);
};
