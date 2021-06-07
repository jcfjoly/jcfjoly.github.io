
function draw(){
    c.clearRect(0,0,canvas.width,canvas.height);

    updateParticules()
    if(mode=="game"){
        drawScores();
        drawMiddleLine();
        ball.update();

        player.draw();
        enemy.update();

        checkGameOver();
    }else if(mode=="menu"){
        drawTitle();
    }else if(mode=="enemyWin"){
        drawLosingScreen();
    }else if(mode=="playerWin"){
        drawWinningScreen();
    }

    
    
}
function game(){
    requestAnimationFrame(game);
    draw();
}
game()