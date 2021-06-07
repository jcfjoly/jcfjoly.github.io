//intro

var histoire = {
	x:0,
	y:0,
	w:1200,
	h:750,
	affiche:false
}


var instructionJeu = {
	x:0,
	y:0,
	w:1200,
	h:750
}
//temps

var tempsMinVar = {
	x:825,
	y:225,
	w:175,
	h:300
}

var tempsMinDiVar = {
	x:650,
	y:225,
	w:175,
	h:300
}

var deuxPoints = {
	x:550,
	y:225,
	w:100,
	h:300
}
var tempsHeureVar = {
	x:375,
	y:225,
	w:175,
	h:300
}

var tempsHeureDiVar = {
	x:200,
	y:225,
	w:175,
	h:300
}

//joueur
var joueur={
	x:6,//325,//3e875,//1e 1000,//875,//200,//325,//325 jeu4
	y:625,//3e700,//1e550,//750,//100,//625,//635 jeu4
	w:52,
	h:118,
	color:"white",
    jump:false,
    xVecteur:0,
    yVecteur:0,
	reverse:false,
	speed:1,
	ySpeed:5,
	}  

var joueurPlaque = {
	x:1000,
	y:550,
	w:52,
	h:10,
	speed:5,
}
//menu

var backgroundMenu={
	x:0,
	y:0,
	w:1200,
	h:750
}

var titre={
	x:400,
	y:125,
	w:400,
	h:200
}

var instructionMenu = {
	x:150,
	y:435,
	w:275,
	h:100,
}

var start = {
	x:795,
	y:435,
	w:275,
	h:100,
}


/*var choix = {
	x:875,
	y:435,
	w:275,
	h:100,
}*/

//instructionMenu

var instructionMenuAffichage={
	x:350,
	y:50,
	w:500,
	h:500,
}

//choix
/*
var choixRetour = {
	x:875,
	y:435,
	w:275,
	h:100,
}*/

//jeu1Intro

var spaceText = {
	x:600,
	y:600,
}

//jeu1
var personnage = {
	x:1015,//875,
	y:35,//700,
	w:52,
	h:118,
	speed:0,//1.5//0,
}	


var personnageFacil = {
	x:875,//1015,//875,
	y:100,//35,//700,
	w:50,
	h:80,
	speed:2,//1.5//0,
}	

var clock={
	x:0,
	y:0,
	h:50,
	w:100,	
}
var heure={
	x:50,
	y:28,
	temps:"0 0 : 0 3"
}

var sacInventaire = {
	x:600,
	y:665,
	w:60,
	h:70
}

var inventaire1 = {
	x:690,
	y:665,
	w:70,
	h:70
}

var inventaire2 = {
	x:770,
	y:665,
	w:70,
	h:70
}

var inventaire3 = {
	x:850,
	y:665,
	w:70,
	h:70
}

var inventaire4 = {
	x:930,
	y:665,
	w:70,
	h:70
}

var inventaire5 = {
	x:1010,
	y:665,
	w:70,
	h:70
}
var inventaire6 = {
	x:690,
	y:580,
	w:70,
	h:70
}

var inventaire7 = {
	x:770,
	y:580,
	w:70,
	h:70
}

var inventaire8 = {
	x:850,
	y:580,
	w:70,
	h:70
}

var inventaire9 = {
	x:930,
	y:580,
	w:70,
	h:70
}

var inventaire10 = {
	x:1010,
	y:580,
	w:70,
	h:70
}

var inventaire11 = {
	x:690,
	y:495,
	w:70,
	h:70
}

var inventaire12 = {
	x:770,
	y:495,
	w:70,
	h:70
}

var inventaire13 = {
	x:850,
	y:495,
	w:70,
	h:70
}

var inventaire14 = {
	x:930,
	y:495,
	w:70,
	h:70
}


var inventaire15 = {
	x:1010,
	y:495,
	w:70,
	h:70
}

var backgroundInventaire = {
	x:680,
	y:565,
	w:410,
	h:200,
}
var point = {
	x:1092.5,
	y:665,
	w:25,
	h:25
}

var pointText = {
	x:point.x+5,
	y:710,
	text:" "+0
}

