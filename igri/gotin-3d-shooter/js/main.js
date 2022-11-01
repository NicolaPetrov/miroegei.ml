
var map = [ 
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], 
           [1, 1, 0, 0, 0, 0, 0, 1, 1, 1,], 
           [1, 1, 0, 0, 2, 0, 0, 0, 0, 1,], 
           [1, 0, 0, 0, 0, 2, 0, 0, 0, 1,], 
           [1, 0, 0, 2, 0, 0, 2, 0, 0, 1,], 
           [1, 0, 0, 0, 2, 0, 0, 0, 1, 1,], 
           [1, 1, 1, 0, 0, 0, 0, 1, 1, 1,], 
           [1, 1, 1, 0, 0, 1, 0, 0, 1, 1,], 
           [1, 1, 1, 1, 1, 1, 0, 0, 1, 1,], 
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], 
           ], mapW = map.length, mapH = map[0].length;

var WIDTH = window.innerWidth,
	HEIGHT = window.innerHeight,
	ASPECT = WIDTH / HEIGHT,
	UNITSIZE = 250,
	WALLHEIGHT = UNITSIZE / 3,
	MOVESPEED = 100,
	LOOKSPEED = 0.075,
	BULLETMOVESPEED = MOVESPEED * 5,
	NUMAI = 5,
	PROJECTILEDAMAGE = 20;

var t = THREE, scene, cam, renderer, controls, clock, projector, model, skin;
var runAnim = true, mouse = { x: 0, y: 0 }, kills = 0, health = 400;
var healthCube, lastHealthPickup = 0;

$(document).ready(function() {
	$('body').append('<div id="intro">STRELQI   S   MISHKATA   I   VURVI   S   WASD<br><br>I SE PAZI OT BOTOVETE, PO-OPASNI SA OT TEB<br><br><br>NATISNI NOSA NA YANKO<br> ZA DA IGRAESH</div>');
	$('#intro').css({width: WIDTH, height: HEIGHT}).one('click', function(e) {
		e.preventDefault();
		$(this).fadeOut();
		init();
		setInterval(drawRadar, 1000);
		animate();
	});

});

function init() {
	clock = new t.Clock(); 
	projector = new t.Projector(); 
	scene = new t.Scene(); 
	scene.fog = new t.FogExp2(0xD6F1FF, 0.0005); 
	
	cam = new t.PerspectiveCamera(60, ASPECT, 1, 10000);
	cam.position.y = UNITSIZE * .2;
	scene.add(cam);
	
	controls = new t.FirstPersonControls(cam);
	controls.movementSpeed = MOVESPEED;
	controls.lookSpeed = LOOKSPEED;
	controls.lookVertical = false; 
	controls.noFly = true;

	setupScene();
	setupAI();
	
	renderer = new t.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	
	renderer.domElement.style.backgroundColor = '#D6F1FF'; 
	document.body.appendChild(renderer.domElement);
	
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	
	$(document).click(function(e) {
		e.preventDefault;
		if (e.which === 1) {
			createBullet();
		}
	});
	
	$('body').append('<canvas id="radar" width="200" height="200"></canvas>');
	$('body').append('<div id="hud"><p>Jivot: <span id="health">400</span><br />To4ki: <span id="score">0</span></p></div>');
	
	$('body').append('<div id="hurt"></div>');
	$('#hurt').css({width: WIDTH, height: HEIGHT,});
}

function animate() {
	if (runAnim) {
		requestAnimationFrame(animate);
	}
	render();
}

