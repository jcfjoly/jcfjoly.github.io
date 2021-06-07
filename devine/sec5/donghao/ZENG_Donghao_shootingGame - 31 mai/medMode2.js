    ovniColor = 'white'

    //Main Player
    var ovni = new Objects(300,500,30,20,ovniColor,0,0)
    speedmed = 10
    //row 1
    var alien1med = new Aliensmed(40,50,50,40,0.1,0,speedmed)
    var alien2med = new Aliensmed(110,50,50,40,0.1,0,speedmed)
    var alien3med = new Aliensmed(180,50,50,40,0.1,0,speedmed)
    var alien4med = new Aliensmed(240,50,50,40,0.1,0,speedmed)
    var alien5med = new Aliensmed(300,50,50,40,0.1,0,speedmed)
    var alien6med = new Aliensmed(360,50,50,40,0.1,0,speedmed)
    var alien7med = new Aliensmed(430,50,50,40,0.1,0,speedmed)
    var alien8med = new Aliensmed(500,50,50,40,0.1,0,speedmed)

    //row2
    var alien9med = new Aliensmed(40,100,50,40,0.1,0,speedmed)
    var alien10med = new Aliensmed(110,100,50,40,0.1,0,speedmed)
    var alien11med = new Aliensmed(180,100,50,40,0.1,0,speedmed)
    var alien12med = new Aliensmed(240,100,50,40,0.1,0,speedmed)
    var alien13med = new Aliensmed(300,100,50,40,0.1,0,speedmed)
    var alien14med = new Aliensmed(360,100,50,40,0.1,0,speedmed)
    var alien15med = new Aliensmed(430,100,50,40,0.1,0,speedmed)
    var alien16med = new Aliensmed(500,100,50,40,0.1,0,speedmed)

    //row3
    var alien17med = new Aliensmed(40,150,50,40,0.1,0,speedmed)
    var alien18med = new Aliensmed(110,150,50,40,0.1,0,speedmed)
    var alien19med = new Aliensmed(180,150,50,40,0.1,0,speedmed)
    var alien20med = new Aliensmed(240,150,50,40,0.1,0,speedmed)
    var alien21med = new Aliensmed(300,150,50,40,0.1,0,speedmed)
    var alien22med = new Aliensmed(360,150,50,40,0.1,0,speedmed)
    var alien23med = new Aliensmed(430,150,50,40,0.1,0,speedmed)
    var alien24med = new Aliensmed(500,150,50,40,0.1,0,speedmed)

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

    function Aliensmed(x,y,w,h,speedX,speedY,lifep){
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
                this.x+=this.speedX*20*-1
                this.y+=this.speedY*20
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

    function drawObjectsmed(){
        ovni.draw()

        if(alien1med.lifep>0)
        {alien1med.draw()}
        if(alien2med.lifep>0)
        {alien2med.draw()}
        if(alien3med.lifep>0)
        {alien3med.draw()}
        if(alien4med.lifep>0)
        {alien4med.draw()}
        if(alien5med.lifep>0)
        {alien5med.draw()}
        if(alien6med.lifep>0)
        {alien6med.draw()}
        if(alien7med.lifep>0)
        {alien7med.draw()}
        if(alien8med.lifep>0)
        {alien8med.draw()}

        if(alien9med.lifep>0)
        {alien9med.draw()}
        if(alien10med.lifep>0)
        {alien10med.draw()}
        if(alien11med.lifep>0)
        {alien11med.draw()}
        if(alien12med.lifep>0)
        {alien12med.draw()}
        if(alien13med.lifep>0)
        {alien13med.draw()}
        if(alien14med.lifep>0)
        {alien14med.draw()}
        if(alien15med.lifep>0)
        {alien15med.draw()}
        if(alien16med.lifep>0)
        {alien16med.draw()}

        if(alien17med.lifep>0)
        {alien17med.draw()}
        if(alien18med.lifep>0)
        {alien18med.draw()}
        if(alien19med.lifep>0)
        {alien19med.draw()}
        if(alien20med.lifep>0)
        {alien20med.draw()}
        if(alien21med.lifep>0)
        {alien21med.draw()}
        if(alien22med.lifep>0)
        {alien22med.draw()}
        if(alien23med.lifep>0)
        {alien23med.draw()}
        if(alien24med.lifep>0)
        {alien24med.draw()}

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

    function checkCollisionmed(){

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien1med)&&
        alien1med.lifep>0){
		ammo.splice(i,1)
        alien1med.lifep=alien1med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien2med)&&
        alien2med.lifep>0){
		ammo.splice(i,1)
        alien2med.lifep=alien2med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien3med)&&
        alien3med.lifep>0){
		ammo.splice(i,1)
        alien3med.lifep=alien3med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien4med)&&
        alien4med.lifep>0){
		ammo.splice(i,1)
        alien4med.lifep=alien4med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien5med)&&
        alien5med.lifep>0){
		ammo.splice(i,1)
        alien5med.lifep=alien5med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien6med)&&
        alien6med.lifep>0){
		ammo.splice(i,1)
        alien6med.lifep=alien6med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien7med)&&
        alien7med.lifep>0){
		ammo.splice(i,1)
        alien7med.lifep=alien7med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien8med)&&
        alien8med.lifep>0){
		ammo.splice(i,1)
        alien8med.lifep=alien8med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien9med)&&
        alien9med.lifep>0){
		ammo.splice(i,1)
        alien9med.lifep=alien9med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien10med)&&
        alien10med.lifep>0){
		ammo.splice(i,1)
        alien10med.lifep=alien10med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien11med)&&
        alien11med.lifep>0){
		ammo.splice(i,1)
        alien11med.lifep=alien11med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien12med)&&
        alien12med.lifep>0){
		ammo.splice(i,1)
        alien12med.lifep=alien12med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien13med)&&
        alien13med.lifep>0){
		ammo.splice(i,1)
        alien13med.lifep=alien13med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien14med)&&
        alien14med.lifep>0){
		ammo.splice(i,1)
        alien14med.lifep=alien14med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien15med)&&
        alien15med.lifep>0){
		ammo.splice(i,1)
        alien15med.lifep=alien15med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien16med)&&
        alien16med.lifep>0){
		ammo.splice(i,1)
        alien16med.lifep=alien16med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien17med)&&
        alien17med.lifep>0){
		ammo.splice(i,1)
        alien17med.lifep=alien17med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien18med)&&
        alien18med.lifep>0){
		ammo.splice(i,1)
        alien18med.lifep=alien18med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien19med)&&
        alien19med.lifep>0){
		ammo.splice(i,1)
        alien19med.lifep=alien19med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien20med)&&
        alien20med.lifep>0){
		ammo.splice(i,1)
        alien20med.lifep=alien20med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien21med)&&
        alien21med.lifep>0){
		ammo.splice(i,1)
        alien21med.lifep=alien21med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien22med)&&
        alien22med.lifep>0){
		ammo.splice(i,1)
        alien22med.lifep=alien22med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien23med)&&
        alien23med.lifep>0){
		ammo.splice(i,1)
        alien23med.lifep=alien23med.lifep-1
	    }

        for(i=0;i<ammo.length;i++)
	    if(collision(ammo[i],alien24med)&&
        alien24med.lifep>0){
		ammo.splice(i,1)
        alien24med.lifep=alien24med.lifep-1
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

        if(collision(alien1med,rightLimit)
        ){
            alien1med.y=alien1med.y+1.5
        }
        if(collision(alien2med,rightLimit)
        ){
            alien2med.y=alien2med.y+1.5
        }
        if(collision(alien3med,rightLimit)
        ){
            alien3med.y=alien3med.y+1.5
        }
        if(collision(alien4med,rightLimit)
        ){
            alien4med.y=alien4med.y+1.5
        }
        if(collision(alien5med,rightLimit)
        ){
            alien5med.y=alien5med.y+1.5
        }
        if(collision(alien6med,rightLimit)
        ){
            alien6med.y=alien6med.y+1.5
        }
        if(collision(alien7med,rightLimit)
        ){
            alien7med.y=alien7med.y+1.5
        }
        if(collision(alien8med,rightLimit)
        ){
            alien8med.y=alien8med.y+1.5
        }
        if(collision(alien9med,rightLimit)
        ){
            alien9med.y=alien9med.y+1.5
        }
        if(collision(alien10med,rightLimit)
        ){
            alien10med.y=alien10med.y+1.5
        }
        if(collision(alien11med,rightLimit)
        ){
            alien11med.y=alien11med.y+1.5
        }
        if(collision(alien12med,rightLimit)
        ){
            alien12med.y=alien12med.y+1.5
        }
        if(collision(alien13med,rightLimit)
        ){
            alien13med.y=alien13med.y+1.5
        }
        if(collision(alien14med,rightLimit)
        ){
            alien14med.y=alien14med.y+1.5
        }
        if(collision(alien15med,rightLimit)
        ){
            alien15med.y=alien15med.y+1.5
        }
        if(collision(alien16med,rightLimit)
        ){
            alien16med.y=alien16med.y+1.5
        }
        if(collision(alien17med,rightLimit)
        ){
            alien17med.y=alien17med.y+1.5
        }
        if(collision(alien18med,rightLimit)
        ){
            alien18med.y=alien18med.y+1.5
        }
        if(collision(alien19med,rightLimit)
        ){
            alien19med.y=alien19med.y+1.5
        }
        if(collision(alien20med,rightLimit)
        ){
            alien20med.y=alien20med.y+1.5
        }
        if(collision(alien21med,rightLimit)
        ){
            alien21med.y=alien21med.y+1.5
        }
        if(collision(alien22med,rightLimit)
        ){
            alien22med.y=alien22med.y+1.5
        }
        if(collision(alien23med,rightLimit)
        ){
            alien23med.y=alien23med.y+1.5
        }
        if(collision(alien24med,rightLimit)
        ){
            alien24med.y=alien24med.y+1.5
        }

        //descendre aliens (gauche)

        if(collision(alien1med,leftLimit)
        ){
            alien1med.y=alien1med.y+1.5
        }
        if(collision(alien2med,leftLimit)
        ){
            alien2med.y=alien2med.y+1.5
        }
        if(collision(alien3med,leftLimit)
        ){
            alien3med.y=alien3med.y+1.5
        }
        if(collision(alien4med,leftLimit)
        ){
            alien4med.y=alien4med.y+1.5
        }
        if(collision(alien5med,leftLimit)
        ){
            alien5med.y=alien5med.y+1.5
        }
        if(collision(alien6med,leftLimit)
        ){
            alien6med.y=alien6med.y+1.5
        }
        if(collision(alien7med,leftLimit)
        ){
            alien7med.y=alien7med.y+1.5
        }
        if(collision(alien8med,leftLimit)
        ){
            alien8med.y=alien8med.y+1.5
        }

        if(collision(alien9med,leftLimit)
        ){
            alien9med.y=alien9med.y+1.5
        }
        if(collision(alien10med,leftLimit)
        ){
            alien10med.y=alien10med.y+1.5
        }
        if(collision(alien11med,leftLimit)
        ){
            alien11med.y=alien11med.y+1.5
        }
        if(collision(alien12med,leftLimit)
        ){
            alien12med.y=alien12med.y+1.5
        }
        if(collision(alien13med,leftLimit)
        ){
            alien13med.y=alien13med.y+1.5
        }
        if(collision(alien14med,leftLimit)
        ){
            alien14med.y=alien14med.y+1.5
        }
        if(collision(alien15med,leftLimit)
        ){
            alien15med.y=alien15med.y+1.5
        }
        if(collision(alien16med,leftLimit)
        ){
            alien16med.y=alien16med.y+1.5
        }

        if(collision(alien17med,leftLimit)
        ){
            alien17med.y=alien17med.y+1.5
        }
        if(collision(alien18med,leftLimit)
        ){
            alien18med.y=alien18med.y+1.5
        }
        if(collision(alien19med,leftLimit)
        ){
            alien19med.y=alien19med.y+1.5
        }
        if(collision(alien20med,leftLimit)
        ){
            alien20med.y=alien20med.y+1.5
        }
        if(collision(alien21med,leftLimit)
        ){
            alien21med.y=alien21med.y+1.5
        }
        if(collision(alien22med,leftLimit)
        ){
            alien22med.y=alien22med.y+1.5
        }
        if(collision(alien23med,leftLimit)
        ){
            alien23med.y=alien23med.y+1.5
        }
        if(collision(alien24med,leftLimit)
        ){
            alien24med.y=alien24med.y+1.5
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

    function spaceInvaders2(){
        c.clearRect(0,0,canvas.width,canvas.height)
        textDisplay()
        drawObjectsmed()
        drawBullets()
        checkCollisionmed()
        document.getElementById('playButtonEZ').style.display='none';
        document.getElementById('playButtonMED').style.display='none';
        document.getElementById('playButtonOOF').style.display='none';
        document.getElementById('monCanvas').style.display='block';
        document.getElementById('restart1').style.display='block';
        requestAnimationFrame(spaceInvaders2)
        if(alien1med.lifep<=0&&
            alien2med.lifep<=0&&
            alien3med.lifep<=0&&
            alien4med.lifep<=0&&
            alien5med.lifep<=0&&
            alien6med.lifep<=0&&
            alien7med.lifep<=0&&
            alien8med.lifep<=0
            ){
                c.drawImage(victoryIMG, 0,0,600,600)
                victorySFX.play()
            }
        if(collision(alien1med,lifewall1)||
        collision(alien2med,lifewall1)||
        collision(alien3med,lifewall1)||
        collision(alien4med,lifewall1)||
        collision(alien5med,lifewall1)||
        collision(alien6med,lifewall1)||
        collision(alien7med,lifewall1)||
        collision(alien8med,lifewall1)||
        collision(alien9med,lifewall1)||
        collision(alien10med,lifewall1)||
        collision(alien11med,lifewall1)||
        collision(alien12med,lifewall1)||
        collision(alien13med,lifewall1)||
        collision(alien14med,lifewall1)||
        collision(alien15med,lifewall1)||
        collision(alien16med,lifewall1)||
        collision(alien17med,lifewall1)||
        collision(alien18med,lifewall1)||
        collision(alien19med,lifewall1)||
        collision(alien20med,lifewall1)||
        collision(alien21med,lifewall1)||
        collision(alien22med,lifewall1)||
        collision(alien23med,lifewall1)||
        collision(alien24med,lifewall1)
        ){
            c.drawImage(gameOverIMG, 0,0,600,600)
            gameOverSFX.play()
        }
    }

    function reloadPage(){
        location.reload(true);
    }
