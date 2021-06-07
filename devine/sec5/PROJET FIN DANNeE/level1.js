//level 1

function drawLevel1() {
    if (lvl == 1) {
        poison1.draw()
        poison2.draw()
        mur1.draw()
        mur2.draw()
        mur3.draw()
        mur4.draw()
        wall(joueur, mur1)
        wall(joueur, mur2)
        wall(joueur, mur3)
        wall(joueur, mur4)
        for (var i = 0; i < Ennemis.length; i++) {
            Ennemis[i].draw()
        }
        portail1.draw()

    }
}