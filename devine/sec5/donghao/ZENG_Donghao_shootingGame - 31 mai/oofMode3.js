    ovniColor = 'white'

    //Main Player
    var ovni = new Objects(300,500,30,20,ovniColor,0,0)
    speedoof = 1000
    speedoof2 = speedoof * -1
    //row 1
    var alien1oof = new Aliensoof(40,50,50,40,0.1,0,speedoof)
    var alien2oof = new Aliensoof(110,50,50,40,0.1,0,speedoof)
    var alien3oof = new Aliensoof(180,50,50,40,0.1,0,speedoof)
    var alien4oof = new Aliensoof(240,50,50,40,0.1,0,speedoof)
    var alien5oof = new Aliensoof(300,50,50,40,0.1,0,speedoof)
    var alien6oof = new Aliensoof(360,50,50,40,0.1,0,speedoof)
    var alien7oof = new Aliensoof(430,50,50,40,0.1,0,speedoof)
    var alien8oof = new Aliensoof(500,50,50,40,0.1,0,speedoof)

    //row2
    var alien9oof = new Aliensoof(40,100,50,40,0.1,0,speedoof)
    var alien10oof = new Aliensoof(110,100,50,40,0.1,0,speedoof)
    var alien11oof = new Aliensoof(180,100,50,40,0.1,0,speedoof)
    var alien12oof = new Aliensoof(240,100,50,40,0.1,0,speedoof)
    var alien13oof = new Aliensoof(300,100,50,40,0.1,0,speedoof)
    var alien14oof = new Aliensoof(360,100,50,40,0.1,0,speedoof)
    var alien15oof = new Aliensoof(430,100,50,40,0.1,0,speedoof)
    var alien16oof = new Aliensoof(500,100,50,40,0.1,0,speedoof)

    //row3
    var alien17oof = new Aliensoof(40,150,50,40,0.1,0,speedoof)
    var alien18oof = new Aliensoof(110,150,50,40,0.1,0,speedoof)
    var alien19oof = new Aliensoof(180,150,50,40,0.1,0,speedoof)
    var alien20oof = new Aliensoof(240,150,50,40,0.1,0,speedoof)
    var alien21oof = new Aliensoof(300,150,50,40,0.1,0,speedoof)
    var alien22oof = new Aliensoof(360,150,50,40,0.1,0,speedoof)
    var alien23oof = new Aliensoof(430,150,50,40,0.1,0,speedoof)
    var alien24oof = new Aliensoof(500,150,50,40,0.1,0,speedoof)

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

    function Aliensoof(x,y,w,h,speedX,speedY,lifep){
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
                this.x+=this.speedX*50
                this.y+=this.speedY*20
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

    function drawObjectsoof(){
        ovni.draw()

        if(alien1oof.lifep>0)
        {alien1oof.draw()}
        if(alien2oof.lifep>0)
        {alien2oof.draw()}
        if(alien3oof.lifep>0)
        {alien3oof.draw()}
        if(alien4oof.lifep>0)
        {alien4oof.draw()}
        if(alien5oof.lifep>0)
        {alien5oof.draw()}
        if(alien6oof.lifep>0)
        {alien6oof.draw()}
        if(alien7oof.lifep>0)
        {alien7oof.draw()}
        if(alien8oof.lifep>0)
        {alien8oof.draw()}

        if(alien9oof.lifep>0)
        {alien9oof.draw()}
        if(alien10oof.lifep>0)
        {alien10oof.draw()}
        if(alien11oof.lifep>0)
        {alien11oof.draw()}
        if(alien12oof.lifep>0)
        {alien12oof.draw()}
        if(alien13oof.lifep>0)
        {alien13oof.draw()}
        if(alien14oof.lifep>0)
        {alien14oof.draw()}
        if(alien15oof.lifep>0)
        {alien15oof.draw()}
        if(alien16oof.lifep>0)
        {alien16oof.draw()}

        if(alien17oof.lifep>0)
        {alien17oof.draw()}
        if(alien18oof.lifep>0)
        {alien18oof.draw()}
        if(alien19oof.lifep>0)
        {alien19oof.draw()}
        if(alien20oof.lifep>0)
        {alien20oof.draw()}
        if(alien21oof.lifep>0)
        {alien21oof.draw()}
        if(alien22oof.lifep>0)
        {alien22oof.draw()}
        if(alien23oof.lifep>0)
        {alien23oof.draw()}
        if(alien24oof.lifep>0)
        {alien24oof.draw()}

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

    function checkCollisionoof(){

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien1oof)&&
        alien1oof.lifep>0){
		ammo.splice(i,1)
        alien1oof.lifep=alien1oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien2oof)&&
        alien2oof.lifep>0){
		ammo.splice(i,1)
        alien2oof.lifep=alien2oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien3oof)&&
        alien3oof.lifep>0){
		ammo.splice(i,1)
        alien3oof.lifep=alien3oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien4oof)&&
        alien4oof.lifep>0){
		ammo.splice(i,1)
        alien4oof.lifep=alien4oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien5oof)&&
        alien5oof.lifep>0){
		ammo.splice(i,1)
        alien5oof.lifep=alien5oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien6oof)&&
        alien6oof.lifep>0){
		ammo.splice(i,1)
        alien6oof.lifep=alien6oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien7oof)&&
        alien7oof.lifep>0){
		ammo.splice(i,1)
        alien7oof.lifep=alien7oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien8oof)&&
        alien8oof.lifep>0){
		ammo.splice(i,1)
        alien8oof.lifep=alien8oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien9oof)&&
        alien9oof.lifep>0){
		ammo.splice(i,1)
        alien9oof.lifep=alien9oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien10oof)&&
        alien10oof.lifep>0){
		ammo.splice(i,1)
        alien10oof.lifep=alien10oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien11oof)&&
        alien11oof.lifep>0){
		ammo.splice(i,1)
        alien11oof.lifep=alien11oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien12oof)&&
        alien12oof.lifep>0){
		ammo.splice(i,1)
        alien12oof.lifep=alien12oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien13oof)&&
        alien13oof.lifep>0){
		ammo.splice(i,1)
        alien13oof.lifep=alien13oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien14oof)&&
        alien14oof.lifep>0){
		ammo.splice(i,1)
        alien14oof.lifep=alien14oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien15oof)&&
        alien15oof.lifep>0){
		ammo.splice(i,1)
        alien15oof.lifep=alien15oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien16oof)&&
        alien16oof.lifep>0){
		ammo.splice(i,1)
        alien16oof.lifep=alien16oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien17oof)&&
        alien17oof.lifep>0){
		ammo.splice(i,1)
        alien17oof.lifep=alien17oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien18oof)&&
        alien18oof.lifep>0){
		ammo.splice(i,1)
        alien18oof.lifep=alien18oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien19oof)&&
        alien19oof.lifep>0){
		ammo.splice(i,1)
        alien19oof.lifep=alien19oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien20oof)&&
        alien20oof.lifep>0){
		ammo.splice(i,1)
        alien20oof.lifep=alien20oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien21oof)&&
        alien21oof.lifep>0){
		ammo.splice(i,1)
        alien21oof.lifep=alien21oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien22oof)&&
        alien22oof.lifep>0){
		ammo.splice(i,1)
        alien22oof.lifep=alien22oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien23oof)&&
        alien23oof.lifep>0){
		ammo.splice(i,1)
        alien23oof.lifep=alien23oof.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien24oof)&&
        alien24oof.lifep>0){
		ammo.splice(i,1)
        alien24oof.lifep=alien24oof.lifep-1
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

        if(collision(alien1oof,rightLimit)
        ){
            alien1oof.y=alien1oof.y+3.5
        }
        if(collision(alien2oof,rightLimit)
        ){
            alien2oof.y=alien2oof.y+3.5
        }
        if(collision(alien3oof,rightLimit)
        ){
            alien3oof.y=alien3oof.y+3.5
        }
        if(collision(alien4oof,rightLimit)
        ){
            alien4oof.y=alien4oof.y+3.5
        }
        if(collision(alien5oof,rightLimit)
        ){
            alien5oof.y=alien5oof.y+3.5
        }
        if(collision(alien6oof,rightLimit)
        ){
            alien6oof.y=alien6oof.y+3.5
        }
        if(collision(alien7oof,rightLimit)
        ){
            alien7oof.y=alien7oof.y+3.5
        }
        if(collision(alien8oof,rightLimit)
        ){
            alien8oof.y=alien8oof.y+3.5
        }
        if(collision(alien9oof,rightLimit)
        ){
            alien9oof.y=alien9oof.y+3.5
        }
        if(collision(alien10oof,rightLimit)
        ){
            alien10oof.y=alien10oof.y+3.5
        }
        if(collision(alien11oof,rightLimit)
        ){
            alien11oof.y=alien11oof.y+3.5
        }
        if(collision(alien12oof,rightLimit)
        ){
            alien12oof.y=alien12oof.y+3.5
        }
        if(collision(alien13oof,rightLimit)
        ){
            alien13oof.y=alien13oof.y+3.5
        }
        if(collision(alien14oof,rightLimit)
        ){
            alien14oof.y=alien14oof.y+3.5
        }
        if(collision(alien15oof,rightLimit)
        ){
            alien15oof.y=alien15oof.y+3.5
        }
        if(collision(alien16oof,rightLimit)
        ){
            alien16oof.y=alien16oof.y+3.5
        }
        if(collision(alien17oof,rightLimit)
        ){
            alien17oof.y=alien17oof.y+3.5
        }
        if(collision(alien18oof,rightLimit)
        ){
            alien18oof.y=alien18oof.y+3.5
        }
        if(collision(alien19oof,rightLimit)
        ){
            alien19oof.y=alien19oof.y+3.5
        }
        if(collision(alien20oof,rightLimit)
        ){
            alien20oof.y=alien20oof.y+3.5
        }
        if(collision(alien21oof,rightLimit)
        ){
            alien21oof.y=alien21oof.y+3.5
        }
        if(collision(alien22oof,rightLimit)
        ){
            alien22oof.y=alien22oof.y+3.5
        }
        if(collision(alien23oof,rightLimit)
        ){
            alien23oof.y=alien23oof.y+3.5
        }
        if(collision(alien24oof,rightLimit)
        ){
            alien24oof.y=alien24oof.y+3.5
        }

        //descendre aliens (gauche)

        if(collision(alien1oof,leftLimit)
        ){
            alien1oof.y=alien1oof.y+3
        }
        if(collision(alien2oof,leftLimit)
        ){
            alien2oof.y=alien2oof.y+3
        }
        if(collision(alien3oof,leftLimit)
        ){
            alien3oof.y=alien3oof.y+3
        }
        if(collision(alien4oof,leftLimit)
        ){
            alien4oof.y=alien4oof.y+3
        }
        if(collision(alien5oof,leftLimit)
        ){
            alien5oof.y=alien5oof.y+3
        }
        if(collision(alien6oof,leftLimit)
        ){
            alien6oof.y=alien6oof.y+3
        }
        if(collision(alien7oof,leftLimit)
        ){
            alien7oof.y=alien7oof.y+3
        }
        if(collision(alien8oof,leftLimit)
        ){
            alien8oof.y=alien8oof.y+3
        }

        if(collision(alien9oof,leftLimit)
        ){
            alien9oof.y=alien9oof.y+3
        }
        if(collision(alien10oof,leftLimit)
        ){
            alien10oof.y=alien10oof.y+3
        }
        if(collision(alien11oof,leftLimit)
        ){
            alien11oof.y=alien11oof.y+3
        }
        if(collision(alien12oof,leftLimit)
        ){
            alien12oof.y=alien12oof.y+3
        }
        if(collision(alien13oof,leftLimit)
        ){
            alien13oof.y=alien13oof.y+3
        }
        if(collision(alien14oof,leftLimit)
        ){
            alien14oof.y=alien14oof.y+3
        }
        if(collision(alien15oof,leftLimit)
        ){
            alien15oof.y=alien15oof.y+3
        }
        if(collision(alien16oof,leftLimit)
        ){
            alien16oof.y=alien16oof.y+3
        }

        if(collision(alien17oof,leftLimit)
        ){
            alien17oof.y=alien17oof.y+3
        }
        if(collision(alien18oof,leftLimit)
        ){
            alien18oof.y=alien18oof.y+3
        }
        if(collision(alien19oof,leftLimit)
        ){
            alien19oof.y=alien19oof.y+3
        }
        if(collision(alien20oof,leftLimit)
        ){
            alien20oof.y=alien20oof.y+3
        }
        if(collision(alien21oof,leftLimit)
        ){
            alien21oof.y=alien21oof.y+3
        }
        if(collision(alien22oof,leftLimit)
        ){
            alien22oof.y=alien22oof.y+3
        }
        if(collision(alien23oof,leftLimit)
        ){
            alien23oof.y=alien23oof.y+3
        }
        if(collision(alien24oof,leftLimit)
        ){
            alien24oof.y=alien24oof.y+3
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

    function spaceInvaders3(){
        c.clearRect(0,0,canvas.width,canvas.height)
        textDisplay()
        drawObjectsoof()
        drawBullets()
        checkCollisionoof()
        document.getElementById('playButtonEZ').style.display='none';
        document.getElementById('playButtonMED').style.display='none';
        document.getElementById('playButtonOOF').style.display='none';
        document.getElementById('monCanvas').style.display='block';
        document.getElementById('restart1').style.display='block';
        requestAnimationFrame(spaceInvaders3)
        if(alien1oof.lifep<=0&&
            alien2oof.lifep<=0&&
            alien3oof.lifep<=0&&
            alien4oof.lifep<=0&&
            alien5oof.lifep<=0&&
            alien6oof.lifep<=0&&
            alien7oof.lifep<=0&&
            alien8oof.lifep<=0
            ){
                c.drawImage(victoryIMG, 0,0,600,600)
                victorySFX.play()
            }
        if(collision(alien1oof,lifewall1)||
        collision(alien2oof,lifewall1)||
        collision(alien3oof,lifewall1)||
        collision(alien4oof,lifewall1)||
        collision(alien5oof,lifewall1)||
        collision(alien6oof,lifewall1)||
        collision(alien7oof,lifewall1)||
        collision(alien8oof,lifewall1)||
        collision(alien9oof,lifewall1)||
        collision(alien10oof,lifewall1)||
        collision(alien11oof,lifewall1)||
        collision(alien12oof,lifewall1)||
        collision(alien13oof,lifewall1)||
        collision(alien14oof,lifewall1)||
        collision(alien15oof,lifewall1)||
        collision(alien16oof,lifewall1)||
        collision(alien17oof,lifewall1)||
        collision(alien18oof,lifewall1)||
        collision(alien19oof,lifewall1)||
        collision(alien20oof,lifewall1)||
        collision(alien21oof,lifewall1)||
        collision(alien22oof,lifewall1)||
        collision(alien23oof,lifewall1)||
        collision(alien24oof,lifewall1)
        ){
            c.drawImage(gameOverIMG, 0,0,600,600)
            gameOverSFX.play()
        }
    }

    function reloadPage(){
        location.reload(true);
    }
