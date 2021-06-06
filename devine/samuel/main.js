// Éléments HTML manipulés
const overlay = document.querySelector('#overlay');
const popup = document.querySelector('#popup');
const popupContent = document.querySelector('#popup-content');
const main = document.querySelector('main');
const startBtn = document.querySelector('#start-btn');
const soundBtns = document.querySelectorAll('.sound-btn');
const soundOnBtn = document.querySelector('.sound-btn[data-status="on"]');
const soundOffBtn = document.querySelector('.sound-btn[data-status="off"]');
const difficultyBtn = document.querySelector('#difficulty-btn');
const form = document.querySelector('form');
const input = form.querySelector('#number-input');
const submitBtn = form.querySelector('#submit-btn');
const toast = document.querySelector('#toast');
const toastText = toast.querySelector('span');
const lifebar = document.querySelector('#lifebar');
const tutorial = document.querySelector('#tutorial');

// Chargement des sons
const hurtSound = new Audio('sounds/classic_hurt.mp3');
const backgroundMusic = new Audio('sounds/calm1.ogg');
backgroundMusic.loop = true;

// Déclaration des variables
let difficulty = JSON.parse(localStorage.getItem('difficulty'));
let started = false;
let answer;
let lives;
let timeout;
let tries;
let maxLives;

// Initialisation de la barre de vie
lifebar.innerHTML = '<div class="live"></div>\n'.repeat(9);

// Rendre le tutoriel plus transparent après 5 secondes
setTimeout(
  tutorial.setAttribute.bind(tutorial, 'data-translucid', true),
  5 * 1000,
);

// Connection entre les éléments HTML et les fonctions JS
startBtn.addEventListener('click', start);
difficultyBtn.addEventListener('click', showDifficultyPopup);
submitBtn.addEventListener('click', submit);
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Pour ne pas que la page soit rechargée
  submit();
});
soundOnBtn.addEventListener('click', () => {
  soundOnBtn.style.display = 'none';
  soundOffBtn.style.display = 'initial';
  backgroundMusic.pause();
});
soundOffBtn.addEventListener('click', () => {
  soundOffBtn.style.display = 'none';
  soundOnBtn.style.display = 'initial';
  backgroundMusic.play(); // Il ne faut pas oublier d'autoriser les sons automatiques: les navigateur modernes bloquent cette fonctionnalité par défaut
});

if (!difficulty) showDifficultyPopup(); // Configuration initiale par l'utilisateur

// Départ du jeu
function start() {
  if (started) return;

  // Initialisation des variables
  started = true;
  input.value = '';
  input.disabled = false;
  startBtn.setAttribute('data-started', true);
  difficultyBtn.setAttribute('data-started', true);
  main.setAttribute('data-started', true);

  answer = Math.round(Math.random() * 100);
  tries = 0;

  // Génération des vies et de la réponse à partir de la difficulté
  switch (difficulty) {
    case 1:
      answer = Math.round(Math.random() * 19) + 1;
      maxLives = 9;
      break;
    case 2:
      answer = Math.round(Math.random() * 99) + 1;
      maxLives = 9;
      break;
    case 3:
      answer = Math.round(Math.random() * 99) + 1;
      maxLives = 5;
      break;
  }

  lives = maxLives;
  updateLives();

  console.table({ answer, lives });
}

// Fin du jeu
function endGame() {
  const restartBtn = document.querySelector('#restart-btn');
  restartBtn.addEventListener('click', reset);
}

// Remise à zéro des variables -> Recommencer
function reset() {
  started = false;
  hidePopup();
  input.value = '';
  input.disabled = true;
  startBtn.setAttribute('data-started', false);
  difficultyBtn.setAttribute('data-started', false);
  main.setAttribute('data-started', false);
  lives = 0;
  updateLives();
}

// Lorsque le formulaire est envoyé
function submit() {
  if (!started) return;
  tries++;

  const number = parseInt(input.value);

  if (number === answer) {
    const bestScores = [
      ...JSON.parse(localStorage.getItem('bestScores') || '[]'),
      tries,
    ]
      .sort()
      .slice(0, 3);
    displayPopup(`
    <h1>Vous avez gagné</h1>
    <h2>Cela vous a pris ${tries} essai${tries > 1 ? 's' : ''}</h2>
    <img src="images/start.png" id="restart-btn" />
    <h1>🥳🥳🥳</h1>
    <h1>Meilleurs scores</h1>
    <ol>
    ${bestScores
      .map((score) => `<li>${score} essai${score > 1 ? 's' : ''}</li>`)
      .join('')}
    </ol>
    `);
    localStorage.setItem('bestScores', JSON.stringify(bestScores));
    return endGame();
  } else {
    toastText.innerText = number < answer ? 'Trop petit' : 'Trop grand'; // Mise à jour du contenu du toast
    toast.setAttribute('data-shown', true); // Affichage du toast

    if (timeout) clearTimeout(timeout); // Cacher le toast après 3 secondes
    timeout = setTimeout(
      () => toast.setAttribute('data-shown', false),
      3 * 1000,
    );

    hurtSound.play();

    lives--;

    if (lives <= 0) {
      displayPopup(`
      <h1>Vous avez perdu</h1>
      <h2>La bonne réponse était <i>${answer}</i></h2>
      <img src="images/start.png" id="restart-btn" />
      <h1>😞😞😞</h1>
      `);
      return endGame();
    }

    updateLives();
  }

  console.table({ answer, number, lives });
}

// Mise à jour de la barre de vie
function updateLives() {
  const lifeElems = Array.from(lifebar.children);
  const prevLives = lifeElems.filter(
    (lifeElem) => lifeElem.getAttribute('data-shown') === 'true',
  ).length;

  if (prevLives < lives) {
    lifeElems
      .slice(prevLives, maxLives)
      .forEach((lifeElem) => lifeElem.setAttribute('data-shown', 'true'));
  } else if (prevLives > lives) {
    lifeElems
      .slice(lives)
      .forEach((lifeElem) => lifeElem.setAttribute('data-shown', 'false'));
  }
}

// Mise à jour de la difficulté
function showDifficultyPopup() {
  if (started) return;

  displayPopup(`
  <h1>Choisissez le niveau de difficulté</h1>
  <input type="range" min="1" max="3" value="${difficulty}" id="difficulty-slider">
  <img src="images/start.png" id="save-difficulty-btn" />
  `);
  document
    .querySelector('#save-difficulty-btn')
    .addEventListener('click', saveDifficulty);
}

function saveDifficulty() {
  const newDifficulty = parseInt(
    document.querySelector('#difficulty-slider').value,
  );
  console.table({ newDifficulty });
  difficulty = newDifficulty;
  localStorage.setItem('difficulty', JSON.stringify(newDifficulty));
  reset();
}

// Utilitaires pour afficher / cacher un popup
function displayPopup(message) {
  popupContent.innerHTML = message;

  overlay.setAttribute('data-shown', true);
  popup.setAttribute('data-shown', true);
  popupContent.setAttribute('data-shown', true);
}

function hidePopup() {
  overlay.setAttribute('data-shown', false);
  popup.setAttribute('data-shown', false);
  popupContent.setAttribute('data-shown', false);
  popupContent.innerHTML = '';
}
