const GAME_PIXEL_COUNT = 42;
const SQUARE_OF_GAME_PIXEL_COUNT = Math.pow(GAME_PIXEL_COUNT, 2);
const igralnoPole = document.getElementById("igralnoPole");
const gameBoardPixels = document.getElementsByClassName("gameBoardPixel");
var polojeniePiton = SQUARE_OF_GAME_PIXEL_COUNT / 2;
const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;
var izqdeniPtici = 0, izminatiMetri = 0, currentBirdPostion = 0, duljinaPiton = 1000;
var snakeCurrentDirection = RIGHT_DIR;

const createGameBoardPixels = () => {
  for (let i = 1; i <= SQUARE_OF_GAME_PIXEL_COUNT; ++i) {
    igralnoPole.innerHTML = `${igralnoPole.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`;
  }
};

var mySound;
var myMusic;
mySound = new sound("bonk.mp3");
myMusic = new sound("starwars.mp3");
function sound(src) {
  this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
} 

myMusic.play();
const createBird = () => {
  gameBoardPixels[currentBirdPostion].classList.remove("bird");
  currentBirdPostion = Math.random();
  currentBirdPostion = Math.floor(currentBirdPostion * SQUARE_OF_GAME_PIXEL_COUNT);
  gameBoardPixels[currentBirdPostion].classList.add("bird");
};

const changeDirection = newDirectionCode => {
  if (newDirectionCode == snakeCurrentDirection) 
      return;
  if (newDirectionCode == LEFT_DIR && snakeCurrentDirection != RIGHT_DIR) {
      snakeCurrentDirection = newDirectionCode;
  } else if (newDirectionCode == UP_DIR && snakeCurrentDirection != DOWN_DIR) {
            snakeCurrentDirection = newDirectionCode;
        } else if ( newDirectionCode == RIGHT_DIR && snakeCurrentDirection != LEFT_DIR ) {
                    snakeCurrentDirection = newDirectionCode;
                } else if (newDirectionCode == DOWN_DIR && snakeCurrentDirection != UP_DIR) {
                            snakeCurrentDirection = newDirectionCode;
                        }
};

const dvijiPiton = () => {
  switch (snakeCurrentDirection) {
    case LEFT_DIR: --polojeniePiton;
      const isSnakeHeadAtLastGameBoardPixelTowardsLeft = polojeniePiton % GAME_PIXEL_COUNT == GAME_PIXEL_COUNT - 1 ||
        polojeniePiton < 0;
      if (isSnakeHeadAtLastGameBoardPixelTowardsLeft) {
        polojeniePiton = polojeniePiton + GAME_PIXEL_COUNT;
      }
      break;
    case UP_DIR: polojeniePiton = polojeniePiton - GAME_PIXEL_COUNT;
      const isSnakeHeadAtLastGameBoardPixelTowardsUp = polojeniePiton < 0;
      if (isSnakeHeadAtLastGameBoardPixelTowardsUp) {
        polojeniePiton = polojeniePiton + SQUARE_OF_GAME_PIXEL_COUNT;
      }
      break;
    case RIGHT_DIR: ++polojeniePiton;
      const isSnakeHeadAtLastGameBoardPixelTowardsRight = polojeniePiton % GAME_PIXEL_COUNT == 0;
      if (isSnakeHeadAtLastGameBoardPixelTowardsRight) {
        polojeniePiton = polojeniePiton - GAME_PIXEL_COUNT;
      }
      break;
    case DOWN_DIR: polojeniePiton = polojeniePiton + GAME_PIXEL_COUNT;
      const isSnakeHeadAtLastGameBoardPixelTowardsDown = polojeniePiton > SQUARE_OF_GAME_PIXEL_COUNT - 1;
      if (isSnakeHeadAtLastGameBoardPixelTowardsDown) {
        polojeniePiton = polojeniePiton - SQUARE_OF_GAME_PIXEL_COUNT;
      }
      break;
    default:
      break;
  }

  var nextSnakeHeadPixel = gameBoardPixels[polojeniePiton];

  if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
    clearInterval(dvijiPitonInterval);
    if (!alert(`IZQDE ${izqdeniPtici} PIJKI, ZA ${izminatiMetri} METRA.`))
        myMusic.stop();
       window.location.reload();
  }

  nextSnakeHeadPixel.classList.add("snakeBodyPixel");

  setTimeout(() => {
    nextSnakeHeadPixel.classList.remove("snakeBodyPixel");
  }, duljinaPiton);
  izminatiMetri++;
  document.getElementById("blocksTravelled").innerHTML = izminatiMetri;

  if (polojeniePiton == currentBirdPostion) {
     izqdeniPtici++;
      mySound.play();
        document.getElementById("pointsEarned").innerHTML = izqdeniPtici;
            duljinaPiton = duljinaPiton + 100;
                createBird();
  }
};

createGameBoardPixels();
createBird();

var dvijiPitonInterval = setInterval(dvijiPiton, 80);

addEventListener("keydown", e => changeDirection(e.keyCode));
