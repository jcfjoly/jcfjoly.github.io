let GRAVITY = 0.45;

class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.color = "cyan";

    this.vx = 0;
    this.vy = 0;

    this.previousPos = {};
    this.original = {
      x: x,
      y: y,
    };

    this.onGround = false;
  }
  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.w, this.h);
    drawImage(this.x, this.y, this.w, this.h, "./images/player.jpeg");
  }

  touchWall() {
    //Platforms
    for (let o of obstacles) {
      let touchPoints = [];
      let touchPointsDes = [];
      if (pointInRectangle({ x: this.x, y: this.y }, o)) {
        touchPointsDes.push("up_left");
        touchPoints.push([this.x, this.y]);
      }

      if (pointInRectangle({ x: this.x + this.w, y: this.y }, o)) {
        touchPointsDes.push("up_right");
        touchPoints.push([this.x + this.w, this.y]);
      }

      if (pointInRectangle({ x: this.x, y: this.y + this.h }, o)) {
        touchPointsDes.push("down_left");
        touchPoints.push([this.x, this.y + this.h]);
      }

      if (pointInRectangle({ x: this.x + this.w, y: this.y + this.h }, o)) {
        touchPointsDes.push("down_right");
        touchPoints.push([this.x + this.w, this.y + this.h]);
      }
      //
      if (touchPoints.length == 4) {
        if (this.vy > 0) {
          if (!this.onGround) {
            playSound(soundPaths.impact);
          }

          this.onGround = true;
          this.groundEntity = o;
          this.y = o.y - this.h;
          this.vy = 0;
        } else {
          console.error("Wtf is happening");
        }
      }
      //
      if (touchPoints.length == 2) {
        ////console.log(touchPoints);
        if (touchPoints[0][1] == touchPoints[1][1]) {
          //console.log(this.y);
          //let optimalPos = null;
          if (this.y + this.h / 2 > o.y + o.h / 2) {
            this.y = o.y + o.h;
            if (this.vy < 0) {
              this.vy = 0;
            }
            this.vy += GRAVITY;
          } else {
            if (!this.onGround && this.vy > GRAVITY) {
              playSound(soundPaths.impact);
            }

            this.onGround = true;
            this.groundEntity = o;
            this.y = o.y - this.h;
            this.vy = 0;
          }
        }
        if (touchPoints[0][0] == touchPoints[1][0]) {
          //let optimalPos = null;

          if (this.x + this.w / 2 > o.x + o.w / 2) {
            this.x = o.x + o.w;
            //if (this.vx < 0) this.vx = 0;
          } else {
            this.x = o.x - this.w;
            //if (this.vx > 0) this.vx = 0;
          }
        }
      } else if (touchPointsDes.length == 1) {
        if (touchPointsDes == "down_right") {
          if (this.vy > 0) {
            if (!this.onGround) {
              playSound(soundPaths.impact);
            }
            this.onGround = true;
            this.groundEntity = o;
            this.y = o.y - this.h;
            this.vy = 0;
          }
        } else if (touchPointsDes == "down_left") {
          if (this.vy > 0) {
            if (!this.onGround) {
              playSound(soundPaths.impact);
            }
            this.onGround = true;
            this.groundEntity = o;
            this.y = o.y - this.h;
            this.vy = 0;
          }
        } else {
          if (this.vy == 0 || this.vy == GRAVITY) {
            if (touchPointsDes == "up_left") {
              this.x = o.x + o.w;

              this.vx = 0;
            } else {
              this.x = o.x - this.w;
              this.vx = 0;
            }
          } else {
            this.y = o.y + o.h;
            if (this.vy < 0) {
              this.vy = 0;
            }
            this.vy += GRAVITY;
          }
        }
      }
    }

    //Lava
    for (let l of lavas) {
      if (collision(this, l)) {
        if (resetWhenDeath) {
          //console.log(1);
          playSound(soundPaths.lava);
          reset();
        } else {
          playSound(soundPaths.lava);
          this.onGround = false;
          this.x = this.original.x;
          this.y = this.original.y;
          this.vy = GRAVITY;
        }
      }
    }

    //Phase blocks
    for (let o of phaseBlocks) {
      if (o.solid) {
        let touchPoints = [];
        let touchPointsDes = [];
        if (pointInRectangle({ x: this.x, y: this.y }, o)) {
          touchPointsDes.push("up_left");
          touchPoints.push([this.x, this.y]);
        }

        if (pointInRectangle({ x: this.x + this.w, y: this.y }, o)) {
          touchPointsDes.push("up_right");
          touchPoints.push([this.x + this.w, this.y]);
        }

        if (pointInRectangle({ x: this.x, y: this.y + this.h }, o)) {
          touchPointsDes.push("down_left");
          touchPoints.push([this.x, this.y + this.h]);
        }

        if (pointInRectangle({ x: this.x + this.w, y: this.y + this.h }, o)) {
          touchPointsDes.push("down_right");
          touchPoints.push([this.x + this.w, this.y + this.h]);
        }

        //
        if (touchPoints.length == 2) {
          ////console.log(touchPoints);
          if (touchPoints[0][1] == touchPoints[1][1]) {
            ////console.log(3);
            //let optimalPos = null;
            if (this.y + this.h / 2 > o.y + o.h / 2) {
              this.y = o.y + o.h;
              if (this.vy < 0) {
                this.vy = 0;
              }
              this.vy += GRAVITY;
            } else {
              if (!this.onGround && this.vy > GRAVITY) {
                playSound(soundPaths.impact);
              }
              this.onGround = true;
              this.groundEntity = o;
              this.y = o.y - this.h;
              this.vy = 0;
            }
          }
          if (touchPoints[0][0] == touchPoints[1][0]) {
            //let optimalPos = null;
            ////console.log(3);
            if (this.x + this.w / 2 > o.x + o.w / 2) {
              this.x = o.x + o.w;
              //this.vx = 0;
            } else {
              this.x = o.x - this.w;
              //this.vx = 0;
            }
          }
        } else if (touchPointsDes.length == 1) {
          if (touchPointsDes == "down_right") {
            if (this.vy > 0) {
              if (!this.onGround) {
                playSound(soundPaths.impact);
              }
              this.onGround = true;
              this.groundEntity = o;
              this.y = o.y - this.h;
              this.vy = 0;
            }
            // if (vy>0)
            ////console.log(2);
          } else if (touchPointsDes == "down_left") {
            if (this.vy > 0) {
              if (!this.onGround) {
                playSound(soundPaths.impact);
              }
              this.onGround = true;
              this.groundEntity = o;
              this.y = o.y - this.h;
              this.vy = 0;
            }
            //if (v>0)
            ////console.log(3);
          } else {
            if (this.vy == 0 || this.vy == GRAVITY) {
              if (touchPointsDes == "up_left") {
                this.x = o.x + o.w;

                this.vx = 0;
              } else {
                this.x = o.x - this.w;
                this.vx = 0;
              }
            } else {
              this.y = o.y + o.h;
              if (this.vy < 0) {
                this.vy = 0;
              }
              this.vy += GRAVITY;

              ////console.log(4);
            }
          }
        }
      } else if (o.liquid) {
        if (collision(this, o)) {
          if (resetWhenDeath) {
            //console.log(1);
            playSound(soundPaths.lava);
            reset();
          } else {
            playSound(soundPaths.lava);
            this.onGround = false;
            this.x = this.original.x;
            this.y = this.original.y;
            this.vy = GRAVITY;
          }
        }
      }
    }
    for (let o of buttons) {
      let touchPoints = [];
      let touchPointsDes = [];

      if (pointInRectangle({ x: this.x, y: this.y }, o)) {
        touchPointsDes.push("up_left");
        touchPoints.push([this.x, this.y]);
      }

      if (pointInRectangle({ x: this.x + this.w, y: this.y }, o)) {
        touchPointsDes.push("up_right");
        touchPoints.push([this.x + this.w, this.y]);
      }

      if (pointInRectangle({ x: this.x, y: this.y + this.h }, o)) {
        touchPointsDes.push("down_left");
        touchPoints.push([this.x, this.y + this.h]);
      }

      if (pointInRectangle({ x: this.x + this.w, y: this.y + this.h }, o)) {
        touchPointsDes.push("down_right");
        touchPoints.push([this.x + this.w, this.y + this.h]);
      }

      //
      if (touchPoints.length == 2) {
        ////console.log(touchPoints);
        if (touchPoints[0][1] == touchPoints[1][1]) {
          ////console.log(3);
          //let optimalPos = null;
          if (this.y + this.h / 2 > o.y + o.h / 2) {
            this.y = o.y + o.h;
            if (this.vy < 0) {
              this.vy = 0;
            }
            this.vy += GRAVITY;
          } else {
            if (!this.onGround) {
              playSound(soundPaths.switch);
            }
            this.onGround = true;
            this.groundEntity = o;
            this.y = o.y - this.h;
            this.vy = 0;
          }
        }
        if (touchPoints[0][0] == touchPoints[1][0]) {
          //let optimalPos = null;
          //console.log(3);
          if (this.x + this.w / 2 > o.x + o.w / 2) {
            this.x = o.x + o.w;
            //this.vx = 0;
          } else {
            this.x = o.x - this.w;
            //this.vx = 0;
          }
        }
      } else if (touchPointsDes.length == 1) {
        if (touchPointsDes == "down_right") {
          if (this.vy > 0) {
            if (!this.onGround) {
              playSound(soundPaths.switch);
            }
            this.onGround = true;
            this.groundEntity = o;
            this.y = o.y - this.h;
            this.vy = 0;
          }
          //console.log(2);
        } else if (touchPointsDes == "down_left") {
          if (this.vy > 0) {
            if (!this.onGround) {
              playSound(soundPaths.switch);
            }
            this.onGround = true;
            this.groundEntity = o;
            this.y = o.y - this.h;
            this.vy = 0;
          }
          //console.log(3);
        } else {
          if (this.vy == 0 || this.vy == GRAVITY) {
            if (touchPointsDes == "up_left") {
              this.x = o.x + o.w;

              this.vx = 0;
            } else {
              this.x = o.x - this.w;
              this.vx = 0;
            }
          } else {
            this.y = o.y + o.h;
            if (this.vy < 0) {
              this.vy = 0;
            }
            this.vy += GRAVITY;

            //console.log(4);
          }
        }
      }
    }
    if (circleTouchRect(end.x, end.y, end.r, this.x, this.y, this.w, this.h)) {
      resetWhenDeath = false;
      miniSwitchActivate = false;
      playSound(soundPaths.win);
      level++;
      reset();
      if (level == LEVELS.length) {
        gameMode = "message";
        messages = [
          "LAST LEVEL",
          "FINAL PUZZLE",
          "CAN YOU MAKE IT?",
          "[PRESS SPACE TO CONTINUE]",
        ];
      } else if (level > LEVELS.length) {
        gameMode = "win";

        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        msg.voice = voices[6]; // Note: some voices don't support altering params
        msg.voiceURI = "native";
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 1.8; //0 to 2
        msg.text =
          " ... Congratulations you won by beating my 14 levels! Thanks for playing!";
        msg.lang = "en-UK";

        speechSynthesis.speak(msg);
      }
    }
  }
  moveWithPlatform() {
    if (this.groundEntity && this.groundEntity.targetX) {
      this.x += this.groundEntity.dx;
      this.y += this.groundEntity.dy;
    }
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.moveWithPlatform();
    this.touchWall();

    this.vy += GRAVITY;
    if (this.vy > GRAVITY * 2) {
      this.groundEntity = {};
      this.onGround = false;
    }

    this.previousPos.x = this.x;
    this.previousPos.y = this.y;
    this.previousPos.dy = this.dy;
    this.previousPos.dx = this.dx;
  }
}

let player = new Player(10, 100, 18, 18);
