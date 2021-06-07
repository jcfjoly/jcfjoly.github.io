var player = {
    x: 400 - 12.5,
    y: 400 - 12.5,
    w: 40,
    h: 40,
    color: "rgb(0,0,0,0)",
    speed: 2,

}

var mario = new Image()
mario.src = "Mario.png"

function drawPlayer() {
    ctx.fillStyle = player.color
    ctx.fillRect(player.x, player.y, player.w, player.h)
    ctx.drawImage(mario, player.x, player.y, player.w, player.h)

}

var keyDown = {}

function keyboard() {

    //Arrows
    if (37 in keyDown && player.x > 0) {
        player.x -= player.speed

    }

    if (38 in keyDown && player.y > 0) {
        player.y -= player.speed

    }


    if (39 in keyDown && player.x < canvas.width - player.w) {
        player.x += player.speed

    }


    if (40 in keyDown && player.y < canvas.height - player.h) {
        player.y += player.speed

    }


    //WASD
    if (65 in keyDown && player.x > 0) {
        player.x -= player.speed

    }

    if (87 in keyDown && player.y > 0) {
        player.y -= player.speed

    }


    if (68 in keyDown && player.x < canvas.width - player.w) {
        player.x += player.speed

    }


    if (83 in keyDown && player.y < canvas.height - player.h) {
        player.y += player.speed

    }

}

document.addEventListener("keydown", function (e) {
    keyDown[e.keyCode] = true
    //console.log(keyDown)

})

document.addEventListener("keyup", function (e) {
    delete keyDown[e.keyCode]
    //console.log(keyDown)

})