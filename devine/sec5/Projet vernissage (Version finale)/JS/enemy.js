class Enemy {
    constructor(x, y, radius, color, speed) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.speed = speed

    }

    drawEnemy() {
        ctx.beginPath()

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)

        ctx.fillStyle = this.color
        ctx.fill()

    }

    update() {
        this.drawEnemy()
        this.y += this.speed.y

        if (player.x < this.x) {
            this.x -= (this.speed.y) * 1.2

        }

        if (player.x > this.x) {
            this.x += (this.speed.y) * 1.2

        }

        if (player.y < this.y) {
            this.y -= (this.speed.y) * 2

        }

        /*if (player.y > this.y) {
            this.y += this.speed.y

        }*/

    }

}

var enemies = []


function newEnemy() {
    setInterval(() => {
        var r = 10
        var x = 0
        var y = 0

        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - r : canvas.width + r
            y = Math.random() * canvas.height

        }
        else {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - r : canvas.height + r
        }

        var color = "red"

        var angle = Math.atan2(canvas.height, canvas.width)
        var speed = {
            x: Math.cos(angle) * 1,
            y: Math.sin(angle) * 1,

        }


        enemies.push(new Enemy(x, y, r, color, speed))
    }, 1000)

}

newEnemy()


