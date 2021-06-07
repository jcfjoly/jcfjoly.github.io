function collision(a, b) {
  if (
    a.x + a.w > b.x &&
    a.x < b.x + b.w &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  ) {
    return true;
  }
}
function pointInRectangle(point, rect) {
  if (
    point.x > rect.x &&
    point.x < rect.x + rect.w &&
    point.y > rect.y &&
    point.y < rect.y + rect.h
  ) {
    return true;
  } else {
    return false;
  }
}

//________________________________________
let obstacles = [];

class Obstacle {
  constructor(x, y, w, h, color = "white") {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    //this.type = "normal";
    this.color = color;
  }
  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.w, this.h);
  }
}

//______________________
let lavas = [];

class Lava {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.color = "orange";
    this.display = true;
  }
  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.w, this.h);
  }
}
//___________________________
class MovingLObs extends Obstacle {
  constructor(x, y, w, h, targetX, targetY, numOfSteps) {
    super(x, y, w, h);
    this.targetX = targetX;
    this.targetY = targetY;
    this.numOfSteps = numOfSteps;

    this.currentStep = 0;
    this.original = {
      x: x,
      y: y,
    };
  }
  draw() {
    super.draw();
    this.dx = (this.targetX - this.original.x) / this.numOfSteps;
    this.dy = (this.targetY - this.original.y) / this.numOfSteps;

    this.x += this.dx;
    this.y += this.dy;
    this.currentStep++;

    if (this.currentStep > this.numOfSteps) {
      this.currentStep = 0;
      //console.log(1);
      let tx = this.targetX;
      let ty = this.targetY;

      this.targetX = this.original.x;
      this.targetY = this.original.y;

      this.original.x = tx;
      this.original.y = ty;
    }
  }
}
//____
class Conveyor extends Obstacle {
  constructor(x, y, w, h, dx, numOfArrows = 1) {
    super(x, y, w, h, "#cdcdcd");
    this.targetX = true;
    this.dx = dx;
    this.dy = 0;
    this.numOfArrows = numOfArrows;
  }
  draw() {
    super.draw();
    c.fillStyle = "green";
    c.font = `${this.h / 1.3}px Arial`;

    let text = "";
    for (let i = 0; i < this.numOfArrows; i++) {
      this.dx > 0 ? (text += ">") : (text += "<");
    }
    c.fillText(text, this.x + this.w / 2, this.y + this.h / 1.4);
  }
}
//_________
class MovingLLava extends Lava {
  constructor(x, y, w, h, targetX, targetY, numOfSteps) {
    super(x, y, w, h);
    this.targetX = targetX;
    this.targetY = targetY;
    this.numOfSteps = numOfSteps;

    this.currentStep = 0;
    this.original = {
      x: x,
      y: y,
    };
  }
  draw() {
    super.draw();
    this.dx = (this.targetX - this.original.x) / this.numOfSteps;
    this.dy = (this.targetY - this.original.y) / this.numOfSteps;

    this.x += this.dx;
    this.y += this.dy;
    this.currentStep++;

    if (this.currentStep > this.numOfSteps) {
      this.currentStep = 0;
      //console.log(1);
      let tx = this.targetX;
      let ty = this.targetY;

      this.targetX = this.original.x;
      this.targetY = this.original.y;

      this.original.x = tx;
      this.original.y = ty;
    }
  }
}
//Blinkers
let phaseBlocks = [];
class Blinker extends Obstacle {
  constructor(x, y, w, h, blinkTime, solid = true, decrement = 0) {
    super(x, y, w, h, "grey");
    this.blinkTime = blinkTime;
    this.currentCount = blinkTime - decrement;
    this.solid = solid;
  }
  draw() {
    if (this.solid) {
      c.globalAlpha = 1;
      c.lineWidth = 2;
      c.strokeStyle = "white";
      c.strokeRect(this.x, this.y, this.w, this.h);
    } else {
      c.globalAlpha = 0.3;
    }
    super.draw();
    c.globalAlpha = 1;

    c.fillStyle = "white";
    c.font = `${this.h / 2}px Arial`;
    c.fillText(this.currentCount, this.x + this.w / 2, this.y + this.h / 1.5);
  }
  update() {
    this.currentCount--;
    if (this.currentCount == -1) {
      this.solid = this.solid != true;
      this.currentCount = this.blinkTime;
      if (player.groundEntity == this) {
        player.groundEntity = null;
        player.onGround = false;
      }
    }
  }
}
class Faller extends Obstacle {
  constructor(x, y, w, h, fallTime, regenerationTime = 3) {
    super(x, y, w, h, "rgb(239,221,111)");

    this.fallTime = fallTime;
    this.currentCount = fallTime;
    this.regenerationTime = regenerationTime;
    this.solid = true;

    this.rCount = regenerationTime;
    this.falling = false;
  }
  draw() {
    if (this.solid) {
      c.globalAlpha = 1;
      c.lineWidth = 2;
      c.strokeStyle = "white";
      c.strokeRect(this.x, this.y, this.w, this.h);
    } else {
      c.globalAlpha = 0.3;
    }
    if (this.falling) {
      this.color = "rgb(210,170,109)";
    } else {
      this.color = "rgb(239,221,111)";
    }
    super.draw();
    c.globalAlpha = 1;

    c.fillStyle = "white";
    c.font = `${this.h / 2}px Arial`;
    c.fillText(this.currentCount, this.x + this.w / 2, this.y + this.h / 1.5);

    if (player.groundEntity == this) {
      this.falling = true;
    }
  }
  update() {
    if (this.falling && this.solid) {
      this.currentCount--;
      if (this.currentCount == -1) {
        this.currentCount = 0;
        this.solid = false;
        playSound(soundPaths.miniSwitch);
        if (player.groundEntity == this) {
          player.groundEntity = null;
          player.onGround = false;
        }
      }
    } else if (this.falling && !this.solid) {
      this.rCount--;
      //console.log(this.rCount);
      if (this.rCount == -1) {
        this.rCount = this.regenerationTime;
        this.currentCount = this.fallTime;
        this.falling = false;
        this.solid = true;
      }
    }
  }
}

