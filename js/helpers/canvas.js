$(function() {
	function sketchProc(processing) {
		var P = processing;
		var b = P.PImage;
		var bgcolor = 222;
		
		var cX = 0;
		var cY = 0;
		var cRadius = 40;
		
		var hover = false;
		
		//DEFAULT SETUP FUNCTION
		P.setup = function() {
			P.size(1024, 768);
			cX = P.width / 2;  
  			cY = P.height / 2;
  			// @pjs preload must be used to preload the image
   			/* @pjs preload="/images/CN70_360Tour_025T.jpg"; */
    		b = P.loadImage("/images/CN70_360Tour_025T.jpg");
		}
		//DEFAULT DRAW FUNCTION (loops every 60sec by default)	 
		P.draw = function() {	
			// RESETS THE BACKGROUND
			P.background(bgcolor);
			
			//DETECT HOVER
			if (P.mouseX > cX-cRadius && P.mouseX < cX+cRadius && P.mouseY > cY-cRadius && P.mouseY < cY+cRadius) {
				hover = true;
			}
			
			if (hover) {
				if (cRadius < 70) {
					cRadius = cRadius + 1;
				} else {
					cRadius = 70;
				}
			} else {
				if (cRadius >= 70) {
					cRadius = cRadius - 1;
				} else {
					cRadius = 40;
				}
			}
			
			/*
P.mouseDragged = function() {
				cX = P.mouseX;
				cY = P.mouseY;
			}
*/
			//cRadius = cX * 1;
			var stroke = cY / 2;
		
			//Draw a circle
			P.strokeWeight(2);
			P.ellipse(cX, cY, cRadius, cRadius);
			
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