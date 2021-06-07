var menu = true

function showMenu() {

    var text = 'Play'
    var text2 = '(Click anywhere to start)'
    var text3 = 'Shoot the red balls'

    ctx.font = "50px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, canvas.height / 1.8)

    ctx.font = "20px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(text2, canvas.width / 2 - ctx.measureText(text2).width / 2, canvas.height / 1.7)

    ctx.font = "90px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(text3, canvas.width / 2 - ctx.measureText(text3).width / 2, canvas.height / 4)

    canvas.addEventListener("click", function () {
        menu = false

    })

    enemies.splice(0, enemies.length)
    projectiles.splice(0, projectiles.length)
    titleScreenSound.play()

}

var win = false

function winT() {
    ctx.fillStyle = "#186E14"

    var text = "You win!"
    ctx.font = "150px Helvetica"
    ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, canvas.height / 2)

    var text2 = "Click to restart"
    ctx.font = "60px Helvetica"
    ctx.fillText(text2, canvas.width / 2 - ctx.measureText(text2).width / 2, canvas.height / 1.2)

    if (menu == false) {
        setTimeout(() => {
            canvas.addEventListener("click", function () {
                win = false
                menu = true
                ctx.clearRect(0, 0, canvas.width, canvas.height)

            })
        }, 1000)

    }

    enemies.splice(0, enemies.length)
    projectiles.splice(0, projectiles.length)
    winSound.play()
    gameSound.pause()

}


var lose = false

function loseT() {
    ctx.fillStyle = "#FF0000"

    var text = "You lose!"
    ctx.font = "150px Helvetica"
    ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, canvas.height / 2)


    var text2 = "Click to restart"
    ctx.font = "60px Helvetica"
    ctx.fillText(text2, canvas.width / 2 - ctx.measureText(text2).width / 2, canvas.height / 1.2)


    if (menu == false) {
        setTimeout(() => {
            canvas.addEventListener("click", function () {
                lose = false
                menu = true
                ctx.clearRect(0, 0, canvas.width, canvas.height)


            })
        }, 1000)

    }

    enemies.splice(0, enemies.length)
    projectiles.splice(0, projectiles.length)      
    loseSound.play() 
    gameSound.pause()                 

}