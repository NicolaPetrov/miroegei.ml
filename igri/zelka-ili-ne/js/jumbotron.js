
const jumbotronDisplay = document.getElementById("jumbotron");
const jumbotronDisplayTitle = document.getElementById("jumbotron-title");
const jumbotronDisplayContent = document.getElementById("jumbotron-content");
const jumbotronDisplayImage = document.getElementById("jumbotron-image");
const jumbotronDisplayButton = document.getElementById("jumbotron-button");

const showJumbotronWithBankerCall = function() {
  jumbotronDisplayTitle.innerText = "ДРЪН ДРЪН ДРЪН";
  jumbotronDisplayContent.innerText =
    "Имаш обаждане от чичу Гошко";
  jumbotronDisplayImage.src = "./img/incomingcall.gif";
  jumbotronDisplayButton.innerText = "Вдигни му";
  jumbotronDisplayButton.onclick = function() {
    hideJumbotron();
  };
  jumbotronDisplay.style.display = "inline-block";
  jumbotronDisplay.classList.add("heartbeat");
};

const hideJumbotron = function() {
  jumbotronDisplay.style.display = "none";
  answerBankerCall();
};

const jumbotronDisplayOpenForValue = function() {
  jumbotronDisplayTitle.innerText = "";
  jumbotronDisplayContent.innerText = "";
  jumbotronDisplay.classList.remove("heartbeat");
  jumbotronDisplayButton.innerText = "OK.";
  jumbotronDisplayButton.onclick = function() {
    jumbotronDisplay.style.display = "none";
  };
  jumbotronDisplay.style.display = "inline-block";
  setTimeout(function() {
    jumbotronDisplay.style.display = "none";
  }, 5000);
};

const jumbotronDisplayOpen1000000 = function() {
  jumbotronDisplayTitle.innerText = "";
  jumbotronDisplayContent.innerText = "";
  jumbotronDisplay.classList.remove("heartbeat");
  jumbotronDisplayButton.innerText = "OK.";
  jumbotronDisplayButton.onclick = function() {
    jumbotronDisplay.style.display = "none";
  };
  jumbotronDisplay.style.display = "inline-block";
  setTimeout(function() {
    jumbotronDisplay.style.display = "none";
  }, 5000);
};

const showJumbotronWithWinningPage = function(boxNumber, boxId) {
  jumbotronDisplayTitle.innerText = "ОТВОРИ СИ КУТИЯТА";
  jumbotronDisplayImage.src = "./img/openbox.gif";
  jumbotronDisplayButton.innerText = "ОТВОРЕТЕ КУТИЯ НОМЕР " + boxNumber;
  jumbotronDisplayButton.onclick = function() {
    showWinningAmountAndAskToPlayAgain(boxId);
    jumbotronDisplayImage.src = "";
  };
  jumbotronDisplay.style.display = "inline-block";
};

const acceptedBankerAmountEndGameAndAskToPlayAgain = function(
  bankeramount,
  boxId
) {
  const lastBoxToBeOpened = document.getElementsByClassName("initial-box");
  jumbotronDisplayTitle.innerText = "КОНГРАЧУЛЕЙШЪНС!";
  jumbotronDisplayTitle.style.color = "#ff0000";
  jumbotronDisplayTitle.style.fontWeight = "bolder";
  jumbotronDisplayTitle.style.fontSize = "35px";
  jumbotronDisplayContent.innerText =
    "Приехте офертата на чичу Митко за 🥬" +
    parseInt(bankeramount).toLocaleString() +
    ". Кутията ви съдържаше 🥬" +
    parseInt(boxId).toLocaleString();
  jumbotronDisplay.classList.remove("heartbeat");
  jumbotronDisplayContent.classList.add("bounce-in-top");
  jumbotronDisplayContent.style.fontSize = "30px";
  jumbotronDisplayContent.style.fontWeight = "bolder";
  jumbotronDisplayImage.src = "./img/makeitrain.gif";
  jumbotronDisplayImage.parentNode;
  jumbotronDisplayContent.style.color = "#ff0000";
  jumbotronDisplayButton.innerText = "Играй Пак!";
  jumbotronDisplayButton.onclick = function() {
    window.location.reload();
  };
  jumbotronDisplay.style.display = "inline-block";
};

const showWinningAmountAndAskToPlayAgain = function(boxId) {
  jumbotronDisplayTitle.innerText = "Спечели 🥬";
  jumbotronDisplayTitle.style.fontSize = "50px";
  jumbotronDisplayImage.src="./img/makeitrain.gif"
  jumbotronDisplayContent.innerText = parseInt(boxId).toLocaleString();
  jumbotronDisplayContent.classList.add("tracking-in-contract-bck-top");
  jumbotronDisplay.classList.remove("heartbeat");
  jumbotronDisplayContent.style.fontSize = "90px";
  jumbotronDisplayContent.style.fontWeight = "bolder";
  jumbotronDisplayContent.style.color = "#ff0000";
  jumbotronDisplayButton.innerText = " Играй Пак!";
  jumbotronDisplayButton.onclick = function() {
    window.location.reload();
  };
};
