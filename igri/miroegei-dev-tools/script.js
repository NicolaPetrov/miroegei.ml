document.getElementById("console").style.visibility="hidden"

function check_info(){

var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

    if(username == "kolatof" && password == "ebacha69")

      {
        document.getElementById("login").style.display = "none"
		document.getElementById("console").style.visibility = "visible"
        return false;
      }

      else
      { 
        alert("INCORRECT PASSWORD OR USERNAME"); 
      }

  } 

function go(){
var output = $('.output');
var input = $('textarea.input');
var toOutput;

input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		//console.log(inputVal);

		if (inputVal == "help") {
			help();
			input.val('');
		} else if (inputVal == "ping") {
			pong();
			input.val('');
		} else if (inputVal == "about") {
			aboutMe();
			input.val('');
		} else if (inputVal == "contact") {
			contactMe();
			input.val('');
		} else if (inputVal == "clear") {
			clearConsole();
			input.val('');
		} else if (inputVal.startsWith("say") === true) {
			sayThis(inputVal);
			input.val('');
		} else if (inputVal.startsWith("sudo") === true) {
			sudo(inputVal);
			input.val('');
		} else if (inputVal == "time") {
			getTime();
			input.val('');
		} else if (inputVal == 'whats that sound' || inputVal == 'what\'s that sound' || inputVal == 'whats that sound?') {
			seperator();
			Output('<span class="blue">' + inputVal + '</span></br><span class="red">Machine Broken!</span></br>');
			seperator();
			input.val('');
		} else {
			Output('<span>command not found</span></br>');
			input.val('');
		}
	}
});

function seperator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

//clears the screen
function clearConsole() {
	output.html("");
	Output('<span>clear</span></br>');
}

// prints out a list of "all" comands available
function help() {
	var commandsArray = ['Help: List of available commands', '>help', '>about', '>contact', '>ping', '>time', '>clear', '>say'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span>' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
}

// prints the result for the pong command
function pong() {
	Output('<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}

// function to the say command
function sayThis(data) {
	data = data.substr(data.indexOf(' ') + 1);
	Output('<span class="green">[say]:</span><span>' + data + '</span></br>');
}

// sudo?!? not really
function sudo(data) {
	data = data.substr(data.indexOf(' ') + 1);
	if (data.startsWith("say") === true) {
		data = "Not gona " + data + " to you, you don\'t own me!"
	} else if (data.startsWith("apt-get") === true) {
		data = "<span class='green'>Updating...</span> The cake is a lie! There is nothing to update..."
	} else {
		data = "The force is week within you, my master you not be!"
	}
	Output('<span>' + data + '</span></br>');
}

// function to get current time...not
function getTime() {
	Output('<span><br>Putka bez minutka, ne me pitai gluposti</span></br>');
}

function aboutMe() {
	var aboutMeArray = ['>About:', 'Hello There!', 'I\'m Petko, your assistant. Right now I\'m fucking your mom, so wait for me.'];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function contactMe() {
	var contactArray = ['>Contact:', '088 MAIKATA NA ROSEN'];
	seperator();
	for (var i = 0; i < contactArray.length; i++) {
		var out = '<span>' + contactArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

// Prints out the result of the command into the output div
function Output(data) {
	$(data).appendTo(output);
}
}