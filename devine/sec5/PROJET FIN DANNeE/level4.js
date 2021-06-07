//level 4

function drawKey() {
    if(hasKey==false){
    ctx.drawImage(keyImg, key.x, key.y, key.w, key.h)
}
}
function drawLevel4() {
    if (lvl == 4) {
        portail6.draw()
        drawKey()
        mur8.draw()
        wall(joueur, mur8)
        lavah1.draw()
        lavah2.draw()
        lavah3.draw()
        lavah4.draw()
        lavah5.draw()
        
        AAAAAA(joueur, lavah1)
        AAAAAA(joueur, lavah2)
        AAAAAA(joueur, lavah3)
        AAAAAA(joueur, lavah4)
        AAAAAA(joueur, lavah5)
        

    }
}