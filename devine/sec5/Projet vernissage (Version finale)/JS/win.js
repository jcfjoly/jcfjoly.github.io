var win = false

function winT() {
    var text = "You win."

    ctx.font = "150px Helvetica"
    ctx.fillStyle = "#186E14"
    ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, canvas.height / 2)

    winSound.play()

    if (menu == false) {

        canvas.addEventListener("click", function () {
            win = false
            menu = true
            ctx.clearRect(0, 0, canvas.width, canvas.height)

        })
    }

}