function drawTitle(){
    c.font = "83px Serif";
    c.fillStyle = "white";
    c.textAlign = "center";

    c.fillText("P  O  N  G",canvas.width/2,canvas.height*0.15)
}



//_____________________________select mode
let listDivID = ["normal","impossible","options"];
function setMode(modeSelected){
    playSound("start");
    player.score = 0;
    enemy.score = 0;

    player.color = colors[options.padColorIndex];
    player.h = (options.padSizeIndex)*22+70;
    ball = new Ball(canvas.width/2,canvas.height/2,(options.ballSizeIndex)*4+7,(options.ballSizeIndex)*3+6,(options.ballSpeedIndex)*3+9);
    ball.color = colors[options.ballColorIndex];
    enemy = new AI(modeSelected);
    mode = "game";

    for(let i=0;i<listDivID.length;i++){
        document.getElementById(listDivID[i]).style.display = "none";
    }
}

//_____________________________options
let optionsList = document.getElementsByClassName("option");
function optionsClicked(){
    playSound("click");
    for(let i=0;i<listDivID.length;i++){
        document.getElementById(listDivID[i]).style.display = "none";
    }
    for(let i=0;i<optionsList.length;i++){
        optionsList[i].style.display = "block";
    }
    mode = "options";
}

let options = {
    ballColorIndex: 0,
    ballSizeIndex: 1,
    ballSpeedIndex: 0,
    padColorIndex: 0,
    padSizeIndex: 1,
    maxPoints: 3
}
let sizeList = ["small","normal","big","very big"];
let speedList = ["slow","medium","fast","SPEEEEED"];

function changeOptions(chosenOption){
    playSound("click");
    switch(chosenOption){
        case "ballColor":
            options.ballColorIndex++;
            if(options.ballColorIndex>=colors.length) options.ballColorIndex = 0;
            break;
        case "ballSize":
            options.ballSizeIndex++;
            if(options.ballSizeIndex>=sizeList.length) options.ballSizeIndex = 0;
            break;
        case "ballSpeed":
            options.ballSpeedIndex++;
            if(options.ballSpeedIndex>=speedList.length) options.ballSpeedIndex = 0;
            break;
        case "padColor":
            options.padColorIndex++;
            if(options.padColorIndex>=colors.length) options.padColorIndex = 0;
            break;
        case "padSize":
            options.padSizeIndex++;
            if(options.padSizeIndex>=sizeList.length) options.padSizeIndex = 0;
            break;
        case "maxPoints":
            options.maxPoints++;
            if(options.maxPoints>7) options.maxPoints = 1;
            break;
        case "restore":
            options.ballColorIndex = 0;
            options.ballSizeIndex = 1;
            options.ballSpeedIndex = 0;
            options.padColorIndex = 0;
            options.padSizeIndex = 1;
            options.maxPoints = 3;
            break;
        case "save":
            for(let i=0;i<listDivID.length;i++){
                document.getElementById(listDivID[i]).style.display = "block";
            }
            for(let i=0;i<optionsList.length;i++){
                optionsList[i].style.display = "none";
            }
            mode = "menu";

    }
    optionsList[0].innerHTML = "BALL COLOR: "+colors[options.ballColorIndex];
    optionsList[0].style.backgroundColor = colors[options.ballColorIndex];
    
    optionsList[1].innerHTML = "BALL SIZE: "+sizeList[options.ballSizeIndex];
    optionsList[1].style.backgroundColor = "rgb("+(255-options.ballSizeIndex*45)+","+(255-options.ballSizeIndex*45)+","+(255-options.ballSizeIndex*45)+")";
    
    optionsList[2].innerHTML = "BALL SPEED: "+speedList[options.ballSpeedIndex];
    optionsList[2].style.backgroundColor = "rgb("+(255-options.ballSpeedIndex*45)+","+(255-options.ballSpeedIndex*45)+","+(255-options.ballSpeedIndex*45)+")" 
    
    optionsList[3].innerHTML = "PAD COLOR: "+colors[options.padColorIndex];
    optionsList[3].style.backgroundColor = colors[options.padColorIndex];
    
    optionsList[4].innerHTML = "PAD SIZE: "+sizeList[options.padSizeIndex];
    optionsList[4].style.backgroundColor = "rgb("+(255-options.padSizeIndex*45)+","+(255-options.padSizeIndex*45)+","+(255-options.padSizeIndex*45)+")"
    
    optionsList[5].innerHTML = "WIN POINT: "+options.maxPoints;
    optionsList[5].style.backgroundColor = "rgb("+(255-options.maxPoints*25)+","+(255-options.maxPoints*25)+","+(255-options.maxPoints*25)+")"
    
}

function backToMenu(){
    playSound("click");
    for(let i=0;i<listDivID.length;i++){
        document.getElementById(listDivID[i]).style.display = "block";
    }
    document.getElementById("backMenu").style.display = "none"; 
    mode = "menu";
}