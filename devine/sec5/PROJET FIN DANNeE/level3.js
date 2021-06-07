//level 3

function drawBoss() {
	if (boss.vie > 0) {
		ctx.drawImage(bossImg, boss.x, boss.y, boss.w, boss.h)
		ctx.fillStyle = "white"
		ctx.font = "30px Arial"
		ctx.textAlign = "center"
		ctx.fillText("VIE: " + boss.vie, boss.x + 100, boss.y)
	}    
}

var bossBalle = {
    x: canvas.width / 2,
    y: 365,
    r: 20,
    dx: 8,
    dy: 8,
}

var bossBalle2 = {
    x: canvas.width / 2,
    y: 375,
    r: 20,
    dx: 1,
    dy: 4,
}

var bossBalle3 = {
    x: canvas.width / 2,
    y: 355,
    r: 20,
    dx: 2,
    dy: 2,
}

var bossBalle4 = {
    x: canvas.width / 2,
    y: 345,
    r: 20,
    dx: 6,
    dy: 6,
}

var bossBalle5 = {
    x: canvas.width / 2,
    y: 385,
    r: 20,
    dx: 9,
    dy: 5,
}


function drawBossBalle(balle) {
    ctx.arc(balle.x, balle.y, balle.r, 0, Math.PI * 2, false)
    ctx.beginPath()
    ctx.fill()
    ctx.drawImage(deathBallImg, balle.x - balle.r / 2, balle.y - balle.r / 2, balle.r * 2, balle.r * 2)

    if (balle.x < balle.r || balle.x > canvas.width - balle.r) {
        balle.dx = -balle.dx
    }

    if (balle.y < balle.r || balle.y > canvas.height - 275 - balle.r || balle.y < 250 + balle.r) {
        balle.dy = -balle.dy
    }

    balle.x += balle.dx
    balle.y += balle.dy
}


function drawLevel3() {
    if (lvl == 3) {
        drawBoss()
        mur9.draw()
        mur10.draw()
        lavah6.draw()
        lavah7.draw()
        poison3.draw()
        drawBossBalle(bossBalle)
        drawBossBalle(bossBalle2)
        drawBossBalle(bossBalle3)
        drawBossBalle(bossBalle4)
        drawBossBalle(bossBalle5)
        wall(joueur, mur9)
        wall(joueur, mur10)
        AAAAAA(joueur, lavah6)
        AAAAAA(joueur, lavah7)

    }
}