//Getting canvas node
var canvas = document.getElementById("canvas")
var c = canvas.getContext("2d")

//Variable defining
var alive = false
var scoreA = 0
var bestscoreA = 0
var scoreB = 0
var bestscoreB = 0
var gamemode
var mainMenu = true

//Canvas dimensions
canvas.width = window.innerWidth - 25
canvas.height = window.innerHeight - 25

//Draw rectangle by taking values of obj       - Saves 10 years of my life
const fillRectObj = (color, obj) => {
    c.fillStyle = color
    c.fillRect(obj.x, obj.y, obj.w, obj.h)
}

//Drawing rounded rectangles: https://stackoverflow.com/a/7838871/13063334
CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.stroke()
    this.fill()
    this.closePath();
    return this;
}

//Check if a click is within a rectangle
const clickWithinObj = (obj, x, y) => {
    if (x >= obj.x && x <= obj.x + obj.w && y >= obj.y && y <= obj.y + obj.h) return true
    else return false
}

//Ball obj
var ball = { x: canvas.width / 2, y: canvas.height / 2, r: 20, dx: 5, dy: 5 }

//Your pad obj
var padA = { x: 50, y: canvas.height / 2, w: 30, h: 180 }

//Enemy pad obj
var padB = { x: canvas.width - 75, y: canvas.height / 2, w: padA.w, h: padA.h }

//Middle line obj
var middle = { x: canvas.width / 2, y: 0, w: 15, h: canvas.height }

//Multiple gamemodes
var gamemodes = {
    //Player vs Player (mouse/mouse)
    mouse2p: { x: 0, y: 0, w: 0, h: 0, text: "PvP mouse/mouse" },
    //Player vs Player (mouse/keyboard)
    mousekey2p: { x: 0, y: 0, w: 0, h: 0, text: "PvP mouse/keyboard" },
    //Player vs AI
    mouse1p: { x: 0, y: 0, w: 0, h: 0, text: "PvAI" },
    //Player vs Player (websocket)
    multi2p: { x: 0, y: 0, w: 0, h: 0, text: "PvP multiplayer (wifi)" }
}

//Moving pads on mousemove event
canvas.addEventListener("mousemove", e => {
    if (gamemode == "mouse2p") {
        if (e.offsetX < canvas.width / 2) padA.y = e.offsetY - padA.h / 2
        else if (e.offsetX > canvas.width / 2) padB.y = e.offsetY - padB.h / 2
    }
    if (gamemode == "mousekey2p") {
        padB.y = e.offsetY - padB.h / 2
    }
    if (gamemode == "mouse1p") {
        padA.y = e.offsetY - padA.h / 2
    }
})

//Move pads on keypress event
document.addEventListener("keypress", e => {
    if (gamemode == "mousekey2p") {
        if (e.code == "KeyW") padA.y += 20
        if (e.code == "KeyS") padA.y -= 20
    }
})

//Move pads on keydown event
document.addEventListener("keydown", e => {
    if (gamemode == "mousekey2p") {
        if (e.code == "KeyW") padA.y += 20
        if (e.code == "KeyS") padA.y -= 20
    }
})

//Draw pads
const drawPads = () => {
    fillRectObj("white", padA)
    fillRectObj("white", padB)
}

//Draw middle line
const drawMiddle = () => {
    //Only draw when mouse/mouse aka mouse2p
    if (gamemode == "mouse2p") {
        fillRectObj("white", middle)
    }
}

//Draw ball
const drawBall = () => {
    c.fillStyle = 'rgba(255, 255, 255, .05)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.fillStyle = '#ff0000';
    c.moveTo(ball.x, ball.y);
    c.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false);
    c.fill();
    /*c.fillStyle = "white"
    c.beginPath()
    c.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false)
    c.fill();*/
    //Bounce off canvas
    if (ball.x < ball.r || ball.x > canvas.width - ball.r) {
        ball.dx = -ball.dx
    }
    if (ball.y < ball.r || ball.y + ball.r > canvas.height) {
        ball.dy = -ball.dy
    }
    //Bounce off padA
    if (ball.x - ball.r < padA.x + padA.w && ball.y - ball.r > padA.y && ball.y - ball.r < padA.y + padA.h) {
        ball.dx = -ball.dx
        scoreA++
        if (scoreA > bestscoreA) {
            bestscoreA++
        }
    }
    //Bounce off padB
    if (ball.x + ball.r * 2 > padB.x + padB.w && ball.y - ball.r > padB.y && ball.y - ball.r < padB.y + padB.h) {
        ball.dx = -ball.dx
        scoreB++
        if (scoreB > bestscoreB) {
            bestscoreB++
        }
    }
    ball.x += ball.dx
    ball.y += ball.dy
}

//Draw game over screen
const drawGameOver = () => {
    c.font = "24px Arial"
    c.fillText(`GAME OVER(click to restart)`, canvas.width / 2, canvas.height / 2)
    canvas.addEventListener("click", e => {
        scoreA = 0
        scoreB = 0
        ball.x = 35
        ball.y = 40
        alive = true
        game()
    }, { once: true })
}

//Draw scores
const drawScores = () => {
    //if (gamemode == "mouse2p") {
    c.font = "24px Arial"
    c.fillText(`Score: ${scoreA}`, 0 + 45, 20)
    c.font = "20px Arial"
    c.fillText(`Best Score: ${bestscoreA}`, 0 + 60, 40)
    c.font = "24px Arial"
    c.fillText(`Score: ${scoreB}`, canvas.width / 2 + middle.w + 45, 20)
    c.font = "20px Arial"
    c.fillText(`Best Score: ${bestscoreB}`, canvas.width / 2 + middle.w + 60, 40)
}

//Draw starting menu
const drawMenu = () => {
    var i = 0
    for (const gm in gamemodes) {
        gamemodes[gm].x = canvas.width / 2 - 75
        gamemodes[gm].y = i * 200 + 180
        gamemodes[gm].w = 250
        gamemodes[gm].h = 100
            //fillRectObj("black", gamemodes[gm])
            //x, y, w, h, r
            //c.strokeStyle = "blacks"
        c.lineWidth = 10;
        c.strokeStyle = "#73AD21"
        c.fillStyle = "#232323"
        c.roundRect(gamemodes[gm].x, gamemodes[gm].y, gamemodes[gm].w, gamemodes[gm].h, 20)
        c.fillStyle = "white"
        c.textAlign = "center"
        c.font = "24px Arial"
        c.fillText(gamemodes[gm].text, gamemodes[gm].x + gamemodes[gm].w / 2, gamemodes[gm].y + gamemodes[gm].h / 2)
        i++
    }
}

//Start the game
canvas.addEventListener("click", e => {
    if (mainMenu) {
        alive = true
        for (const gm in gamemodes) {
            //console.log("Inloop")
            if (clickWithinObj(gamemodes[gm], e.offsetX, e.offsetY)) {
                console.log("Gamemode: " + gm)
                gamemode = gm
                mainMenu = false
                console.log("Found pressed button. Initiating gamemode")
                game()
            }
        }
        console.log("Nothing Found, Error Occured on button pressing")
    }
})

drawMenu()

//Call function
const game = () => {
    if (alive) {
        c.clearRect(0, 0, canvas.width, canvas.height)
        drawBall()
        drawPads()
        drawScores()
        drawMiddle()
            //Make ai move pad
        if (gamemode == "mouse1p") {
            padB.y = ball.y - 40
        }
        requestAnimationFrame(game)
    }
}
game()