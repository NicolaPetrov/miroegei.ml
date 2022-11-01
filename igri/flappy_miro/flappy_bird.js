var skorost = 3;
var gravitaciq = 0.5;
var miro = document.querySelector('.miro');
var miro_props = miro.getBoundingClientRect();
var grub = document.querySelector('.grub').getBoundingClientRect();
var to4ki_val = document.querySelector('.to4ki_val');
var message = document.querySelector('.suobshtenie');
var to4ki_title = document.querySelector('.to4ki_title');
var igra = 'Start';
var mySound;
var myMusic;
mySound = new sound("bonk.mp3");
myMusic = new sound("starwars.mp3");

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && igra != 'Play') {
	   document.querySelectorAll('.truba').forEach((e) => {e.remove();});
	       miro.style.top = '40vh';
	           igra = 'Play';
	               message.innerHTML = '';
	                   to4ki_title.innerHTML = 'TOCHKI : ';
	                       to4ki_val.innerHTML = '0';
	                           play();
    }
});
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

function play() {
    function dvijenie() {
    
	   if (igra != 'Play') 
           return;
    
	   var truba = document.querySelectorAll('.truba');
       myMusic.play();
	   truba.forEach((element) => {	
	       var truba_props = element.getBoundingClientRect();
	           miro_props = miro.getBoundingClientRect();
	       if (truba_props.right <= 0) {
		          element.remove();
	       } else {
               if ( miro_props.left < truba_props.left + truba_props.width && miro_props.left + miro_props.width > truba_props.left &&
		          miro_props.top < truba_props.top + truba_props.height && miro_props.top + miro_props.height > truba_props.top) {
		              igra = 'End';
                        mySound.play();
                            myMusic.stop();
                            message.innerHTML = 'BRAVO BALUK SUDRAH SI GUZA NATISNI ENTER';
                                message.style.center = '69vw';
		                          return;
		      } else {
		          if ( truba_props.right < miro_props.left && truba_props.right + skorost >= miro_props.left && element.increase_to4ki == '1') {
			             to4ki_val.innerHTML = +to4ki_val.innerHTML + 1;
                            skorost=skorost+0.2;
		          }
		          element.style.left = truba_props.left - skorost + 'px';
		      }
	       }
	   });
	requestAnimationFrame(dvijenie);
}
    requestAnimationFrame(dvijenie);
    
    var miro_dy = 0;
    
    function apply_gravitaciq() {
    
	   if (igra != 'Play') 
           return;
	   miro_dy = miro_dy + gravitaciq;
	   document.addEventListener('keydown', (e) => {
	       if (e.key == 'ArrowUp' || e.key == ' ') {
		          miro_dy = -7;
	       }
	   });
	   if (miro_props.top <= 0 || miro_props.bottom >= grub.bottom) {
            igra = 'End';
	           message.innerHTML = 'E TVA BESHE NQMA VRUSHTANE NAZAD';
	               message.style.center = '69vw';
                        mySound.play();
                            myMusic.stop();
	                   return;
	   }
	   miro.style.top = miro_props.top + miro_dy + 'px';
	   miro_props = miro.getBoundingClientRect();
	   requestAnimationFrame(apply_gravitaciq);
    }
    requestAnimationFrame(apply_gravitaciq);

    var razst_trubi = 0;
    var razdl_trubi = 45;
    
    function nar_truba() {
    
	   if (igra != 'Play') return;
	       if (razst_trubi > 120) {
	           razst_trubi = 0
	               var poz_truba = Math.floor(Math.random() * 43) + 6;
	                   var truba_inv = document.createElement('div');
	                       truba_inv.className = 'truba';
	                           truba_inv.style.top = poz_truba - 65 + 'vh';
	                               truba_inv.style.left = '100vw';
	                                   document.body.appendChild(truba_inv);
	                                       var truba = document.createElement('div');
	                                           truba.className = 'truba';
	                                               truba.style.top = poz_truba + razdl_trubi + 'vh';
	                                                   truba.style.left = '100vw';
	                                                       truba.increase_to4ki = '1';
                                                                document.body.appendChild(truba);
	       }
	   razst_trubi++;
	   requestAnimationFrame(nar_truba);
    }
    requestAnimationFrame(nar_truba);
    
        var margin = 25,
        backMenu = new CMenu(this.getTexture("menu_back"));
        backMenu.setPosition(cc.p(margin, winSize.height - margin));
        backMenu.onClick(function () {
            window.location.href = "https://miroegei.ml";
        });
        this.addChild(backMenu);
        this.menus.push(backMenu);
}
