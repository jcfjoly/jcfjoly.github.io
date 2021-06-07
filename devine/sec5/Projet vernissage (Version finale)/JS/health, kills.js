var health = 3

function displayHealth() {
    ctx.fillStyle = "#F0F8FF"

    var text = "Health: " + health
    ctx.font = "20px Helvetica"
    ctx.fillText(text, 10, 30)

}

var kills = 0

function displayKills() {
    ctx.fillStyle = "#F0F8FF"

    var text = "Score: " + kills
    ctx.font = "20px Helvetica"
    ctx.fillText(text, 10, 60)

}