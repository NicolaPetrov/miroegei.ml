
function myfunc() {
    var mySound;
    var mySound1;
    var myMusic;
    myMusic= new sound("starwars.mp3")
    mySound = new sound("lesgo.mp3");
    mySound1 = new sound("bonk.mp3");
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
	var sluchai1, sluchai2, sluchai3, sluchai4, sluchai5, sluchai6, sluchai7, sluchai8, sluchai9;
	sluchai1 = document.getElementById("sluchai1").value;
	sluchai2 = document.getElementById("sluchai2").value;
	sluchai3 = document.getElementById("sluchai3").value;
	sluchai4 = document.getElementById("sluchai4").value;
	sluchai5 = document.getElementById("sluchai5").value;
	sluchai6 = document.getElementById("sluchai6").value;
	sluchai7 = document.getElementById("sluchai7").value;
	sluchai8 = document.getElementById("sluchai8").value;
	sluchai9 = document.getElementById("sluchai9").value;
    
	if ((sluchai1 == 'MIRO' || sluchai1 == 'MIRO') && (sluchai2 == 'MIRO' || sluchai2 == 'MIRO') && (sluchai3 == 'MIRO' || sluchai3 == 'MIRO')) {
		document.getElementById('print').innerHTML = "MIRO SPECHELI";
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai5").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai8").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('MIRO SPECHELI');
	}
	else if ((sluchai1 == 'MIRO' || sluchai1 == 'MIRO') && (sluchai4 == 'MIRO' || sluchai4 == 'MIRO') && (sluchai7 == 'MIRO' || sluchai7 == 'MIRO')) {
		document.getElementById('print').innerHTML = "MIRO SPECHELI";
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai5").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai8").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('MIRO SPECHELI');
	}
	else if ((sluchai7 == 'MIRO' || sluchai7 == 'MIRO') && (sluchai8 == 'MIRO' || sluchai8 == 'MIRO') && (sluchai9 == 'MIRO' || sluchai9 == 'MIRO')) {
		document.getElementById('print').innerHTML = "MIRO SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai5").disabled = true;
		document.getElementById("sluchai6").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('MIRO SPECHELI');
	}
	else if ((sluchai3 == 'MIRO' || sluchai3 == 'MIRO') && (sluchai6 == 'MIRO' || sluchai6 == 'MIRO') && (sluchai9 == 'MIRO' || sluchai9 == 'MIRO')) {
		document.getElementById('print').innerHTML = "MIRO SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai5").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai8").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('MIRO SPECHELI');
	}
	else if ((sluchai1 == 'MIRO' || sluchai1 == 'MIRO') && (sluchai5 == 'MIRO' || sluchai5 == 'MIRO') && (sluchai9 == 'MIRO' || sluchai9 == 'MIRO')) {
		document.getElementById('print').innerHTML = "MIRO SPECHELI";
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai8").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('MIRO SPECHELI');
	}
	else if ((sluchai3 == 'MIRO' || sluchai3 == 'MIRO') && (sluchai5 == 'MIRO' || sluchai5 == 'MIRO') && (sluchai7 == 'MIRO' || sluchai7 == 'MIRO')) {
		document.getElementById('print').innerHTML = "MIRO SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai8").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('MIRO SPECHELI');
	}
	else if ((sluchai2 == 'MIRO' || sluchai2 == 'MIRO') && (sluchai5 == 'MIRO' || sluchai5 == 'MIRO') && (sluchai8 == 'MIRO' || sluchai8 == 'MIRO')) {
		document.getElementById('print').innerHTML = "MIRO SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('MIRO SPECHELI');
	}
	else if ((sluchai4 == 'MIRO' || sluchai4 == 'MIRO') && (sluchai5 == 'MIRO' || sluchai5 == 'MIRO') && (sluchai6 == 'MIRO' || sluchai6 == 'MIRO')) {
		document.getElementById('print').innerHTML = "MIRO SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai8").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('MIRO SPECHELI');
	}
	else if ((sluchai1 == 'SAMI' || sluchai1 == 'SAMI') && (sluchai2 == 'SAMI' || sluchai2 == 'SAMI') && (sluchai3 == 'SAMI' || sluchai3 == 'SAMI')) {
		document.getElementById('print').innerHTML = "SAMI SPECHELI";
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai5").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai8").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('SAMI SPECHELI');
	}
	else if ((sluchai1 == 'SAMI' || sluchai1 == 'SAMI') && (sluchai4 == 'SAMI' || sluchai4 == 'SAMI') && (sluchai7 == 'SAMI' || sluchai7 == 'SAMI')) {
		document.getElementById('print').innerHTML = "SAMI SPECHELI";
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai5").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai8").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('SAMI SPECHELI');
	}
	else if ((sluchai7 == 'SAMI' || sluchai7 == 'SAMI') && (sluchai8 == 'SAMI' || sluchai8 == 'SAMI') && (sluchai9 == 'SAMI' || sluchai9 == 'SAMI')) {
		document.getElementById('print').innerHTML = "SAMI SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai5").disabled = true;
		document.getElementById("sluchai6").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('SAMI SPECHELI');
	}
	else if ((sluchai3 == 'SAMI' || sluchai3 == 'SAMI') && (sluchai6 == 'SAMI' || sluchai6 == 'SAMI') && (sluchai9 == 'SAMI' || sluchai9 == 'SAMI')) {
		document.getElementById('print').innerHTML = "SAMI SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai5").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai8").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('SAMI SPECHELI');
	}
	else if ((sluchai1 == 'SAMI' || sluchai1 == 'SAMI') && (sluchai5 == 'SAMI' || sluchai5 == 'SAMI') && (sluchai9 == 'SAMI' || sluchai9 == 'SAMI')) {
		document.getElementById('print').innerHTML = "SAMI SPECHELI";
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai8").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('SAMI SPECHELI');
	}
	else if ((sluchai3 == 'SAMI' || sluchai3 == 'SAMI') && (sluchai5 == 'SAMI' || sluchai5 == 'SAMI') && (sluchai7 == 'SAMI' || sluchai7 == 'SAMI')) {
		document.getElementById('print').innerHTML = "SAMI SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai8").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('SAMI SPECHELI');
	}
	else if ((sluchai2 == 'SAMI' || sluchai2 == 'SAMI') && (sluchai5 == 'SAMI' || sluchai5 == 'SAMI') && (sluchai8 == 'SAMI' || sluchai8 == 'SAMI')) {
		document.getElementById('print').innerHTML = "SAMI SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai4").disabled = true;
		document.getElementById("sluchai6").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('SAMI SPECHELI');
	}
	else if ((sluchai4 == 'SAMI' || sluchai4 == 'SAMI') && (sluchai5 == 'SAMI' || sluchai5 == 'SAMI') && (sluchai6 == 'SAMI' || sluchai6 == 'SAMI')) {
		document.getElementById('print').innerHTML = "SAMI SPECHELI";
		document.getElementById("sluchai1").disabled = true;
		document.getElementById("sluchai2").disabled = true;
		document.getElementById("sluchai3").disabled = true;
		document.getElementById("sluchai7").disabled = true;
		document.getElementById("sluchai8").disabled = true;
		document.getElementById("sluchai9").disabled = true;
        mySound.play();
        myMusic.stop();
		window.alert('SAMI SPECHELI');
	}
	else if ((sluchai1 == 'MIRO' || sluchai1 == 'SAMI') && (sluchai2 == 'MIRO' || sluchai2 == 'SAMI') && (sluchai3 == 'MIRO' || sluchai3 == 'SAMI') && (sluchai4 == 'MIRO' || sluchai4 == 'SAMI') && (sluchai5 == 'MIRO' || sluchai5 == 'SAMI') && (sluchai6 == 'MIRO' || sluchai6 == 'SAMI') &&
		(sluchai7 == 'MIRO' || sluchai7 == 'SAMI') && (sluchai8 == 'MIRO' || sluchai8 == 'SAMI') && (sluchai9 == 'MIRO' || sluchai9 == 'SAMI')) {
            mySound1.play();
            myMusic.stop();
			document.getElementById('print').innerHTML = "BAHTI BALUCITE, NE MOJAHTE DA SE POBEDITE";
			window.alert('BRAVO EDNAKVO TUPI STE I STE NARAVNO');
	}
	else {
		if (flag == 1) {
			document.getElementById('print').innerHTML = "RED E NA MIRO";
            mySound1.play();
		} 
        else {
			document.getElementById('print').innerHTML = "RED E NA SAMI";
            mySound1.play();
		}
	}
}
function myfunc_2() {
	location.reload();
	document.getElementById("sluchai1").value = '';
	document.getElementById("sluchai2").value = '';
	document.getElementById("sluchai3").value = '';
	document.getElementById("sluchai4").value = '';
	document.getElementById("sluchai5").value = '';
	document.getElementById("sluchai6").value = '';
	document.getElementById("sluchai7").value = '';
	document.getElementById("sluchai8").value = '';
	document.getElementById("sluchai9").value = '';

}
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("sluchai1").value = "MIRO";
		document.getElementById("sluchai1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai1").value = "SAMI";
		document.getElementById("sluchai1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("sluchai2").value = "MIRO";
		document.getElementById("sluchai2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai2").value = "SAMI";
		document.getElementById("sluchai2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("sluchai3").value = "MIRO";
		document.getElementById("sluchai3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai3").value = "SAMI";
		document.getElementById("sluchai3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("sluchai4").value = "MIRO";
		document.getElementById("sluchai4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai4").value = "SAMI";
		document.getElementById("sluchai4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("sluchai5").value = "MIRO";
		document.getElementById("sluchai5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai5").value = "SAMI";
		document.getElementById("sluchai5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("sluchai6").value = "MIRO";
		document.getElementById("sluchai6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai6").value = "SAMI";
		document.getElementById("sluchai6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("sluchai7").value = "MIRO";
		document.getElementById("sluchai7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai7").value = "SAMI";
		document.getElementById("sluchai7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("sluchai8").value = "MIRO";
		document.getElementById("sluchai8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai8").value = "SAMI";
		document.getElementById("sluchai8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("sluchai9").value = "MIRO";
		document.getElementById("sluchai9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("sluchai9").value = "SAMI";
		document.getElementById("sluchai9").disabled = true;
		flag = 1;
	}
}
