class asteroid{
	constructor(pos, radius){
		this.vel = p5.Vector.random2D();
		this.vertexN = random(8,15);

		if(pos)
			this.pos = pos.copy();
		else
			this.pos = createVector(random(0, width), random(0, height));

		if(radius)
			this.radius = radius;
		else
			this.radius = random(20,50);

		this.offset = [];
		for(let i = 0; i<this.vertexN; i++){
			this.offset[i] = random( -(this.radius/4), this.radius/4);
		}
	}

	breakup(){
		let newAst = [];
		newAst[0] = new asteroid(this.pos, this.radius/2);
		newAst[1] = new asteroid(this.pos, this.radius/2);
		return newAst;
	}

	show(){
		this.pos.add(this.vel);

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
		stroke(255);
		translate(this.pos.x, this.pos.y);

		beginShape();
		for(let i = 0; i<this.vertexN; i++){
			let angle = map(i,0,this.vertexN,0,TWO_PI);
			let x = (this.radius + this.offset[i]) * cos(angle);
			let y = (this.radius + this.offset[i]) * sin(angle);
			vertex(x, y);
		}
		endShape(CLOSE);

		pop();
	}
}