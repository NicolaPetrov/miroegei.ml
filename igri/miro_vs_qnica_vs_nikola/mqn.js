var to4ki_igrach = 0,to4ki_komp = 0;
var MAIKATIEGEI = true;
const to4ki_igrach_span = document.getElementById("tvoi-to4ki");
const to4ki_komp_span = document.getElementById("komp-to4ki");
const scoreBoard_div = document.querySelector(".to4ki");
const result_div = document.querySelector(".rezultat");
const miro_kotkata_div = document.getElementById("MIRO-KOTKATA");
const NICOLA_div = document.getElementById("NICOLA");
const QNICA_div = document.getElementById("QNICA");

function getizb_komp() {
  const choices = ["MIRO-KOTKATA", "NICOLA", "QNICA"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

var mySound;
var mySound1;
mySound = new sound("bonk.mp3");
mySound1 = new sound("lesgo.mp3");
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

function convertCase(anythingIwant) {
  if (anythingIwant === "NICOLA") return "NICOLA";
  if (anythingIwant === "QNICA") return "QNICA";
  return "MIRO-KOTKATA";
}

function specheli(igrach, komp) {
  to4ki_igrach++;
  to4ki_igrach_span.innerHTML = to4ki_igrach;
  const igrachName = " (TI)".fontsize(3).sup();
  const kompName = " (SAMI)".fontsize(3).sup();
  result_div.innerHTML = `<p>${convertCase(igrach)}${igrachName} PREBI ${convertCase(komp)}${kompName}. PECHELISH!</p>`;
  mySound1.play();
  const roundStatus = document.getElementById(igrach);
  roundStatus.classList.add("winningStyles");
  setTimeout(() => roundStatus.classList.remove("winningStyles"), 300);
}

function zaguba(igrach, komp) {
  to4ki_komp++;
  to4ki_komp_span.innerHTML = to4ki_komp;
  const igrachName = " (TI)".fontsize(3).sup();
  const kompName = " (SAMI)".fontsize(3).sup();
  result_div.innerHTML = `<p>${convertCase(komp)}${kompName} NABI ${convertCase(igrach)}${igrachName}. ZAGUBI OT SAMI BALUK!</p>`;
  mySound.play();
  const roundStatus = document.getElementById(igrach);
  roundStatus.classList.add("losingStyles");
  setTimeout(() => roundStatus.classList.remove("losingStyles"), 300);
}

function ravenstvo(igrach, komp) {
  const igrachName = " (TI)".fontsize(3).sup();
  const kompName = " (SAMI)".fontsize(3).sup();
  result_div.innerHTML = `<p>RAVENSTVO. I DVAMATA IZBRAHTE ${convertCase(igrach)}</p>`;
  mySound.play();
  const roundStatus = document.getElementById(igrach);
  roundStatus.classList.add("drawStyles");
  setTimeout(() => roundStatus.classList.remove("drawStyles"), 300);
}

function igra(izb_igrach) {
  const izb_komp = getizb_komp();
 
  switch (izb_igrach + izb_komp) {
    case "NICOLAMIRO-KOTKATA":
    case "MIRO-KOTKATAQNICA":
    case "QNICANICOLA":
      specheli(izb_igrach, izb_komp);
      break;
    case "MIRO-KOTKATANICOLA":
    case "QNICAMIRO-KOTKATA":
    case "NICOLAQNICA":
      zaguba(izb_igrach, izb_komp);
      break;
    case "MIRO-KOTKATAMIRO-KOTKATA":
    case "QNICAQNICA":
    case "NICOLANICOLA":
      ravenstvo(izb_igrach, izb_komp);
      break;
  }
}

function main() {
  miro_kotkata_div.addEventListener("click", () => igra("MIRO-KOTKATA"));
  NICOLA_div.addEventListener("click", () => igra("NICOLA"));
  QNICA_div.addEventListener("click", () => igra("QNICA"));
}

main();