//Flashing Lava
class FlashingLava extends Lava {
  constructor(x, y, w, h, blinkTime, liquid = true, decrement = 0) {
    super(x, y, w, h);

    this.blinkTime = blinkTime;
    this.currentCount = blinkTime - decrement;
    this.solid = false;
    this.liquid = liquid;
  }
  draw() {
    if (!this.liquid) {
      c.globalAlpha = 0.3;
    }
    super.draw();
    c.globalAlpha = 1;

    c.fillStyle = "white";
    c.font = `${this.h / 2}px Arial`;
    c.fillText(this.currentCount, this.x + this.w / 2, this.y + this.h / 1.5);
  }
  update() {
    this.currentCount--;
    if (this.currentCount == -1) {
      this.liquid = this.liquid == false;
      this.currentCount = this.blinkTime;
    }
  }
}

//Switch button
let buttonState = {
  blue: true,
  red: true,
};

class SwitchedPlatform extends Obstacle {
  constructor(x, y, w, h, color = "blue", solid = true) {
    super(x, y, w, h, color);

    this.solid = solid;
    this.originalState = solid;
  }
  draw() {
    this.solid = buttonState[this.color] == this.originalState;
    //console.log(this.solid, buttonState[this.color]);

    if (this.solid) {
      c.globalAlpha = 1;
      c.lineWidth = 2;
      c.strokeStyle = "white";
      c.strokeRect(this.x, this.y, this.w, this.h);
    } else {
      c.globalAlpha = 0.3;
    }

    super.draw();
    c.globalAlpha = 1;
  }
  update() {}
}

//Button
let buttons = [];
class Button extends Obstacle {
  constructor(x, y, w, h, color = "red") {
    super(x, y, w, h);
    this.color = color;
    this.on = buttonState[color];

    this.touched = false;
  }
  draw() {
    this.on = buttonState[this.color];
    if (player.groundEntity == this && this.touched == false) {
      this.touched = true;
      buttonState[this.color] = buttonState[this.color] == false;
    } else if (player.groundEntity != this) {
      this.touched = false;
    }
    super.draw();
    if (!this.touched) {
      c.strokeStyle = "lightgrey";
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineTo(this.x + this.w, this.y);
      c.stroke();
    }

    this.touched ? (c.fillStyle = "black") : (c.fillStyle = "white");
    c.font = `${this.h / 2}px Arial`;
    let state = "";
    this.on ? (state = "on") : (state = "off");

    c.fillText(state, this.x + this.w / 2, this.y + this.h / 1.5);
  }
}
//End
let end = {
  x: 300,
  y: 300,
  r: 28,

  draw: () => {
    c.fillStyle = "purple";
    c.beginPath();
    c.arc(end.x, end.y, end.r, 0, Math.PI * 2);
    c.fill();
  },
  setCoordinates(x, y) {
    end.x = x;
    end.y = y;
  },
};

function circleTouchRect(cX, cY, cR, rX, rY, rW, rH) {
  //Default values
  let testX = cX;
  let testY = cY;

  //Choose closest side
  if (cX < rX) testX = rX;
  else if (cX > rX + rW) testX = rX + rW;

  if (cY < rY) testY = rY;
  else if (cY > rY + rH) testY = rY + rH;

  let distX = cX - testX;
  let distY = cY - testY;

  if (Math.sqrt(distX ** 2 + distY ** 2) <= cR) {
    return true;
  } else {
    return false;
  }
}
