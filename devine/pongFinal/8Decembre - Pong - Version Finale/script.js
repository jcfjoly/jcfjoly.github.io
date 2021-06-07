console.log("Loaded script.js")

//Getting canvas node
var canvas = document.getElementById("canvas")
var c = canvas.getContext("2d")

//Getting settings values
var ballColor = document.getElementById("ballColor")
var padColor = document.getElementById("padColor")
var backColor = document.getElementById("backColor")
var ballSpeed = document.getElementById("ballSpeed")
var scale = document.getElementById("scale")
var points = document.getElementById("points")

var sliders = [ballSpeed, scale, points]

//Variable defining
var alive = false
var scoreA = 0
var bestscoreA = 0
var scoreB = 0
var bestscoreB = 0
var gamemode
var mainMenu = true
var setOpen = false

//Canvas dimensions
canvas.width = window.innerWidth - 25
canvas.height = window.innerHeight - 25

//Audio defining
var winSound = new Audio("Sounds/win.mp3")
var lossSound = new Audio("Sounds/loss.mp3")
winSound.volume = 0.3
lossSound.volume = 0.3

//Update settings text
sliders.forEach(input => {
    input.addEventListener("change", e => {
        switch (input.id + "Txt") {
            case "ballSpeedTxt":
                document.getElementById(input.id + "Txt").innerHTML = `Ball Speed (${e.target.value}%)`
                break
            case "scaleTxt":
                document.getElementById(input.id + "Txt").innerHTML = `Scale (${e.target.value}%)`
                break
            case "pointsTxt":
                document.getElementById(input.id + "Txt").innerHTML = `Points (${e.target.value})`
                break
        }
    })
})

sliders.forEach(input => {
    input.addEventListener("input", e => {
        switch (input.id + "Txt") {
            case "ballSpeedTxt":
                document.getElementById(input.id + "Txt").innerHTML = `Ball Speed (${e.target.value}%)`
                break
            case "scaleTxt":
                document.getElementById(input.id + "Txt").innerHTML = `Scale (${e.target.value}%)`
                break
            case "pointsTxt":
                document.getElementById(input.id + "Txt").innerHTML = `Points (${e.target.value})`
                break
        }
    })
})

const showVal = (element, newVal) => {
    document.getElementById(element).innerHTML = newVal;
}

//Draw rectangle by taking values of obj       - Saves 10 years of my life
const fillRectObj = (color, obj) => {
    c.fillStyle = color
    if (obj.x == canvas.width / 2 && obj.y == 0) return c.fillRect(obj.x, obj.y, obj.w, obj.h)
    c.fillRect(obj.x, obj.y, obj.w * scale.value / 100, obj.h * scale.value / 100)
}

//Open settings tab
const open = () => {
    document.getElementById("settings").style.width = "250px";
    document.getElementById("canvas").style.marginLeft = "250px";
}