function render() {
	var delta = clock.getDelta(), speed = delta * BULLETMOVESPEED;
	var aispeed = delta * MOVESPEED;
	controls.update(delta); 
	healthcube.rotation.x += 0.004
	healthcube.rotation.y += 0.008;
	if (Date.now() > lastHealthPickup + 60000) {
		if (distance(cam.position.x, cam.position.z, healthcube.position.x, healthcube.position.z) < 15 && health != 100) {
			health = Math.min(health + 50, 100);
			$('#health').html(health);
			lastHealthPickup = Date.now();
		}
		healthcube.material.wireframe = false;
	}
	else {
		healthcube.material.wireframe = true;
	}

	for (var i = bullets.length-1; i >= 0; i--) {
		var b = bullets[i], p = b.position, d = b.ray.direction;
		if (checkWallCollision(p)) {
			bullets.splice(i, 1);
			scene.remove(b);
			continue;
		}
		var hit = false;
		for (var j = ai.length-1; j >= 0; j--) {
			var a = ai[j];
			var v = a.geometry.vertices[0];
			var c = a.position;
			var x = Math.abs(v.x), z = Math.abs(v.z);
			if (p.x < c.x + x && p.x > c.x - x &&
					p.z < c.z + z && p.z > c.z - z &&
					b.owner != a) {
				bullets.splice(i, 1);
				scene.remove(b);
				a.health -= PROJECTILEDAMAGE;
				var color = a.material.color, percent = a.health / 100;
				a.material.color.setRGB(
						percent * color.r,
						percent * color.g,
						percent * color.b
				);
				hit = true;
				break;
			}
		}

		if (distance(p.x, p.z, cam.position.x, cam.position.z) < 25 && b.owner != cam) {
			$('#hurt').fadeIn(75);
			health -= 10;
			if (health < 0) health = 0;
			val = health < 25 ? '<span style="color: darkRed">' + health + '</span>' : health;
			$('#health').html(val);
			bullets.splice(i, 1);
			scene.remove(b);
			$('#hurt').fadeOut(350);
		}
		if (!hit) {
			b.translateX(speed * d.x);
			b.translateZ(speed * d.z);
		}
	}
	
	for (var i = ai.length-1; i >= 0; i--) {
		var a = ai[i];
		if (a.health <= 0) {
			ai.splice(i, 1);
			scene.remove(a);
			kills++;
			$('#score').html(kills * 100);
			addAI();
		}
		var r = Math.random();
		if (r > 0.995) {
			a.lastRandomX = Math.random() * 2 - 1;
			a.lastRandomZ = Math.random() * 2 - 1;
		}
		a.translateX(aispeed * a.lastRandomX);
		a.translateZ(aispeed * a.lastRandomZ);
		var c = getMapSector(a.position);
		if (c.x < 0 || c.x >= mapW || c.y < 0 || c.y >= mapH || checkWallCollision(a.position)) {
			a.translateX(-2 * aispeed * a.lastRandomX);
			a.translateZ(-2 * aispeed * a.lastRandomZ);
			a.lastRandomX = Math.random() * 2 - 1;
			a.lastRandomZ = Math.random() * 2 - 1;
		}
		if (c.x < -1 || c.x > mapW || c.z < -1 || c.z > mapH) {
			ai.splice(i, 1);
			scene.remove(a);
			addAI();
		}

		var cc = getMapSector(cam.position);
		if (Date.now() > a.lastShot + 750 && distance(c.x, c.z, cc.x, cc.z) < 2) {
			createBullet(a);
			a.lastShot = Date.now();
		}
	}

	renderer.render(scene, cam); 
	
	if (health <= 0) {
		runAnim = false;
		$(renderer.domElement).fadeOut();
		$('#radar, #hud, #credits').fadeOut();
		$('#intro').fadeIn();
		$('#intro').html('Bahti baluka. Natisni za da igraesh pak');
		$('#intro').one('click', function() {
			location = location;
		});
	}
}

function setupScene() {
	var UNITSIZE = 250, units = mapW;

	var floor = new t.Mesh(
			new t.CubeGeometry(units * UNITSIZE, 10, units * UNITSIZE),
			new t.MeshLambertMaterial({color: 0xEDCBA0})
	);
	scene.add(floor);
	
	var cube = new t.CubeGeometry(UNITSIZE, WALLHEIGHT, UNITSIZE);
	var materials = [
	                 new t.MeshLambertMaterial({color: 0x00CCAA}),
	                 new t.MeshLambertMaterial({color: 0xC5EDA0}),
	                 new t.MeshLambertMaterial({color: 0xFBEBCD}),
	                 ];
	for (var i = 0; i < mapW; i++) {
		for (var j = 0, m = map[i].length; j < m; j++) {
			if (map[i][j]) {
				var wall = new t.Mesh(cube, materials[map[i][j]-1]);
				wall.position.x = (i - units/2) * UNITSIZE;
				wall.position.y = WALLHEIGHT/2;
				wall.position.z = (j - units/2) * UNITSIZE;
				scene.add(wall);
			}
		}
	}
	
	healthcube = new t.Mesh(
			new t.CubeGeometry(30, 30, 30),
			new t.MeshBasicMaterial({map: t.ImageUtils.loadTexture('images/health.png')})
	);
	healthcube.position.set(-UNITSIZE-15, 35, -UNITSIZE-15);
	scene.add(healthcube);

	var directionalLight1 = new t.DirectionalLight( 0xF7EFBE, 0.7 );
	directionalLight1.position.set( 0.5, 1, 0.5 );
	scene.add( directionalLight1 );
	var directionalLight2 = new t.DirectionalLight( 0xF7EFBE, 0.5 );
	directionalLight2.position.set( -0.5, -1, -0.5 );
	scene.add( directionalLight2 );
}

var ai = [];
var aiGeo = new t.CubeGeometry(40, 40, 40);
function setupAI() {
	for (var i = 0; i < NUMAI; i++) {
		addAI();
	}
}

