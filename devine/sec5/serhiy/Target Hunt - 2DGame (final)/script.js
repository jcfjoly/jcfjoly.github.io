//Create canvas
const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth - 50
canvas.height = window.innerHeight - 50
canvas.style.border = "10px white solid"
canvas.style.backgroundColor = "black"
canvas.style.display = "block"
canvas.style.margin = "auto"
document.body.appendChild(canvas)

//Define what to draw
const toDraw = []

//Define key array
var toKey = 0
const keyLength = []

//Move character with keyboard
const keyboard = () => {
    if (toKey == 37 && player.x > 0) player.x -= player.spd
    if (toKey == 38 && player.y > 0) player.y -= player.spd
    if (toKey == 39 && player.x < canvas.width - player.w) player.x += player.spd
    if (toKey == 40 && player.y < canvas.height - player.h) player.y += player.spd
}

//Player object
function Player(x, y, w, h, color, gravity) {
    //Dimensions
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
        //Attributes
    this.hp = 100 //Health points: 100 = max | 0 = min
    this.mp = 0 //Mana points: 100 = max | 0 = min
    this.atk = 1 //Damage of a normal attack
    this.spd = 2.5 //Speed at which the player travels
    this.bst = 0 //Powerup currently being used: 0 = none
    this.gravity = gravity
    this.draw = () => {
        ctx.fillStyle = this.color
        if (gravity) {
            this.y += 2
        }
        ctx.fillRect(this.x, this.y, this.w, this.h)
        if (this.mp < 100 && (pastX !== this.x || pastY !== this.y)) this.mp += 0.25
        else if (this.mp >= 100) ultReady.style.display = "block"
        else ultReady.style.display = "none"
        updateStats()
    }
    this.attack = () => {
        shoot.play()
        toDraw.push(new Projectile(this.x + this.w, this.y + this.h, 20, 5, "red", 5, 5, ""))
    }
    this.ult = () => {
        this.mp = 0
        toDraw.push(new Projectile(this.x + this.w, this.y + this.h, 40, 10, "green", 20, 10, ""))
    }
}

//Surface object
function Surface(x, y, w, h, color, damage, speedX, speedY, health) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
        //Attributes
    this.damage = damage
    this.speedX = speedX
    this.speedY = speedY
    if (health == 0) this.breakable = false
    else this.breakable = true
    this.health = health
    this.collision = () => { hitWall(player, this) }
    this.draw = () => {
        this.collision()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        this.x += this.speedX
        this.y += this.speedY
    }
}

//Laser object
function Laser(x, y, w, h, color, damage, frequency) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color

    this.damage = damage
    this.frequency = frequency
    this.visible = true
    this.collision = () => { hitWall(player, this) }
    setInterval(() => {
        this.visible = !this.visible
    }, frequency)
    this.draw = () => {
        if (this.visible) {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.w, this.h)
            this.collision()
        }
    }
}

//Turret object
function Turret(x, y, w, h, color, frequency, pW, pH, pC, pDmg, pSpd, pDir) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color

    this.frequency = frequency

    this.pW = pW
    this.pH = pH
    this.pC = pC
    this.pDmg = pDmg
    this.pSpd = pSpd
    this.pDir = pDir
    toDraw.push(new Projectile(this.x + this.w / 2, this.y + this.h / 2, this.pW, this.pH, this.pC, this.pDmg, this.pSpd, this.pDir))
    this.shoot = setInterval(() => {
        toDraw.push(new Projectile(this.x + this.w / 2, this.y + this.h / 2, this.pW, this.pH, this.pC, this.pDmg, this.pSpd, this.pDir))
    }, frequency)
    this.draw = () => {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}

//Accelerator object
function Accelerator(x, y, r, color, strength, duration) {
    this.x = x
    this.y = y
    this.r = r
    this.color = color

    this.strength = strength
    this.duration = duration
    this.collision = () => { hitWall(player, this) }
    this.draw = () => {
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.font = "30px Arial";
        ctx.fillText(this.strength, this.x, this.y + this.r / 2)
        ctx.strokeText(this.strength, this.x, this.y + this.r / 2);
        ctx.globalAlpha = 0.1
        ctx.strokeStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 7, 0, 2 * Math.PI);
        ctx.stroke()
        ctx.globalAlpha = 1
        this.collision()
    }

}

