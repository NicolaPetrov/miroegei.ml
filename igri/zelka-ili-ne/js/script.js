const prizeMoney = [
  0.5,
  1,
  2,
  3,
  4,
  5,
  10,
  15,
  20,
  25,
  50,
  75,
  100,
  150,
  200,
  250,
  300,
  350,
  400,
  450,
  600,
  700,
  750,
  800,
  100000
];
let selectedValues = [];
let boxNumber = 1;

let turnNumber = 0;

let initialBoxSelected = false;
let bankerHasAnOffer = false;

const gameTable = document.getElementById("game-board");
const valueTable = document.getElementById("money-table");
let gameBox = document.getElementsByClassName("game-box");
let valueBox = document.getElementsByClassName("value-box");
const dealButton = document.getElementById("deal-button");
const noDealButton = document.getElementById("no-deal-button");

const mappingFunctionToValueTable = function(val) {
  let newCell = document.createElement("div");
  newCell.textContent = "🥬 " + val.toLocaleString();
  newCell.setAttribute("class", "value-box");
  newCell.classList.add("col-md-5");
  valueTable.appendChild(newCell);
};

const mappingFunctionToGameBox = function(val) {
  let newCell = document.createElement("div");
  newCell.style.fontSize = "30px";
  newCell.textContent = boxNumber;
  newCell.setAttribute("class", "game-box");
  newCell.classList.add("col-md-2");
  newCell.setAttribute("id", val);
  gameTable.appendChild(newCell);
  boxNumber++;
};

let turnNumberDisplay = document.getElementById("turn-number");
let messageDisplay = document.getElementById("message-display");
let initialBoxDisplay = document.getElementById("initial-box-display");
let modalDisplay = document.getElementById("modal-display");
messageDisplay.innerText =
  "Изберете своята кутия!";

function getShuffledArray(arr) {
  let newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
}

let randomPrizeMoney = getShuffledArray(prizeMoney);
randomPrizeMoney.forEach(function(item) {
  mappingFunctionToGameBox(item);
});

const allowClicksToOpenGameBox = function() {
  for (i = 0; i < gameBox.length; i++) {
    gameBox[i].addEventListener("click", clickBox);
  }
};

allowClicksToOpenGameBox();

prizeMoney.forEach(function(item) {
  mappingFunctionToValueTable(item);
});

function clickBox() {
  if (initialBoxSelected === false) {
    this.classList.add("player-box");
    this.classList.remove("game-box");
    initialBoxItem = document.createElement("div");
    initialBoxItem.textContent = this.textContent;
    initialBoxItem.setAttribute("class", "initial-box");
    initialBoxItem.classList.add("col-md-12", "slide-in-blurred-tr");
    initialBoxItem.setAttribute("id", this.id);
    initialBoxDisplay.appendChild(initialBoxItem);
    messageDisplay.innerText =
      "Избра кутия номер " +
      this.textContent +
      ". Отвори още 6 кутии";
    chooseInitialBox();
  } else if (
    this.classList.contains("opened-box") ||
    this.classList.contains("player-box")
  ) {
    messageDisplay.innerText =
      "Отвори я вече таз кутия е!";
  } else {
    numberValue = parseInt(this.id);
    selectedValues.push(numberValue);
    this.innerText = "🥬" + numberValue.toLocaleString();
    this.style.fontSize = "25px";
    this.classList.add("opened-box", "puff-in-center");
    this.classList.remove("game-box");
    messageDisplay.innerText =
      "Кутията, която отвори имаше " + numberValue.toLocaleString() + " кантарни зелки🥬🥬🥬 в нея.";
    turnNumber++;
    turnNumberDisplay.innerText = turnNumber;
    for (i = 0; i < valueBox.length; i++) {
      if (this.innerText === valueBox[i].innerText) {
        valueBox[i].classList.add("strike-box");
      }
    }
    if (numberValue === 750) {
      jumbotronDisplayOpenForValue();
      jumbotronDisplayImage.src = "./img/open-750.gif";
    } else if (numberValue === 1) {
      jumbotronDisplayOpen750();
      jumbotronDisplayImage.src = "./img/yay.gif";
    } else if (numberValue === 500000) {
      jumbotronDisplayOpenForValue();
      jumbotronDisplayImage.src = "./img/500000.gif";
    } else if (numberValue === 1000000) {
      jumbotronDisplayOpenForValue();
      jumbotronDisplayImage.src = "./img/facepalm.gif";
    }
    checkGame();
  }
}

