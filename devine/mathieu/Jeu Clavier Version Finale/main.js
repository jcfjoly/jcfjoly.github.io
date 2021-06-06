var counter = 0;
var playBtn = document.getElementById("playBtn");
var fallInterval1;
var fallInterval2;
var fallInterval3;
var fallInterval4;
var topDistance1 = 0;
var topDistance2 = 0;
var topDistance3 = 0;
var topDistance4 = 0;
var word1 = document.getElementById("word1");
var word2 = document.getElementById("word2");
var word3 = document.getElementById("word3");
var word4 = document.getElementById("word4");
var wordList1 = [
  "Kiwi",
  "Fraise",
  "Banane",
  "Tomates",
  "Cantaloup",
  "Canneberge",
  "Mandarine",
  "Panplemousse",
  "Clémentine",
  "Concombre",
];
var wordList2 = [
  "Panda",
  "Requin",
  "Pieuvre",
  "Kangourou",
  "Flamant",
  "Escargot",
  "Rhinocéros",
  "Tortue",
  "Tigre",
  "Wallaby",
];
var wordList3 = [
  "Chaise",
  "Bureau",
  "Moniteur",
  "Ordinateur",
  "Table",
  "Cabinet",
  "Rangement",
  "Étagère",
  "Lit",
  "Coussin",
];
var wordList4 = [
  "Guitare",
  "Piano",
  "Saxophone",
  "Clarinette",
  "Tuba",
  "Flute",
  "Tambour",
  "Xilophone",
  "Triangle",
  "Clave",
];
var word1Count = 0;
var word2Count = 0;
var word3Count = 0;
var word4Count = 0;
var a;
var b;
var c;
var d;

addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    enter();
  }
});

function play() {
  playBtn.style.display = "none";

  fallInterval1 = setInterval(function () {
    word1.style.top = topDistance1 + "px";
    topDistance1 = topDistance1 + 1;

    if (topDistance1 > 725) {
      word1Appear();
    }
  }, 30);

  fallInterval2 = setInterval(function () {
    word2.style.top = topDistance2 + "px";
    topDistance2 = topDistance2 + 1;

    if (topDistance2 > 725) {
      word2Appear();
    }
  }, 30);

  fallInterval3 = setInterval(function () {
    word3.style.top = topDistance3 + "px";
    topDistance3 = topDistance3 + 1;

    if (topDistance3 > 725) {
      word3Appear();
    }
  }, 30);

  fallInterval4 = setInterval(function () {
    word4.style.top = topDistance4 + "px";
    topDistance4 = topDistance4 + 1;

    if (topDistance4 > 725) {
      word4Appear();
    }
  }, 30);

  word1Appear();
  word2Appear();
  word3Appear();
  word4Appear();
}

function word1Appear() {
  word1.innerHTML = wordList1[word1Count];
  word1Count = word1Count + 1;

  topDistance1 = 0;
  word1.style.top = 0;
}

function word2Appear() {
  word2.innerHTML = wordList2[word2Count];
  word2Count = word2Count + 1;

  topDistance2 = 0;
  word2.style.top = 0;
}

function word3Appear() {
  word3.innerHTML = wordList3[word3Count];
  word3Count = word3Count + 1;

  topDistance3 = 0;
  word3.style.top = 0;
}

function word4Appear() {
  word4.innerHTML = wordList4[word4Count];
  word4Count = word4Count + 1;

  topDistance4 = 0;
  word4.style.top = 0;
}

function enter() {
  var playerWord = document.getElementById("playerWord").value;
  console.log(playerWord);

  for (i = 0; i < wordList1.length; i++) {
    if (playerWord == wordList1[i]) {
      word1Appear();
    }
  }

  for (i = 0; i < wordList2.length; i++) {
    if (playerWord == wordList2[i]) {
      word2Appear();
    }
  }

  for (i = 0; i < wordList3.length; i++) {
    if (playerWord == wordList3[i]) {
      word3Appear();
    }
  }

  for (i = 0; i < wordList4.length; i++) {
    if (playerWord == wordList4[i]) {
      word4Appear();
    }
  }

  document.getElementById("playerWord").value = "";
}
