let startGame = () => {
  document.getElementById("title").style.display = "none";
  document.getElementById("play").style.display = "none";
  reset();

  gameMode = "message";
  playSound(soundPaths.click);
};
let messages = [
  "ARROW KEYS TO MOVE (←,→)",
  "SPACE TO JUMP",
  "[PRESS SPACE TO CONTINUE]",
];