var instruction = {
	x:1130,
	y:665,
	w:60,
	h:70
}

var message = {
	x:125,
	y:705,
	text:"rien"
}

var messageProfil = {
	x:5,
	y:655,
	w:90,
	h:90
}

var instructionLivre = {
	x:0,
	y:0,
	w:1200,
	h:750,
	
}

var backgroundProfil = {
	x:0,
	y:640,
	w:1200,
	h:125
}
//jeu1

var fond = {
	x:25,
	y:25,
	w:1200,
	h:600,
	v:true,
}

var fenetre1 = {
	x:25,
	y:350,
	w:10,
	h:75,
}

var fenetre2 = {
	x:200,
	y:25,
	w:75,
	h:10,
}

var fenetre3 = {
	x:900,
	y:25,
	w:150,
	h:10,
}
//chambre
var tv = {
	x:30,
	y:280,
	w:75,
	h:50,
	o:true
}

var lit = {
	x:30,
	y:450,
	w:250,
	h:170,
	o:true,	 
}

var armoire = {
	x:400,
	y:280,
	w:175,
	h:50,
	o:true,
}

var tableNuit = {
	x:545,
	y:545,
	w:75,
	h:75,
	o:true,
}

//toilet

var toilet = {
	x:680,
	y:280,
	w:75,
	h:75,
}

var robinet = {
	x:800,
	y:280,
	w:90,
	h:50,
	o:true,
}

var baignoire = {
	x:680,
	y:500,
	w:215,
	h:120,
	o:true,
}

//salon

var aquarium = {
	x:55,
	y:30,
	w:125,
	h:50,
	o:true,
}

var plante = {
	x:115,
	y:150,
	w:175,
	h:50,
	o:true,
}

var sofa = {
	x:315,
	y:30,
	w:200,
	h:70,
	o:true,
}

//cuisine

var cuisinier = {
	x:580,
	y:30,
	w:100,
	h:50,
}
var cuisinier2 = {
	x:780,
	y:30,
	w:100,
	h:50,
	o:true,
}
var verre = {
	x:680,
	y:30,
	w:100,
	h:50,
	o:true,
}
var table = {
	x:650,
	y:170,
	w:125,
	h:75,
	o:true,
}
var chaise = {
	x:780,
	y:185,
	w:50,
	h:50,
}
var book = {
	x:1120,
	y:100,
	w:50,
	h:150,
	o:true,
}
//porte
var vetement = {
	x:1130,
	y:400,
	w:40,
	h:200,
	o:true,
}
var botte = {
	x:930,
	y:450,
	w:50,
	h:50,
	o:true,
}
var porteJeu1 = {
	x:1000,
	y:615,
	w:100,
	h:10,
}

//jeu2

var ville1={
	x:0,
	y:0,
	w:1200,
	h:750
}

var ville2={
	x:1200,
	y:0,
	w:1200,
	h:750
}

var ville3={
	x:2400,
	y:0,
	w:1200,
	h:750
}

var ville4={
	x:3600,
	y:0,
	w:1200,
	h:750
}

var finJeu2 = {
	x:4700,
	y:0,
	w:100,
	h:750
}

var reponse = {
	x:4610,
	y:367.5,
	w:180,
	h:25
}

//jeu3 

var nuit1 = {
	x:600,
	y:0,
	w:600,
	h:750
}

var backgroundJeu3 = {
	x:0,
	y:0,
	w:1200,
	h:750
}
	//jeu2


	/*var porteBouge={
		x:0,
		y:200,
		w:50,
		h:25,
		speed:1
	}
	var porteBouge2={
		x:25,
		y:100,
		w:50,
		h:25,
		speed:1
	}*/

//jeu4Intro

//jeu4

	var vieJeu4Var = {
	x:100,
	y:375,
	w:25,
	h:100
	}
	var backgroundJeu4={
		x:0,
		y:0,
		w:1200,
		h:650
	}

	var clef={
		x:660,
		y:470,
		w:50,
		h:50
	}

	var porte={
		x:300,
		y:400,
		w:50,
		h:10,
	}

	var portail1={
		x:600,
		y:110,
		w:50,
		h:20,
	}
	var portail1b={
		x:840,
		y:140,
		w:50,
		h:20,
	}
	var finjeu4={
		x:690,
		y:290,
		w:20,
		h:50,
	}