var targets = 0
    //Target object
function Target(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.draw = () => {
        ctx.drawImage(target, x, y, w, h)
    }
}

var bigSentry

function Electric(x, y, w, h, link) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.link = link
    this.draw = () => {
        ctx.drawImage(electric, x, y, w, h)
    }
}

function Enemy(x, y, w, h, color, health, damage, frequency) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color

    this.health = health
    this.damage = damage
    this.frequency = frequency
    this.hostile = false
    let pastX
    let pastY

    this.draw = () => {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.drawImage(aimLock, pastX, pastY, 50, 50)
        if (event2) {
            console.log("called")
            this.shoot = setInterval(() => {
                pastX = player.x
                pastY = player.y
                setTimeout(() => {
                    pastX = player.x
                    pastY = player.y
                    if (pastX == player.x) player.hp -= this.damage
                }, frequency)
            }, frequency)
            this.shoot
        }
        if (this.health <= 0) {
            targetDestroy.play()
            clearInterval(this.shoot)
            createTarget(this.x, this.y, 50, 50)
            toDraw.splice(toDraw.indexOf(this), 1)
            toDraw.forEach(e => {
                if (e instanceof Surface) {
                    if (e.color == "green") toDraw.splice(toDraw.indexOf(e), 1)
                }
            })
        }
    }
}


//Create a quick surface
const createSurface = (x, y, w, h, color, damage, speedX, speedY, health) => {
    return toDraw.push(new Surface(x, y, w, h, color, damage, speedX, speedY, health))
}

//Create a quick laser
const createLaser = (x, y, w, h, color, damage, frequency) => {
    return toDraw.push(new Laser(x, y, w, h, color, damage, frequency))
}

//Create a quick turret
const createTurret = (x, y, w, h, color, frequency, pW, pH, pC, pDmg, pSpd, pDir) => {
    return toDraw.push(new Turret(x, y, w, h, color, frequency, pW, pH, pC, pDmg, pSpd, pDir))
}

//Create a quick accelerator
const createAccelerator = (x, y, r, color, strength, duration) => {
    return toDraw.push(new Accelerator(x, y, r, color, strength, duration))
}

//Create a quick target
const createTarget = (x, y, w, h) => {
    return toDraw.push(new Target(x, y, w, h))
}

//Create a quick electric
const createElectric = (x, y, w, h, link) => {
    return toDraw.push(new Electric(x, y, w, h, link))
}

//Create a quick enemy
const createEnemy = (x, y, w, h, color, health, damage, frequency) => {
    return toDraw.push(new Enemy(x, y, w, h, color, health, damage, frequency))
}