const chooseInitialBox = function() {
  console.log("Initial Box Chosen");
  turnNumber++;
  initialBoxSelected = true;
};

let playerDealDecision;
dealButton.onclick = function() {
  if (bankerHasAnOffer === true && turnNumber < 24) {
    playerDealDecision = true;
    const lastBoxToBeOpened = document.getElementsByClassName("initial-box");
    const boxId = lastBoxToBeOpened[0].id;
    acceptedBankerAmountEndGameAndAskToPlayAgain(offerValue, boxId);
    messageDisplay.innerText =
      "Продаде своята кутия на чичу Стоян за толкова зелки- " +
      parseInt(offerValue).toLocaleString();
  } else {
    messageDisplay.innerText = "Смени си кутията с чичу Гошку.";
    lastBox = document.getElementsByClassName("game-box");
    playerBox = document.getElementsByClassName("player-box");
    initialBoxItem.innerText = lastBox[0].textContent;
    initialBoxItem.id = lastBox[0].id;
    lastBox[0].classList.add("final-player-box");
    lastBox[0].classList.remove("game-box");
    playerBox[0].classList.add("final-game-box");
    finalGameBox = document.getElementsByClassName("final-game-box");
    finalGameBox[0].classList.remove("player-box");
    endGame();
  }
};

noDealButton.onclick = function() {
  if (bankerHasAnOffer === true && turnNumber < 24) {
    playerDealDecision = false;
    messageDisplay.innerText = "Нещо не се разбрахте с чичу Гошко!";
  } else {
    messageDisplay.innerText =
      "Оставаш си с тази кутия.";
    endGame();
  }
};

const answerBankerCall = function() {
  modalDisplay.innerText =
    "Чичу Митко се обади. Толкова зелки ти предлага- " +
    parseInt(offerValue).toLocaleString();
  // Displaying the player message
  $("#playerMessageModal").modal("show");
  bankerHasAnOffer = true;
};
const checkGame = function() {
  let totalPrizeMoney = prizeMoney.reduce(function(a, b) {
    return a + b;
  });

  let totalSelectedValues = selectedValues.reduce(function(c, d) {
    return c + d;
  });

  if (turnNumber === 0) {
    chooseInitialBox();
  } else if (
    turnNumber === 7 ||
    turnNumber === 13 ||
    turnNumber === 18 ||
    turnNumber === 22
  ) {
    offerValue = (totalPrizeMoney - totalSelectedValues) / (25 - turnNumber);
    showJumbotronWithBankerCall();
  } else if (turnNumber === 24) {
    offerValue = (totalPrizeMoney - totalSelectedValues) / (25 - turnNumber);
    modalDisplay.innerText =
      "Чичу Гошку се обажда! Ще си смениш ли кутията?";
    dealButton.innerText = "Смени";
    noDealButton.innerText = "Не!";
    parseInt(offerValue).toLocaleString();
    $("#playerMessageModal").modal("show");
    bankerHasAnOffer = true;
  }
};
const endGame = function() {
  messageDisplay.innerText = "Отвори си кутията!";
  const lastBoxToBeOpened = document.getElementsByClassName("initial-box");
  showJumbotronWithWinningPage(
    lastBoxToBeOpened[0].innerText,
    lastBoxToBeOpened[0].id
  );
};
