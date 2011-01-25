$(function() {

	function sketchProc(processing) {
		/* GLOBAL SKETCH VARS */
		var P = processing;
		var b = P.PImage;
		var bgcolor = 222;
		var circle;
		
		/* DEFAULT SETUP FUNCTION */
		P.setup = function() {
			P.size(1024, 768);
  			// @pjs preload must be used to preload the image
   			/* @pjs preload="/images/CN70_360Tour_025T.jpg"; */
    		b = P.loadImage("/images/CN70_360Tour_025T.jpg");
		}
		
		/* SKETCH OBJECTS */
		function CircleObj() {
			var self = this;
			this.cRadius = 40;
			this.hover = false;
			this.cX = 0;
			this.cY = 0;
			
			this.init = function() {
				self.display();
				self.detectHover();
			}
			
			this.display = function() {
				//Draw a circle
				P.strokeWeight(2);
				P.ellipse(self.cX, self.cY, self.cRadius, self.cRadius);
			}
			
			this.detectHover = function() {
				if (P.mouseX > self.cX-self.cRadius && P.mouseX < self.cX+self.cRadius && P.mouseY > self.cY-self.cRadius && P.mouseY < self.cY+self.cRadius) {
					self.mouseOver();
				} else {
					self.mouseOut();
				}
			}
			
			this.mouseOver = function() {
				console.log('mouseover');
			}
			
			this.mouseOut = function() {
				console.log('mouseout');
			}
			
			this.init();
		}
		circle = new CircleObj();
		/* DEFAULT DRAW FUNCTION (loops every 60sec by default) */	 
		P.draw = function() {
			circle.display();
			// Reset bg
			P.background(bgcolor);
			//Detect hover
			
			
			/*
if (hover) {
				if (cRadius <= 70) {
					cRadius = cRadius + 4;
				}
			} else {
				if (cRadius >= 40) {
					cRadius = cRadius - 1;
				}
			}
*/
			
			P.mouseDragged = function() {
				cX = P.mouseX;
				cY = P.mouseY;
			}
			
			P.mouseClicked = function() {
				if (hover) {
					alert('clicked');
				}
			}
			//cRadius = cX * 1;
			/* var stroke = cY / 2; */
		
			//Draw a circle
			//P.strokeWeight(2);
			//P.ellipse(cX, cY, cRadius, cRadius);
			
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