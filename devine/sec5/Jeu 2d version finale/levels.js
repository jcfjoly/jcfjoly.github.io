function generateBoxObs() {
  obstacles.push(
    new Obstacle(0, canvas.height * 0.95, canvas.width, canvas.height)
  );
  obstacles.push(
    new Obstacle(
      canvas.width * 0.01 - canvas.width * 0.5,
      0,
      canvas.width * 0.5,
      canvas.height
    )
  );
  obstacles.push(
    new Obstacle(canvas.width * 0.99, 0, canvas.width * 0.5, canvas.height)
  );
  obstacles.push(
    new Obstacle(0, -canvas.height * 0.5, canvas.width, canvas.height * 0.55)
  );
}
let generateObstacles = () => {
  obstacles.push(new Obstacle(400, 550, 30, 100));
  obstacles.push(new MovingLObs(550, 600, 100, 30, 550, 100, 100));
  obstacles.push(new MovingLObs(640, 450, 100, 30, 840, 450, 300));
  obstacles.push(new Obstacle(300, 570, 100, 50));
  obstacles.push(new Obstacle(600, 615, 100, 50));
  obstacles.push(new Obstacle(650, 575, 10, 35));

  lavas.push(new Lava(700, 500, 100, 100));
  obstacles.push(new MovingLObs(600, 300, 100, 30, 840, 450, 300));

  phaseBlocks.push(new Blinker(200, 470, 100, 100, 2, false));
  phaseBlocks.push(new Faller(800, 450, 100, 40, 2));
  phaseBlocks.push(new FlashingLava(10, 550, 30, 30, 4, false));
  phaseBlocks.push(new SwitchedPlatform(100, 400, 100, 40, "red", true));

  buttons.push(new Button(950, 500, 50, 50, "red", true));
  generateBoxObs();
};
let drawObstacles = () => {
  for (let o of obstacles) {
    o.draw();
  }
  for (let o of lavas) {
    o.draw();
  }
  for (let o of phaseBlocks) {
    o.draw();
  }
  for (let o of buttons) {
    o.draw();
  }
  end.draw();
};
//Clear
let clearBoard = () => {
  obstacles = [];
  lavas = [];
  phaseBlocks = [];
  buttons = [];
};

//Reset
let reset = () => {
  clearBoard();
  if (LEVELS[level - 1] == undefined) {
    console.log("Finished level");
  } else {
    LEVELS[level - 1].layout();
  }
};

