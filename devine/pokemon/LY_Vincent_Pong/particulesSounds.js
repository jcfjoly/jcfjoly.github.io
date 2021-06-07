//__________________________________________sounds
class ParticuleEffect{
    constructor(x,y,targetX,targetY,size,color,millisecondsAlive){
        this.birth = new Date().getTime();
        this.dead = false;

        this.orX = x;
        this.orY = y;

        this.x = x;
        this.y = y;

        this.targetX = targetX;
        this.targetY = targetY;

        this.size = size;

        this.color = color;

        this.millisecondsAlive = millisecondsAlive;
    }
    lifePercentage(){
        return (new Date().getTime()-this.birth)/this.millisecondsAlive;
    }
    draw(){
        c.globalAlpha = 1-this.lifePercentage();
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,this.size*(1-this.lifePercentage()),this.size*(1-this.lifePercentage()));
        
    }
    move(){
        this.x += (this.targetX-this.orX)*this.lifePercentage();
        this.y += (this.targetY-this.orY)*this.lifePercentage();
    }
    update(){
        this.move();
        this.draw();
        if(this.lifePercentage()>1){
            this.dead = true;
        }
    }

}
let particules = [];

function updateParticules(){
    for(let i=0;i<particules.length;i++){
        if(particules[i].dead){
            //delete dead particle
            particules.splice(i,1);
        }else{
            particules[i].update();
        }
    }
    c.globalAlpha = 1;
}

//__________________________________________sounds
function playSound(soundName){
    let audio = new Audio();
    audio.src = "sounds/"+soundName+".mp3";
    audio.play();
}
