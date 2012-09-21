
	var point = function(){
			
		this.reset();

		this.inst = canvas.inst().circle(0, 0, 0)
			.attr('fill', 'white')
			.attr('stroke', 0);

		this.move();

	};

	point.prototype.reset = function(){
		this.X = this.rnd(canvas.width());
		this.Y = this.rnd(canvas.height());
		this.R = 1;
		this.O = 0;
	};

	point.prototype.move = function(){
		this.inst.attr('cx', this.X);
		this.inst.attr('cy', this.Y);
		this.inst.attr('r', this.R);
		this.inst.attr('fill-opacity', this.O);		
	};

	point.prototype.outOfBounds = function(){
		return (this.X > canvas.width() || this.X < 0) || (this.Y > canvas.height() || this.Y < 0);
	};

	point.prototype.tick = function(){
		
		if(this.outOfBounds()){
			
			this.reset();
						
		} else {

			var relative = this.translate('relative', {
				x: this.X, 
				y: this.Y
			});

			relative.x *= 1.15;
			relative.y *= 1.15;

			this.R *= 1.1;
			this.O += 0.2;

			var absolute = this.translate('absolute', relative);

			this.X = absolute.x;
			this.Y = absolute.y;

		}

		this.move();

	};

	point.prototype.translate = function(type, XY){
		var o;
		switch(type){
			case 'relative':
				o = {
					x: XY.x - camera.X(),
					y: XY.y - camera.Y()
				};
			break;
			case 'absolute':
				o = {
					x: camera.X() + XY.x,
					y: camera.Y() + XY.y 
				};
			break;
		}
		return o;
	};

	point.prototype.rnd = function(m){
		return Math.round(Math.random()*( m || 1 ))
	}