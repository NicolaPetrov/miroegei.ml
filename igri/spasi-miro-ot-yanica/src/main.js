var c = document.createElement("canvas");
var ctx = c.getContext("2d");

var screenWidth = 500;
var screenHeight = 800;
c.width = screenWidth;
c.height = screenHeight;
document.body.appendChild(c);

window.addEventListener('keydown',this.keydown,false);
window.addEventListener('keyup',this.keyup,false);

const gravity = 0.34;
var holdingLeftKey = false;
var holdingRightKey = false;
var keycode;
var dead = false;
var difficulty = 0;
var lowestBlock = 0;
var score = 0;
var yDistanceTravelled = 0;

var blocks = [];
var powerups = [];

var fps = 60;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

function keydown(e) {
    if (e.keyCode === 65) {
        holdingLeftKey = true;
    }   else if (e.keyCode === 68) {
        holdingRightKey = true;
    }

    if (e.keyCode === 82 && dead) {
        blocks = [];
        lowestBlock = 0;
        difficulty = 0;
        score = 0;
        yDistanceTravelled = 0;
        player.springBootsDurability = 0;

        blocks.push(new block);
        blocks[0].x = 300;
        blocks[0].y = 650;
        blocks[0].monster = 0;
        blocks[0].type = 0;
        blocks[0].powerup = 0;

        blockSpawner();
        
        player.x = 300;
        player.y = 550;


        dead = false;
    }
}

function keyup(e) {
    if (e.keyCode === 65) {
        holdingLeftKey = false;
    } else if (e.keyCode === 68) {
        holdingRightKey = false;
    }
}

function showScore(){

    ctx.font = "36px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(score, 15, 40); 
}

blocks.push(new block);
blocks[0].x = 300;
blocks[0].y = 650;
blocks[0].monster = 0;
blocks[0].type = 0;
blocks[0].powerup = 0;

blockSpawner();

function loop() {
    requestAnimationFrame(loop);

    now = Date.now();
    delta = now - then;
     
    if (delta > interval) {
        var backgroundImage = new Image();
        backgroundImage.src = "Sprites/background.png";
        ctx.drawImage(backgroundImage, 0, 0, screenWidth, screenHeight) 

        for (var i = 0; i < blocks.length; i++) {
            if (blocks[i] !== 0) {
                blocks[i].update();
                blocks[i].draw();
            }
        }

        player.update();
        player.draw();

        showScore();

        ctx.fill();
        then = now - (delta % interval);
    }
}

loop();

function block() {
    this.x;
    this.y;
    this.width = 100;
    this.height = 15;
    this.powerup;
    this.type;
    this.monster;
    this.direction = "right";
    this.moveTime = 10;

    this.draw = function() {
        if (this.type === "break") {
            ctx.fillStyle = "#876537";
        } else if (this.type === "sideways") {
            ctx.fillStyle = "#14a7c8";
        } else {
            ctx.fillStyle = "#6fbb1d";
        }

        if (this.monster === 0) {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } else {
            monsterFunctions[this.monster].draw(this.x, this.y);
        }

        if (this.powerup === "spring") {
            ctx.fillStyle = "grey";
            ctx.fillRect(this.x + 35, this.y - 10, 30, 10);
        } else if (this.powerup === "springBoots") {
            ctx.fillStyle = "black";
            ctx.fillRect(this.x + 30, this.y - 25, 15, 10);
            ctx.fillRect(this.x + 53, this.y - 25, 15, 10);  
            ctx.fillStyle = "grey";
            ctx.fillRect(this.x + 30, this.y - 15, 15, 15);
            ctx.fillRect(this.x + 53, this.y - 15, 15, 15);
        }
    }

    this.update = function() {
        if (this.type === "sideways") {
            if (this.x >= screenWidth - this.width) {
                this.direction = "left";
            } else if (this.x <= 0) {
                this.direction = "right";
            }

            if (this.direction === "right") {
                this.x += 2.5;
            } else {
                this.x -= 2.5;
            }
        }

        if (this.monster === "smallRed") {
            if (this.direction === "right") {
                this.x += 1;
                this.moveTime -= 1;

                if (this.moveTime === 0) {
                    this.direction = "left";
                    this.moveTime = 10;
                }
            } else {
                this.x -= 1;
                this.moveTime -= 1;

                if (this.moveTime === 0) {
                    this.direction = "right";
                    this.moveTime = 10;
                }
            }
        }
    }
}

