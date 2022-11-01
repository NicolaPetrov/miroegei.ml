var myX = 0, myY = 0,topcheX=0,topcheY=0,deltaX=1,deltaY=1,my2X=0,my2Y=30;
var skorost=4,to4ki=0,kvadratcheta,kvadratcheta2,jivoti=10,jivoti2=10;
function update() {
	myX=770;
//	myY=mouseY;
//	if(myX<770){
//		myX=770;
//	}
	topcheX=topcheX+(deltaX*skorost);
	topcheY=topcheY+(deltaY*skorost);
	if(areColliding(myX,myY,30,150,topcheX,topcheY,30,30)){
		jivoti=jivoti+0;
		if(topcheY<=30){
		   deltaY=1;
	}
	skorost=skorost+0.2;
		if(topcheX>=740){
		  deltaX=-1;
	}
	}
	if(areColliding(my2X,my2Y,30,150,topcheX,topcheY,30,30)){
		jivoti2=jivoti2+0;
		if(topcheY<=30){
		   deltaY=1;
	}
	skorost=skorost+0.2;
		if(topcheX<=30){
		  deltaX=1;
	}
	}

	if(topcheY>=540){
		deltaY=-1;
	}
	if(topcheX>=770){
		deltaX=-1;
		skorost=skorost+1;
		jivoti=jivoti-1;
	}
	if(topcheY<=30){
		deltaY=1;
	}
	if(topcheX<=0){
		deltaX=1;
		jivoti2=jivoti2-1;
	}

	if(jivoti<1){
	   document.write('CHERNIQ PECHELI ');
	     docwrite('CHERNIQ PECHELI');
			}
	if(jivoti2<1){
		document.write('CHERVENIQ PECHELI ');
	    docwrite('CHERVENIQ PECHELI');
			}
	  
	if(isKeyPressed[40]){
		myY=myY+15;
	}
	if(isKeyPressed[38]){
		myY=myY-15;
	}
	if(isKeyPressed[83]){
		my2Y=my2Y+15;
	}
	if(isKeyPressed[87]){
		my2Y=my2Y-15;
	}
	if(my2Y<0){
		my2Y=0;
	}
	if(my2Y>450){
		my2Y=400;
	}
	if(myY<0){
		myY=0;
	}
	if(myY>450){
		myY=400;
	}
}

function draw() {  
	context.fillStyle="green";
	context.fillRect(0,0,1200,900);
	context.fillStyle="white";
	context.fillRect(390,30,20,540);
	context.fillRect(0,30,800,5);
	context.fillRect(0,30,5,540);
	context.fillRect(795,30,5,540);
	context.fillRect(0,565,800,5);
	context.fillStyle="yellow";
	context.fillRect(topcheX,topcheY,30,30);
	context.fillStyle="black";
	context.fillRect(my2X,my2Y,30,150);
	context.fillStyle="red";
    context.fillRect(myX, myY, 30, 150);
	 context.fillStyle="red";
      for(kvadratcheta=0;kvadratcheta<jivoti;kvadratcheta=kvadratcheta+1){
		  context.fillRect(kvadratcheta*32,0,30,30);
	}   
	 context.fillStyle="black";
      for(kvadratcheta2=0;kvadratcheta2<jivoti2;kvadratcheta2=kvadratcheta2+1){
		  context.fillRect(kvadratcheta2*32,0+570,30,30);
	} 
};

function keyup(key) {
    console.log("Pressed", key);
};

function mouseup() {
    console.log("Mouse clicked at", mouseX, mouseY);
};
