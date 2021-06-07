//___________________________________________________Ball
class Ball{
    constructor(x,y,w,h,speed){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "white";

        this.speed = speed;
        this.extraSpeed = 1;

        this.dY = 0;
        this.dX = Math.sqrt(speed**2-this.dY**2);
        this.xDir = 1;
        this.yDir = Math.round(Math.random())*2-1;
        
        this.canMove = true;
    }

    resetBall(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.extraSpeed = 1;
        this.dX = this.speed;
        this.dY = 0;

        playSound("start")
        
    }

    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
    }

    move(){
        //Player collisons___
        if(this.x>=0&&this.x<=player.w&&this.y+this.h>=player.y&&this.y<=player.y+player.h){
            playSound("miniPow");
            this.xDir = 1;

            if(this.y+this.h/2-(player.y+player.h/2)>=0) this.yDir = 1
            else this.yDir = -1;

            this.dY = ((Math.abs(this.y+this.h/2-(player.y+player.h/2)))*(this.speed)/(player.h/2+ball.h/2))*0.98;
            this.dX = Math.sqrt(Math.abs(this.speed**2-this.dY**2));

            this.x += (this.dX * this.xDir)*1.5;
            this.y += (this.dY * this.yDir)*1.5;

            console.log("pHit");
            if(ball.extraSpeed<=4) this.extraSpeed += 0.075;


            if(enemy.difficulty=="impossible"){
                enemy.targetPos = undefined;
            }

            //Partciules!
            for(let i=0;i<24;i++){
                particules.push(new ParticuleEffect(this.x+this.w/2,this.y+this.h/2,
                    this.x+this.h/2+Math.random()*4,this.y+this.h/2+Math.random()*14-7,3+Math.random()*1.5+options.ballSizeIndex/2,player.color,1000))
            }

        }else if(this.x+this.w<=canvas.width&&this.x+this.w>=enemy.x&&this.y+this.h/2>=enemy.y&&this.y+this.h/2<=enemy.y+enemy.h){
            playSound("miniPow");
            this.xDir = -1;

            if(this.y+this.h/2-(enemy.y+enemy.h/2)>=0) this.yDir = 1
            else this.yDir = -1;

            this.dY = ((Math.abs(this.y+this.h/2-(enemy.y+enemy.h/2)))*(this.speed)/(enemy.h/2+ball.h/2))*0.98;
            this.dX = Math.sqrt(Math.abs(this.speed**2-this.dY**2));

            this.x += (this.dX * this.xDir)*1.5;
            this.y += (this.dY * this.yDir)*1.5;

            console.log("eHit");

            if(enemy.difficulty=="impossible"){
                enemy.targetPos = canvas.height/2-this.h/2;
            }

            //Partciules!
            for(let i=0;i<24;i++){
                particules.push(new ParticuleEffect(this.x+this.w/2,this.y+this.h/2,
                    this.x+this.h/2+Math.random()*-4,this.y+this.h/2+Math.random()*14-7,3+Math.random()*1.5+options.ballSizeIndex/2,enemy.color,1000))
            }
        }
        //Wall colisions
        if(this.y+this.h>=canvas.height){
            this.yDir = -1;
            for(let i=0;i<28;i++){
                particules.push(new ParticuleEffect(this.x+this.w/2,this.y+this.h/2,
                    this.x+this.h/2+Math.random()*14-7,this.y+this.h/2+Math.random()*-6,3+Math.random()*1.5+options.ballSizeIndex/2,colors[Math.floor(Math.random()*colors.length)],1200))
            }
            playSound("bounce");
            
        }else if(this.y<=0){
            this.yDir = 1;
            for(let i=0;i<28;i++){
                particules.push(new ParticuleEffect(this.x+this.w/2,this.y+this.h/2,
                    this.x+this.h/2+Math.random()*14-7,this.y+this.h/2+Math.random()*6,3+Math.random()*1.5+options.ballSizeIndex/2,colors[Math.floor(Math.random()*colors.length)],1200))
            }
            playSound("bounce");
        }else if(this.x<=0||this.x+this.w>=canvas.width){
            
            if(this.x<=0){
                enemy.score++;
                for(let i=0;i<29;i++){
                    lastBallPos = [this.x+this.w,this.y];
                    particules.push(new ParticuleEffect(lastBallPos[0],lastBallPos[1],lastBallPos[0]+Math.random()*4.5,
                    lastBallPos[1]+Math.random()*15-7.5,3+Math.random()*2+options.ballSizeIndex/2*1.1,ball.color,1000+Math.random()*8000));
                }
                playSound("bigPow");
                
                enemy.targetPos = undefined;
            }else{
                player.score++;
                for(let i=0;i<29;i++){
                    lastBallPos = [this.x,this.y];
                    particules.push(new ParticuleEffect(lastBallPos[0],lastBallPos[1],lastBallPos[0]+Math.random()*-4.5,
                    lastBallPos[1]+Math.random()*15-7.5,3+Math.random()*2+options.ballSizeIndex*1.1,ball.color,1000+Math.random()*8000));
                }
                
            }
            playSound("bigPow");
            
            this.xDir *= -1;
            this.resetBall()
            
            
        }
        //Basic movement
        if(this.canMove){
            let moveNormally = true;
            if(this.x+(this.dX*this.extraSpeed) * this.xDir<=0 && this.x>=player.w){            
                this.y = (this.dY*this.yDir)/(this.dX*this.xDir) * player.w + (this.y-((this.dY*this.yDir)/(this.dX*this.xDir))*this.x);
                this.x = player.w;
                moveNormally = false;
                console.warn("y",this.y);
            }else if(this.x+this.w+(this.dX*this.extraSpeed) * this.xDir>=canvas.width-enemy.w && this.x+this.w<canvas.width-enemy.w){
                this.y = (this.dY*this.yDir)/(this.dX*this.xDir) * (canvas.width-enemy.w-ball.w) + (this.y-((this.dY*this.yDir)/(this.dX*this.xDir))*this.x);
                this.x = canvas.width-enemy.w-ball.w;
                console.warn("y",this.y);
                moveNormally = false;
            }else if(this.y+(this.dY*this.extraSpeed) * this.yDir<=0){            
                this.x = enemy.calculateAffineX(0,(this.dY*this.yDir)/(this.dX*this.xDir),enemy.calculateAffineB(this.y,(this.dY*this.yDir)/(this.dX*this.xDir),this.x));
                this.y = 0;
                console.warn("x",this.x);
                moveNormally = false;
            }else if(this.y+(this.dY*this.extraSpeed) * this.yDir>=canvas.height-this.h){            
                this.x = enemy.calculateAffineX(canvas.height-this.h,(this.dY*this.yDir)/(this.dX*this.xDir),enemy.calculateAffineB(this.y,(this.dY*this.yDir)/(this.dX*this.xDir),this.x));
                this.y = canvas.height-this.h;
                console.warn(this.x,this.y);
                moveNormally = false;
            }
            if(moveNormally){
                this.x += (this.dX*this.extraSpeed) * this.xDir;
                this.y += (this.dY*this.extraSpeed) * this.yDir;
            }
            
        
            
        }
        //PARTICULES!
        particules.push(new ParticuleEffect(this.x+Math.random()*this.w,this.y+Math.random()*this.h,
        this.x+this.h/2+Math.random()*3,this.y+this.h/2+Math.random()*10-5,2+options.ballSizeIndex/2,this.color,500));
    }

    update(){
        this.move();
        this.draw();
    }
}

