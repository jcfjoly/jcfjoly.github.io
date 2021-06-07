
function draw() {

	if (intro == true) {
		c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
		c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)
		c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)
		c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)
		c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)
		c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)
	}
	//temps

	if (menu == true) {

		c.drawImage(backgroundMenuImg, backgroundMenu.x, backgroundMenu.y, backgroundMenu.w, backgroundMenu.h)
		c.drawImage(titreImg, titre.x, titre.y, titre.w, titre.h)
		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}
		c.drawImage(blackImg, instructionMenu.x, instructionMenu.y, instructionMenu.w, instructionMenu.h)
		c.fillStyle = "white";
		c.font = "35px Times New Roman";
		c.textAlign = "center";
		c.fillText(" Instruction ", instructionMenu.x + instructionMenu.w / 2, instructionMenu.y + instructionMenu.h / 1.7);
		c.restore()
		c.drawImage(blackImg, start.x, start.y, start.w, start.h)
		c.restore()
		c.fillStyle = "white";
		c.font = "35px Times New Roman";
		c.textAlign = "center";
		c.fillText(" Start ", start.x + start.w / 2, start.y + start.h / 1.7);
		c.restore()
		/*c.drawImage(blackImg, choix.x, choix.y, choix.w, choix.h)
		c.restore()
		c.fillStyle = "white";
		c.font = "35px Times New Roman";
		c.textAlign = "center";
		c.fillText(" Choix ", choix.x + choix.w / 2, choix.y + choix.h / 1.7);
		c.restore()*/
	}
	if (instructionMenuVF == true) {
		c.drawImage(whiteImg, backgroundMenu.x, backgroundMenu.y, backgroundMenu.w, backgroundMenu.h)
		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}
		c.drawImage(instructionMenuImg, instructionMenuAffichage.x, instructionMenuAffichage.y, instructionMenuAffichage.w, instructionMenuAffichage.h)
		c.restore()
	}
	/*if (choixVF == true) {
		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}
		c.drawImage(blackImg, choixRetour.x, choixRetour.y, choixRetour.w, choixRetour.h)
		c.restore()
	}*/
	if (jeu1Intro == true) {
		c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
		if (prochainH == 0) {
			c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)
			c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)
			c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)
			c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)
			c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)
		}
		if (prochainH == 1) {
			message.x = 450
			message.y = 375
			message.text = "Il est 0:03 du matin."
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 2) {
			message.x = 600
			message.text = "(Toc toc toc)"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 3) {
			messageProfil.x = 200
			messageProfil.y = 375 - (messageProfil.h / 2)
			messageProfil.h = 175
			messageProfil.w = 175
			message.x = 450
			message.y = 375
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)

			message.x = 450
			message.y = 375
			message.text = "...Qui est-ce? À cet heure-là?"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 4) {
			message.x = 600
			message.text = "(Toc toc toc)"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 5) {
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)

			message.x = 450
			message.y = 375
			message.text = "..."
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 6) {
			message.x = 600
			message.text = "(Toc toc toc toc toc)"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 7) {
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)

			message.x = 450
			message.y = 375
			message.text = "Argh. J'arrive!"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 8) {
			message.x = 600
			message.text = "(Tu sors de ton lit et vois ta meilleur amie au porte)"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 9) {
			message.text = "(Tu ouvres rapidement la porte.)"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 10) {
			messageProfilImg.src = "images/messageProfilPersonnageImg.png"
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)
			message.x = 450
			message.y = 375

			message.text = "Lucie. Prépare tes affaires! On va sortir dehors"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 11) {
			messageProfilImg.src = "images/messageProfilImg.png"
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)


			message.text = "Mais il fait tard."
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 12) {
			messageProfilImg.src = "images/messageProfilPersonnageImg.png"
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)


			message.text = "Allez, allez! Ça va être superbe de découvrir la ville."
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 13) {

			messageProfilImg.src = "images/messageProfilImg.png"
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)


			message.text = "(Voyant sa excitation, tu soupires.)"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 14) {
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)


			message.text = "Ok. Rentre. Il pleut dehors."
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);

		}
		
		if (prochainH == 15) {
			c.drawImage(instructionLivreImg, histoire.x, histoire.y, histoire.w, histoire.h)
		}

		if (space == true) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(" Click space to continue ", spaceText.x, spaceText.y);
			c.restore()
		}
	}
	//jeu1==true||jeu2==true||jeu3==true||jeu4==true||jeu5==true||jeu6==true
	if (jeu1 == true || jeu2 == true || jeu3 == true || jeu4 == true || jeu5 == true || jeu6 == true) {

		if (jeu3 == false) {
			c.drawImage(blackImg, backgroundProfil.x, backgroundProfil.y, backgroundProfil.w, backgroundProfil.h)
		}
		if(jeu1==true){
			c.drawImage(pointImg, point.x, point.y, point.w, point.h)
			c.fillStyle = "white";
			c.font = "15px Times New Roman";
			c.textAlign = "left";
			c.fillText(" " + pointJeu + "", pointText.x, pointText.y);
			c.restore()
		}
	
		

		if (jeu6 == false && jeu4 == false&&jeu5==false) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "left";
			c.fillText(message.text + "", message.x, message.y);


			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)

		}

	}

	if (jeu1 == true) {
		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}
		c.drawImage(fenetreCImg, joueurPlaque.x, joueurPlaque.y, joueurPlaque.w, joueurPlaque.h)
		var pattern = c.createPattern(backgroundJeu1Img,"repeat")
		c.fillStyle=pattern
		c.fillRect(fond.x, fond.y, fond.w, fond.h)

		c.drawImage(fenetreCImg, fenetre1.x, fenetre1.y, fenetre1.w, fenetre1.h)
		c.drawImage(fenetrePImg, fenetre2.x, fenetre2.y, fenetre2.w, fenetre2.h)
		c.drawImage(fenetreGImg, fenetre3.x, fenetre3.y, fenetre3.w, fenetre3.h)
		c.drawImage(tvImg, tv.x, tv.y, tv.w, tv.h)
		c.drawImage(litImg, lit.x, lit.y, lit.w, lit.h)
		c.drawImage(armoireImg, armoire.x, armoire.y, armoire.w, armoire.h)
		c.drawImage(tableNuitImg, tableNuit.x, tableNuit.y, tableNuit.w, tableNuit.h)
		
		c.drawImage(toiletImg, toilet.x, toilet.y, toilet.w, toilet.h)
		c.drawImage(robinetImg, robinet.x, robinet.y, robinet.w, robinet.h)
		c.drawImage(baignoireImg, baignoire.x, baignoire.y, baignoire.w, baignoire.h)
		c.drawImage(aquariumImg, aquarium.x, aquarium.y, aquarium.w, aquarium.h)
		c.drawImage(planteImg, plante.x, plante.y, plante.w, plante.h)
		c.drawImage(sofaImg, sofa.x, sofa.y, sofa.w, sofa.h)
		c.drawImage(cuisinierImg, cuisinier.x, cuisinier.y, cuisinier.w, cuisinier.h)
		c.drawImage(cuisinier2Img, cuisinier2.x, cuisinier2.y, cuisinier2.w, cuisinier2.h)
		c.drawImage(verreImg, verre.x, verre.y, verre.w, verre.h)
		c.drawImage(tableImg, table.x, table.y, table.w, table.h)
		c.drawImage(chaiseImg, chaise.x, chaise.y, chaise.w, chaise.h)
		c.drawImage(bookImg, book.x, book.y, book.w, book.h)
		c.drawImage(vetementImg, vetement.x, vetement.y, vetement.w, vetement.h)
		c.drawImage(botteImg, botte.x, botte.y, botte.w, botte.h)
		c.drawImage(porteJeu1Img, porteJeu1.x, porteJeu1.y, porteJeu1.w, porteJeu1.h)
		c.drawImage(personnageImg, personnage.x, personnage.y, personnage.w, personnage.h)

		c.drawImage(imageJoueur, joueur.x, joueur.y, joueur.w, joueur.h)


		joueur.x = joueurPlaque.x
		joueur.y = joueurPlaque.y - 108

		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}
		if(jeu1==true){

		c.drawImage(sacInventaireImg, sacInventaire.x, sacInventaire.y, sacInventaire.w, sacInventaire.h)

		if (inventairePlus == true) {
			c.drawImage(blackImg, backgroundInventaire.x, backgroundInventaire.y, backgroundInventaire.w, backgroundInventaire.h)
			c.drawImage(inventaire6Img, inventaire6.x, inventaire6.y, inventaire6.w, inventaire6.h)
			c.drawImage(inventaire7Img, inventaire7.x, inventaire7.y, inventaire7.w, inventaire7.h)
			c.drawImage(inventaire8Img, inventaire8.x, inventaire8.y, inventaire8.w, inventaire8.h)
			c.drawImage(inventaire9Img, inventaire9.x, inventaire9.y, inventaire9.w, inventaire9.h)
			c.drawImage(inventaire10Img, inventaire10.x, inventaire10.y, inventaire10.w, inventaire10.h)
		}
		c.drawImage(inventaire1Img, inventaire1.x, inventaire1.y, inventaire1.w, inventaire1.h)
		c.drawImage(inventaire2Img, inventaire2.x, inventaire2.y, inventaire2.w, inventaire2.h)
		c.drawImage(inventaire3Img, inventaire3.x, inventaire3.y, inventaire3.w, inventaire3.h)
		c.drawImage(inventaire4Img, inventaire4.x, inventaire4.y, inventaire4.w, inventaire4.h)
		c.drawImage(inventaire5Img, inventaire5.x, inventaire5.y, inventaire5.w, inventaire5.h)
		}
	}
	if (jeu2Intro == true) {
		if (prochainH == 0) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "Qu'est-ce qui s'est passé l'autre nuit? Annie...?"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
		
		}
		if(prochainH==1){
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			c.drawImage(instructionLivreImg, histoire.x, histoire.y, histoire.w, histoire.h)
		}
		if (space == true) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(" Click space to continue ", spaceText.x, spaceText.y);
			c.restore()
		}
	}


	if (jeu2 == true) {

		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}
		c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
		c.drawImage(ville1Img, ville1.x, ville1.y, ville1.w, ville1.h)
		c.drawImage(ville2Img, ville2.x, ville2.y, ville2.w, ville2.h)
		c.drawImage(ville3Img, ville3.x, ville3.y, ville3.w, ville3.h)
		c.drawImage(ville4Img, ville4.x, ville4.y, ville4.w, ville4.h)

		
		if (ville4vf == false) {
			c.drawImage(personnageImg, personnage.x, personnage.y, personnage.w, personnage.h)
		}
		c.fillStyle = "black"
		c.fillRect(finJeu2.x, finJeu2.y, finJeu2.w, finJeu2.h)
		c.fillStyle = "white"
		c.fillRect(reponse.x, reponse.y, reponse.w, reponse.h)

		c.font = "15px Times New Roman";
		c.textAlign = "center";

		if (chiffre1 == true) {
			c.fillStyle = "red";
			c.fillText("1", reponse.x + 10, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("1", reponse.x + 10, reponse.y + 16);
		}
		if (chiffre2 == true) {
			c.fillStyle = "red";
			c.fillText("2", reponse.x + 30, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("2", reponse.x + 30, reponse.y + 16);
		}
		if (chiffre3 == true) {
			c.fillStyle = "red";
			c.fillText("3", reponse.x + 50, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("3", reponse.x + 50, reponse.y + 16);
		}
		if (chiffre4 == true) {
			c.fillStyle = "red";
			c.fillText("4", reponse.x + 70, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("4", reponse.x + 70, reponse.y + 16);
		}
		if (chiffre5 == true) {
			c.fillStyle = "red";
			c.fillText("5", reponse.x + 90, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("5", reponse.x + 90, reponse.y + 16);
		}
		if (chiffre6 == true) {
			c.fillStyle = "red";
			c.fillText("6", reponse.x + 110, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("6", reponse.x + 110, reponse.y + 16);
		}
		if (chiffre7 == true) {
			c.fillStyle = "red";
			c.fillText("7", reponse.x + 130, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("7", reponse.x + 130, reponse.y + 16);
		}
		if (chiffre8 == true) {
			c.fillStyle = "red";
			c.fillText("8", reponse.x + 150, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("8", reponse.x + 150, reponse.y + 16);
		}
		if (chiffre9 == true) {
			c.fillStyle = "red";
			c.fillText("9", reponse.x + 170, reponse.y + 16);
		} else {
			c.fillStyle = "black";
			c.fillText("9", reponse.x + 170, reponse.y + 16);
		}
		if (finJeu2vf == true) {
			c.fillStyle = "red";
			c.font = "40px Times New Roman";
			c.textAlign = "left";
			c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)
			c.fillText(message.text + "", message.x, message.y);
			messageProfilImg.src="images/messageProfilImg.png"
		}
		/*c.drawImage(imageJoueur,porteBouge.x,porteBouge.y,porteBouge.w,porteBouge.h)
		
		if(porteBouge.x>200-porteBouge.w||porteBouge.x<0){
			porteBouge.speed=-porteBouge.speed
		}
			porteBouge.x+=porteBouge.speed
		

		c.drawImage(imageJoueur,porteBouge2.x,porteBouge2.y,porteBouge2.w,porteBouge2.h)
		
		if(porteBouge2.x>200-porteBouge2.w||porteBouge2.x<0){
			porteBouge2.speed=-porteBouge2.speed
		}
			porteBouge2.x+=porteBouge2.speed
		*/
		c.drawImage(imageJoueur, joueur.x, joueur.y, joueur.w, joueur.h)
	}
	if (jeu3Intro == true) {
		if (prochainH == 0) {
			space=true
			totalTempsH=2
			totalTempsMinDi=0
			totalTempsMin=3
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)
			c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)
			c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)
			c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)
			c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)
		}
		if (prochainH == 1) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
  
			message.x = 600
			message.y = 375
			message.text = "Il est 2:03 du matin."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 2) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
  
			message.x = 600
			message.y = 375
			message.text = "« Luna...n’est pas peur. Je suis désolée de ne pas pouvoir éviter cela. »			"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 3) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
  
			message.x = 600
			message.y = 375
			message.text = "« C’est la dernière chose que je peux t’offrir... »			"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 4) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
  
			message.x = 600
			message.y = 375
			message.text = "Annie? Où es-tu?"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 5) {
			instructionChiffre=3
			c.drawImage(instructionLivreImg, histoire.x, histoire.y, histoire.w, histoire.h)

		}
		if (space == true) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(" Click space to continue ", spaceText.x, spaceText.y);
			c.restore()
		}
	}

	
	if (jeu3 == true) {
		c.drawImage(blackImg, backgroundJeu3.x, backgroundJeu3.y, backgroundJeu3.w, backgroundJeu3.h)
		c.drawImage(nuit1Img, nuit1.x, nuit1.y, nuit1.w, nuit1.h)
		c.drawImage(personnageImg, personnage.x, personnage.y, personnage.w, personnage.h)
		c.fillStyle = "white";
		c.font = "20px Times New Roman";
		c.textAlign = "left";
		c.fillText(message.text + "", message.x, message.y);
		c.drawImage(messageProfilImg, messageProfil.x, messageProfil.y, messageProfil.w, messageProfil.h)
		c.drawImage(instructionImg, instruction.x, instruction.y, instruction.w, instruction.h)
		if (nuitImg == 8) {
			c.drawImage(personnageJeu3Img, personnageFacil.x, personnageFacil.y, personnageFacil.w, personnageFacil.h)
		}
	}

	if (jeu4Intro == true) {
		if (prochainH == 0) {
			c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)
			c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)
			c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)
			c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)
		}
		if (prochainH == 1) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			message.x = 600
			message.y = 375
			message.text = "Il est 3h03 du matin."
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
		}
		if (prochainH == 2) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			message.x = 600
			message.y = 375
			message.text = "« Annie...Pourquoi sont- ils venus?»			"
			c.fillStyle = "white";
			c.font = "15px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
		}
		if (prochainH == 3) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			message.x = 600
			message.y = 375
			message.text = "« Pourquoi devons-nous avoir cela? »"
			c.fillStyle = "white";
			c.font = "15px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
		}
		if (prochainH == 4) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			message.x = 600
			message.y = 375
			message.text = "« Pourquoi ça fait mal?»"
			c.fillStyle = "white";
			c.font = "15px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
		}
		if (prochainH == 5) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			message.x = 600
			message.y = 375
			message.text = "Annie. Tu es où?"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
		}
		if (prochainH == 6) {
			instructionChiffre=4
			c.drawImage(instructionLivreImg, histoire.x, histoire.y, histoire.w, histoire.h)
		}
		if (space == true) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(" Click space to continue ", spaceText.x, spaceText.y);
			c.restore()
		}
	}

	if (jeu4 == true) {
		c.drawImage(blackImg, backgroundJeu4.x, backgroundJeu4.y, backgroundJeu4.w, backgroundJeu4.h)
		c.fillStyle = "pink"
		c.fillRect(vieJeu4Var.x, vieJeu4Var.y, vieJeu4Var.w, vieJeu4Var.h)
		c.font = "20px Times New Roman";
		c.textAlign = "center";
		c.fillText(vieJeu4 +" vies" , vieJeu4Var.x+vieJeu4Var.w/2, vieJeu4Var.y-15);
		c.drawImage(clefImg, clef.x, clef.y, clef.w, clef.h)
		c.drawImage(porteImg, porte.x, porte.y, porte.w, porte.h)
		c.drawImage(portailImg, portail1.x, portail1.y, portail1.w, portail1.h)
		c.drawImage(portailImg, portail1b.x, portail1b.y, portail1b.w, portail1b.h)
		c.drawImage(finjeu4Img, finjeu4.x, finjeu4.y, finjeu4.w, finjeu4.h)

		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}
		for (i = 0; i < pluies.length; i++) {
			pluies[i].draw()
		}

	}


	if (jeu5Intro == true) {
		if (prochainH == 0) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
			c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)
			c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)
			c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)
			c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)
			c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)
		}
		if (prochainH == 1) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "4:03........une heure avant l'évènement..."
			c.fillStyle = "red";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 2) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "Quel évènement?"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 3) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "Tu sais."
			c.fillStyle = "red";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 4) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "?"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 5) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "Annie est morte."
			c.fillStyle = "red";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 6) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "Non"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 7) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "Et c'est à cause de toi."
			c.fillStyle = "red";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 8) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "Nonnnn"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 9) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 375
			message.text = "C'est à cause de toi."
			c.fillStyle = "red";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 10) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.x = 600
			message.y = 368.5
			message.text = "NONNNNN!!!"
			c.fillStyle = "white";
			c.font = "50px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 11) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "C'est toi qui l'a tué. Je dois la venger."
			c.fillStyle = "pink";
			c.font = "50px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 12) {
			instructionChiffre=5
			c.drawImage(instructionLivreImg, histoire.x, histoire.y, histoire.w, histoire.h)
		}
		if (space == true) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(" Click space to continue ", spaceText.x, spaceText.y)
		}
	}

	if (jeu5 == true) {
		c.drawImage(blackImg, backgroundJeu5.x, backgroundJeu5.y, backgroundJeu5.w, backgroundJeu5.h)
		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}

		c.fillStyle = "white"
		c.fillRect(barreVieJoueur.x, barreVieJoueur.y, barreVieJoueur.w, barreVieJoueur.h)
		c.font = "20px Times New Roman";
		c.textAlign = "center";
		c.fillText(vieTotalJoueur+" vies Toi", barreVieJoueur.x+barreVieJoueur.w, barreVieJoueur.y-15);
		

		c.fillStyle = "darkred"
		c.fillRect(barreVieAdversaire.x, barreVieAdversaire.y, barreVieAdversaire.w, barreVieAdversaire.h)
		c.font = "20px Times New Roman";
		c.textAlign = "center";
		c.fillText(vieTotalAdversaire+"vies Toi", barreVieAdversaire.x, barreVieAdversaire.y-10);

		c.drawImage(murJeu42Img, bossMur.x, bossMur.y, bossMur.w, bossMur.h)

		c.drawImage(adversaireJeu5Img, adversaireJeu5.x, adversaireJeu5.y, adversaireJeu5.w, adversaireJeu5.h)

		for (i = 0; i < munitions.length; i++) {
			munitions[i].draw()
		}
		for (i = 0; i < laserCs.length; i++) {
			laserCs[i].draw()
		}

		for (i = 0; i < boulles.length; i++) {
			boulles[i].draw()
		}
		for (i = 0; i < obstacleMurs.length; i++) {
			obstacleMurs[i].draw()
		}

		c.fillStyle = bouge.color
		c.fillRect(bouge.x, bouge.y, bouge.w, bouge.h)
		c.drawImage(plaqueImg, plaque.x, plaque.y, plaque.w, plaque.h)

		c.fillStyle = milieu.color
		c.fillRect(milieu.x, milieu.y, milieu.w, milieu.h)

		for (i = 0; i < pluies.length; i++) {
			pluies[i].draw()
		}
	}

	if (jeu6Intro == true) {

		if (prochainH == 0) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)
			c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)

			c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)

			c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)

			c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)

			
			space=true