//jeu6

var backgroundJeu6 = {
	x:0,
	y:0,
	w:1200,
	h:650
}

var salle1 = {
	x:40,
	y:50,
	w:150,
	h:150,
	vf:false,
}

var salle2 = {
	x:40,
	y:250,
	w:150,
	h:150,
	vf:false,
}

var salle3 = {
	x:40,
	y:450,
	w:150,
	h:150,
	vf:false,
}

var salle4 = {
	x:275,
	y:50,
	w:150,
	h:150,
	vf:false,
}
var salle5 = {
	x:275,
	y:250,
	w:150,
	h:150,
	vf:false,
}

var salle6 = {
	x:275,
	y:450,
	w:150,
	h:150,
	vf:false,
}

var salle7 = {
	x:525,
	y:50,
	w:150,
	h:150,
	vf:false,
}

var salle8 = {
	x:525,
	y:250,
	w:150,
	h:150,
	vf:false,
}


var salle9 = {
	x:525,
	y:450,
	w:150,
	h:150,
	vf:false,
}

var salle10 = {
	x:775,
	y:50,
	w:150,
	h:150,
	vf:false,
}

var salle11 = {
	x:775,
	y:250,
	w:150,
	h:150,
	vf:false,
}

var salle12 = {
	x:775,
	y:450,
	w:150,
	h:150,
	vf:false,
}
var salle13 = {
	x:1025,
	y:50,
	w:150,
	h:150,
	vf:false,
}

var salle14 = {
	x:1025,
	y:250,
	w:150,
	h:150,
	vf:false,
}

var salle15 = {
	x:1025,
	y:450,
	w:150,
	h:150,
	vf:false,
}