function blockSpawner() {
    if (lowestBlock === 0) {
        var i = 1;
    } else {
        var i = lowestBlock;
    }

    for (i; i < lowestBlock + 60; i++) {
        if (i >= blocks.length) {
            blocks.push(new block);

            if (blocks[i-1].type === "break") {
                blocks[i].type = 0;
            } else {
                blocks[i].type = spawnBlock();
            }
    
            blocks[i].powerup = 0;
            blocks[i].monster = 0;
    
            if (blocks[i].type === 0) {
                blocks[i].powerup = spawnPowerup();
    
                if (blocks[i].powerup === 0) {
                    blocks[i].monster = spawnMonster();
                }
            }
    
            blocks[i].x = Math.random()*(screenWidth - blocks[i].width);
    
            if (blocks[i].type === "break" || blocks[i-1].type === "break") {
                blocks[i].y = (blocks[i-1].y) - (((Math.random()*(80 + (difficulty * 25))) + 30) / 2);
            } else if (blocks[i].monster !== 0) {
                blocks[i].y = (blocks[i-1].y) - ((Math.random()*(80 + (difficulty*25)))+50);
            }  else if (blocks[i-1].monster !== 0) {
                blocks[i].y = (blocks[i-1].y) - ((Math.random()*(80 + (difficulty*25)))+50);
            }
            else {
                blocks[i].y = (blocks[i-1].y) - ((Math.random()*(80 + (difficulty*25)))+30);
            }
        } 
    }

    for (var i = 0; i < lowestBlock - 2; i++) {
        blocks.shift();
    }
}

function spawnBlock() {
    var blockChances = {
        "break": 15,
        "sideways": Math.round(10 / difficulty)
    };

    if (Math.round(Math.random() * blockChances["break"]) === 0) {
        return "break";
    } else if (Math.round(Math.random() * blockChances["sideways"]) === 0) {
        return "sideways";
    }
    return 0;
}

function spawnMonster() {
    var monsterChances = {
        "smallRed": 30
    };

    if (Math.round(Math.random() * monsterChances["smallRed"]) === 0) {
        return "smallRed";
    }
    return 0;
}

var smallRed = new function() {
    this.img = new Image();
    this.img.src = "Sprites/Monsters/smallRed.png";
    this.xDif = 10;
    this.yDif = -30;
    this.width = 69;
    this.height = 60;

    this.draw = function(blockX, blockY) {
        ctx.drawImage(this.img, blockX + this.xDif, blockY + this.yDif, this.width, this.height);
    }
}

var monsterFunctions = {
    "smallRed": smallRed
}

