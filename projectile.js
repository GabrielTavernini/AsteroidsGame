class projectile{
	constructor(x, y, d){
		this.position = createVector(x ,y);
		this.direction = d;
		this.velocity = createVector(0,0);
		this.velocity.x -= Math.cos((this.direction*Math.PI*2)/360)*10;
		this.velocity.y -= Math.sin((this.direction*Math.PI*2)/360)*10;
	}

	show(){
		this.position.add(this.velocity);
		push();
		fill(255);
		ellipse(this.position.x, this.position.y, 5);
		pop();
	}
	

	hits(ast){
		let d = dist(this.position.x, this.position.y, ast.pos.x, ast.pos.y);
		if(d <= ast.radius)
			return true;
		return false;
	}

	hitEdge(){
		if(this.position.x >= width || this.position.x <= 0 || this.position.y >= height || this.position.y <= 0){
			return true;
		}

		return false;
	}
}