//Levels
const LEVELS = [
  {
    name: "Level 1",
    layout: () => {
      player = new Player(18, 50, 18, 18);

      obstacles.push(new Obstacle(215, 540, 50, 100));
      obstacles.push(new Obstacle(380, 490, 50, 150));
      obstacles.push(new Obstacle(570, 440, 150, 50));
      obstacles.push(new Obstacle(840, 390, 170, 50));

      obstacles.push(new Obstacle(430, 570, 50, 50));

      end.setCoordinates(950, 350);

      generateBoxObs();
    },
  },
  {
    name: "Level 2",
    layout: () => {
      player = new Player(18, 100, 18, 18);

      obstacles.push(new Obstacle(0, 200, 170, 50));
      lavas.push(new Lava(170, 230, 170, 20));
      obstacles.push(new Obstacle(340, 200, 140, 50));
      lavas.push(new Lava(170, 597.5, 830, 20));
      obstacles.push(new Obstacle(550, 340, 100, 30));
      lavas.push(new Lava(480, 200, 40, 200));
      obstacles.push(new Obstacle(480, 400, 40, 40));
      obstacles.push(new Obstacle(760, 570.5, 120, 40));
      obstacles.push(new Obstacle(475, 570.5, 120, 40));
      obstacles.push(new Obstacle(280, 520.5, 75, 100));
      obstacles.push(new Obstacle(0, 510, 170, 150));

      end.setCoordinates(60, 470);
      generateBoxObs();
    },
  },
  {
    name: "Level 3",
    layout: () => {
      player = new Player(18, 500, 18, 18);

      lavas.push(new Lava(200, 562.5, 75, 55));
      obstacles.push(new Obstacle(275, 562.5, 135, 55));
      lavas.push(new Lava(410, 516, 40, 102));
      obstacles.push(new Obstacle(450, 562.5, 135, 55));
      obstacles.push(new Obstacle(585, 500, 55, 135));
      lavas.push(new Lava(640, 597.5, 360, 20)); //
      obstacles.push(new Obstacle(400, 420, 130, 30));
      obstacles.push(new Obstacle(120, 375, 180, 30));
      lavas.push(new Lava(300, 375, 10, 30));
      obstacles.push(new Obstacle(375, 290, 153, 30));
      obstacles.push(new Obstacle(772, 330, 310, 30));

      end.setCoordinates(960, 290);
      generateBoxObs();
    },
  },
  {
    name: "Level 4",
    layout: () => {
      player = new Player(18, 400, 18, 18);

      obstacles.push(new Obstacle(0, 520, 165, 100));
      lavas.push(new Lava(10, 597.5, canvas.width - 20, 20)); //
      obstacles.push(new MovingLObs(195, 495, 120, 30, 425, 495, 100));
      obstacles.push(new Obstacle(590, 470, 120, 200));
      obstacles.push(new Obstacle(790, 395, 300, 30));
      obstacles.push(new MovingLObs(440, 320, 120, 30, 600, 320, 90));
      obstacles.push(new MovingLObs(240, 280, 120, 30, 390, 280, 90));
      obstacles.push(new Obstacle(0, 220, 190, 30));
      obstacles.push(new MovingLObs(240, 150, 120, 30, 440, 150, 90));
      obstacles.push(new MovingLObs(620, 120, 120, 30, 390, 120, 90));
      obstacles.push(new Obstacle(800, 130, 300, 30));

      end.setCoordinates(960, 90);
      generateBoxObs();
    },
  },
  {
    name: "Level 5",
    layout: () => {
      player = new Player(18, 400, 18, 18);

      obstacles.push(new Obstacle(0, 520, 165, 100));
      lavas.push(new Lava(10, 597.5, canvas.width - 20, 20)); //
      obstacles.push(new MovingLObs(190, 560, 120, 30, 350, 490, 80));
      obstacles.push(new MovingLObs(375, 500, 120, 30, 635, 360, 80));
      //obstacles.push(new MovingLObs(460, 490, 120, 30, 640, 390, 55));

      obstacles.push(new MovingLObs(145, 330, 165, 30, 480, 340, 80));

      obstacles.push(new Obstacle(0, 290, 190, 40));
      lavas.push(new Lava(190, 290, 20, 40));

      obstacles.push(new MovingLObs(0, 230, 40, 30, 0, 150, 60));
      obstacles.push(new Obstacle(110, 130, 135, 30));

      obstacles.push(new MovingLObs(300, 140, 160, 30, 560, 100, 80));
      obstacles.push(new Obstacle(500, 85, 35, 70));
      obstacles.push(new Obstacle(760, 160, 300, 30));
      end.setCoordinates(960, 120);
      generateBoxObs();
    },
  },
  {
    name: "Level 6",
    layout: () => {
      player = new Player(18, 100, 18, 18);

      obstacles.push(new Obstacle(0, 200, 170, 50));
      obstacles.push(new Conveyor(340, 200, 240, 50, 4.5, 2));
      lavas.push(new Lava(170, 230, 170, 20));
      obstacles.push(new Obstacle(580, 200, 100, 50));

      obstacles.push(new Conveyor(850, 160, 150, 50, -4.5, 2));
      obstacles.push(new Conveyor(660, 430, 200, 50, -4.5, 2));

      lavas.push(new Lava(680, 200, 100, 50));
      obstacles.push(new Obstacle(310, 597.5, canvas.width - 20, 20)); //
      lavas.push(new Lava(10, 597.5, 300, 20));
      lavas.push(new Lava(630, 250, 30, 180));

      obstacles.push(new Obstacle(610, 560, 400, 80));

      obstacles.push(new Conveyor(370, 480, 150, 50, -4.5, 2));
      obstacles.push(new Conveyor(150, 415, 150, 50, 4.5, 2));

      obstacles.push(new Obstacle(0, 350, 100, 30));

      end.setCoordinates(50, 310);
      generateBoxObs();
    },
  },
  {
    name: "Level 7",
    layout: () => {
      player = new Player(50, 20, 18, 18);
      resetWhenDeath = true;
      buttonState.blue = true;

      obstacles.push(new Obstacle(0, 150, 90, 30));
      phaseBlocks.push(new SwitchedPlatform(90, 150, 200, 30));
      obstacles.push(new Obstacle(290, 150, 100, 30));
      buttons.push(new Button(390, 130, 50, 50, "blue"));
      obstacles.push(new Obstacle(440, 0, 40, 180));

      obstacles.push(new Obstacle(240, 490, 30, 128));
      phaseBlocks.push(new SwitchedPlatform(10, 490, 230, 30, "blue", false));
      obstacles.push(new Conveyor(450, 400, 150, 40, -4.5, 2));
      phaseBlocks.push(new SwitchedPlatform(400, 440, 50, 30, "blue", false));
      phaseBlocks.push(new SwitchedPlatform(660, 350, 120, 30, "blue", false));
      obstacles.push(new Conveyor(830, 300, 180, 40, -4.5, 2));

      obstacles.push(new Obstacle(480, 150, 375, 30));
      phaseBlocks.push(new SwitchedPlatform(960, 225, 40, 75, "blue", false));
      buttons.push(new Button(480, 100, 50, 50, "blue"));
      lavas.push(new Lava(640, 130, 40, 20));
      //
      lavas.push(new Lava(270, 597.5, canvas.width - 280, 20)); //

      end.setCoordinates(60, 580); //30
      generateBoxObs();
    },
  },
  {
    name: "Level 8",
    layout: () => {
      player = new Player(50, 250, 18, 18);
      resetWhenDeath = true;
      buttonState.blue = true;
      buttonState.red = true;

      obstacles.push(new Obstacle(0, 490, 215, 140));
      //Portal side
      obstacles.push(new Obstacle(855, 540, 50, 140));
      buttons.push(new Button(855, 490, 50, 50, "red"));
      phaseBlocks.push(new SwitchedPlatform(905, 490, 95, 30, "blue", true));
      //The pit
      lavas.push(new Lava(215, 517.5, canvas.width - 370, 100)); //
      obstacles.push(new MovingLObs(300, 520, 85, 30, 300, 477, 46));
      obstacles.push(new MovingLObs(500, 477, 85, 30, 500, 520, 46));
      obstacles.push(new MovingLObs(700, 520, 85, 30, 700, 477, 46));
      phaseBlocks.push(new SwitchedPlatform(500, 440, 85, 30, "blue", true));
      phaseBlocks.push(new SwitchedPlatform(300, 440, 85, 30, "red", true));
      phaseBlocks.push(new SwitchedPlatform(700, 440, 85, 30, "red", true));
      //Stairs
      phaseBlocks.push(new SwitchedPlatform(10, 410, 55, 30, "red", false));
      phaseBlocks.push(new SwitchedPlatform(100, 350, 55, 30, "red", false));

      //Stage 2
      obstacles.push(new Obstacle(185, 300, 1000, 30));
      obstacles.push(new Obstacle(295, 200, 50, 100));
      obstacles.push(new MovingLObs(245, 215, 50, 30, 245, 285, 80));
      lavas.push(new Lava(345, 280, 655, 20));
      phaseBlocks.push(new SwitchedPlatform(345, 250, 655, 30, "blue", true));

      obstacles.push(new Obstacle(400, 140, 85, 30));
      obstacles.push(new Obstacle(580, 140, 125, 30));
      obstacles.push(new Obstacle(800, 140, 85, 30));
      buttons.push(new Button(canvas.width - 10 - 50, 140, 50, 50, "blue"));

      //obstacles.push(new Obstacle(622.5, 20, 40, 50));
      obstacles.push(new MovingLObs(400, 70, 30, 70, 855, 70, 200));

      end.setCoordinates(960, 570); //30
      generateBoxObs();
    },
  },
  {
    name: "Level 9",
    layout: () => {
      player = new Player(50, 350, 18, 18);
      resetWhenDeath = true;
      buttonState.blue = true;
      buttonState.red = true;
      buttonState.lime = true;

      obstacles.push(new Obstacle(10, 475, 260, 30));
      phaseBlocks.push(new SwitchedPlatform(240, 505, 30, 113, "blue", true));
      phaseBlocks.push(new SwitchedPlatform(210, 505, 30, 113, "red", true));
      phaseBlocks.push(new SwitchedPlatform(180, 505, 30, 113, "lime", true));
      //lavas.push(new Lava(210, 490, 60, 30));
      obstacles.push(new Obstacle(260, 320, 100, 30));
      obstacles.push(new Obstacle(140, 250, 100, 30));

      //1
      obstacles.push(new Obstacle(350, 540, 60, 100));
      obstacles.push(new Obstacle(480, 480, 80, 30));
      obstacles.push(new Obstacle(640, 480, 80, 30));
      obstacles.push(new Obstacle(800, 480, 80, 30));
      buttons.push(new Button(950, 570, 50, 50, "blue"));
      phaseBlocks.push(new SwitchedPlatform(410, 510, 530, 30, "blue"));
      lavas.push(new MovingLLava(410, 450, 75, 30, 865, 450, 85));
      //2
      obstacles.push(new Obstacle(380, 420, 700, 30));
      obstacles.push(new Obstacle(480, 370, 80, 30));
      obstacles.push(new Obstacle(640, 370, 80, 30));
      obstacles.push(new Obstacle(800, 370, 80, 30));
      buttons.push(new Button(950, 370, 50, 50, "red"));
      phaseBlocks.push(new SwitchedPlatform(560, 370, 80, 30, "red"));
      phaseBlocks.push(new SwitchedPlatform(720, 370, 80, 30, "red"));
      phaseBlocks.push(new SwitchedPlatform(880, 370, 68, 30, "red"));
      lavas.push(new Lava(480, 400, 500, 20));
      lavas.push(new MovingLLava(560, 340, 100, 30, 850, 340, 84));
      //3
      obstacles.push(new Obstacle(320, 180, 700, 30));
      buttons.push(new Button(950, 130, 50, 50, "lime"));
      lavas.push(new MovingLLava(450, 160, 50, 20, 490, 30, 75));
      lavas.push(new MovingLLava(600, 30, 50, 20, 550, 160, 75));
      lavas.push(new MovingLLava(720, 30, 50, 20, 770, 160, 75));
      lavas.push(new MovingLLava(665, 160, 50, 20, 665, 30, 75));
      phaseBlocks.push(new SwitchedPlatform(430, 30, 470, 55, "lime", false));

      end.setCoordinates(60, 580); //30
      generateBoxObs();
    },
  },
  {
    name: "Level 10",
    layout: () => {
      miniSwitchActivate = true;
      player = new Player(18, 400, 18, 18);

      obstacles.push(new Obstacle(canvas.width / 2 - 10, 100, 50, 700));

      phaseBlocks.push(new Blinker(200, 540, 100, 77, 2, false));
      obstacles.push(new Obstacle(400, 480, 140, 40));
      phaseBlocks.push(new Blinker(200, 430, 100, 80, 2, true));
      obstacles.push(new Obstacle(0, 380, 140, 30));
      phaseBlocks.push(new Blinker(195, 340, 100, 30, 2, false));
      phaseBlocks.push(new Blinker(360, 295, 100, 30, 2, false));
      obstacles.push(new Obstacle(0, 220, 180, 30));
      phaseBlocks.push(new Blinker(180, 220, 100, 30, 2, false));
      phaseBlocks.push(new Blinker(350, 160, 100, 30, 2, false));

      phaseBlocks.push(new Blinker(canvas.width / 2 - 22, 32, 70, 68, 0));

      //Section 2
      //
      obstacles.push(new Obstacle(canvas.width / 2, 160, 250, 30));
      lavas.push(new Lava(canvas.width / 2 + 250, 160, 100, 15));
      obstacles.push(new Obstacle(canvas.width / 2 + 250, 175, 100, 15));
      phaseBlocks.push(new Blinker(900, 220, 100, 30, 2, true));
      phaseBlocks.push(new Blinker(820, 280, 100, 30, 2, true));
      phaseBlocks.push(new Blinker(675, 280, 90, 30, 2, true));
      phaseBlocks.push(new Blinker(545, 280, 75, 30, 2, true));
      lavas.push(new Lava(620, 310, 380, 15));
      //
      obstacles.push(new Obstacle(620, 325, 380, 15));
      phaseBlocks.push(new Blinker(545, 430, 70, 30, 2, false));
      phaseBlocks.push(new Blinker(685, 380, 80, 30, 2, false));
      phaseBlocks.push(new Blinker(800, 430, 75, 30, 2, false));
      phaseBlocks.push(new Blinker(930, 430, 70, 30, 2, false));
      lavas.push(new Lava(545, 460, 385, 15));
      //
      obstacles.push(new Obstacle(545, 475, 385, 15));
      lavas.push(new Lava(545, 607.5, 455, 15));
      phaseBlocks.push(new Blinker(930, 578, 70, 30, 2, true));
      phaseBlocks.push(new Blinker(810, 558, 70, 30, 2, true));
      phaseBlocks.push(new Blinker(690, 538, 70, 30, 2, true));
      phaseBlocks.push(new Blinker(545, 578, 70, 30, 2, true));

      end.setCoordinates(630, 120);
      generateBoxObs();
    },
  },
  {
    name: "Level 11",
    layout: () => {
      miniSwitchActivate = true;
      player = new Player(600, 50, 18, 18);

      obstacles.push(new Obstacle(canvas.width / 2 - 10, 100, 50, 700));

      phaseBlocks.push(new Blinker(200, 540, 100, 77, 2, false));
      obstacles.push(new Obstacle(400, 480, 140, 40));
      phaseBlocks.push(new Blinker(200, 430, 100, 80, 2, true));
      obstacles.push(new Obstacle(0, 380, 140, 30));
      phaseBlocks.push(new Blinker(195, 340, 100, 30, 2, false));
      phaseBlocks.push(new Blinker(360, 295, 100, 30, 2, false));
      obstacles.push(new Obstacle(0, 220, 180, 30));
      phaseBlocks.push(new Blinker(180, 220, 100, 30, 2, false));
      phaseBlocks.push(new Blinker(350, 160, 100, 30, 2, false));

      obstacles.push(new Obstacle(canvas.width / 2 - 22, 32, 70, 68, 2));

      //Section 2
      //
      obstacles.push(new Obstacle(canvas.width / 2, 160, 250, 30));
      lavas.push(new Lava(canvas.width / 2 + 250, 160, 100, 15));
      obstacles.push(new Obstacle(canvas.width / 2 + 250, 175, 100, 15));
      phaseBlocks.push(new Blinker(900, 220, 100, 30, 2, false));
      phaseBlocks.push(new Blinker(820, 280, 100, 30, 2, false));
      phaseBlocks.push(new Blinker(675, 280, 90, 30, 2, false));
      phaseBlocks.push(new Blinker(545, 280, 75, 30, 2, false));
      lavas.push(new Lava(620, 310, 380, 15));
      //
      obstacles.push(new Obstacle(620, 325, 380, 15));
      phaseBlocks.push(new Blinker(545, 430, 70, 30, 2, true));
      phaseBlocks.push(new Blinker(685, 380, 80, 30, 2, true));
      phaseBlocks.push(new Blinker(800, 430, 75, 30, 2, true));
      phaseBlocks.push(new Blinker(930, 430, 70, 30, 2, true));
      lavas.push(new Lava(545, 460, 385, 15));
      //
      obstacles.push(new Obstacle(545, 475, 385, 15));
      lavas.push(new Lava(545, 607.5, 455, 15));
      phaseBlocks.push(new Blinker(930, 578, 70, 30, 2, false));
      phaseBlocks.push(new Blinker(810, 528, 70, 30, 2, false));
      phaseBlocks.push(new Blinker(690, 548, 70, 30, 2, false));
      phaseBlocks.push(new Blinker(545, 578, 70, 30, 2, false));

      end.setCoordinates(580, 540);
      generateBoxObs();
    },
  },
  {
    name: "level 12",
    layout: () => {
      resetWhenDeath = true;
      buttonState.blue = true;
      buttonState.red = true;
      lavas.push(new Lava(10, 597.5, canvas.width - 20, 20)); //

      player = new Player(50, 440, 18, 18);
      obstacles.push(new Obstacle(0, 480, 90, 140));
      lavas.push(new Lava(10, 420, 280, 20));
      phaseBlocks.push(new Faller(90, 480, 90, 40, 1, 2));
      obstacles.push(new Obstacle(180, 440, 30, 80));
      obstacles.push(new Obstacle(0, 578, 290, 40));
      obstacles.push(new Obstacle(870, 578, 200, 40));

      phaseBlocks.push(new SwitchedPlatform(840, 445, 30, 153, "red"));
      phaseBlocks.push(new SwitchedPlatform(810, 445, 30, 153, "blue"));
      lavas.push(new Lava(810, 425, 190, 20));

      buttons.push(new Button(950, 110, 50, 50, "red"));
      phaseBlocks.push(new SwitchedPlatform(950, 170, 50, 30, "red", true));
      buttons.push(new Button(10, 110, 50, 50, "blue"));
      phaseBlocks.push(new SwitchedPlatform(10, 170, 50, 30, "blue", true));

      phaseBlocks.push(new Faller(380, 560, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(530, 510, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(720, 490, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(380, 430, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(225, 380, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(105, 310, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(245, 230, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(80, 170, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(125, 65, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(285, 120, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(465, 160, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(515, 370, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(645, 305, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(755, 235, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(635, 170, 90, 40, 1, 5));
      phaseBlocks.push(new Faller(755, 105, 90, 40, 1, 5));

      end.setCoordinates(960, 545);
      generateBoxObs();
    },
  },
  {
    name: "Level 13",
    layout: () => {
      miniSwitchActivate = true;
      player = new Player(50, 440, 18, 18);

      obstacles.push(new Obstacle(430, 570, 630, 120));
      phaseBlocks.push(new FlashingLava(170, 570, 260, 48, 2, false));

      phaseBlocks.push(new FlashingLava(540, 520, 50, 50, 2, false));
      //obstacles.push(new Obstacle(540, 490, 50, 30));
      phaseBlocks.push(new FlashingLava(540, 440, 50, 50, 2, true));

      phaseBlocks.push(new FlashingLava(680, 520, 50, 50, 2, true));
      //obstacles.push(new Obstacle(680, 490, 50, 30));
      phaseBlocks.push(new FlashingLava(680, 440, 50, 50, 2, false));

      phaseBlocks.push(new FlashingLava(810, 520, 50, 50, 2, false));
      //obstacles.push(new Obstacle(810, 490, 50, 30));
      phaseBlocks.push(new FlashingLava(810, 440, 50, 50, 2, true));

      obstacles.push(new MovingLObs(930, 550, 100, 25, 930, 320, 65));

      obstacles.push(new Obstacle(760, 320, 110, 30));
      //obstacles.push(new Obstacle(600, 360, 100, 30));
      obstacles.push(new Obstacle(470, 320, 100, 30));
      obstacles.push(new Obstacle(300, 275, 100, 30));
      obstacles.push(new Obstacle(170, 240, 100, 30));
      phaseBlocks.push(new FlashingLava(470, 290, 100, 30, 2, true));
      phaseBlocks.push(new FlashingLava(300, 245, 100, 30, 2, true));
      phaseBlocks.push(new FlashingLava(170, 215, 100, 30, 2, true));

      obstacles.push(new Obstacle(0, 200, 100, 30));
      obstacles.push(new Obstacle(150, 120, 100, 30));
      obstacles.push(new Obstacle(320, 120, 100, 30));
      obstacles.push(new Obstacle(490, 120, 100, 30));
      obstacles.push(new Obstacle(680, 120, 340, 30));
      phaseBlocks.push(new FlashingLava(250, 30, 70, 90, 2));
      phaseBlocks.push(new FlashingLava(420, 30, 70, 90, 1));
      phaseBlocks.push(new FlashingLava(590, 30, 90, 90, 0));

      end.setCoordinates(960, 90);
      generateBoxObs();
    },
  },
  {
    name: "level 14",
    layout: () => {
      resetWhenDeath = true;
      buttonState.blue = true;
      buttonState.red = true;
      buttonState.lime = true;
      buttonState.yellow = true;

      //ground level
      player = new Player(400, 400, 18, 18);
      obstacles.push(new Obstacle(0, 540, 400, 100));
      lavas.push(new Lava(10, 480, 60, 60));
      phaseBlocks.push(new SwitchedPlatform(400, 520, 120, 35, "yellow"));
      buttons.push(new Button(435, 568, 50, 50, "red"));
      obstacles.push(new Obstacle(520, 540, 400, 100));

      //end place
      phaseBlocks.push(new SwitchedPlatform(720, 450, 60, 90));

      phaseBlocks.push(new SwitchedPlatform(920, 520, 78, 20, "red"));
      phaseBlocks.push(new SwitchedPlatform(920, 500, 78, 20, "blue"));
      phaseBlocks.push(new SwitchedPlatform(920, 480, 78, 20, "lime"));
      phaseBlocks.push(new SwitchedPlatform(920, 460, 78, 20, "yellow"));
      obstacles.push(new Obstacle(860, 460, 60, 100));
      obstacles.push(new Obstacle(840, 410, 30, 200));
      end.setCoordinates(960, 580);

      //elevator
      obstacles.push(new MovingLObs(175, 525, 110, 30, 175, 290, 76));
      obstacles.push(new Obstacle(0, 290, 100, 30));
      phaseBlocks.push(new SwitchedPlatform(180, 210, 100, 30, "red", true));
      phaseBlocks.push(new SwitchedPlatform(499, 280, 100, 30, "lime", true));
      buttons.push(new Button(10, 130, 50, 50, "yellow"));

      //blue button and lime
      buttons.push(new Button(660, 230, 50, 50, "blue"));
      obstacles.push(new Obstacle(790, 180, 220, 30));
      buttons.push(new Button(950, 130, 50, 50, "lime"));

      generateBoxObs();
    },
  },
];