/*
			c.drawImage(adversaireJeu5Img, adversaireJeu5.x, adversaireJeu5.y, adversaireJeu5.w, adversaireJeu5.h)

			joueur.speed = 0
			c.drawImage(imageJoueur, joueur.x, joueur.y, joueur.w, joueur.h)

			adversaireJeu5.x = 1184.5 - adversaireJeu5.w * 1.5
			adversaireJeu5.y = 375 - adversaireJeu5.h / 2
			adversaireJeu5.w = 84.5 * 3
			adversaireJeu5.h = 128 * 3
			joueur.x = 100
			joueur.y = 375 - joueur.h / 2
			joueur.w = 50 * 3
			joueur.h = 75 * 3*/
		}

		if (prochainH == 1) {
			message.x = 600
			message.y = 368.5
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "Ta tê te est é tour die."
			c.fillStyle = "white";
			c.font = "50px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
		}

		if (prochainH == 2) {
			message.x = 600
			message.y = 368.5
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "(Tu rappelas de que quelques pièces de mémoires..)"
			c.fillStyle = "white";
			c.font = "50px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 3) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "5: 02...Ils ont sor ti un cou teau."
			c.fillStyle = "white";
			c.font = "25px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 4) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "La pl uie sous les lam padaires ress em blait a de la nei ge."
			c.fillStyle = "white";
			c.font = "25px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 5) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "Nos vet e ments se sont de chi ré"
			c.fillStyle = "white";
			c.font = "25px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 6) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "J'ai mal à la tê te"
			c.fillStyle = "white";
			c.font = "25px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 7) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "Du sa ng. Par tout"
			c.fillStyle = "white";
			c.font = "25px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 8) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "Ma tête, j'ai mal."
			c.fillStyle = "white";
			c.font = "25px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 9) {
			instructionChiffre=6
			c.drawImage(instructionLivreImg, histoire.x, histoire.y, histoire.w, histoire.h)
		}
		if (space == true) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(" Click space to continue ", spaceText.x, spaceText.y);
			c.restore()
		}
	}
	if (jeu6 == true) {
		for (i = 0; i < murs.length; i++) {
			murs[i].draw()
		}
		c.drawImage(blackImg, backgroundJeu6.x, backgroundJeu6.y, backgroundJeu6.w, backgroundJeu6.h)
		c.drawImage(salle1Img, salle1.x, salle1.y, salle1.w, salle1.h)
		c.drawImage(salle2Img, salle2.x, salle2.y, salle2.w, salle2.h)
		c.drawImage(salle3Img, salle3.x, salle3.y, salle3.w, salle3.h)
		c.drawImage(salle4Img, salle4.x, salle4.y, salle4.w, salle4.h)
		c.drawImage(salle5Img, salle5.x, salle5.y, salle5.w, salle5.h)
		c.drawImage(salle6Img, salle6.x, salle6.y, salle6.w, salle6.h)
		c.drawImage(salle7Img, salle7.x, salle7.y, salle7.w, salle7.h)
		c.drawImage(salle8Img, salle8.x, salle8.y, salle8.w, salle8.h)
		c.drawImage(salle9Img, salle9.x, salle9.y, salle9.w, salle9.h)
		c.drawImage(salle10Img, salle10.x, salle10.y, salle10.w, salle10.h)
		c.drawImage(salle11Img, salle11.x, salle11.y, salle11.w, salle11.h)
		c.drawImage(salle12Img, salle12.x, salle12.y, salle12.w, salle12.h)
		c.drawImage(salle13Img, salle13.x, salle13.y, salle13.w, salle13.h)
		c.drawImage(salle14Img, salle14.x, salle14.y, salle14.w, salle14.h)
		c.drawImage(salle15Img, salle15.x, salle15.y, salle15.w, salle15.h)
		c.drawImage(caseAImg, caseA.x, caseA.y, caseA.w, caseA.h)
		c.drawImage(caseBImg, caseB.x, caseB.y, caseB.w, caseB.h)
		c.drawImage(caseCImg, caseC.x, caseC.y, caseC.w, caseC.h)
		c.drawImage(caseDImg, caseD.x, caseD.y, caseD.w, caseD.h)
		c.drawImage(caseEImg, caseE.x, caseE.y, caseE.w, caseE.h)
		c.drawImage(caseFImg, caseF.x, caseF.y, caseF.w, caseF.h)
		c.drawImage(caseGImg, caseG.x, caseG.y, caseG.w, caseG.h)
		c.drawImage(caseHImg, caseH.x, caseH.y, caseH.w, caseH.h)
		c.drawImage(caseIImg, caseI.x, caseI.y, caseI.w, caseI.h)
		c.drawImage(caseJImg, caseJ.x, caseJ.y, caseJ.w, caseJ.h)
		c.drawImage(caseKImg, caseK.x, caseK.y, caseK.w, caseK.h)
		c.drawImage(caseLImg, caseL.x, caseL.y, caseL.w, caseL.h)
		c.drawImage(caseMImg, caseM.x, caseM.y, caseM.w, caseM.h)
		c.drawImage(caseNImg, caseN.x, caseN.y, caseN.w, caseN.h)
		c.drawImage(caseOImg, caseO.x, caseO.y, caseO.w, caseO.h)
		c.fillStyle = "white";
		c.font = "20px Times New Roman";
		c.textAlign = "center";

		c.fillText(" A ", caseA.x+caseA.w/2, caseA.y-10);
		c.fillText(" B ", caseB.x+caseB.w/2, caseB.y-10);
		c.fillText(" C ", caseC.x+caseC.w/2, caseC.y-10);
		c.fillText(" D ", caseD.x+caseA.w/2, caseD.y-10);
		c.fillText(" E ", caseE.x+caseE.w/2, caseE.y-10);
		c.fillText(" F ", caseF.x+caseF.w/2, caseF.y-10);
		c.fillText(" G ", caseG.x+caseG.w/2, caseG.y-10);
		c.fillText(" H ", caseH.x+caseH.w/2, caseH.y-10);
		c.fillText(" I ", caseI.x+caseI.w/2, caseI.y-10);
		c.fillText(" J ", caseJ.x+caseJ.w/2, caseJ.y-10);
		c.fillText(" K ", caseK.x+caseK.w/2, caseK.y-10);
		c.fillText(" L ", caseL.x+caseL.w/2, caseL.y-10);
		c.fillText(" M ", caseM.x+caseM.w/2, caseM.y-10);
		c.fillText(" N ", caseN.x+caseN.w/2, caseN.y-10);
		c.fillText(" O ", caseO.x+caseO.w/2, caseO.y-10);

		c.font = "10px Times New Roman";
		c.fillText(" 0:03 ", caseA.x+caseA.w/2, caseA.y+caseA.h+10);
		c.fillText(" 0:33 ", caseB.x+caseB.w/2, caseB.y+caseA.h+10);
		c.fillText(" 1:03 ", caseC.x+caseC.w/2, caseC.y+caseA.h+10);
		c.fillText(" 1:13 ", caseD.x+caseA.w/2, caseD.y+caseA.h+10);
		c.fillText(" 4:03 ", caseE.x+caseE.w/2, caseE.y+caseA.h+10);
		c.fillText(" 4:51 ", caseF.x+caseF.w/2, caseF.y+caseA.h+10);
		c.fillText(" 4:52 ", caseG.x+caseG.w/2, caseG.y+caseA.h+10);
		c.fillText(" 4:53 ", caseH.x+caseH.w/2, caseH.y+caseA.h+10);
		c.fillText(" 4:54 ", caseI.x+caseI.w/2, caseI.y+caseA.h+10);
		c.fillText(" 4:57 ", caseJ.x+caseJ.w/2, caseJ.y+caseA.h+10);
		c.fillText(" 5:01 ", caseK.x+caseK.w/2, caseK.y+caseA.h+10);
		c.fillText(" 5:01 ", caseL.x+caseL.w/2, caseL.y+caseA.h+10);
		c.fillText(" 5:02 ", caseM.x+caseM.w/2, caseM.y+caseA.h+10);
		c.fillText(" 5:03 ", caseN.x+caseN.w/2, caseN.y+caseA.h+10);
		c.fillText(" ", caseO.x+caseO.w/2, caseO.y-10);
		
		//c.fillText(" Click space to continue ", spaceText.x, spaceText.y);
		c.fillStyle = "red"
		c.fillRect(tempsJeu6Var.x, tempsJeu6Var.y, tempsJeu6Var.w, tempsJeu6Var.h)
		if (histoire.affiche == true) {
			//c.drawImage(caseOImg,histoire.x,histoire.y,histoire.w,histoire.h)
			//c.restore();
		}
	}
	if (finIntroBon == true) {
		if (prochainH == 0) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)

			c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)

			c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)

			c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)

			c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)


			var unTemps3s = setTimeout(newUnTemps3s, 3000)
		}
		if (prochainH == 1) {
			spaceText.y = 650
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle1.x = 600 - salle1.w / 2
			salle1.y = 150
			salle1.w = 300
			salle1.h = 300
			salle1Img.src = "images/salle1Img.png"
			c.drawImage(salle1Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Annie! Sort de là! On sort dehors!"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 2) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle14.x = 600 - salle1.w / 2
			salle14.y = 150
			salle14.w = 300
			salle14.h = 300
			salle14Img.src = "images/salle14Img.png"
			c.drawImage(salle14Img, salle14.x, salle14.y, salle14.w, salle14.h)

			message.x = 600
			message.y = 550
			message.text = "C’est nous quand on était petite! Aujourd’hui, j’ai 7 ans."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 3) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle6.x = 600 - salle1.w / 2
			salle6.y = 150
			salle6.w = 300
			salle6.h = 300
			salle6Img.src = "images/salle6Img.png"
			c.drawImage(salle6Img, salle6.x, salle6.y, salle6.w, salle6.h)

			message.x = 600
			message.y = 550
			message.text = "-Ouiii, on y va!"
			c.fillText("-Luna, calme-toi sinon on va réveiller les voisins.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 4) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle5.x = 600 - salle1.w / 2
			salle5.y = 150
			salle5.w = 300
			salle5.h = 300
			salle5Img.src = "images/salle5Img.png"
			c.drawImage(salle5Img, salle5.x, salle5.y, salle5.w, salle5.h)

			message.x = 600
			message.y = 550
			message.text = "-Annie, tu as vu cette maison? Elle ressemble à une maison hantée."
			c.fillText("-C’est vrai, je me demande bien pourquoi la raison de son abandon.", message.x, message.y+25);

			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 5) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle8.x = 600 - salle1.w / 2
			salle8.y = 150
			salle8.w = 300
			salle8.h = 300
			salle8Img.src = "images/salle8Img.png"
			c.drawImage(salle8Img, salle8.x, salle8.y, salle8.w, salle8.h)

			message.x = 600
			message.y = 550
			message.text = "-Il fait tard Luna."
			c.fillText("-Dernier endroit, et on retourne chez nous. Regarde! La pluie ressemble à de la neige quand elle passe sous le lampadaire.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 6) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle4.x = 600 - salle1.w / 2
			salle4.y = 150
			salle4.w = 300
			salle4.h = 300
			salle4Img.src = "images/salle4Img.png"
			c.drawImage(salle4Img, salle4.x, salle4.y, salle4.w, salle4.h)

			message.x = 600
			message.y = 550
			message.text = "-C’est beau, les étoiles dans le ciel. Ma préférée est celle-là! Quel est ton étoile préférée, Annie? "
			c.fillText("-Celui qui se cache derrière le tien.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 7) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle3.x = 600 - salle1.w / 2
			salle3.y = 150
			salle3.w = 300
			salle3.h = 300
			salle3Img.src = "images/salle3Img.png"
			c.drawImage(salle3Img, salle3.x, salle3.y, salle3.w, salle3.h)

			message.x = 600
			message.y = 550
			message.text = "Hahaha, moi j’aime le ciel sans étoiles. Bonjour, les filles, ce n’est pas bien d’être dehors comme ça."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 8) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle9.x = 600 - salle1.w / 2
			salle9.y = 150
			salle9.w = 300
			salle9.h = 300
			salle9Img.src = "images/salle9Img.png"
			c.drawImage(salle9Img, salle9.x, salle9.y, salle9.w, salle9.h)

			message.x = 600
			message.y = 550
			message.text = "C’était le début du malheur."
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 9) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle15Img.src = "images/salle15Img.png"
			c.drawImage(salle15Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Ils ont déchiré nos vêtements comme des loups affamés. Je me demandais pourquoi il faisait cela."
			c.fillText(" C’était la même question que je me posais quand des gens sont rentrés chez moi et ont tué papa, maman. Annie m’a dit qu’il n’y avait aucune raison", message.x, message.y+25);
			c.fillStyle = "red";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 10) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle11Img.src = "images/salle11Img.png"
			c.drawImage(salle11Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Les polices m’ont dit qu’Annie leur a téléphoné à 4:57. Et on dit que je n’avais pas 7 ans.  "
			c.fillText("Je ne comprenais pas. Je voulais Annie, mais elle est disparu.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 11) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle2Img.src = "images/salle2Img.png"
			c.drawImage(salle2Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "J’ai entendu les personnes dire qu’ils vont nous tuer dans un instant vu qu’ils ont fini leur désir."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 12) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle7Img.src = "images/salle7Img.png"
			c.drawImage(salle7Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Annie avait pris le couteau attaché à sa ceinture sans qu’il s'aperçoit."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 13) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle12Img.src = "images/salle12Img.png"
			c.drawImage(salle12Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Annie a tué deux d’entre eux, puis elle a poignardé les autres. Mais, l'un d’entre eux, la poignardé.  "
			c.fillText("Elle est tombée et les trois personnes l’ont frappé avec les pieds.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 14) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle10Img.src = "images/salle10Img.png"
			c.drawImage(salle10Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Je suis vite allé sur elle empêchant les coups de pied. Je sais que je dois les arrêter. Ça ressemblait à papa, maman. Je regardais tout le sang d’elle. "
			c.fillText("Je savais que c’était la fin. Non. Ce n’est pas vrai. Mon corps tremblait. Annie s’efforçait à me sourire.  ", message.x, message.y-25);
			c.fillText("Elle m’a dit:« Luna...n’est pas peur. Je suis désolée de ne pas pouvoir éviter cela. Merci pour toutes ces années. ", message.x, message.y);
			c.fillText("« C’est la dernière chose que je peux t’offrir. Oublie pas. CE N'EST PAS DE TA FAUTE.", message.x, message.y+25);
			c.fillText("Les policiers sont arrivés, ils l’ont entendu et se sont enfuis. Mais je ne les entendais pas, je n’entendais que l’arrêt du battement de coeur d’Annie. ", message.x, message.y+50);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y-50);

		}
		if (prochainH == 15) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle13Img.src = "images/salle13Img.png"
			c.drawImage(salle13Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Annie. Non, ce n’est pas possible. Annie! Non, c’est impossible. Ne m’abandonne pas. Je serais sage dans le futur. "
			c.fillText("Ne me quitte pas. Non ce n’est pas possible. Non. ANNIIEEEE. Impossible.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 16) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.y = 368.5
			message.text = "Ce n'est pas de ta faute."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 17) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "« Tu sais pourquoi cet étoile est ma préférée, Luna? »-- 7 ans"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 18) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "« Pourquoi? »"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 19) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.y = 368.5
			message.text = "« Parce que je suis l’étoile qui te soutiens! »"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 20) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			
			message.y = 368.5
			message.text = "Tout est fini."
			c.fillStyle = "white";
			c.font = "50px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 21) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "Annie. Merci pour tout."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 22) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "C’est toi qui m’a accompagné lorsque papa, maman étaient morts.			"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 23) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "C’est toi qui m’a protégé contre eux.			"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 24) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "C’est encore toi qui m'est sorti de cette nouvelle folie.			"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 25) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.y = 368.5
			message.text = "Merci."
			c.fillStyle = "white";
			c.font = "50px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
			joueur.speed=1

		}
		if (space == true) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(" Click space to continue ", spaceText.x, spaceText.y);
			c.restore()
		}
	}

	if (finIntroMauvais == true) {
		if (prochainH == 0) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)

			c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)

			c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)

			c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)

			c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)

		}
		if (prochainH == 1) {
			spaceText.y = 650
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle1.x = 600 - salle1.w / 2
			salle1.y = 150
			salle1.w = 300
			salle1.h = 300
			salle1Img.src = "images/salle1Img.png"
			c.drawImage(salle1Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Annie! Sort de là! On sort dehors!"
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 2) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle14.x = 600 - salle1.w / 2
			salle14.y = 150
			salle14.w = 300
			salle14.h = 300
			salle14Img.src = "images/salle14Img.png"
			c.drawImage(salle14Img, salle14.x, salle14.y, salle14.w, salle14.h)

			message.x = 600
			message.y = 550
			message.text = "C’est nous quand on était petite! Aujourd’hui, j’ai 7 ans."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 3) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle6.x = 600 - salle1.w / 2
			salle6.y = 150
			salle6.w = 300
			salle6.h = 300
			salle6Img.src = "images/salle6Img.png"
			c.drawImage(salle6Img, salle6.x, salle6.y, salle6.w, salle6.h)

			message.x = 600
			message.y = 550
			message.text = "-Ouiii, on y va!"
			c.fillText("-Luna, calme-toi sinon on va réveiller les voisins.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 4) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle5.x = 600 - salle1.w / 2
			salle5.y = 150
			salle5.w = 300
			salle5.h = 300
			salle5Img.src = "images/salle5Img.png"
			c.drawImage(salle5Img, salle5.x, salle5.y, salle5.w, salle5.h)

			message.x = 600
			message.y = 550
			message.text = "-Annie, tu as vu cette maison? Elle ressemble à une maison hantée."
			c.fillText("-C’est vrai, je me demande bien pourquoi la raison de son abandon.", message.x, message.y+25);

			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 5) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle8.x = 600 - salle1.w / 2
			salle8.y = 150
			salle8.w = 300
			salle8.h = 300
			salle8Img.src = "images/salle8Img.png"
			c.drawImage(salle8Img, salle8.x, salle8.y, salle8.w, salle8.h)

			message.x = 600
			message.y = 550
			message.text = "-Il fait tard Luna."
			c.fillText("-Dernier endroit, et on retourne chez nous. Regarde! La pluie ressemble à de la neige quand elle passe sous le lampadaire.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 6) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle4.x = 600 - salle1.w / 2
			salle4.y = 150
			salle4.w = 300
			salle4.h = 300
			salle4Img.src = "images/salle4Img.png"
			c.drawImage(salle4Img, salle4.x, salle4.y, salle4.w, salle4.h)

			message.x = 600
			message.y = 550
			message.text = "-C’est beau, les étoiles dans le ciel. Ma préférée est celle-là! Quel est ton étoile préférée, Annie? "
			c.fillText("-Celui qui se cache derrière le tien.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 7) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle3.x = 600 - salle1.w / 2
			salle3.y = 150
			salle3.w = 300
			salle3.h = 300
			salle3Img.src = "images/salle3Img.png"
			c.drawImage(salle3Img, salle3.x, salle3.y, salle3.w, salle3.h)

			message.x = 600
			message.y = 550
			message.text = "Hahaha, moi j’aime le ciel sans étoiles. Bonjour, les filles, ce n’est pas bien d’être dehors comme ça."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 8) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle9.x = 600 - salle1.w / 2
			salle9.y = 150
			salle9.w = 300
			salle9.h = 300
			salle9Img.src = "images/salle9Img.png"
			c.drawImage(salle9Img, salle9.x, salle9.y, salle9.w, salle9.h)

			message.x = 600
			message.y = 550
			message.text = "C’était le début du malheur."
			c.fillStyle = "white";
			c.font = "35px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 9) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle15Img.src = "images/salle15Img.png"
			c.drawImage(salle15Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Ils ont déchiré nos vêtements comme des loups affamés. Je me demandais pourquoi il faisait cela."
			c.fillText(" C’était la même question que je me posais quand des gens sont rentrés chez moi et ont tué papa, maman. Annie m’a dit qu’il n’y avait aucune raison", message.x, message.y+25);
			c.fillStyle = "red";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 10) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle11Img.src = "images/salle11Img.png"
			c.drawImage(salle11Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Les polices m’ont dit qu’Annie leur a téléphoné à 4:57. Et on dit que je n’avais pas 7 ans.  "
			c.fillText("Je ne comprenais pas. Je voulais Annie, mais elle est disparu.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 11) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle2Img.src = "images/salle2Img.png"
			c.drawImage(salle2Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "J’ai entendu les personnes dire qu’ils vont nous tuer dans un instant vu qu’ils ont fini leur désir."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 12) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle7Img.src = "images/salle7Img.png"
			c.drawImage(salle7Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Annie avait pris le couteau attaché à sa ceinture sans qu’il s'aperçoit."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 13) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle12Img.src = "images/salle12Img.png"
			c.drawImage(salle12Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Annie a tué deux d’entre eux, puis elle a poignardé les autres. Mais, l'un d’entre eux, la poignardé.  "
			c.fillText("Elle est tombée et les trois personnes l’ont frappé avec les pieds.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 14) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle10Img.src = "images/salle10Img.png"
			c.drawImage(salle10Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Je suis vite allé sur elle empêchant les coups de pied. Je sais que je dois les arrêter. Ça ressemblait à papa, maman. Je regardais tout le sang d’elle. "
			c.fillText("Je savais que c’était la fin. Non. Ce n’est pas vrai. Mon corps tremblait. Annie s’efforçait à me sourire.  ", message.x, message.y-25);
			c.fillText("Elle m’a dit:« Luna...n’est pas peur. Je suis désolée de ne pas pouvoir éviter cela. Merci pour toutes ces années. ", message.x, message.y);
			c.fillText("« C’est la dernière chose que je peux t’offrir. Oublie pas. CE N'EST PAS DE TA FAUTE.", message.x, message.y+25);
			c.fillText("Les policiers sont arrivés, ils l’ont entendu et se sont enfuis. Mais je ne les entendais pas, je n’entendais que l’arrêt du battement de coeur d’Annie. ", message.x, message.y+50);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y-50);

		}
		if (prochainH == 15) {
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			salle13Img.src = "images/salle13Img.png"
			c.drawImage(salle13Img, salle1.x, salle1.y, salle1.w, salle1.h)

			message.x = 600
			message.y = 550
			message.text = "Annie. Non, ce n’est pas possible. Annie! Non, c’est impossible. Ne m’abandonne pas. Je serais sage dans le futur. "
			c.fillText("Ne me quitte pas. Non ce n’est pas possible. Non. ANNIIEEEE. Impossible.", message.x, message.y+25);
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		
		if (prochainH == 16) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.y = 368.5
			message.text = "C’est tout à cause de moi."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 17) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "Si je ne t’avais pas amené à sortir, tu ne serais pas morte."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 18) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "Si je ne t’avais pas gardé jusqu’à cet heure-là dehors, tu ne serais pas morte"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 19) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.y = 368.5
			message.text = "C’est moi qui t’a tué"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 20) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			
			message.y = 368.5
			message.text = "C’est moi."
			c.fillStyle = "white";
			c.font = "50px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 21) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "(Tu es debout sur une fenêtre de l’hôpital. )			"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 22) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "Je vais t’accompagner, Annie."
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		if (prochainH == 23) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.text = "(Et tu sautes de là.)"
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);

		}
		
		if (prochainH == 24) {
			spaceText.y = 600
			c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)

			message.y = 368.5
			message.text = "Fin"
			c.fillStyle = "white";
			c.font = "50px Times New Roman";
			c.textAlign = "center";
			c.fillText(message.text + "", message.x, message.y);
			joueur.speed=1
		}

		if (space == true) {
			c.fillStyle = "white";
			c.font = "20px Times New Roman";
			c.textAlign = "center";
			c.fillText(" Click space to continue ", spaceText.x, spaceText.y);
			c.restore()
		}
	}

	if (finBon == true || finMauvais == true) {
		c.drawImage(histoire1Img, histoire.x, histoire.y, histoire.w, histoire.h)
		totalTempsMin = 3
		totalTempsH = 5
		totalTempsMinDi = 0

		tempsHeureDiVar.x = 50
		tempsHeureDiVar.y = 345.85
		tempsHeureDiVar.w = 58.3
		tempsHeureDiVar.h = 100

		tempsHeureVar.x = tempsHeureDiVar.x + tempsHeureDiVar.w
		tempsHeureVar.y = 345.85
		tempsHeureVar.w = 58.3
		tempsHeureVar.h = 100

		tempsMinDiVar.x = deuxPoints.x + deuxPoints.w//+(deuxPoints.w/3)
		tempsMinDiVar.y = 345.85
		tempsMinDiVar.w = 58.3
		tempsMinDiVar.h = 100

		tempsMinVar.x = tempsMinDiVar.x + tempsMinDiVar.w
		tempsMinVar.y = 345.85
		tempsMinVar.w = 58.3
		tempsMinVar.h = 100

		deuxPoints.x = tempsHeureVar.x + (tempsHeureVar.w / 3) + 25
		deuxPoints.y = 345.85
		deuxPoints.w = 58.3
		deuxPoints.h = 100
		c.drawImage(deuxPointsImg, deuxPoints.x, deuxPoints.y, deuxPoints.w, deuxPoints.h)
		c.drawImage(tempsMinImg, tempsMinVar.x, tempsMinVar.y, tempsMinVar.w, tempsMinVar.h)
		c.drawImage(tempsMinDiImg, tempsMinDiVar.x, tempsMinDiVar.y, tempsMinDiVar.w, tempsMinDiVar.h)
		c.drawImage(tempsHeureImg, tempsHeureVar.x, tempsHeureVar.y, tempsHeureVar.w, tempsHeureVar.h)
		c.drawImage(tempsHeureDiImg, tempsHeureDiVar.x, tempsHeureDiVar.y, tempsHeureDiVar.w, tempsHeureDiVar.h)
		for (i = 0; i < textFins.length; i++) {
			textFins[i].draw()
		}
	}
	plaque.y = bouge.y - 2
	//temps	
	if (jeu1 == true || jeu2 == true || jeu3 == true || jeu4 == true || jeu5 == true || jeu6 == true) {
		c.drawImage(blackImg, clock.x, clock.y, clock.w, clock.h)
		c.fillStyle = "white";
		c.font = "20px Times New Roman";
		c.textAlign = "center";
		c.fillText(heure.temps, heure.x, heure.y);
		c.restore()
		c.drawImage(instructionImg, instruction.x, instruction.y, instruction.w, instruction.h)
	}
}