let ball = new Ball(canvas.width/2,canvas.height/2,12,12,9);

//_____________________________________________________________________________________player

let player = {
    w: 22, 
    h: 105, //105
    x: 0,
    y: canvas.height/2 - 80/2,
    
    score: 0,
    color: "white",

    draw: ()=>{
        c.fillStyle = player.color
        c.fillRect(player.x,player.y,player.w,player.h)}
}

canvas.addEventListener("mousemove",mouseIsMoving);
function mouseIsMoving(e){
    if(e.offsetY <= player.h/2){
        player.y = 0;
    }else if(e.offsetY>=canvas.height-player.h/2){
        player.y = canvas.height-player.h;
    }else{
        player.y = e.offsetY - player.h/2;
    }
    
    
}

//_____________________________________________________________________________________AI
class AI{
    constructor(difficulty){
        this.y = player.y;
        this.w = player.w;
        this.h = player.h;
        this.x = canvas.width-this.w;

        this.score = 0;
        this.color = player.color;


        this.targetPos = undefined;
        this.ballsDistanceList = [];

        this.difficulty = difficulty;
        if(this,difficulty == "normal") this.speed = 6.25;
        else if(this.difficulty == "impossible") this.speed = 11;
    }

    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,this.w,this.h);
    }

    calculateAffineB(y,a,x){
        //y = ax+b    y-ax = b
        return y-(a*x);
    }
    calculateAffineY(a,x,b){
        //y = ax + b
        return (a*x) +b;
    }
    calculateAffineX(y,a,b){
        //y = ax+b   (y-b)/a
        return (y-b)/a;
    }


    calculateTrajectory(){
        let a = (ball.dY*ball.yDir)/(ball.xDir*ball.dX);
        let x = ball.x;
        let y = ball.y-ball.h/2;
        let b = this.calculateAffineB(y,a,x);

        let continueLoop = true;
        let testTarget;
        let count=0;

        while(continueLoop){
            testTarget = this.calculateAffineY(a,canvas.width-ball.w-enemy.w,b);
            if(testTarget>=0&&
            testTarget<=canvas.height){
                console.log("trajectory calculated")
                return testTarget-this.h/2; 
            }else{
                if(a>0){
                    x = this.calculateAffineX(canvas.height-ball.h,a,b);
                    y = canvas.height-ball.h
                }else{
                    x = this.calculateAffineX(0,a,b);
                    y = 0;
                }
                a *= -1;
                b = this.calculateAffineB(y,a,x);
            }

            //
            if(count>30){
                console.log("Impossible AI error");
                return 100;
            }
            count++;
        }
        
    }

    move(){
        if(this.difficulty=="normal"){
            this.targetPos = ball.y+ball.h/2-this.h/2;        
        }else if(this.difficulty == "impossible" && this.targetPos == undefined && ball.x>player.w){
            this.targetPos = this.calculateTrajectory()
        }
        if(this.difficulty=="normal"){
            if(this.y<=this.targetPos-this.h*0.4 && this.y<=canvas.height-this.h){
                this.y += this.speed;
            }else if(this.y>=this.targetPos+this.h*0.4 && this.y>=0){
                this.y -= this.speed;
            }
        }else if(this.difficulty == "impossible"){
            if(this.y<=this.targetPos-this.h*0.2 && this.y<=canvas.height-this.h){
                this.y += this.speed;
            }else if(this.y>=this.targetPos+this.h*0.2 && this.y>=0){
                this.y -= this.speed;
            }
        }
        
        
    }
    update(){
        this.draw();
        this.move();
    }
}
let enemy = new AI("impossible");
//_________________________________________________middle line
let middleLine = {
    spacing: 20,
    width: 2,
    height: 40
}
function drawMiddleLine(){
    for(let i=0;i<canvas.height;i+=middleLine.spacing+middleLine.height){
        c.fillStyle = player.color;
        c.globalAlpha = 0.75;
        c.fillRect(canvas.width/2-middleLine.width/2,i,middleLine.width,middleLine.height);
        c.globalAlpha = 1;
    }
}
//_________________________________________________Scores
function drawScores(){
    c.textAlign = "center";
    c.font = "75px Arial";

    c.fillStyle = player.color;
    c.globalAlpha = 0.2+(0.8*(player.score)/(options.maxPoints));
    c.fillText(player.score,canvas.width*0.3,canvas.height/2);

    c.globalAlpha = 0.2+(0.8*(enemy.score)/(options.maxPoints));
    c.fillText(enemy.score,canvas.width*0.7,canvas.height/2);

    c.globalAlpha = 1;
}
//__________________________________________________Game Over
let lastBallPos = [];
function checkGameOver(){
    if(enemy.score>=options.maxPoints){
        mode = "enemyWin";
        for(let i=0;i<68;i++){
            particules.push(new ParticuleEffect(lastBallPos[0],lastBallPos[1],lastBallPos[0]+Math.random()*8,
                lastBallPos[1]+Math.random()*20-10,5+Math.random()*2+options.ballSizeIndex*1.5,ball.color,3400+Math.random()*6000));
                
        }
        for(let i=0;i<8;i++){
            playSound("grenade");
        }
        playSound("bigPow");
        document.getElementById("backMenu").style.display = "block";
    }else if(player.score>=options.maxPoints){
        mode = "playerWin";
        for(let i=0;i<68;i++){
            particules.push(new ParticuleEffect(lastBallPos[0],lastBallPos[1],lastBallPos[0]+Math.random()*-8,
                lastBallPos[1]+Math.random()*20-10,5+Math.random()*2+options.ballSizeIndex*1.5,ball.color,3400+Math.random()*6000));
                
        }
        for(let i=0;i<8;i++){
            playSound("grenade");
        }
        playSound("bigPow");
        document.getElementById("backMenu").style.display = "block";
    }
}
//_________________________________________________Game Over screens
function drawLosingScreen(){
    c.fillStyle = ball.color;
    c.font = "82px Serif"
    c.fillText("YOU LOSE",canvas.width/2,canvas.height*0.28);

    c.fillText(player.score+" - "+enemy.score,canvas.width/2,canvas.height*0.7);

    c.fillText("MODE: "+enemy.difficulty,canvas.width/2,canvas.height*0.5)
}
function drawWinningScreen(){
    c.fillStyle = ball.color;
    c.font = "82px Serif"
    c.fillText("YOU WIN",canvas.width/2,canvas.height*0.28);
    
    c.fillText(player.score+" - "+enemy.score,canvas.width/2,canvas.height*0.7);

    c.fillText("MODE: "+enemy.difficulty,canvas.width/2,canvas.height*0.5)
}
