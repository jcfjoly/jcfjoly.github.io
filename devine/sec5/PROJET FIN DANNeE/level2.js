

//level 2
var balle = {
    x: canvas.width / 2,
    y: 375,
    r: 20,
    dx: 3,
    dy: 6,
}

var balle2 = {
    x: canvas.width / 2,
    y: 300,
    r: 20,
    dx: 9,
    dy: 6,
}

var balle3 = {
    x: canvas.width / 2,
    y: 225,
    r: 20,
    dx: 6,
    dy: 3,
}

function drawBalle(balle) {
    ctx.arc(balle.x, balle.y, balle.r, 0, Math.PI * 2, false)
    ctx.beginPath()
    ctx.fill()
    ctx.drawImage(deathBallImg, balle.x - balle.r / 2, balle.y - balle.r / 2, balle.r * 2, balle.r * 2)

    
			if (balle.x < balle.r || balle.x > 780 - balle.r || balle.x < 400 + balle.r) {
				balle.dx = -balle.dx
			}

			if (balle.y < balle.r || balle.y > 800 - balle.r || balle.y < 150 + balle.r) {
				balle.dy = -balle.dy
			}
			balle.x += balle.dx
			balle.y += balle.dy
}


function drawLevel2() {
    if (lvl == 2) {
        portail2.draw()
        
        portail5.draw()
        mur5.draw()
        mur6.draw()
        mur7.draw()
        porte1.draw()
        wall(joueur, mur5)
        wall(joueur, mur6)
        wall(joueur, mur7)
        drawBalle(balle)
        drawBalle(balle2)
        drawBalle(balle3)
        // drawBalle2()
        // drawBalle3()
    }
}