var caseA = {
	x:45,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseB = {
	x:115,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseC = {
	x:185,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseD = {
	x:255,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseE = {
	x:325,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseF = {
	x:395,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseG = {
	x:465,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseH = {
	x:540,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseI = {
	x:610,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseJ = {
	x:680,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseK = {
	x:750,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseL = {
	x:820,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseM = {
	x:890,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseN = {
	x:960,
	y:665,
	w:50,
	h:50,
	reponse:false
}

var caseO = {
	x:1030,
	y:665,
	w:50,
	h:50,
	reponse:false
}

//jeu5

var adversaireJeu5 = {
	x:1100,
	y:10,
	w:84.5,
	h:128,
    jump:false,
    xVecteur:0,
    yVecteur:0,
	reverse:false,
	speed:0,
}
var backgroundJeu5 = {
	x:0,
	y:0,
	w:1200,
	h:675
}

var barreVieJoueur = {
	x:25,
	y:175,
	w:25,
	h:300
}

var barreVieAdversaire = {
	x:1150,
	y:175,
	w:25,
	h:250
}

var bouge={
	x:200,
	y:250,
	w:250,
	h:15,
	color:"Gainsboro",
	Xspeed:1,
	Yspeed:1,
}

var milieu = {
	x:600,
	y:375,
	w:50,
	h:50,
	color:"blue",
	speed:0
}

var bossMur = {
	x:1100,
	y:110,
	w:100,
	h:35,
}

var plaque = {
	x:250,
	y:250,
	w:50,
	h:15
}

var tempsJeu6Var = {
	x:1175,
	y:15,
	w:-540,
	h:10
}


//fin

class textFin{
	constructor(y,text,size,color,x){
		this.x=x
		this.y=y
        this.color=color
		this.text=text
		this.size=size
		this.x=800
		this.color="white"

		this.draw=function(){

			c.fillStyle=this.color
  	  		c.font = this.size+"px Times New Roman";
  	  		c.textAlign = "center";
    		c.fillText(this.text,this.x,this.y-750);
			this.y+=0.5

		}	
		
	}
}

var textFins=[]


class mur{
	constructor(x,y,w,h,image){
		this.x=x
		this.y=y
        this.h=h
		this.w=w
		this.image=image
		//this.speed=speed
		//this.image="murImgImg"

		this.draw=function(){
			var imageMur = new Image()
			imageMur.src = "images/"+this.image+"Img.png"
			var pattern = c.createPattern(imageMur,"repeat")
			c.fillStyle=pattern
			c.fillRect(this.x, this.y, this.w, this.h)
			//c.drawImage(imageMur,this.x, this.y, this.w, this.h)
			//this.y+=this.speed

		}	
		
	}
}

var murs=[]



function pousser(){
	murs = []
	if(menu==true||instructionMenu==true){
		murs.push(new mur(0,650,1200,100,"murMenu"))
	}
	if(jeu1==true){
		murs.push(new mur(0,0,1200,25,"murJeu1"))
		murs.push(new mur(0,25,25,625,"murJeu1"))
		murs.push(new mur(25,625,1200,25,"murJeu1"))
		murs.push(new mur(1175,25,25,600,"murJeu1"))

		murs.push(new mur(550,25,25,65,"murJeu1"))
		murs.push(new mur(650,265,25,115,"murJeu1"))
		murs.push(new mur(900,250,25,375,"murJeu1"))
		murs.push(new mur(25,250,125,25,"murJeu1"))
		murs.push(new mur(350,250,550,25,"murJeu1"))
		murs.push(new mur(550,175,25,75,"murJeu1"))
		murs.push(new mur(650,475,25,150,"murJeu1"))
	}

	if(jeu2==true){	

		//finjeu4=false
//MODE CARRE OU EST-CE QUE TU PEUX CHANGER TA DIRECTION GENRE
		/*murs.push(new mur(50,50,25,650,"murImgImg"))
		murs.push(new mur(125,0,25,225,"murImgImg"))
		murs.push(new mur(75,275,150,25,"murImgImg"))
		murs.push(new mur(125,300,25,325,"murImgImg"))
		murs.push(new mur(200,75,25,325,"murImgImg"))
		murs.push(new mur(200,50,175,25,"murImgImg"))
		murs.push(new mur(375,100,125,25,"murImgImg"))
		murs.push(new mur(375,50,25,50,"murImgImg"))
		murs.push(new mur(475,50,25,50,"murImgImg"))
		murs.push(new mur(500,50,175,25,"murImgImg"))
		murs.push(new mur(675,50,25,50,"murImgImg"))
		murs.push(new mur(675,100,100,25,"murImgImg"))
		murs.push(new mur(775,50,25,600,"murImgImg"))
		murs.push(new mur(800,50,250,25,"murImgImg"))
		//murs.push(new mur(775,450,375,25))
		murs.push(new mur(1100,50,100,25,"murImgImg"))
		//murs.push(new mur(1150,450,50,25))
		//murs.push(new mur(1100,50,100,25))*/
	}
	if(jeu4==true){
		murs.push(new mur(300,25,600,25,"murJeu41"))
		murs.push(new mur(300,640,600,25,"murJeu41"))
		murs.push(new mur(275,25,25,640,"murJeu41"))
		murs.push(new mur(890,25,25,640,"murJeu41"))
	//x
		murs.push(new mur(300,160,110,10,"murJeu41"))
		murs.push(new mur(350,100,120,10,"murJeu41"))
		murs.push(new mur(350,220,120,10,"murJeu41"))
		murs.push(new mur(300,280,120,10,"murJeu41"))
		murs.push(new mur(350,400,540,10,"murJeu41"))
		murs.push(new mur(530,220,130,10,"murJeu41"))
		murs.push(new mur(590,100,60,10,"murJeu41"))
		murs.push(new mur(770,160,120,10,"murJeu41"))
		murs.push(new mur(710,280,130,10,"murJeu41"))
		murs.push(new mur(590,280,120,10,"murJeu41"))
		murs.push(new mur(650,340,60,10,"murJeu41"))
		murs.push(new mur(770,460,120,10,"murJeu41"))
		murs.push(new mur(710,580,120,10,"murJeu41"))
		murs.push(new mur(650,460,70,10,"murJeu41"))
		murs.push(new mur(530,520,120,10,"murJeu41"))
		murs.push(new mur(300,520,180,10,"murJeu41"))
//y
		murs.push(new mur(470,100,10,300,"murJeu41"))
		murs.push(new mur(590,280,10,120,"murJeu41"))
		murs.push(new mur(710,50,10,300,"murJeu41"))
		murs.push(new mur(530,50,10,180,"murJeu41"))
		murs.push(new mur(650,100,10,120,"murJeu41"))
		murs.push(new mur(770,50,10,60,"murJeu41"))
		murs.push(new mur(590,100,10,60,"murJeu41"))
		murs.push(new mur(830,220,10,60,"murJeu41"))
		murs.push(new mur(770,470,10,60,"murJeu41"))
		murs.push(new mur(710,470,10,120,"murJeu41"))
		murs.push(new mur(650,470,10,60,"murJeu41"))
		murs.push(new mur(590,530,10,110,"murJeu41"))
		murs.push(new mur(530,530,10,60,"murJeu41"))
		murs.push(new mur(470,530,10,60,"murJeu41"))

	/*	for(i=0;i<murs.length;i++){
		if(inverse==true){

		}
		if(inverse==false){
		
		}
		}*/
	}
	if(jeu5==true){
		//murs.push(new mur(0,675,1200,75,"try"))	
		//murs.push(new mur(1000,100,300,25,"try"))
	}
	if(finBon==true||finMauvais==true){
		textFins.push(new textFin(700,"5:03 A.M.",35))
		textFins.push(new textFin(600,"Par Acacie Song. Classe: 502 ",20))
		textFins.push(new textFin(525,"Projet final du secondaire en informatique",15))		
		textFins.push(new textFin(450,"Merci à tous pour prendre le temps de jouer à mon jeu.",15))
		textFins.push(new textFin(425,"5:03 A.M. est un jeu que je me suis inspiré du chanson: 5：10 a.m. pour commencer",15))
		textFins.push(new textFin(400,"Ça parlait d'un genre d'esprit qu'on a à cet heure-là.",15))
		textFins.push(new textFin(375,"Ce projet m'a pris beaucoup de temps. J'espere que vous avez aimé un peu!",15))
		
		textFins.push(new textFin(350,"Ça se pourrait qu'il est des problèmes. Je suis désolée sur cela.",15))
		textFins.push(new textFin(200,"Merci à M. Fortin LaJolie pour son enseignement en info.",15))
		textFins.push(new textFin(100,"Collège Jean-Eudes",35))
		
		//textFins.push(new textFin(700,"5:03 A.M.",35))
	}
}

class munition{
	constructor(x,y,w,h,speed){
		this.x=x
		this.y=y
        this.h=h
		this.w=w
		this.speed=speed
		//this.speed=speed
		//this.image="murImgImg"

		this.draw=function(){
			var munitionImg = new Image()
			munitionImg.src = "images/munitionImg.png"

			c.drawImage(munitionImg,this.x+=this.speed,this.y,this.w,this.h)
			
			//this.y+=this.speed

		}	
		
	}
}

var munitions=[]



class laserC{
	constructor(x,y,w,h,speed){
		this.x=x
		this.y=y
        this.h=h
		this.w=w
		this.speed=speed
		//this.speed=speed
		//this.image="murImgImg"

		this.draw=function(){
			var laserCImg = new Image()
			laserCImg.src = "images/laserCImg.png"

			c.drawImage(laserCImg,this.x-=speed, this.y, this.w, this.h)
			//this.y+=this.speed
		}	
		
	}
}

class laserCY{
	constructor(x,y,w,h,speed){
		this.x=x
		this.y=y
        this.h=h
		this.w=w
		this.speed=speed
		//this.speed=speed
		//this.image="murImgImg"

		this.draw=function(){
			var laserCYImg = new Image()
			laserCYImg.src = "images/laserCYImg.png"

			c.drawImage(laserCYImg,this.x, this.y-=speed, this.w, this.h)
			//this.y+=this.speed
		}	
		
	}
}

var laserCs=[]
var adversaireLTemps = setInterval(newlaserC,2000)
//var laser2 = setInterval(newlaser2,1500)

function newlaserC(){
	laserCs.push(new laserCY(milieu.x+(milieu.w/2),milieu.y,25,50,-5))
	laserCs.push(new laserCY(milieu.x+(milieu.w/2),milieu.y,25,50,5))
}

var laser2 = setInterval(newlaser2,1500)
var adversaireBTemps1 = setInterval(newBoulle1,2500)
var obstacleBouge = setInterval(newBoulle1,2500)
//var adversaireBTemps2 = setTimeout(newBoulle2,750)
//var adversaireBTemps2a = setInterval(newBoulle2a,2500)

function newlaser2(){
if(vieTotalAdversaire<=40){	
		laserCs.push(new laserC(milieu.x,milieu.y+(milieu.h/2),50,25,-5))
		laserCs.push(new laserC(milieu.x,milieu.y+(milieu.h/2),50,25,5))
	}
}

function newBoulle1(){
	if(vieTotalAdversaire<=50){
	boulles.push(new boulle(milieu.x,milieu.y+(milieu.h/2),5))
	boulles.push(new boulle(milieu.x,milieu.y,-5))
	}
}

var obstacleMurTemps = setInterval(newObstacleMurTemps,6000)

function newObstacleMurTemps(){
	if(jeu5==true&&vieTotalAdversaire<=20){
	obstacleMurs.push(new obstacleMur(1200,0,25,750,4))
	plaque.x=Math.floor(Math.random()*(bouge.w-plaque.w)+bouge.x)
	}
}


/*function newBoulle2(){	
	//var adversaireBTemps2a = setInterval(newBoulle2a,2500)
	if(vieTotalAdversaire<=50){
		commencer=true
	}
}

function newBoulle2a(){
	if(vieTotalAdversaire<=100&&commencer==true){
	console.log("aaa")
	boulles.push(new boulle(milieu.x,milieu.y,-5))
	boulles.push(new boulle(milieu.x,milieu.y,5))
	}
}*/
			
	//var adversaireBTemps1 = setInterval(newBoulle1,2500)
	
	
	
	//var adversaireBTemps2 = setTimeout(newBoulle2,750)
	
	/*class boulle{
	constructor(x,y,speed){
		this.x=x-20
		this.y=y-20
		this.speed=speed

		this.draw=function(){
			var boulleImg = new Image()
			boulleImg.src = "images/boulleImg.jpg"

			c.beginPath()
        	c.arc(this.x+20,this.y+20,20,0,Math.PI*2,false)
        	c.fill()
        	c.drawImage(boulleImg,this.x-=speed, this.y-=speed, 20*2, 20*2)

		}	
		
	}
} */
class boulle{
	constructor(x,y,speed,r){
		this.x=x
		this.y=y
		this.speed=speed
		this.r=r
		this.r=20

		this.draw=function(){
			var boulleImg = new Image()
			boulleImg.src = "images/boulleImg.png"

			c.beginPath()
        	c.arc(this.x,this.y,this.r,0,Math.PI*2,false)
        	c.fill()
        	c.drawImage(boulleImg,this.x-this.r,this.y-this.r , this.r*2, this.r*2)
			this.x-=this.speed
			this.y-=this.speed
			//c.drawImage(creeperImg,balle.x-balle.r, balle.y-balle.r, balle.r*2, balle.r*2)
		}	
		
	}
}

var boulles=[]


class obstacleMur{
	constructor(x,y,w,h,speed){
		this.x=x
		this.y=y
        this.h=h
		this.w=w
		this.speed=speed

		//this.speed=speed
		//this.image="murImgImg"

		this.draw=function(){
			var obstacleMurImg = new Image()
			obstacleMurImg.src = "images/obstacleMurImg.png"

			c.drawImage(obstacleMurImg,this.x-=speed, this.y, this.w, this.h)
			//this.y+=this.speed
		}	
		
	}
}

var obstacleMurs = []

class pluie{
	constructor(x,color,w,h,y,speed){
		this.x=x
		this.y=y
        this.h=h
		this.w=w
		this.color=color
		this.speed=speed
		this.speed=3
		this.y=0

		//this.speed=speed
		//this.image="murImgImg"

		this.draw=function(){
			c.fillStyle=this.color
			c.fillRect(this.x,this.y,this.w,this.h)
			this.y+=this.speed
		}	
		
	}
}

var pluies=[]