//Apply settings and close tab
const apply = () => {
    document.getElementById("settings").style.width = "0";
    document.getElementById("canvas").style.marginLeft = "0";
    ball.dx = 5 * (ballSpeed.value / 100)
    ball.dy = 5 * (ballSpeed.value / 100)
    canvas.style.backgroundColor = backColor.value
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
var padB = { x: canvas.width - 80, y: canvas.height / 2, w: padA.w, h: padA.h }

//Middle line obj
var middle = { x: canvas.width / 2, y: 0, w: 15, h: canvas.height }

//Settings bar obj
var setBar = { x: 20, y: 20, w: 400, h: canvas.height - 40 }

//Multiple gamemodes
var gamemodes = {
    //Player vs Player (mouse/mouse)
    mouse2p: { x: 0, y: 0, w: 0, h: 0, text: "PvP mouse/mouse" },
    //Player vs Player (mouse/keyboard)
    mousekey2p: { x: 0, y: 0, w: 0, h: 0, text: "PvP mouse/keyboard" },
    //Player vs AI
    mouse1p: { x: 0, y: 0, w: 0, h: 0, text: "PvAI" },
    //Player vs Player (websocket)
    multi2p: { x: 0, y: 0, w: 0, h: 0, text: "PvP multiplayer (wifi)" } //coming soon
}

//Moving pads on mousemove event
canvas.addEventListener("mousemove", e => {
    if (e.offsetY > canvas.height - (padA.h / 2)) return
    else if (e.offsetY < 0 + (padA.h / 2)) return
    if (gamemode == "mouse2p") {
        if (e.offsetX < canvas.width / 2) padA.y = e.offsetY - padA.h / 2
        else if (e.offsetX > canvas.width / 2) padB.y = e.offsetY - padB.h / 2
    }
    if (gamemode == "mousekey2p") padB.y = e.offsetY - padB.h / 2
    if (gamemode == "mouse1p") padA.y = e.offsetY - padA.h / 2
})

//Move pads on keypress event
document.addEventListener("keypress", e => {
    if (gamemode == "mousekey2p") {
        if (e.code == "KeyW") padA.y += 20
        if (e.code == "KeyS") padA.y -= 20
    }
    if (e.code == "KeyG") {
        setOpen = !setOpen
        alive = !alive
        if (!setOpen) {
            apply()
            game()
        }
        if (setOpen) open()
    }
})

//Draw settings tab
const drawSettings = () => {
    c.lineWidth = 10;
    c.strokeStyle = "#73AD21"
    c.fillStyle = "#232323"
    c.roundRect(setBar.x, setBar.y, setBar.w, setBar.h, 20)
}

//Move pads on keydown event
document.addEventListener("keydown", e => {
    if (gamemode == "mousekey2p") {
        if (e.code == "KeyW") padA.y += 20
        if (e.code == "KeyS") padA.y -= 20
    }
})

//Draw pads
const drawPads = () => {
    if (alive) {
        fillRectObj(padColor.value, padA)
        fillRectObj(padColor.value, padB)
    }
}

//Draw middle line
const drawMiddle = () => {
    //Only draw when mouse/mouse aka mouse2p
    if (gamemode == "mouse2p" && alive) fillRectObj("white", middle)
}

//Draw ball
const drawBall = () => {
    c.lineWidth = 0
    c.fillStyle = 'rgba(255, 255, 255, .05)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.fillStyle = ballColor.value;
    c.moveTo(ball.x, ball.y);
    c.arc(ball.x, ball.y, ball.r * scale.value / 100, 0, Math.PI * 2, false);
    c.fill();
    //Bounce off canvas
    if (ball.x < ball.r * scale.value / 100 || ball.x > canvas.width - ball.r * scale.value / 100) ball.dx = -ball.dx
    if (ball.y < ball.r * scale.value / 100 || ball.y + ball.r * scale.value / 100 > canvas.height) ball.dy = -ball.dy;
    //Bounce off padA
    if (ball.x - ball.r * scale.value / 100 < padA.x + padA.w * scale.value / 100 && ball.y - ball.r * scale.value / 100 > padA.y && ball.y - ball.r * scale.value / 100 < padA.y + padA.h * scale.value / 100) ball.dx = -ball.dx;
    //Bounce off padB
    if (ball.x + ball.r * 2 * scale.value / 100 > padB.x + padB.w * scale.value / 100 && ball.y - ball.r * scale.value / 100 > padB.y && ball.y - ball.r * scale.value / 100 < padB.y + padB.h * scale.value / 100) ball.dx = -ball.dx;
    //Score point
    if (ball.x > padB.x + padB.w * scale.value / 100 || ball.x < padA.x) point()
    ball.x += ball.dx
    ball.y += ball.dy
}

//Count points
const point = () => {
    if (ball.x > padB.x + padB.w * scale.value / 100) scoreA += 1
    if (ball.x < padA.x) scoreB += 1
    if (scoreA >= points.value || scoreB >= points.value) return drawGameOver()
    c.font = "24px Arial"
    c.fillText(`POINT`, canvas.width / 2, canvas.height / 2)
    alive = false
    setTimeout(() => {
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        ball.dx = (Math.random() < 0.5 ? -5 : 5) * (ballSpeed.value / 100)
        ball.dy = (Math.random() < 0.5 ? -5 : 5) * (ballSpeed.value / 100)
        alive = true
        game()
    }, 999);
}

//Draw game over screen
const drawGameOver = () => {
    c.font = "24px Arial"
    c.fillText(`GAME OVER(click to restart)`, canvas.width / 2, canvas.height / 2)
    if (scoreB >= points.value) {
        if (gamemode == "mouse1p") lossSound.play()
        else winSound.play()
        c.font = "24px Arial"
        c.fillText(`Player 2 Won!`, canvas.width / 2, canvas.height / 2 + 40)
    } else {
        c.font = "24px Arial"
        c.fillText(`Player 1 Won!`, canvas.width / 2, canvas.height / 2 + 40)
        winSound.play()
    }
    alive = false
    canvas.addEventListener("click", e => {
        scoreA = 0
        scoreB = 0
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        ball.dx = (Math.random() < 0.5 ? -5 : 5) * (ballSpeed.value / 100)
        ball.dy = (Math.random() < 0.5 ? -5 : 5) * (ballSpeed.value / 100)
        alive = true
        game()
    }, { once: true })
}

//Draw scores
const drawScores = () => {
    c.font = "24px Arial"
    c.fillText(`Score: ${scoreA}`, 0 + 45, 20)
    c.font = "20px Arial"
    c.font = "24px Arial"
    c.fillText(`Score: ${scoreB}`, canvas.width / 2 + middle.w + 45, 20)
    c.font = "20px Arial"
}

//Draw starting menu
const drawMenu = () => {
    var i = 0
    for (const gm in gamemodes) {
        console.log(gm)
        gamemodes[gm].x = canvas.width / 2 - 75
        gamemodes[gm].y = i * 200 + 150
        gamemodes[gm].w = 250
        gamemodes[gm].h = 100
        c.lineWidth = 10;
        if (gm == "multi2p") c.strokeStyle = "#FF0000"
        else c.strokeStyle = "#73AD21"
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
            if (clickWithinObj(gamemodes[gm], e.offsetX, e.offsetY)) {
                console.log("Gamemode: " + gm)
                gamemode = gm
                mainMenu = false
                console.log("Found pressed button. Initiating gamemode")
                game()
                return
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
        drawMiddle();
        //Make ai move pad
        if (!(ball.y > canvas.height - (padA.h / 2)) && !(ball.y < 0 - (padA.h / 2))) {
            if (gamemode == "mouse1p") {
                padB.y = ball.y - 40
            }
        }
        requestAnimationFrame(game)
    }
}
game()