function addAI() {
	var c = getMapSector(cam.position);
	var aiMaterial = new t.MeshBasicMaterial({color: 0xEE3333});
	var o = new t.Mesh(aiGeo, aiMaterial);
	do {
		var x = getRandBetween(0, mapW-1);
		var z = getRandBetween(0, mapH-1);
	} while (map[x][z] > 0 || (x == c.x && z == c.z));
	x = Math.floor(x - mapW/2) * UNITSIZE;
	z = Math.floor(z - mapW/2) * UNITSIZE;
	o.position.set(x, UNITSIZE * 0.15, z);
	o.health = 100;
	o.pathPos = 1;
	o.lastRandomX = Math.random();
	o.lastRandomZ = Math.random();
	o.lastShot = Date.now(); 
	ai.push(o);
	scene.add(o);
}

function getAIpath(a) {
	var p = getMapSector(a.position);
	do { 
		do {
			var x = getRandBetween(0, mapW-1);
			var z = getRandBetween(0, mapH-1);
		} while (map[x][z] > 0 || distance(p.x, p.z, x, z) < 3);
		var path = findAIpath(p.x, p.z, x, z);
	} while (path.length == 0);
	return path;
}


function findAIpath(sX, sZ, eX, eZ) {
	var backupGrid = grid.clone();
	var path = finder.findPath(sX, sZ, eX, eZ, grid);
	grid = backupGrid;
	return path;
}

function distance(x1, y1, x2, y2) {
	return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}

function getMapSector(v) {
	var x = Math.floor((v.x + UNITSIZE / 2) / UNITSIZE + mapW/2);
	var z = Math.floor((v.z + UNITSIZE / 2) / UNITSIZE + mapW/2);
	return {x: x, z: z};
}

function checkWallCollision(v) {
	var c = getMapSector(v);
	return map[c.x][c.z] > 0;
}

function drawRadar() {
	var c = getMapSector(cam.position), context = document.getElementById('radar').getContext('2d');
	context.font = '10px Helvetica';
	for (var i = 0; i < mapW; i++) {
		for (var j = 0, m = map[i].length; j < m; j++) {
			var d = 0;
			for (var k = 0, n = ai.length; k < n; k++) {
				var e = getMapSector(ai[k].position);
				if (i == e.x && j == e.z) {
					d++;
				}
			}
			if (i == c.x && j == c.z && d == 0) {
				context.fillStyle = '#0000FF';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
			}
			else if (i == c.x && j == c.z) {
				context.fillStyle = '#AA33FF';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
				context.fillStyle = '#000000';
				context.fillText(''+d, i*20+8, j*20+12);
			}
			else if (d > 0 && d < 10) {
				context.fillStyle = '#FF0000';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
				context.fillStyle = '#000000';
				context.fillText(''+d, i*20+8, j*20+12);
			}
			else if (map[i][j] > 0) {
				context.fillStyle = 'white';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
			}
			else {
				context.fillStyle = '#CCCCCC';
				context.fillRect(i * 20, j * 20, (i+1)*20, (j+1)*20);
			}
		}
	}
}

var bullets = [];
var sphereMaterial = new t.MeshBasicMaterial({color: 0x333333});
var sphereGeo = new t.SphereGeometry(2, 6, 6);
function createBullet(obj) {
	if (obj === undefined) {
		obj = cam;
	}
	var sphere = new t.Mesh(sphereGeo, sphereMaterial);
	sphere.position.set(obj.position.x, obj.position.y * 0.8, obj.position.z);

	if (obj instanceof t.Camera) {
		var vector = new t.Vector3(mouse.x, mouse.y, 1);
		projector.unprojectVector(vector, obj);
		sphere.ray = new t.Ray(
				obj.position,
				vector.subSelf(obj.position).normalize()
		);
	}
	else {
		var vector = cam.position.clone();
		sphere.ray = new t.Ray(
				obj.position,
				vector.subSelf(obj.position).normalize()
		);
	}
	sphere.owner = obj;
	
	bullets.push(sphere);
	scene.add(sphere);
	
	return sphere;
}


function onDocumentMouseMove(e) {
	e.preventDefault();
	mouse.x = (e.clientX / WIDTH) * 2 - 1;
	mouse.y = - (e.clientY / HEIGHT) * 2 + 1;
}

$(window).resize(function() {
	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;
	ASPECT = WIDTH / HEIGHT;
	if (cam) {
		cam.aspect = ASPECT;
		cam.updateProjectionMatrix();
	}
	if (renderer) {
		renderer.setSize(WIDTH, HEIGHT);
	}
	$('#intro, #hurt').css({width: WIDTH, height: HEIGHT,});
});

$(window).focus(function() {
	if (controls) controls.freeze = false;
});
$(window).blur(function() {
	if (controls) controls.freeze = true;
});

function getRandBetween(lo, hi) {
 return parseInt(Math.floor(Math.random()*(hi-lo+1))+lo, 10);
}

 document.getElementById("startOrStopImg").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};



