class spaceShip{
	constructor(){
		this.pos = createVector(width/2, height/2);
		this.vel = createVector(0,0);
		this.angularVelocity = 0;
		this.direction = 90;
		this.radius = 13;
	}

	forward(){
		this.vel.x -= Math.cos((this.direction*Math.PI*2)/360);
		this.vel.y -= Math.sin((this.direction*Math.PI*2)/360);
	}

	backward(){
		//this.vel.x += Math.cos((this.direction*Math.PI*2)/360);
		//this.vel.y += Math.sin((this.direction*Math.PI*2)/360);
	}

	right(){
		this.angularVelocity += 0.5;
	}

	left(){
		this.angularVelocity -= 0.5;
	}

	shot(){
		return new projectile(this.pos.x, this.pos.y, this.direction);
	}

	hits(ast){
		let d = dist(this.pos.x, this.pos.y, ast.pos.x, ast.pos.y);
		if(d <= this.radius + ast.radius)
			return true;
		return false;
	}

	show(){
		this.pos.add(this.vel);
		this.direction += this.angularVelocity;
		this.vel.mult(0.90);
		this.angularVelocity *= 0.90;

		if(this.pos.x >= width){
			this.pos.x = 0;
		}else if(this.pos.x <= 0){
			this.pos.x = width;
		}

		if(this.pos.y >= height){
			this.pos.y = 0;
		}else if(this.pos.y <= 0){
			this.pos.y = height;
		}

		push();
		noFill();
		strokeWeight(2);
		stroke(255);
		translate(this.pos.x, this.pos.y);
		rotate(((this.direction-90)*Math.PI*2)/360);
		triangle(-this.radius, this.radius, this.radius, this.radius, 0, -this.radius);
		pop();
	}
}