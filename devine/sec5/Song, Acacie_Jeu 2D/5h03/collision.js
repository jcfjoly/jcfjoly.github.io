function collision(a, b) {

    if (a.x + a.w > b.x && a.x < b.x + b.w && a.y < b.y + b.h && a.y + a.h > b.y) {

        if (jeu6 == false) {
            if (b.x > a.x - b.w + b.speed && b.x < a.x + a.w - b.speed) {
                joueur.jump = false

                if (b.y <= a.y) {
                    b.y = a.y - (b.h)
                    if (mode3 == true) {
                        if (32 in keyDown) {
                            joueur.ySpeed = -5
                        }
                    }
                }
                if (b.y >= a.y) {

                    b.y = a.y + a.h

                    if (mode3 == true) {
                        if (32 in keyDown) {
                            joueur.ySpeed = 5
                        }
                    }
                }
            } else if (b.x >= a.x) {

                b.x = a.x + a.w

            } else if (b.x <= a.x) {

                b.x = a.x - b.w

            }
        }
        return (true)
    }
}

function collisionN(a, b) {

    if (a.x + a.w > b.x && a.x < b.x + b.w && a.y < b.y + b.h && a.y + a.h > b.y) {
        return (true)
    }
}

function collisionh(a, b) {
    if (a.x + a.w > b.x) {
        return (true)
    }
}

function collisionb(a, b) {
    if (a.x < b.x + b.w) {
        return (true)
    }
}

function collisiond(a, b) {
    if (a.y < b.y + b.h) {
        return (true)
    }
}

function collisiong(a, b) {
    if (a.y + a.h > b.y) {

        return (true)
    }
}

