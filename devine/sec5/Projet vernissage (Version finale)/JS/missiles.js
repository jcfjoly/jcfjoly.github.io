class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity

    }

    drawProjectile() {
        ctx.beginPath()

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)

        ctx.fillStyle = this.color
        ctx.fill()

    }

    update() {
        this.drawProjectile()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y

    }

}

var projectiles = []


addEventListener('click', (event) => {
    var angle = Math.atan2(event.offsetY - player.y + 12.5, event.offsetX - player.x + 12.5)
    var velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5,

    }

    projectiles.push(new Projectile(player.x + player.w / 2, player.y + player.h / 2, 4, 'gray', velocity))

})




