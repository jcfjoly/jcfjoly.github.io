function clavier() {

	if (animation == false) {

		if (37 in keyDown && joueur.x > 0) {
			direction = "gauche"
			joueur.reverse = true

			if (mode1 == true) {
				if (jeu5 == true) {
					joueur.xVecteur -= 0.6;
				} else {
					joueur.xVecteur -= 0.5
				}
			} 
			if(mode2==true||mode3==true){
				if (jeu1 == true) {
					joueurPlaque.x -= joueurPlaque.speed
				} else {
					if (jeu3 == true) {
						if (collisionJeu3 == true) {
							joueur.x -= joueur.speed
						}
					} else {
						if(jeu2!=true){
						joueur.x -= joueur.speed

					}
					}
				}
			}
		}

		if (jeu2 == true) {
			if (37 in keyDown) {

					if (ville1.x > 1) {
					} else {
						ville1.x += joueur.speed * 3
						ville2.x += joueur.speed * 3
						ville3.x += joueur.speed * 3
						ville4.x += joueur.speed * 3
						finJeu2.x += joueur.speed * 3
						reponse.x += joueur.speed * 3
					}
				
				joueur.x -= joueur.speed
			}
			if (39 in keyDown) {
				joueur.x += joueur.speed
				if (jeu2 == true) {
					if (ville4.x < 1) {

					} else {
						
						ville1.x-=joueur.speed * 3
						ville2.x-=joueur.speed * 3
						ville3.x-=joueur.speed * 3
						ville4.x -= joueur.speed * 3
						finJeu2.x -= joueur.speed * 3
						reponse.x -= joueur.speed * 3
					}
				}
			}
		}

		if (39 in keyDown && joueur.x < canvas.width - joueur.w) {
			direction = "droite"
			joueur.reverse = false

			if (mode1 == true) {
				if (jeu5 == true) {
					joueur.xVecteur += 0.6;
				} else {
					joueur.xVecteur += 0.5
				}
			} else {
				if (jeu1 == true) {
					joueurPlaque.x += joueurPlaque.speed
				} else {
					if (jeu3 == true) {
						if (collisionJeu3 == true) {
							joueur.x += joueur.speed
						}
					} else {
						if(jeu2!=true){
						joueur.x += joueur.speed}
					}
				}
			}
		}

		if (mode2 == true || mode1 == true) {
			if (38 in keyDown && joueur.y > 0 && joueur.jump == false) {
				direction = "haut"
				if (mode1 == true) {
					joueur.jump = true;
					joueur.yVecteur -= 35;
				} else {
					if (jeu1 == true) {
						joueurPlaque.y -= joueurPlaque.speed
					} else {
						if (jeu3 == true) {
							if (collisionJeu3 == true) {
								joueur.y -= joueur.speed
							}
						} else {
							if(jeu2!=true){
							joueur.y -= joueur.speed}
						}
					}
				}
			}
		}

		if (mode1 == true) {
			joueur.yVecteur += 1.5;// gravity
			joueur.x += joueur.xVecteur;
			joueur.y += joueur.yVecteur;
			joueur.xVecteur *= 0.9;// friction
			joueur.yVecteur *= 0.9;// friction
		}

		if (mode2 == true) {
			if (40 in keyDown && joueur.y < canvas.height - joueur.h) {
				if (jeu1 == true) {
					joueurPlaque.y += joueurPlaque.speed
				} else {
					if (jeu3 == true) {
						if (collisionJeu3 == true) {
							joueur.y += joueur.speed
						}
					} else {
						joueur.y += joueur.speed
					}
				}
			}
		}

	}

	/* if(32 in keyDown&&joueur.jump==false){
		
			if(mode3Gravity==true){
				mode3Gravity=false
				joueur.y=joueur.y-5
			}else{
				mode3Gravity=true 
				joueur.y=joueur.y+5
			}
			joueur.jump=true
			
		}   		*/
	//les autres

	//space
	if (32 in keyDown && attenteMunitions == true) {
		munitions.push(new munition(joueur.x, joueur.y, 10, 5, 10))
		var attenteTemps = setTimeout(newAttenteTemps, 500)
		attenteMunitions = false
	}
	if (32 in keyDown) {

		if (jeu1Intro == true && space == true) {
			prochainH++
			space = false
			appuie = true
			if (prochainH == 16) {
				jeu1 = true
				jeu1Intro = false
				prochainH = 0
				pousser()
				//joueurPlaque.x = 1000
				//joueurPlaque.y = 550
				message.x = 125
				message.y = 705
				messageProfil.x = 5
				messageProfil.y = 655
				messageProfil.w = 90
				messageProfil.h = 90
				cancel = false
			}
		}
		if(jeu2Intro==true&&space==true){
			prochainH++
			space = false
			appuie = true
			instructionChiffre=2
			if (prochainH == 2) {
				jeu2 = true
				jeu2Intro = false
				animation=false
				prochainH = 0
				pousser()
				cancel=false
				joueur.x = 6
				joueur.y = 625
			}
		}
		if(jeu3Intro==true&&space==true){
			prochainH++
			space = false
			appuie = true
			instructionChiffre=3
			if (prochainH == 6) {
				jeu3 = true
				jeu3Intro = false
				animation=false
				prochainH = 0
				pousser()
				cancel=false
			}
		}
		if (jeu4Intro == true && space == true) {
			prochainH++
			space = false
			appuie = true
			instructionChiffre=4
			if (prochainH == 7) {
				jeu4 = true
				jeu4Intro = false
				joueur.x = 325
				joueur.y = 625
				prochainH = 0
				vieJeu4Var.h = 100
				pousser()
				c.clearRect(0, 0, canvas.width, canvas.height)
			}
		}
		if (jeu5Intro == true && space == true) {
			prochainH++
			space = false
			appuie = true
			instructionChiffre=5
			if (prochainH == 13) {
				jeu5 = true
				jeu5Intro = false
				joueur.x = 200
				joueur.y = 175
				prochainH = 0
				pousser()
				cancel = false
				animation = false
				totalTempsMin = 0
				totalTempsMinDi = 0
				totalTempsH = 0
			}
		}
		if (jeu6Intro == true && space == true) {
			prochainH++
			space = false
			appuie = true
			instructionChiffre=6
			if (prochainH == 9) {
				jeu6 = true
				jeu6Intro = false
				joueur.w = 20
				joueur.h = 20
				joueur.x = 100
				joueur.y = 100
				prochainH = 0
				cancel = false
				joueur.speed = 5
			}
		}
		if (finIntroBon == true && space == true) {
			prochainH++
			space = false
			appuie = true
			if (prochainH == 26) {
				finBon = true
				finIntroBon = false
				joueur.w = 50
				joueur.h = 75
				joueur.x = 0
				joueur.y = 600
				prochainH = 0
				pousser()
			}
		}
		if (finIntroMauvais == true && space == true) {
			prochainH++
			space = false
			appuie = true
			if (prochainH == 25) {
				finBon = true
				finIntroBon = false
				joueur.w = 50
				joueur.h = 75
				joueur.x = 0
				joueur.y = 600
				prochainH = 0
				pousser()
			}
		}
		if (jeu1 == true) {
			inventairePlus = true
		}

	} else {
		inventairePlus = false
	}

	//q
	if (81 in keyDown) {
		if(jeu1=true||jeu2==true||jeu3==true||jeu4==true||jeu5==true||jeu6==true){
		instructionLivre.vf = true
		}
	}
	//w
	if (87 in keyDown) {
		if(jeu1=true||jeu2==true||jeu3==true||jeu4==true||jeu5==true||jeu6==true){
		instructionLivre.vf = false
		}
	}

	//CETTE PARTIE REPETE BEAUCOUP
	if (collisionN(finJeu2, joueur)) {
		if (49 in keyDown) {
			chiffre1 = true
		}
		if (50 in keyDown) {
			chiffre2 = true
		}
		if (51 in keyDown) {
			chiffre3 = true
		}
		if (52 in keyDown) {
			chiffre4 = true
		}
		if (53 in keyDown) {
			chiffre5 = true
		}
		if (54 in keyDown) {
			chiffre6 = true
		}
		if (55 in keyDown) {
			chiffre7 = true
		}
		if (56 in keyDown) {
			chiffre8 = true
		}
		if (57 in keyDown) {
			chiffre9 = true
		}
		//back
		if (8 in keyDown) {
			chiffre1 = false
			chiffre2 = false
			chiffre3 = false
			chiffre4 = false
			chiffre5 = false
			chiffre6 = false
			chiffre7 = false
			chiffre8 = false
			chiffre9 = false
		}
		//enter
		if (13 in keyDown) {
			if (chiffre1 == true && chiffre3 == true && chiffre4 == false && chiffre2 == false && chiffre5 == false && chiffre6 == false && chiffre7 == false && chiffre8 == false && chiffre9 == false){
				personnage.y = 5000
				finJeu2vf = true
			}
		}

	}

	if (65 in keyDown) {
		//console.log(caseA.reponse) 
		if (salle1.vf == true) {
			caseAImg.src = "images/salle1Img.png"
			caseA.reponse = true
		} else {
			caseA.reponse = false
		}
		if (salle2.vf == true) {
			caseAImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseAImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseAImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseAImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseAImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseAImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseAImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseAImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseAImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseAImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseAImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseAImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseAImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseAImg.src = "images/salle15Img.png"
		}
	}
	//B MEME CHOSE POUR LES 15 SALLES. TRES REPETITIF
	if (66 in keyDown) {
		if (salle1.vf == true) {
			caseBImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseBImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseBImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseBImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseBImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseBImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseBImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseBImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseBImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseBImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseBImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseBImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseBImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseBImg.src = "images/salle14Img.png"
			caseB.reponse = true
		} else {
			caseB.reponse = false
		}
		if (salle15.vf == true) {
			caseBImg.src = "images/salle15Img.png"
		}
	}
	//C
	if (67 in keyDown) {
		if (salle1.vf == true) {
			caseCImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseCImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseCImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseCImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseCImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseCImg.src = "images/salle6Img.png"
			caseC.reponse = true
		} else {
			caseC.reponse = false
		}
		if (salle7.vf == true) {
			caseCImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseCImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseCImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseCImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseCImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseCImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseCImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseCImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseCImg.src = "images/salle15Img.png"
		}
	}
	//D
	if (68 in keyDown) {
		if (salle1.vf == true) {
			caseDImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseDImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseDImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseDImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseDImg.src = "images/salle5Img.png"
			caseD.reponse = true
		} else {
			caseD.reponse = false
		}
		if (salle6.vf == true) {
			caseDImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseDImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseDImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseDImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseDImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseDImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseDImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseDImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseDImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseDImg.src = "images/salle15Img.png"
		}
	}
	//E
	if (69 in keyDown) {
		if (salle1.vf == true) {
			caseEImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseEImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseEImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseEImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseEImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseEImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseEImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseEImg.src = "images/salle8Img.png"
			caseE.reponse = true
		} else {
			caseE.reponse = false
		}
		if (salle9.vf == true) {
			caseEImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseEImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseEImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseEImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseEImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseEImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseEImg.src = "images/salle15Img.png"
		}
	}
	//F
	if (70 in keyDown) {
		if (salle1.vf == true) {
			caseFImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseFImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseFImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseFImg.src = "images/salle4Img.png"
			caseF.reponse = true
		} else {
			caseF.reponse = false
		}
		if (salle5.vf == true) {
			caseFImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseFImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseFImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseFImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseFImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseFImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseFImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseFImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseFImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseFImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseFImg.src = "images/salle15Img.png"
		}
	}
	//G
	if (71 in keyDown) {
		if (salle1.vf == true) {
			caseGImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseGImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseGImg.src = "images/salle3Img.png"
			caseG.reponse = true
		} else {
			caseG.reponse = false
		}
		if (salle4.vf == true) {
			caseGImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseGImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseGImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseGImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseGImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseGImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseGImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseGImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseGImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseGImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseGImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseGImg.src = "images/salle15Img.png"
		}
	}
	//H
	if (72 in keyDown) {
		if (salle1.vf == true) {
			caseHImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseHImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseHImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseHImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseHImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseHImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseHImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseHImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseHImg.src = "images/salle9Img.png"
			caseH.reponse = true
		} else {
			caseH.reponse = false
		}
		if (salle10.vf == true) {
			caseHImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseHImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseHImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseHImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseHImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseHImg.src = "images/salle15Img.png"
		}
	}
	//I
	if (73 in keyDown) {
		if (salle1.vf == true) {
			caseIImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseIImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseIImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseIImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseIImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseIImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseIImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseIImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseIImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseIImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseIImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseIImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseIImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseIImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseIImg.src = "images/salle15Img.png"
			caseI.reponse = true
		} else {
			caseI.reponse = false
		}
	}
	//J
	if (74 in keyDown) {
		if (salle1.vf == true) {
			caseJImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseJImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseJImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseJImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseJImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseJImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseJImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseJImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseJImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseJImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseJImg.src = "images/salle11Img.png"
			caseJ.reponse = true
		} else {
			caseJ.reponse = false
		}
		if (salle12.vf == true) {
			caseJImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseJImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseJImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseJImg.src = "images/salle15Img.png"
		}
	}
	//K
	if (75 in keyDown) {
		if (salle1.vf == true) {
			caseKImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseKImg.src = "images/salle2Img.png"
			caseK.reponse = true
		} else {
			caseK.reponse = false
		}
		if (salle3.vf == true) {
			caseKImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseKImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseKImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseKImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseKImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseKImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseKImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseKImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseKImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseKImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseKImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseKImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseKImg.src = "images/salle15Img.png"
		}
	}
	//L
	if (76 in keyDown) {
		if (salle1.vf == true) {
			caseLImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseLImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseLImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseLImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseLImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseLImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseLImg.src = "images/salle7Img.png"
			caseL.reponse = true
		} else {
			caseL.reponse = false
		}
		if (salle8.vf == true) {
			caseLImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseLImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseLImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseLImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseLImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseLImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseLImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseLImg.src = "images/salle15Img.png"
		}
	}
	//M
	if (77 in keyDown) {
		if (salle1.vf == true) {
			caseMImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseMImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseMImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseMImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseMImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseMImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseMImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseMImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseMImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseMImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseMImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseMImg.src = "images/salle12Img.png"
			caseM.reponse = true
		} else {
			caseM.reponse = false
		}
		if (salle13.vf == true) {
			caseMImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseMImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseMImg.src = "images/salle15Img.png"
		}
	}
	//N
	if (78 in keyDown) {
		if (salle1.vf == true) {
			caseNImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseNImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseNImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseNImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseNImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseNImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseNImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseNImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseNImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseNImg.src = "images/salle10Img.png"
			caseN.reponse = true
		} else {
			caseN.reponse = false
		}
		if (salle11.vf == true) {
			caseNImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseNImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseNImg.src = "images/salle13Img.png"
		}
		if (salle14.vf == true) {
			caseNImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseNImg.src = "images/salle15Img.png"
		}
	}
	//O
	if (79 in keyDown) {
		if (salle1.vf == true) {
			caseOImg.src = "images/salle1Img.png"
		}
		if (salle2.vf == true) {
			caseOImg.src = "images/salle2Img.png"
		}
		if (salle3.vf == true) {
			caseOImg.src = "images/salle3Img.png"
		}
		if (salle4.vf == true) {
			caseOImg.src = "images/salle4Img.png"
		}
		if (salle5.vf == true) {
			caseOImg.src = "images/salle5Img.png"
		}
		if (salle6.vf == true) {
			caseOImg.src = "images/salle6Img.png"
		}
		if (salle7.vf == true) {
			caseOImg.src = "images/salle7Img.png"
		}
		if (salle8.vf == true) {
			caseOImg.src = "images/salle8Img.png"
		}
		if (salle9.vf == true) {
			caseOImg.src = "images/salle9Img.png"
		}
		if (salle10.vf == true) {
			caseOImg.src = "images/salle10Img.png"
		}
		if (salle11.vf == true) {
			caseOImg.src = "images/salle11Img.png"
		}
		if (salle12.vf == true) {
			caseOImg.src = "images/salle12Img.png"
		}
		if (salle13.vf == true) {
			caseOImg.src = "images/salle13Img.png"
			caseO.reponse = true
		} else {
			caseO.reponse = false
		}
		if (salle14.vf == true) {
			caseOImg.src = "images/salle14Img.png"
		}
		if (salle15.vf == true) {
			caseAImg.src = "images/salle15Img.png"
		}
	}

	/*&&
					caseB.reponse==true&&
					caseC.reponse==true&&
					caseD.reponse==true&&
					caseE.reponse==true&&
					caseF.reponse==true&&
					caseG.reponse==true&&
					caseH.reponse==true&&
					caseI.reponse==true&&
					caseJ.reponse==true&&
					caseK.reponse==true&&
					caseL.reponse==true&&
					caseM.reponse==true&&
					caseN.reponse==true&&
					caseO.reponse==true */
	if (13 in keyDown) {

		if (jeu6 == true && histoire.affiche == true) {

		} else {

			if (
				caseA.reponse == true&&
				caseB.reponse==true&&
				caseC.reponse==true&&
				caseD.reponse==true&&
				caseE.reponse==true&&
				caseF.reponse==true&&
				caseG.reponse==true&&
				caseH.reponse==true&&
				caseI.reponse==true&&
				caseJ.reponse==true&&
				caseK.reponse==true&&
				caseL.reponse==true&&
				caseM.reponse==true&&
				caseN.reponse==true&&
				caseO.reponse==true) {

				verifier = true

				salle1Img.src = "images/salle1Img.png"
				salle2Img.src = "images/salle2Img.png"
				salle3Img.src = "images/salle3Img.png"
				salle4Img.src = "images/salle4Img.png"
				salle5Img.src = "images/salle5Img.png"
				salle6Img.src = "images/salle6Img.png"
				salle7Img.src = "images/salle7Img.png"
				salle8Img.src = "images/salle8Img.png"
				salle9Img.src = "images/salle9Img.png"
				salle10Img.src = "images/salle10Img.png"
				salle11Img.src = "images/salle11Img.png"
				salle12Img.src = "images/salle12Img.png"
				salle13Img.src = "images/salle13Img.png"
				salle14Img.src = "images/salle14Img.png"
				salle15Img.src = "images/salle15Img.png"

				histoireJeu6Temps = true


			}
		}
	}
}