function collisionBalle(a, b) {
    if (a.x + a.r > b.x &&
        a.x - a.r < b.x + b.w &&
        a.y - a.r < b.y + b.h &&
        a.y + a.r > b.y) {

        return (true)
    }
}
function checkCollision() {

    if (menu == true) {
        if (collisionN(instructionMenu, joueur)) {
            instructionMenuVF = true
            menu = false
            joueur.x = 0
            joueur.yVecteur = 0
        }
        if (collisionN(start, joueur)) {
            jeu1Intro = true
            menu = false
        }
        /* if (collisionN(choix, joueur)) {
             choixVF = true
             menu = false
             joueur.x = 0
             joueur.yVecteur = 0
         }*/
    }
    if (instructionMenuVF == true) {
        if (collisionN(instructionMenuAffichage, joueur)) {
            instructionMenuVF = false
            menu = true
            joueur.x = 0
            joueur.yVecteur = 0
        }
    }
    /*if (choixVF == true) {
        if (collisionN(choixRetour, joueur)) {
            choixVF = false
            menu = true
            joueur.x = 0
            joueur.yVecteur = 0
        }
    }*/
    if (jeu1 == true) {
        personnage.y += personnage.speed
        if (collision(porteJeu1, personnage)) {
            jeu2Intro = true
            jeu1 = false
            space = true
            pousser()
        }
        if (collision(personnage, joueurPlaque)) {
            message.text = "Prepare tes affaires. Nous allons dehors!"
            messageProfilImg.src = "images/messageProfilPersonnageImg.png"
        } else {
            messageProfilImg.src = "images/messageProfilImg.png"
            message.text = ""
        }
        if (collision(fenetre1, joueurPlaque)) {
            message.text = "Il pleut dehors"
        }

        if (collision(fenetre2, joueurPlaque)) {
            message.text = "La pluie tombe en rafale"
        }

        if (collision(fenetre3, joueurPlaque)) {
            message.text = "J'entend la pluie pleure"
        }

        if (collision(lit, joueurPlaque)) {

            if (lit.o == true) {
                message.text = "Il y a quelque chose sous l'oreille"
                if (69 in keyDown) {
                    lit.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "Il n'y a plus rien sur mon lit"
                inventaire1Img.src = "images/inventaire1ImgV.png"
            }

        }
        if (collision(tableNuit, joueurPlaque)) {
            if (tableNuit.o == true) {
                message.text = "C'est ma cadre la plus precieuse. Je veux la prendre."
                if (69 in keyDown) {
                    tableNuit.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "Je n'aime pas le texture du bois. "
                inventaire2Img.src="images/inventaire2ImgV.png"	
                tableNuitImg.src="images/tableNuitCImg.png"	  
            }

        }
        if (collision(armoire, joueurPlaque)) {
            if (armoire.o == true) {
                message.text = "Il a mon parapluie dans l'armoire"
                if (69 in keyDown) {
                    armoire.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "Mon armoire est vide."
                inventaire3Img.src="images/inventaire3ImgV.png"
            }

        }
        if (collision(tv, joueurPlaque)) {
            if (tv.o == true) {
                message.text = "Le television est ouvert. Je devrais le fermer."
                if (69 in keyDown) {
                    tv.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "Je n'ai pas envie de regarder le télévision"
                tvImg.src="images/tvCImg.png"
            }

        }

        if (collision(plante, joueurPlaque)) {
            if (plante.o == true) {
                message.text = "Je devrais donner a boire aux plantes. "
                if (69 in keyDown && robinet.o == false) {
                    plante.o = false
                    pointJeu = pointJeu + 15
                }
            } else {
                message.text = "Les feuilles des plantes ont regagne leur couleur vert."
                planteImg.src="images/planteCImg.png"
            }
        }
        if (collision(aquarium, joueurPlaque)) {
            if (aquarium.o == true) {
                message.text = "Les poissons ont faim."
                if (69 in keyDown && sofa.o == false) {
                    aquarium.o = false
                    pointJeu = pointJeu + 10
                    message.text = "un poisson cracha un coin."
                }
            } else {
                message.text = "Les poissons nagent en rond."
                inventaire4Img.src="images/inventaire4ImgV.png"
            }
        }
        if (collision(sofa, joueurPlaque)) {
            if (sofa.o == true) {
                message.text = "Un objet est tombe en arriere du sofa."
                if (69 in keyDown) {
                    sofa.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "C'est un sofa. "
                inventaire5Img.src="images/inventaire5ImgV.png"
            }

        }
        if (collision(toilet, joueurPlaque)) {
            message.text = "C'est un toilet. "
        }
        if (collision(baignoire, joueurPlaque)) {
            if (baignoire.o == true) {
                message.text = "L'eau du baignoire cintille magiquement ressemblant a une puie de voeux."
                if (69 in keyDown && aquarium.o == false) {
                    baignoire.o = false
                    pointJeu = pointJeu + 15
                    message.text = "ton argent tomba dans le baignoire"
                }
            } else {
                message.text = "C'est un baignoire."
                baignoireImg.src="images/baignoireCImg.png"
            }

        }
        if (collision(robinet, joueurPlaque)) {
            if (robinet.o == true) {
                message.text = "J'ai besoin de quelque chose pour le remplir"

                if (69 in keyDown && verre.o == false) {
                    robinet.o = false
                    pointJeu = pointJeu + 10
                }
            } else {
                message.text = "Je n'ai plus besoin d'eau"
                inventaire6Img.src="images/inventaire6ImgV.png"
            }
        }
        if (collision(cuisinier, joueurPlaque)) {
            message.text = "Il y a rien. "
        }
        if (collision(verre, joueurPlaque)) {
            if (verre.o == true) {
                message.text = "Un verre est dedans."
                if (69 in keyDown) {
                    verre.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "Le robinet est cassé."
                inventaire7Img.src="images/inventaire7ImgV.png"
                verreImg.src="images/verreCImg.png"
            }
        }
        if (collision(cuisinier2, joueurPlaque)) {
            if (cuisinier2.o == true) {
                message.text = "Un couteau est place sur le cuisinier"
                if (69 in keyDown) {
                    cuisinier2.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "Il y a rien."
                inventaire8Img.src="images/inventaire8ImgV.png"
                cuisinier2Img.src="images/cuisinier2CImg.png"
            }
        }
        if (collision(table, joueurPlaque)) {
            if (table.o == true) {
                message.text = "J'ai besoin d'un collation. Une pomme est sur la table."
                if (69 in keyDown) {
                    table.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "C'est une table."
                inventaire9Img.src="images/inventaire9ImgV.png"
                tableImg.src="images/tableCImg.png"
            }
        }
        if (collision(chaise, joueurPlaque)) {
            message.text = "C'est une chaise"
        }
        if (collision(book, joueurPlaque)) {
            if (book.o == true) {
                message.text = "Un livre."
                if (69 in keyDown) {
                    book.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "C'est un bibliotheque"
                inventaire10Img.src="images/inventaire10ImgV.png"
                bookImg.src="images/bookCImg.png"
            }
        }
        if (collision(botte, joueurPlaque)) {
            if (botte.o == true) {
                message.text = "Ce sont mes bottes."
                if (69 in keyDown) {
                    botte.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "Il n'y a plus rien."
                botteImg.src="images/botteCImg.png"
            }
        }

        if (collision(vetement, joueurPlaque)) {
            if (vetement.o == true) {
                message.text = "Ce sont mes vetements."
                if (69 in keyDown) {
                    vetement.o = false
                    pointJeu = pointJeu + 5
                }
            } else {
                message.text = "Il n'y a plus rien."
                vetementImg.src="images/vetementCImg.png"
            }
        }
        if (collision(porteJeu1, joueurPlaque)) {
            porteJeu1.vf = true
        }

    }

    if (jeu2 == true) {
        if (collisionN(ville4, joueur)) {
            ville4vf = true
        }
        /*if (collisionN(ville3, joueur)) {
            ville4vf = false
        }*/
    }
    if (jeu3 == true) {
        //355 messageProfilImg.src="messageProfilImg.png"
        personnage.y -= personnage.speed

        /*if(joueur.x<=440-joueur.h){
            nuitImg++
            if(nuitImg==9){
                jeu3=false
                jeu4Intro=true
                nuit1Img.src="images/blackImg.png"
                space=true
                sonJeu3.pause();
                sonJeu3.currentTime = 0;
            }else{
                nuit1Img.src="images/nuit"+nuitImg+"Img.jpg"
                joueur.y=750-joueur.h 
            }
        }*/
        if (nuitImg > 8) {
            jeu3 = false
            jeu4Intro = true
            nuit1Img.src = "images/blackImg.png"
        } else if (joueur.y <= 440 - joueur.h) {
            joueur.y = 750 - joueur.h
            if (nuitImg != 9) {
                nuitImg++
                nuit1Img.src = "images/nuit" + nuitImg + "Img.jpg"
            } else {
                jeu3 = false
                jeu4Intro = true
                nuit1Img.src = "images/blackImg.png"
            }
            if (nuitImg == 2) {
                message.text = "..."
            }
            if (nuitImg == 3) {
                message.text = "annieee?"
            }
            if (nuitImg == 4) {
                message.text = "Ou es-tu?"
            }
            if (nuitImg == 5) {
                message.text = "Ou est-elle?"
            }
            if (nuitImg == 6) {
                message.text = "J'espere qu'elle ne se perdra pas....."
            }
            if (nuitImg == 7) {
                message.text = "ANNIE???Ou es-tu?!!"
            }
            if (nuitImg == 8) {

                message.text = "ANNIE.tu m'as fait peur. "
                console.log(totalTempsH + ":" + totalTempsMinDi + totalTempsMin)

            }

        }
        if (personnage.y <= 440 - personnage.h && collisionJeu3 == false && nuitImg != 8) {
            personnage.y = -10000
            personnage.speed = 0
            joueurJeu3 = false
            joueur.speed = 3
            joueur.y -= joueur.speed
            message.text = "Annie??Tu es ou?"
            if (joueur.y <= 600) {
                joueur.y += joueur.speed
                //joueur.x+=joueur.speed
                if (joueurXInverse == false) {
                    joueur.x -= joueur.speed
                } else {
                    joueur.x += joueur.speed
                }
                if (joueur.x <= 780) {
                    joueurXInverse = true
                }
                if (joueur.x >= 980) {
                    revientJeu3 = true
                    joueurXInverse = false
                    speed = 2
                }
                if (joueur.x <= 920 && revientJeu3 == true) {
                    collisionJeu3 = true
                }
            }
        } else {
            if (collisionJeu3 == true) {
                joueurJeu3 = false
            } else {
                joueurJeu3 = true
            }
        }
        if (collisionJeu3 == true) {
            speed = 1
        }
        if (joueur.x <= 830 && collisionJeu3 == true) {
            joueur.x = 830
        }

        if (joueur.x >= 920 && collisionJeu3 == true) {
            joueur.x = 920
            //console.log("aaaaaa")
        }
    }
    if (jeu2 == true) {
        /*if(collision(porteBouge,joueur)){
            joueur.x=0
            joueur.y=650
        }
        if(collision(porteBouge2,joueur)){
            joueur.x=0
            joueur.y=650
    } */

    }

    if (jeu4 == true) {

        if (collisionN(porte, joueur)) {
            if (clefObtenir == true) {
                porte.x = 1000000
            } else {
                joueur.y = porte.y + porte.h
            }
        }

        if (collision(clef, joueur)) {
            clefObtenir = true
            clef.x = 1000000//disparait
        }

        if (collisionN(portail1, joueur)) {
            joueur.x = portail1b.x
            joueur.y = portail1b.y - joueur.h
            //portail1.x=3000
            //portail1b.x=100000//disparait
        }
        if (collisionN(finjeu4, joueur)) {
            jeu4 = false
            mode3 = false
            murs = []
            jeu5Intro = true
            sonJeu4.pause();
            sonJeu4.currentTime = 0;
            cancel = false
            //pousser()
        }
        for (i = 0; i < pluies.length; i++) {
            if (collisionN(pluies[i], joueur)) {
                pluies.splice(i, 1)
                vieJeu4--
                vieJeu4Var.h = vieJeu4Var.h - 10
            }
        }
    }

    for (i = 0; i < murs.length; i++) {

        if (jeu1 == false) {
            if (collision(murs[i], joueur)) {
                if (mode3 == true) {
                }
                if (mode1 == true) {

                } else {
                }
            }
        } else {
            if (collision(murs[i], joueurPlaque)) {

            }
        }

    }

    if (jeu6 == true) {
        if (collisionN(salle1, joueur)) {
            console.log("why???")
            salle1Img.src = "images/salle1Img.png"
            salle1.vf = true

            if (joueur.x <= salle1.x) {
                joueur.x = salle3.x + salle3.w / 2
                joueur.y = salle3.y + salle3.h / 2
            } else if (joueur.x >= salle1.x + salle1.w - joueur.w) {
                joueur.x = salle5.x + salle5.w / 2
                joueur.y = salle5.y + salle5.w / 2
            } else if (joueur.y <= salle1.y) {
                joueur.y = salle1.y
            } else if (joueur.y >= salle1.y + salle1.h - joueur.h) {
                joueur.y = salle1.y + salle1.h - joueur.h
            }
        } else if (verifier == false) {
            salle1Img.src = "images/blackImg.png"
            salle1.vf = false
        }
        if (collisionN(salle2, joueur)) {
            console.log("why???2")
            salle2Img.src = "images/salle2Img.png"
            salle2.vf = true

            if (joueur.x <= salle2.x) {
                joueur.x = salle14.x + salle14.w / 2
                joueur.y = salle14.y + salle14.h / 2
            } else if (joueur.x >= salle2.x + salle2.w - joueur.w) {
                joueur.x = salle15.x + salle15.w / 2
                joueur.y = salle15.y + salle15.h / 2
            } else if (joueur.y <= salle2.y) {
                joueur.y = salle2.y
            } else if (joueur.y >= salle2.y + salle2.h - joueur.h) {
                joueur.y = salle2.y + salle2.h - joueur.h
            }
        } else if (verifier == false) {
            salle2Img.src = "images/blackImg.png"
            salle2.vf = false
        }
        if (collisionN(salle3, joueur)) {
            console.log("why???3")
            salle3Img.src = "images/salle3Img.png"
            salle3.vf = true

            if (joueur.x <= salle3.x) {
                joueur.x = salle1.x + salle1.w / 2
                joueur.y = salle1.y + salle1.h / 2
            } else if (joueur.x >= salle3.x + salle3.w - joueur.w) {
                joueur.x = salle9.x + salle9.w / 2
                joueur.y = salle9.y + salle9.h / 2
            } else if (joueur.y <= salle3.y) {
                joueur.y = salle3.y
            } else if (joueur.y >= salle3.y + salle3.h - joueur.h) {
                joueur.y = salle3.y + salle3.h - joueur.h
            }
        } else if (verifier == false) {
            salle3Img.src = "images/blackImg.png"
            salle3.vf = false
        }
        if (collisionN(salle4, joueur)) {
            console.log("why???4")
            salle4Img.src = "images/salle4Img.png"
            salle4.vf = true

            if (joueur.x <= salle4.x) {
                joueur.x = salle13.x + salle13.w / 2
                joueur.y = salle13.y + salle13.h / 2
            } else if (joueur.x >= salle4.x + salle4.w - joueur.w) {
                joueur.x = salle6.x + salle6.w / 2
                joueur.y = salle6.y + salle6.h / 2
            } else if (joueur.y <= salle4.y) {
                joueur.y = salle4.y
            } else if (joueur.y >= salle4.y + salle4.h - joueur.h) {
                joueur.y = salle4.y + salle4.h - joueur.h
            }
        } else if (verifier == false) {
            salle4Img.src = "images/blackImg.png"
            salle4.vf = false
        }

        if (collisionN(salle5, joueur)) {
            console.log("why???5")
            salle5Img.src = "images/salle5Img.png"
            salle5.vf = true

            if (joueur.x <= salle5.x) {
                joueur.x = salle1.x + salle1.w / 2
                joueur.y = salle1.y + salle1.h / 2
            } else if (joueur.x >= salle5.x + salle5.w - joueur.w) {
                joueur.x = salle8.x + salle8.w / 2
                joueur.y = salle8.y + salle8.h / 2
            } else if (joueur.y <= salle5.y) {
                joueur.y = salle5.y
            } else if (joueur.y >= salle5.y + salle5.h - joueur.h) {
                joueur.y = salle5.y + salle5.h - joueur.h
            }
        } else if (verifier == false) {
            salle5Img.src = "images/blackImg.png"
            salle5.vf = false
        }

        if (collisionN(salle6, joueur)) {

            salle6Img.src = "images/salle6Img.png"
            salle6.vf = true

            if (joueur.x <= salle6.x) {
                joueur.x = salle11.x + salle11.w / 2
                joueur.y = salle11.y + salle11.h / 2
            } else if (joueur.x >= salle6.x + salle6.w - joueur.w) {
                joueur.x = salle4.x + salle4.w / 2
                joueur.y = salle4.y + salle4.h / 2
            } else if (joueur.y <= salle6.y) {
                joueur.y = salle6.y
            } else if (joueur.y >= salle6.y + salle6.h - joueur.h) {
                joueur.y = salle6.y + salle6.h - joueur.h
            }
        } else if (verifier == false) {
            salle6Img.src = "images/blackImg.png"
            salle6.vf = false
        }

        if (collisionN(salle7, joueur)) {

            salle7Img.src = "images/salle7Img.png"
            salle7.vf = true

            if (joueur.x <= salle7.x) {
                joueur.x = salle12.x + salle12.w / 2
                joueur.y = salle12.y + salle12.w / 2
            } else if (joueur.x >= salle7.x + salle7.w - joueur.w) {
                joueur.x = salle14.x + salle14.w / 2
                joueur.y = salle14.y + salle14.w / 2
            } else if (joueur.y <= salle7.y) {
                joueur.y = salle7.y
            } else if (joueur.y >= salle7.y + salle7.h - joueur.h) {
                joueur.y = salle7.y + salle7.h - joueur.h
            }
        } else if (verifier == false) {
            salle7Img.src = "images/blackImg.png"
            salle7.vf = false
        }

        if (collisionN(salle8, joueur)) {

            salle8Img.src = "images/salle8Img.png"
            salle8.vf = true

            if (joueur.x <= salle8.x) {
                joueur.x = salle5.x + salle5.w / 2
                joueur.y = salle5.y + salle5.w / 2
            } else if (joueur.x >= salle8.x + salle8.w - joueur.w) {
                joueur.x = salle12.x + salle12.w / 2
                joueur.y = salle12.y + salle12.w / 2
            } else if (joueur.y <= salle8.y) {
                joueur.y = salle8.y
            } else if (joueur.y >= salle8.y + salle8.h - joueur.h) {
                joueur.y = salle8.y + salle8.h - joueur.h
            }
        } else if (verifier == false) {
            salle8Img.src = "images/blackImg.png"
            salle8.vf = false
        }

        if (collisionN(salle9, joueur)) {

            salle9Img.src = "images/salle9Img.png"
            salle9.vf = true

            if (joueur.x <= salle9.x) {
                joueur.x = salle10.x + salle10.w / 2
                joueur.y = salle10.y + salle10.w / 2
            } else if (joueur.x >= salle9.x + salle9.w - joueur.w) {
                joueur.x = salle3.x + salle3.w / 2
                joueur.y = salle3.y + salle3.w / 2
            } else if (joueur.y <= salle9.y) {
                joueur.y = salle9.y
            } else if (joueur.y >= salle9.y + salle9.h - joueur.h) {
                joueur.y = salle9.y + salle9.h - joueur.h
            }
        } else if (verifier == false) {
            salle9Img.src = "images/blackImg.png"
            salle9.vf = false
        }

        if (collisionN(salle10, joueur)) {

            salle10Img.src = "images/salle10Img.png"
            salle10.vf = true

            if (joueur.x <= salle10.x) {
                joueur.x = salle13.x + salle1.w / 2
                joueur.y = salle13.y + salle1.w / 2
            } else if (joueur.x >= salle10.x + salle10.w - joueur.w) {
                joueur.x = salle9.x + salle1.w / 2
                joueur.y = salle9.y + salle1.w / 2
            } else if (joueur.y <= salle10.y) {
                joueur.y = salle10.y
            } else if (joueur.y >= salle10.y + salle10.h - joueur.h) {
                joueur.y = salle10.y + salle10.h - joueur.h
            }
        } else if (verifier == false) {
            salle10Img.src = "images/blackImg.png"
            salle10.vf = false
        }

        if (collisionN(salle11, joueur)) {

            salle11Img.src = "images/salle11Img.png"
            salle11.vf = true

            if (joueur.x >= salle11.x + salle11.w - joueur.w) {
                joueur.x = salle6.x + salle1.w / 2
                joueur.y = salle6.y + salle1.w / 2
            } else {
                if (joueur.y <= salle11.y) {
                    joueur.y = salle11.y
                }
                if (joueur.y >= salle11.y + salle11.h - joueur.h) {
                    joueur.y = salle11.y + salle11.h - joueur.h
                }
                if (joueur.x <= salle11.x) {
                    joueur.x = salle11.x
                }
            }
        } else if (verifier == false) {
            salle11Img.src = "images/blackImg.png"
            salle11.vf = false
        }

        if (collisionN(salle12, joueur)) {

            salle12Img.src = "images/salle12Img.png"
            salle12.vf = true

            if (joueur.x <= salle12.x) {
                joueur.x = salle8.x + salle1.w / 2
                joueur.y = salle8.y + salle1.w / 2
            } else if (joueur.x >= salle12.x + salle12.w - joueur.w) {
                joueur.x = salle7.x + salle1.w / 2
                joueur.y = salle7.y + salle1.w / 2
            } else if (joueur.y <= salle12.y) {
                joueur.y = salle12.y
            } else if (joueur.y >= salle12.y + salle12.h - joueur.h) {
                joueur.y = salle12.y + salle12.h - joueur.h
            }
        } else if (verifier == false) {
            salle12Img.src = "images/blackImg.png"
            salle12.vf = false
        }

        if (collisionN(salle13, joueur)) {

            salle13Img.src = "images/salle13Img.png"
            salle13.vf = true

            if (joueur.x <= salle13.x) {
                joueur.x = salle10.x + salle1.w / 2
                joueur.y = salle10.y + salle1.w / 2
            } else if (joueur.x >= salle13.x + salle13.w - joueur.w) {
                joueur.x = salle4.x + salle1.w / 2
                joueur.y = salle4.y + salle1.w / 2
            } else if (joueur.y <= salle13.y) {
                joueur.y = salle13.y
            } else if (joueur.y >= salle13.y + salle13.h - joueur.h) {
                joueur.y = salle13.y + salle13.h - joueur.h
            }
        } else if (verifier == false) {
            salle13Img.src = "images/blackImg.png"
            salle13.vf = false
        }

        if (collisionN(salle14, joueur)) {

            salle14Img.src = "images/salle14Img.png"
            salle14.vf = true

            if (joueur.x <= salle14.x) {
                joueur.x = salle2.x + salle1.w / 2
                joueur.y = salle2.y + salle1.w / 2
            } else if (joueur.x >= salle14.x + salle14.w - joueur.w) {
                joueur.x = salle7.x + salle1.w / 2
                joueur.y = salle7.y + salle1.w / 2
            } else if (joueur.y <= salle14.y) {
                joueur.y = salle14.y
            } else if (joueur.y >= salle14.y + salle14.h - joueur.h) {
                joueur.y = salle14.y + salle14.h - joueur.h
            }
        } else if (verifier == false) {
            salle14Img.src = "images/blackImg.png"
            salle14.vf = false
        }

        if (collisionN(salle15, joueur)) {

            salle15Img.src = "images/salle15Img.png"
            salle15.vf = true

            if (joueur.x <= salle15.x) {
                joueur.x = salle2.x + salle1.w / 2
                joueur.y = salle2.y + salle1.w / 2
            } else {
                if (joueur.y <= salle15.y) {
                    joueur.y = salle15.y
                }
                if (joueur.y >= salle15.y + salle15.h - joueur.h) {
                    joueur.y = salle15.y + salle15.h - joueur.h
                }
                if (joueur.x >= salle15.x + salle15.w - joueur.w) {
                    joueur.x = salle15.x + salle15.w - joueur.w
                }
            }
        } else if (verifier == false) {
            salle15Img.src = "images/blackImg.png"
            salle15.vf = false
        }

    }

    if (jeu5 == true) {

        if (joueur.x <= 0 || joueur.x >= 1200 - joueur.w || joueur.y >= 750 - joueur.h) {
            joueur.x = bouge.x
            joueur.y = bouge.y - joueur.h
            vieTotalJoueur--
            barreVieJoueur.h = barreVieJoueur.h - 15
        }

        if (collisiond(bouge, milieu)) {
            bouge.x = bouge.x - bouge.Xspeed
            plaque.x = plaque.x - bouge.Xspeed
        }
        if (collisiong(bouge, milieu)) {
            bouge.x = bouge.x + bouge.Xspeed
            plaque.x = plaque.x + bouge.Xspeed
        }
        if (collisionb(bouge, milieu)) {
            bouge.y = bouge.y + bouge.Yspeed
        }
        if (collisionh(bouge, milieu)) {
            bouge.y = bouge.y - bouge.Yspeed
        }
        if (collisionN(joueur, bouge)) {
            joueur.y = bouge.y - joueur.h
            joueur.jump = false;
            joueur.yVecteur = 0;
        }

        for (i = 0; i < laserCs.length; i++) {
            if (collisionN(laserCs[i], joueur)) {
                laserCs.splice(i, 1)
                // console.log("sss") 
                vieTotalJoueur--
                barreVieJoueur.h = barreVieJoueur.h - 15
            }
            if (laserCs[i]) {
                if (laserCs[i].x <= 0 || laserCs[i].y <= 0 || laserCs[i].x >= 1200 - laserCs[i].w || laserCs[i].y >= 750 - laserCs[i].h) {
                    laserCs.splice(i, 1)
                }
            }
        }
        //rond problem collision
        for (i = 0; i < boulles.length; i++) {

            if (collisionBalle(boulles[i], joueur)) {
                boulles.splice(i, 1)
                vieTotalJoueur--
                barreVieJoueur.h = barreVieJoueur.h - 15
            }
            /*if (boulles[i].x>joueur.x-boulles[i].r&&boulles[i].x<joueur.x+joueur.w+boulles[i].r&&boulles[i].y<joueur.y+joueur.h+boulles[i].r&&boulles[i].y>joueur.y-boulles[i].r){
               
            }*/
            if (boulles[i]) {
                if (boulles[i].x <= 0 || boulles[i].y <= 0 || boulles[i].x >= 1200 - boulles[i].r || boulles[i].y >= 750 - boulles[i].r) {
                    boulles.splice(i, 1)
                }
            }
        }
        for (i = 0; i < munitions.length; i++) {
            if (collisionN(munitions[i], adversaireJeu5)) {
                munitions.splice(i, 1)
                vieTotalAdversaire--
                barreVieAdversaire.h = barreVieAdversaire.h - 5
                if (vieTotalAdversaire == 10) {
                    milieu.speed = 1
                }
            }
            /* if (collisionN(munitions[i],obstacleMurs[i])){
                 munitions.splice(i,1)
                 obstacleMurs[i].vie--
                 if(obstacleMurs[i].vie==0){
                     obstacleMurs.splice(i,1)
                 }                      
             }*/
            if (munitions[i]) {
                if (munitions[i].x <= 0 || munitions[i].y <= 0 || munitions[i].x >= 1200 - munitions[i].w || munitions[i].y >= 750 - munitions[i].h) {
                    munitions.splice(i, 1)
                }
            }
        }
        for (i = 0; i < obstacleMurs.length; i++) {

            if (collisionN(obstacleMurs[i], joueur)) {
                if (collisionN(plaque, joueur)) {

                } else {
                    joueur.x = obstacleMurs[i].x - joueur.w
                }
            }
            if (obstacleMurs[i].x <= 0) {
                obstacleMurs.splice(i, 1)
            }
        }
    }
}