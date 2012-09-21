	var canvas = (function(){

		var $window = $(window),	
			paper = Raphael(document.getElementById('paper'), $window.width(), $window.height()); 

		$window.resize(function(){
			paper.canvas["setAttribute"]("width", $window.width()); 
			paper.canvas["setAttribute"]("height", $window.height()); 
		});

		return {
			width: function(){
				return $window.width(); // paper.width;
			},
			height: function(){
				return $window.height();
			},
			inst: function(){
				return paper;	
			}
		}

	})(); 

	var things = [];