function game() {

    requestAnimationFrame(game)
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    if (menu == true) {
        showMenu()

        health = 3
        kills = 0

    }

    if (menu == false) {
        if (win == false) {
            titleScreenSound.pause()
            gameSound.play()

            projectiles.forEach((projectile) => {
                projectile.update()

            })

            enemies.forEach((enemy, indexE) => {
                enemy.update()

                projectiles.forEach((projectile, indexP) => {
                    const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

                    if (dist - enemy.radius - projectile.radius < 1) {
                        setTimeout(() => {
                            enemies.splice(indexE, 1)
                            projectiles.splice(indexP, 1)

                            kills++

                            enemyKillSound.play()

                        }, 0)

                    }


                })

                enemies.forEach((enemy, indexP) => {
                    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)

                    if (dist - enemy.radius - player.w < 1) {
                        enemies.splice(indexE, 1)

                        health--

                        damageSound.play()

                    }

                })

            })

            drawPlayer()
            keyboard()
            displayHealth()
            displayKills()

        }

        if (health <= 0) {
            lose = true

        }

        if (kills >= 10) {
            win = true

        }

        if (win == true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            winT()

        }

        if (lose == true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            loseT()
        }


    }


}

game()