function drawJoueur() {
	c.fillStyle = joueur.color
	//c.scale(-1, 1);
	//c.drawImage(imageJoueur, joueur.x, joueur.y, joueur.w, joueur.h)
	//console.log("allo")
	//c.drawImage(backgroundJeu5Img, joueurPlaque.x, joueurPlaque.y, joueurPlaque.w, joueurPlaque.h)
	if (jeu3 == true) {
		if (joueurJeu3 == false) {
			c.drawImage(imageJoueur, joueur.x, joueur.y, joueur.w, joueur.h)
		}
	}

	if (intro == true || jeu1Intro == true || jeu2Intro == true || jeu3Intro == true || jeu4Intro == true || jeu5Intro == true || jeu6Intro == true || finIntroBon == true || finIntroMauvais == true||finBon==true||finMauvais==true) {

	} else {
		if (jeu3 == false) {
			c.drawImage(imageJoueur, joueur.x, joueur.y, joueur.w, joueur.h)
			c.restore();
		}
	}
	

	if (joueur.x < 0) {
		joueur.x = 0
		joueur.xVecteur = 0
	}

	if (joueur.y < 0) {
		joueur.y = 0
		joueur.yVecteur = 0
	}

	if (joueur.x + joueur.w >= canvas.width) {
		joueur.x = canvas.width - joueur.w
		joueur.xVecteur = 0
	}
	if (joueur.y + joueur.h >= canvas.height) {
		joueur.y = canvas.height - joueur.h
		joueur.yVecteur = 0
		joueur.jump = false
	}
	if (instructionLivre.vf == true) {
		c.drawImage(instructionLivreImg, instructionLivre.x, instructionLivre.y, instructionLivre.w, instructionLivre.h)
	}
}