//Level Design
var first = createSurface(150, 0, 20, 150, "green", 0, 0, 0, 0)
createTarget(50, 50, 50, 50)
createSurface(0, 150, 650, 20, "gray", 0, 0, 0, 0)
createSurface(650, 120, 20, 225, "gray", 0, 0, 0, 0)
createLaser(650, 0, 20, 120, "cyan", 5, 1000)
createSurface(1000, 0, 20, 550, "gray", 0, 0, 0, 0)
createLaser(650, 345, 350, 20, "cyan", 5, 500)
createSurface(250, 550, 770, 20, "gray", 0, 0, 0, 0)
createSurface(250, 350, 20, 400, "gray", 0, 0, 0, 0)
createTurret(625, 200, 25, 25, "red", 1000, 10, 10, "red", 5, 5, "left")
createTurret(0, 300, 25, 25, "red", 1000, 10, 10, "red", 5, 5, "right")
createAccelerator(310, 250, 20, "red", 50, 2000)
createLaser(0, 600, 250, 20, "cyan", 5, 750)
createSurface(400, 700, 20, 250, "red", 10, 0, 0, 0)
createAccelerator(150, 800, 25, "green", 300, 2000)
createSurface(550, 570, 20, 200, "red", 10, 0, 0, 0)
createSurface(550, 800, 250, 20, "red", 10, 0, 0, 0)
createSurface(800, 570, 20, 250, "red", 10, 0, 0, 0)
createSurface(950, 700, 20, 250, "red", 10, 0, 0, 0)
createSurface(550, 750, 190, 20, "red", 10, 0, 0, 0)
createTarget(745, 745, 50, 50)
createSurface(950, 700, 270, 20, "gray", 0, 0, 0, 0)
createSurface(1200, 0, 20, 550, "gray", 0, 0, 0, 0)
createTarget(1085, 25, 50, 50)
createLaser(950, 570, 20, 130, "lightgray", 0, 100)
createSurface(1200, 700, 20, 125, "gray", 0, 0, 0, 0)
createSurface(1200, 825, 700, 20, "gray", 0, 0, 0, 0)
createSurface(1200, 550, 200, 20, "gray", 0, 0, 0, 0)
createSurface(1400, 700, 20, 100, "gray", 0, 0, 0, 0)
createSurface(1400, 780, 350, 20, "gray", 0, 0, 0, 0)
createElectric(1770, 770, 50, 50, bigSentry)
createSurface(1600, 550, 350, 20, "gray", 0, 0, 0, 0)
createSurface(1400, 700, 450, 20, "gray", 0, 0, 0, 0)
const bigEnemy = createEnemy(1475, 50, 100, 100, "magenta", 100, 10, 2000)
createTurret(1800, 200, 25, 25, "red", 5000, 600, 335, "red", 50, 2, "left")

//Projectile object
function Projectile(x, y, w, h, color, damage, speed, dir) {
    //Dimensions
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
    this.dir = dir
        //Attributes
    this.damage = damage
    this.speed = speed
    this.slowed = false
        //Execute when created =>
    let xory = ""
    if (this.dir == "") {
        switch (getDir(lastDir)) {
            case "left":
                xory = "X"
                this.speed = -this.speed
                break
            case "up":
                xory = "Y"
                this.speed = -this.speed
                break
            case "right":
                xory = "X"
                this.speed = +this.speed
                break
            case "down":
                xory = "Y"
                this.speed = +this.speed
                break
            default:
                return console.log("Couldn't get getDir(lastDir) (Projectile constructor)")
        }
    } else {
        switch (dir) {
            case "left":
                xory = "X"
                this.speed = -this.speed
                break
            case "up":
                xory = "Y"
                this.speed = -this.speed
                break
            case "right":
                xory = "X"
                this.speed = +this.speed
                break
            case "down":
                xory = "Y"
                this.speed = +this.speed
                break
            default:
                return console.log("Couldn't get getDir(lastDir) (Projectile constructor)")
        }
    }
    this.collision = () => { toDraw.forEach(e => { if (e instanceof Surface || e instanceof Player || e instanceof Target || e instanceof Electric || e instanceof Enemy) hitWall(this, e) }) }
    this.draw = () => {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        if (xory === "Y") {
            this.w = h
            this.h = w
            this.y += this.speed
        }
        if (xory === "X") {
            this.w = this.w
            this.h = this.h
            this.x += this.speed
        }
        this.collision()
            //Optimization (remove projectiles when out of canvas)
        if (this.x > canvas.width || this.y > canvas.height) toDraw.splice(toDraw.indexOf(this), 1)
    }
}

//Create a player object
const createDefaultPlayer = () => { return new Player(200, 100, 50, 50, "lightgreen", false) }

//Define player object
const player = createDefaultPlayer()
toDraw.push(player)

//Control player actions
document.addEventListener("click", player.attack)
document.addEventListener("keypress", e => { if (e.keyCode === 32 && player.mp >= 100) { player.ult() } })

//General draw function
const draw = () => { toDraw.forEach(e => { e.draw() }) }

