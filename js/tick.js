	var fps = 18;
		
	var tick = function(){
		setTimeout(function(){
			$(things).each(function(){
				this.tick();
			});
			tick();		
		}, 1000/fps)
	}
