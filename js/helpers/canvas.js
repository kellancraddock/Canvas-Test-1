$(function() {

	function sketchProc(processing) {
		/* GLOBAL SKETCH VARS */
		var P = processing;
		var b = P.PImage;
		var bgcolor = 222;
		var displayObjs = new Array();
		var mousePressed = false;
		
		/* SKETCH OBJECTS */
		function CircleObj(options) {
			var self = this;
			//Defaults
			this.defaults = {
				radius: 80,
				hover: false,
				drag: false,
				posX: 0,
				posY: 0
			}
			//Extend the default options obj
			this.options = $.extend(true, {}, self.defaults, options);
			
			this.init = function() {
				self.display();
			}
			
			this.display = function() {
				//Draw a circle
				P.strokeWeight(2);
				P.ellipse(self.options.posX, self.options.posY, self.options.radius, self.options.radius);
				self.detectHover();
				self.detectDrag();
			}
			
			this.detectHover = function() {
				if (P.mouseX > self.options.posX-self.options.radius && P.mouseX < self.options.posX+self.options.radius && P.mouseY > self.options.posY-self.options.radius && P.mouseY < self.options.posY+self.options.radius) {
					self.options.hover = true;
					self.mouseOver();
				} else {
					self.options.hover = false;
					self.mouseOut();
				}
			}
			
			this.detectDrag = function() {
				if (mousePressed && self.options.hover || mousePressed && self.options.drag) {
					self.options.drag = true;
					self.mouseDrag();
				} else {
					self.options.drag = false;
				}
			}
			
			this.mouseOver = function() {
				
			}
			
			this.mouseOut = function() {
				
			}
			
			this.mouseDrag = function() {
				self.options.posX = P.mouseX;
				self.options.posY = P.mouseY;
			}
			
			
			
			this.init();
		}
		
		/* DEFAULT SETUP FUNCTION */
		P.setup = function() {
			P.size(1024, 768);
			P.mousePressed = function() {
				mousePressed = true
			}
			
			P.mouseReleased = function() {
				mousePressed = false;
			}
			
			displayObjs.push(new CircleObj());
			displayObjs.push(new CircleObj({posX: 50, radius: 200}));
			
  			// @pjs preload must be used to preload the image
   			/* @pjs preload="/images/CN70_360Tour_025T.jpg"; */
    		b = P.loadImage("/images/CN70_360Tour_025T.jpg");
		}
		
		/* DEFAULT DRAW FUNCTION (loops every 60sec by default) */	 
		P.draw = function() {
			//Background
			P.background(bgcolor);
			
			//Loop through and display objs
			for (i in displayObjs) {
		  		displayObjs[i].display();
		 	}
			
			//Draw image
			P.tint(255, 128);
   			P.image(b, 10, 10);
    		P.image(b, 10, 10, 100, 100);
		};
	}	 
		
	var canvas = document.getElementById("canvas1"); 
	// attaching the sketchProc function to the canvas	 
	var processingInstance = new Processing(canvas, sketchProc);
});