//Get getDir(lastDir) from last pressed key
const getDir = (key) => {
    let dir = ""
    switch (key) {
        case 37:
            dir = "left"
            break
        case 38:
            dir = "up"
            break
        case 39:
            dir = "right"
            break
        case 40:
            dir = "down"
            break
        default:
            return console.log("Couldn't get getDir(lastDir)")
    }
    return dir
}

//Define attribute bars
const pHealthBar = document.getElementById("pHealthBar");
const pManaBar = document.getElementById("pManaBar");
const ultReady = document.getElementById("ultReady")
const pTarget = document.getElementById("pTarget")

//Update mana and health bars
const updateStats = () => {
    pTarget.innerHTML = `Targets: ${targets}/4`
    pHealthBar.style.width = `${player.hp}px`
    pManaBar.style.width = `${player.mp / 2}px`
    if (player.mp === 0) pManaBar.style.borderWidth = "0px"
    else pManaBar.style.borderWidth = "2px"
}

//Collision rect to rect
const collision = (a, b) => { if (a.x + a.w > b.x && a.x < b.x + b.w && a.y < b.y + b.h && a.y + a.h > b.y) return true }
const near = (a, b) => { if (a.x + a.w >= b.x && a.x <= b.x + b.w && a.y <= b.y + b.h && a.y + a.h >= b.y) return true }

//Collision rect to circle
//broken     const collisionCircle = (a, b) => { if (a.x + a.w > b.x && a.x < b.x + b.r && a.y < b.y + b.r && a.y + a.h > b.y) return true }
const nearCircle = (a, b) => { if (a.x + a.w >= b.x - b.r * 7 && a.x <= b.x + b.r * 7 && a.y + a.h <= b.y + b.r * 7 && a.y >= b.y - b.r * 7) return true }

const hitWall = (a, b) => {
    //Check for player near a dangerous surface
    if (near(a, b) && a instanceof Player && b instanceof Surface) {
        if (b.damage > 0) player.hp -= b.damage / 20
    }
    if (collision(a, b) && a instanceof Projectile && b instanceof Player) {
        toDraw.splice(toDraw.indexOf(a), 1)
        if (a.damage > 0) player.hp -= a.damage
        return
    }
    if (collision(a, b) && a instanceof Projectile && b instanceof Target) {
        toDraw.splice(toDraw.indexOf(a), 1)
        toDraw.splice(toDraw.indexOf(b), 1)
        targets++
        targetDestroy.play()
        return
    }
    if (collision(a, b) && a instanceof Projectile && b instanceof Electric) {
        toDraw.splice(toDraw.indexOf(a), 1)
        toDraw.forEach(e => {
                if (e instanceof Turret) {
                    if (e.pW > 26) {
                        toDraw.splice(toDraw.indexOf(e), 1)
                        clearInterval(e.shoot)
                        return
                    }
                }
            })
            //toDraw.splice(toDraw.indexOf(bigSentry), 1)
            //toDraw.splice(toDraw.indexOf(b.link), 1) //Destroy linked object
        toDraw.splice(toDraw.indexOf(b), 1)
        electricDestroy.play()
        return
    }
    if (collision(a, b) && a instanceof Projectile && b instanceof Enemy) {
        console.log(b.health)
        b.health -= a.damage
        toDraw.splice(toDraw.indexOf(a), 1)
    }
    //Check for projectile colliding a surface
    if (collision(a, b) && a instanceof Projectile && b instanceof Surface) {
        if (b.breakable) b.health -= a.damage
        toDraw.splice(toDraw.indexOf(a), 1)
        if (b.health <= 0 && b.breakable) toDraw.splice(toDraw.indexOf(b), 1)
        return
    }
    if (near(a, b) && a instanceof Player && b instanceof Laser) {
        if (b.damage > 0) player.hp -= b.damage / 20
        return
    }
    if (nearCircle(a, b) && a instanceof Player && b instanceof Accelerator) {
        if (player.slowed) return
        if (b.strength > 100) boost.play()
        else slow.play()
        player.slowed = true
        player.spd *= b.strength / 100
        setTimeout(() => {
            player.slowed = false
            player.spd /= b.strength / 100
        }, b.duration)
    }
    //Check for player colliding with a surface
    if (collision(a, b) && getDir(lastDir) == "left") {
        toKey = 0
        a.x = b.x + b.w
    }
    if (collision(a, b) && getDir(lastDir) == "right") {
        toKey = 0
        a.x = b.x - a.w
    }
    if (collision(a, b) && getDir(lastDir) == "up") {
        toKey = 0
        a.y = b.y + b.h
    }
    if (collision(a, b) && getDir(lastDir) == "down") {
        toKey = 0
        a.y = b.y - a.h
    }
}

