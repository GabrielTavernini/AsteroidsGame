var ship;
var asteroidsN = 10;
var asteroids = [];
var projectiles = [];

var gameOver = false;

function setup() {
	createCanvas(windowWidth - 15, windowHeight - 15);
	ship = new spaceShip();

	for(let j = 0; j < asteroidsN; j++){
		asteroids[j] = new asteroid();
	}
}

function draw() {

	if(!gameOver){
		if(asteroids.length > 0){
			background(51);

			for(let j = 0; j < asteroids.length; j++){
				if(ship.hits(asteroids[j]))
					gameOver = true;
				asteroids[j].show();
			}
		
			for(let i = projectiles.length - 1; i >= 0; i--){
				projectiles[i].show();
				if(projectiles[i].hitEdge()){
					projectiles.splice(i,1);
				}else{
					for(let j = asteroids.length - 1; j >= 0; j--){
						if(projectiles[i].hits(asteroids[j])){
							if(asteroids[j].radius > 15){
								let newAsteroids = asteroids[j].breakup();
								asteroids.push(newAsteroids[0]);
								asteroids.push(newAsteroids[1]);
							}
							
							projectiles.splice(i,1);
							asteroids.splice(j,1);
							break;
						}
					}
				}
			}
		}else{
			background(60, 244, 160);
		}
	}else{
		background(224, 107, 68);
	}
	
	


	ship.show();
	handlePaddles();
}

function handlePaddles() {
	/* player two controls */
	
	if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
		ship.forward();
	}
	
	if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
		ship.backward();
	}
	
	if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
		ship.right();
	}
	
	if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
		ship.left();
	}
}

function keyPressed(){
	if(keyCode === 32 && !gameOver && asteroids.length > 0){
		projectiles.push(ship.shot());
	}
}