var player = new function() {
    this.x = 300;
    this.y = 550;
    this.img = new Image();
    this.img.src = "Sprites/rightPlayer.png";
    this.width = 80;
    this.height = 80;
    this.xSpeed = 6.7;
    this.ySpeed = 0;
    this.springBootsDurability = 0;
    this.direction = "left";

    this.update = function() {
        if (!dead) {
            this.ySpeed += gravity;
            if (this.y <= screen.height / 2 - 200 && this.ySpeed <= 0) {
                for (var i = 0; i < blocks.length; i++) {
                    blocks[i].y -= this.ySpeed;
                }
            } else {
                this.y += this.ySpeed;
            }
            yDistanceTravelled -= this.ySpeed;
        } else {
            ctx.font = "50px Arial";
            ctx.fillStyle = "darkred";
            ctx.textAlign = "center";
            ctx.fillText("Бахти балъка умря!", screenWidth / 2, screenHeight / 2); 
            ctx.font = "26px Arial";
            ctx.fillText("натисни R, за да рестартираш", screenWidth / 2, (screenHeight / 2) + 50);
        }

        if (holdingLeftKey) {
            this.direction = "left";
            this.img.src = "Sprites/leftPlayer.png";
            player.moveLeft();
        }
        if (holdingRightKey) {
            this.direction = "right";
            this.img.src = "Sprites/rightPlayer.png";
            player.moveRight();
        }

        for (var i = 0; i < blocks.length; i++) {
            if (this.ySpeed >= 0) {
                if (this.x >= blocks[i].x - this.width + 15 && this.x <= blocks[i].x + blocks[i].width - 15 &&
                    this.y >= blocks[i].y - this.height && this.y <= blocks[i].y + blocks[i].height - this.height) {
                    score+=1;
                    if (blocks[i].type === "break") {
                        blocks[i] = 0;
                        score+=1;
                    } else if (blocks[i].monster !== 0) {
                        this.jump(blocks[i].powerup, blocks[i].type);
                        blocks[i] = 0;
                    } else {
                        this.jump(blocks[i].powerup, blocks[i].type);
                    }
                }
            } 
            if (this.y > blocks[i].y) {
                if (blocks[i].monster !== 0 && blocks[i].monster !== undefined) {
                    if (this.x >= blocks[i].x - this.width + 15 && this.x <= blocks[i].x + blocks[i].width - 15 &&
                        this.y >= blocks[i].y - blocks[i].height && this.y <= blocks[i].y + blocks[i].height) {
                        dead = true;
                    }
                }
            }
        }


        for (var i = blocks.length-1; i > 0; i--) {
            if (blocks[i].y > screenHeight) {
                lowestBlock = i+1;
                break;
            }
        }

        if (this.y >= blocks[lowestBlock].y) {
            dead = true;
        }

        if (lowestBlock >= 45) {
             
            if (difficulty < 6) {
                difficulty += 1;
            }
            blockSpawner();
        }
    }
    
    this.jump = function(powerup, type) {
        this.ySpeed = -13.2;

        if (powerup === "springBoots") {
            this.springBootsDurability = 6;
        }
        
        if (type === 0) {
            if (powerup === "spring") {
                this.ySpeed = -20;
            } 
        }

        if (this.springBootsDurability !== 0) {
            this.ySpeed = -20;
            this.springBootsDurability -= 1;
        }  
    }

    this.moveLeft = function() {
        this.x -= this.xSpeed;
        if (this.x <= -this.width) {
            this.x = screenWidth;
        }
    }

    this.moveRight = function() {
        this.x += this.xSpeed;
        if (this.x >= screenWidth) {
            this.x = -this.width;
        }
    }

    this.draw = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        if (this.springBootsDurability !== 0) {
            if (this.direction === "right") {
                ctx.fillStyle = "black";
                ctx.fillRect(this.x + 10, this.y + 66, 15, 10);
                ctx.fillRect(this.x + 33, this.y + 66, 15, 10);  
                ctx.fillStyle = "grey";
                ctx.fillRect(this.x + 10, this.y + 76, 15, 15);
                ctx.fillRect(this.x + 33, this.y + 76, 15, 15);
            } else {
                ctx.fillStyle = "black";
                ctx.fillRect(this.x + 30, this.y + 66, 15, 10);
                ctx.fillRect(this.x + 53, this.y + 66, 15, 10);  
                ctx.fillStyle = "grey";
                ctx.fillRect(this.x + 30, this.y + 76, 15, 15);
                ctx.fillRect(this.x + 53, this.y + 76, 15, 15);
            }
        }
    }
}

function spawnPowerup() {
    var powerupChances = {
        "spring": 20,
        "springBoots": 80,
        "flyingHat": 80,
        "rocket": 120
    };

    if (Math.round(Math.random() * powerupChances["spring"]) === 0) {
        return "spring";
    } else if (Math.round(Math.random() * powerupChances["springBoots"]) === 0) {
        return "springBoots";
    }
    return 0;
}

document.getElementById("startOrStopImg").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
}