//Define past positions
let pastX = 0
let pastY = 0
let lastDir = 40 //Default value (down)

//Keyboard events
document.addEventListener("keydown", e => {
    if (!keyLength.includes(e.keyCode)) keyLength.push(e.keyCode)
    toKey = e.keyCode
    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) lastDir = e.keyCode
})

document.addEventListener("keyup", e => {
    keyLength.splice(keyLength.indexOf(e.keyCode), 1)
    if (keyLength.length == 0) toKey = 0
})

document.addEventListener("keydown", keyboard)

var event1 = false;
var start = false;
var stop = false
var event2 = false;


//Main game loop
const game = () => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()
    pastX = player.x
    pastY = player.y
    keyboard()
    if (!start) {
        ctx.strokeStyle = "white"
        ctx.fillStyle = "green"
        ctx.textAlign = "center"
        ctx.font = "70px Arial";
        ctx.fillText("Click Anywhere to Start!", canvas.width / 2, canvas.height / 2)
        ctx.strokeText("Click Anywhere to Start!", canvas.width / 2, canvas.height / 2);
        ctx.font = "40px Arial";
        ctx.fillText("Shoot with [Left-Click]", canvas.width / 2, canvas.height / 2 + 50)
        ctx.strokeText("Shoot with [Left-Click]", canvas.width / 2, canvas.height / 2 + 50);
        ctx.fillText("Ult with [Spacebar] (deals 4x damage when charged)", canvas.width / 2, canvas.height / 2 + 100)
        ctx.strokeText("Ult with [Spacebar] (deals 4x damage when charged)", canvas.width / 2, canvas.height / 2 + 100);
        ctx.fillText("Move with [Arrows]", canvas.width / 2, canvas.height / 2 + 150)
        ctx.strokeText("Move with [Arrows]", canvas.width / 2, canvas.height / 2 + 150);
        ctx.fillText("Shoot targets to win", canvas.width / 2, canvas.height / 2 - 70)
        ctx.strokeText("Shoot targets to win", canvas.width / 2, canvas.height / 2 - 70);
        ctx.fillText("Shoot pink objects to destroy them", canvas.width / 2, canvas.height / 2 - 120)
        ctx.strokeText("Shoot pink objects to destroy them", canvas.width / 2, canvas.height / 2 - 120);
        canvas.addEventListener("click", e => {
            start = true
            game()
        }, { once: true })
    }

    if (player.x > 950 && !event1) {
        bigSentry = createTurret(1800, 575, 25, 25, "red", 2000, 200, 100, "red", 50, 2, "left")
        event1 = true
    }
    /*if (player.x > 1400 && player.y < 550 && !event2) {
        event2 = true
    }*/
    if (targets == 4 && start && !stop) {
        ctx.strokeStyle = "white"
        ctx.fillStyle = "green"
        ctx.textAlign = "center"
        ctx.font = "80px Arial";
        ctx.fillText("You Win!", canvas.width / 2, canvas.height / 2)
        ctx.strokeText("You Win!", canvas.width / 2, canvas.height / 2);
        stop = true
    }
    if (player.hp <= 0 && start && !stop) {
        ctx.strokeStyle = "white"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.font = "80px Arial";
        ctx.fillText("You Lost!", canvas.width / 2, canvas.height / 2)
        ctx.strokeText("You Lost!", canvas.width / 2, canvas.height / 2);
        stop = true
    }
    if (!stop && start) requestAnimationFrame(game)
}
game()
updateStats()