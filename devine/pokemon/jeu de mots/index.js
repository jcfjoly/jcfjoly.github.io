const wordsContainer = document.querySelector('#words-container');
const textfield = document.querySelector('#textfield');
const scoreText = document.querySelector('#score');
const words = [
  { element: document.querySelector('#word1'), top: 0, speed: 0, word: '' },
  { element: document.querySelector('#word2'), top: 0, speed: 0, word: '' },
  { element: document.querySelector('#word3'), top: 0, speed: 0, word: '' },
  { element: document.querySelector('#word4'), top: 0, speed: 0, word: '' },
];
let score = 0;

const initialWordList = [
  'Fruit',
  'Bruit',
  'Anticonstitutionnellement',
  'Part',
  'Lancer',
  'Machines',
  'Porc',
  'Articulation',
  'Économie',
  'Coton',
  'Narine',
  'Ferme',
  'Français',
];

let currentWordList = initialWordList.slice();

resetWord(0);
resetWord(1);
resetWord(2);
resetWord(3);

textfield.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    words.forEach((word, i) => {
      if (textfield.value === word.word) {
        score += Math.round((window.innerHeight - word.top) / 5);
        scoreText.innerText = score;
        textfield.value = '';
        const audio = new Audio('assets/pook.m4a');
        audio.play();
        resetWord(i);
      }
    });
  }
});

setInterval(() => {
  goDown();
}, 20);

function goDown() {
  if (words[0].top >= window.innerHeight) {
    resetWord(0);
    score -= 20;
    scoreText.innerText = score;
  }
  words[0].top += words[0].speed;
  words.forEach((word) => {
    words[0].element.style.top = words[0].top + 'px';
  });

  if (words[1].top >= window.innerHeight) {
    resetWord(1);
    score -= 20;
    scoreText.innerText = score;
  }
  words[1].top += words[1].speed;
  words.forEach((word) => {
    words[1].element.style.top = words[1].top + 'px';
  });

  if (words[2].top >= window.innerHeight) {
    resetWord(2);
    score -= 20;
    scoreText.innerText = score;
  }
  words[2].top += words[2].speed;
  words.forEach((word) => {
    words[2].element.style.top = words[2].top + 'px';
  });

  if (words[3].top >= window.innerHeight) {
    resetWord(3);
    score -= 20;
    scoreText.innerText = score;
  }
  words[3].top += words[3].speed;
  words.forEach((word) => {
    words[3].element.style.top = words[3].top + 'px';
  });
}

function resetWord(htmlIndex) {
  if (currentWordList.length > 1) {
    const position = Math.round(Math.random() * (window.innerWidth - 100));
    const speed = Math.ceil(Math.random() * 3);
    const wordIndex = Math.round(Math.random() * (currentWordList.length - 1));
    const word = currentWordList[wordIndex];
    currentWordList.splice(wordIndex, 1);
    words[htmlIndex].top = 0;
    words[htmlIndex].speed = speed;
    words[htmlIndex].element.style.left = position + 'px';
    words[htmlIndex].element.innerText = word;
    words[htmlIndex].word = word;
  } else {
    currentWordList = initialWordList.slice();
  }
  console.log(currentWordList);
}
