    ovniColor = 'white'

    //Main Player
    var ovni = new Objects(300,500,30,20,ovniColor,0,0)

    //row 1
    var alien1 = new Aliens(40,50,50,40,0.1,0,3)
    var alien2 = new Aliens(110,50,50,40,0.1,0,3)
    var alien3 = new Aliens(180,50,50,40,0.1,0,3)
    var alien4 = new Aliens(240,50,50,40,0.1,0,3)
    var alien5 = new Aliens(300,50,50,40,0.1,0,3)
    var alien6 = new Aliens(360,50,50,40,0.1,0,3)
    var alien7 = new Aliens(430,50,50,40,0.1,0,3)
    var alien8 = new Aliens(500,50,50,40,0.1,0,3)

    //row2
    var alien9 = new Aliens(40,100,50,40,0.1,0,3)
    var alien10 = new Aliens(110,100,50,40,0.1,0,3)
    var alien11 = new Aliens(180,100,50,40,0.1,0,3)
    var alien12 = new Aliens(240,100,50,40,0.1,0,3)
    var alien13 = new Aliens(300,100,50,40,0.1,0,3)
    var alien14 = new Aliens(360,100,50,40,0.1,0,3)
    var alien15 = new Aliens(430,100,50,40,0.1,0,3)
    var alien16 = new Aliens(500,100,50,40,0.1,0,3)

    //row3
    var alien17 = new Aliens(40,150,50,40,0.1,0,3)
    var alien18 = new Aliens(110,150,50,40,0.1,0,3)
    var alien19 = new Aliens(180,150,50,40,0.1,0,3)
    var alien20 = new Aliens(240,150,50,40,0.1,0,3)
    var alien21 = new Aliens(300,150,50,40,0.1,0,3)
    var alien22 = new Aliens(360,150,50,40,0.1,0,3)
    var alien23 = new Aliens(430,150,50,40,0.1,0,3)
    var alien24 = new Aliens(500,150,50,40,0.1,0,3)

    var wall1 = new Walls(30,400,60,40,'grey',0,10)
    var wall2 = new Walls(510,400,60,40,'grey',0,10)
    var wall3 = new Walls(200,400,60,40,'grey',0,10)
    var wall4 = new Walls(340,400,60,40,'grey',0,10)

    //Limits
    var rightLimit = new Objects(599,0,3,600,'red',0,0)
    var leftLimit = new Objects(0,0,3,600,'red',0,0)

    //life wall
    var lifewall1 = new LifeWall(0,580,600,20,'green')

    var canvas=document.getElementById('monCanvas')
    var c=canvas.getContext('2d')
    canvas.width=600
    canvas.height=600

    var imgEnemy1 = new Image()
    imgEnemy1.src="assets/states/state1.png"

    var victoryIMG = new Image()
    victoryIMG.src="assets/images/victory.gif"
    
    var gameOverIMG = new Image()
    gameOverIMG.src="assets/images/gameOver.jpg"

    var ammo=[]

    function LifeWall(x,y,w,h,color){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.color=color
        this.draw=function(){
            c.fillStyle=this.color
            c.fillRect(this.x,this.y,this.w,this.h)
        }
    }

    function Objects(x,y,w,h,color,speedX,speedY){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.color=color
        this.speedX=speedX
        this.speedY=speedY
        this.draw=function(){
            c.fillStyle=this.color
            c.fillRect(this.x+=speedX,this.y+=speedY,this.w,this.h)
        }
    }

    function Walls(x,y,w,h,color,speedX,lifew){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.color=color
        this.speedX=speedX
        this.lifew=lifew
        this.draw=function(){
            c.fillStyle=this.color
            c.fillRect(this.x+=speedX,this.y,this.w,this.h)
            if(this.x<=0||this.x+this.w>600){
                this.speedX=-this.speedX
                }
                this.x+=this.speedX       
		}
    }

    function Aliens(x,y,w,h,speedX,speedY,lifep){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.speedX=speedX
        this.speedY=speedY
        this.lifep=lifep
        this.draw=function(){
            c.drawImage(imgEnemy1, this.x+=this.speedX, this.y, this.w, this.h)
            if(this.x<=0||this.x+this.h>600){
                this.speedX=-this.speedX
                }
                this.x+=this.speedX
                this.y+=this.speedY
            }
        if(lifep<=0){
                c.drawImage(imgEnemyPop, this.x, this.y, this.w, this.h)
            }
        if(this.x>570){
			this.speedX=-this.speedX
            this.speedY=this.speedY+10
            this.x+=this.speedX
            this.y+=this.speedY
        }else{
            this.x+=this.speedX
            this.y+=this.speedY
        }
    }

    function lifeCounter(x,y,w,h,color,speedX,life){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.color=color
        this.speedX=speedX
        this.life=life
        this.draw=function(){
            c.fillStyle=this.color
            c.fillRect(this.x+=speedX,this.y,this.w,this.h)
        }
        if(life<=0){
            x=1000
            speedX=0
        }
    }

    function drawObjects(){
        ovni.draw()

        if(alien1.lifep>0)
        {alien1.draw()}
        if(alien2.lifep>0)
        {alien2.draw()}
        if(alien3.lifep>0)
        {alien3.draw()}
        if(alien4.lifep>0)
        {alien4.draw()}
        if(alien5.lifep>0)
        {alien5.draw()}
        if(alien6.lifep>0)
        {alien6.draw()}
        if(alien7.lifep>0)
        {alien7.draw()}
        if(alien8.lifep>0)
        {alien8.draw()}

        if(alien9.lifep>0)
        {alien9.draw()}
        if(alien10.lifep>0)
        {alien10.draw()}
        if(alien11.lifep>0)
        {alien11.draw()}
        if(alien12.lifep>0)
        {alien12.draw()}
        if(alien13.lifep>0)
        {alien13.draw()}
        if(alien14.lifep>0)
        {alien14.draw()}
        if(alien15.lifep>0)
        {alien15.draw()}
        if(alien16.lifep>0)
        {alien16.draw()}

        if(alien17.lifep>0)
        {alien17.draw()}
        if(alien18.lifep>0)
        {alien18.draw()}
        if(alien19.lifep>0)
        {alien19.draw()}
        if(alien20.lifep>0)
        {alien20.draw()}
        if(alien21.lifep>0)
        {alien21.draw()}
        if(alien22.lifep>0)
        {alien22.draw()}
        if(alien23.lifep>0)
        {alien23.draw()}
        if(alien24.lifep>0)
        {alien24.draw()}

        rightLimit.draw()
        leftLimit.draw()

        wall1.draw()
        wall2.draw()
        wall3.draw()
        wall4.draw()

        lifewall1.draw()
    }

    function drawBullets(){
        for(i=0;i<ammo.length;i++){
            ammo[i].draw()
        }
    }

    function Bullets(x,y,w,h,color,speedY){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.color=color
        this.speedY=speedY
        this.draw=function(){
            c.fillStyle=this.color
            c.fillRect(this.x,this.y-=this.speedY,this.w,this.h)
        }
    }

    function Bullets1(x,y,w,h,color,speedY){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.color=color
        this.speedY=speedY
        this.draw=function(){
            c.fillStyle=this.color
            c.fillRect(this.x,this.y+=this.speedY,this.w,this.h)
        }
    }

    function collision(a,b){
	if(a.x+a.w>b.x&&
	   a.x<b.x+b.w&&
	   a.y<b.y+b.h&&
	   a.y+a.h>b.y){

		return(true)
		}
	}

    function checkCollision(){

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien1)&&
        alien1.lifep>0){
		ammo.splice(i,1)
        alien1.lifep=alien1.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien2)&&
        alien2.lifep>0){
		ammo.splice(i,1)
        alien2.lifep=alien2.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien3)&&
        alien3.lifep>0){
		ammo.splice(i,1)
        alien3.lifep=alien3.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien4)&&
        alien4.lifep>0){
		ammo.splice(i,1)
        alien4.lifep=alien4.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien5)&&
        alien5.lifep>0){
		ammo.splice(i,1)
        alien5.lifep=alien5.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien6)&&
        alien6.lifep>0){
		ammo.splice(i,1)
        alien6.lifep=alien6.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien7)&&
        alien7.lifep>0){
		ammo.splice(i,1)
        alien7.lifep=alien7.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien8)&&
        alien8.lifep>0){
		ammo.splice(i,1)
        alien8.lifep=alien8.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien9)&&
        alien9.lifep>0){
		ammo.splice(i,1)
        alien9.lifep=alien9.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien10)&&
        alien10.lifep>0){
		ammo.splice(i,1)
        alien10.lifep=alien10.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien11)&&
        alien11.lifep>0){
		ammo.splice(i,1)
        alien11.lifep=alien11.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien12)&&
        alien12.lifep>0){
		ammo.splice(i,1)
        alien12.lifep=alien12.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien13)&&
        alien13.lifep>0){
		ammo.splice(i,1)
        alien13.lifep=alien13.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien14)&&
        alien14.lifep>0){
		ammo.splice(i,1)
        alien14.lifep=alien14.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien15)&&
        alien15.lifep>0){
		ammo.splice(i,1)
        alien15.lifep=alien15.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien16)&&
        alien16.lifep>0){
		ammo.splice(i,1)
        alien16.lifep=alien16.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien17)&&
        alien17.lifep>0){
		ammo.splice(i,1)
        alien17.lifep=alien17.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien18)&&
        alien18.lifep>0){
		ammo.splice(i,1)
        alien18.lifep=alien18.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien19)&&
        alien19.lifep>0){
		ammo.splice(i,1)
        alien19.lifep=alien19.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien20)&&
        alien20.lifep>0){
		ammo.splice(i,1)
        alien20.lifep=alien20.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien21)&&
        alien21.lifep>0){
		ammo.splice(i,1)
        alien21.lifep=alien21.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien22)&&
        alien22.lifep>0){
		ammo.splice(i,1)
        alien22.lifep=alien22.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien23)&&
        alien23.lifep>0){
		ammo.splice(i,1)
        alien23.lifep=alien23.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien24)&&
        alien24.lifep>0){
		ammo.splice(i,1)
        alien24.lifep=alien24.lifep-1
	    }

        //walls

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],wall1)){
		ammo.splice(i,1)
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],wall2)){
		ammo.splice(i,1)
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],wall3)){
		ammo.splice(i,1)
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],wall4)){
		ammo.splice(i,1)
	    }

        //descendre aliens (droite)

        if(collision(alien1,rightLimit)
        ){
            alien1.y=alien1.y+0.5
        }
        if(collision(alien2,rightLimit)
        ){
            alien2.y=alien2.y+0.5
        }
        if(collision(alien3,rightLimit)
        ){
            alien3.y=alien3.y+0.5
        }
        if(collision(alien4,rightLimit)
        ){
            alien4.y=alien4.y+0.5
        }
        if(collision(alien5,rightLimit)
        ){
            alien5.y=alien5.y+0.5
        }
        if(collision(alien6,rightLimit)
        ){
            alien6.y=alien6.y+0.5
        }
        if(collision(alien7,rightLimit)
        ){
            alien7.y=alien7.y+0.5
        }
        if(collision(alien8,rightLimit)
        ){
            alien8.y=alien8.y+0.5
        }
        if(collision(alien9,rightLimit)
        ){
            alien9.y=alien9.y+0.5
        }
        if(collision(alien10,rightLimit)
        ){
            alien10.y=alien10.y+0.5
        }
        if(collision(alien11,rightLimit)
        ){
            alien11.y=alien11.y+0.5
        }
        if(collision(alien12,rightLimit)
        ){
            alien12.y=alien12.y+0.5
        }
        if(collision(alien13,rightLimit)
        ){
            alien13.y=alien13.y+0.5
        }
        if(collision(alien14,rightLimit)
        ){
            alien14.y=alien14.y+0.5
        }
        if(collision(alien15,rightLimit)
        ){
            alien15.y=alien15.y+0.5
        }
        if(collision(alien16,rightLimit)
        ){
            alien16.y=alien16.y+0.5
        }
        if(collision(alien17,rightLimit)
        ){
            alien17.y=alien17.y+0.5
        }
        if(collision(alien18,rightLimit)
        ){
            alien18.y=alien18.y+0.5
        }
        if(collision(alien19,rightLimit)
        ){
            alien19.y=alien19.y+0.5
        }
        if(collision(alien4,rightLimit)
        ){
            alien20.y=alien20.y+0.5
        }
        if(collision(alien21,rightLimit)
        ){
            alien21.y=alien21.y+0.5
        }
        if(collision(alien22,rightLimit)
        ){
            alien22.y=alien22.y+0.5
        }
        if(collision(alien23,rightLimit)
        ){
            alien23.y=alien23.y+0.5
        }
        if(collision(alien24,rightLimit)
        ){
            alien24.y=alien24.y+0.5
        }

        //descendre aliens (gauche)

        if(collision(alien1,leftLimit)
        ){
            alien1.y=alien1.y+1
        }
        if(collision(alien2,leftLimit)
        ){
            alien2.y=alien2.y+1
        }
        if(collision(alien3,leftLimit)
        ){
            alien3.y=alien3.y+1
        }
        if(collision(alien4,leftLimit)
        ){
            alien4.y=alien4.y+1
        }
        if(collision(alien5,leftLimit)
        ){
            alien5.y=alien5.y+1
        }
        if(collision(alien6,leftLimit)
        ){
            alien6.y=alien6.y+1
        }
        if(collision(alien7,leftLimit)
        ){
            alien7.y=alien7.y+1
        }
        if(collision(alien8,leftLimit)
        ){
            alien8.y=alien8.y+1
        }

        if(collision(alien9,leftLimit)
        ){
            alien9.y=alien9.y+1
        }
        if(collision(alien2,leftLimit)
        ){
            alien10.y=alien10.y+1
        }
        if(collision(alien11,leftLimit)
        ){
            alien11.y=alien11.y+1
        }
        if(collision(alien12,leftLimit)
        ){
            alien12.y=alien12.y+1
        }
        if(collision(alien13,leftLimit)
        ){
            alien13.y=alien13.y+1
        }
        if(collision(alien14,leftLimit)
        ){
            alien14.y=alien14.y+1
        }
        if(collision(alien15,leftLimit)
        ){
            alien15.y=alien15.y+1
        }
        if(collision(alien16,leftLimit)
        ){
            alien16.y=alien16.y+1
        }

        if(collision(alien17,leftLimit)
        ){
            alien17.y=alien17.y+1
        }
        if(collision(alien2,leftLimit)
        ){
            alien18.y=alien18.y+1
        }
        if(collision(alien19,leftLimit)
        ){
            alien19.y=alien19.y+1
        }
        if(collision(alien20,leftLimit)
        ){
            alien20.y=alien20.y+1
        }
        if(collision(alien21,leftLimit)
        ){
            alien21.y=alien21.y+1
        }
        if(collision(alien22,leftLimit)
        ){
            alien22.y=alien22.y+1
        }
        if(collision(alien23,leftLimit)
        ){
            alien23.y=alien23.y+1
        }
        if(collision(alien24,leftLimit)
        ){
            alien24.y=alien24.y+1
        }
	}

    document.addEventListener('keydown', keyMove)

    function keyMove(e){
        if(e.keyCode == 39 && ovni.x < 570){
            ovni.x+=15;
        }

        if(e.keyCode == 37 && ovni.x > 0){
            ovni.x-=15;
        }
        if(e.keyCode == 81){
            posX=ovni.x + 13
            posY=ovni.y
            ammo.push(new Bullets(posX,posY,4,7,'green',10))
        }
    }

    function textDisplay(){
        c.font="20px Arial"
		c.fillStyle="white"
		c.fillText('Press "q" to shoot',10,30)
        c.fillText('Press <- -> keys to move around',290,30)
    }

    var victorySFX=new Audio();
    victorySFX.src='assets/sfx/victorySFX.mp3'

    var gameOverSFX=new Audio();
    gameOverSFX.src='assets/sfx/gameOverSFX.mp3'

    function spaceInvaders1(){
        c.clearRect(0,0,canvas.width,canvas.height)
        textDisplay()
        drawObjects()
        drawBullets()
        checkCollision()
        document.getElementById('playButtonEZ').style.display='none';
        document.getElementById('playButtonMED').style.display='none';
        document.getElementById('playButtonOOF').style.display='none';
        document.getElementById('monCanvas').style.display='block';
        document.getElementById('restart1').style.display='block';
        requestAnimationFrame(spaceInvaders1)
        if(alien1.lifep<=0&&
            alien2.lifep<=0&&
            alien3.lifep<=0&&
            alien4.lifep<=0&&
            alien5.lifep<=0&&
            alien6.lifep<=0&&
            alien7.lifep<=0&&
            alien8.lifep<=0
            ){
                c.drawImage(victoryIMG, 0,0,600,600)
                victorySFX.play()
            }
        if(collision(alien1,lifewall1)||
        collision(alien2,lifewall1)||
        collision(alien3,lifewall1)||
        collision(alien4,lifewall1)||
        collision(alien5,lifewall1)||
        collision(alien6,lifewall1)||
        collision(alien7,lifewall1)||
        collision(alien8,lifewall1)||
        collision(alien9,lifewall1)||
        collision(alien10,lifewall1)||
        collision(alien11,lifewall1)||
        collision(alien12,lifewall1)||
        collision(alien13,lifewall1)||
        collision(alien14,lifewall1)||
        collision(alien15,lifewall1)||
        collision(alien16,lifewall1)||
        collision(alien17,lifewall1)||
        collision(alien18,lifewall1)||
        collision(alien19,lifewall1)||
        collision(alien20,lifewall1)||
        collision(alien21,lifewall1)||
        collision(alien22,lifewall1)||
        collision(alien23,lifewall1)||
        collision(alien24,lifewall1)
        ){
            c.drawImage(gameOverIMG, 0,0,600,600)
            gameOverSFX.play()
        }
    }

    function reloadPage(){
        location.reload(true);
    }
