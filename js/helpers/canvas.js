$(function() {
	function sketchProc(processing) {
		var P = processing;
		var b = P.PImage;
		//DEFAULT SETUP FUNCTION
		P.setup = function() {
			P.size(1024, 768);
			mX = P.width / 2;  
  			mY = P.height / 2;
  			// @pjs preload must be used to preload the image
   			/* @pjs preload="/images/CN70_360Tour_025T.jpg"; */
   			/* var b = P.PImage; */
    		b = P.loadImage("/images/CN70_360Tour_025T.jpg");
		}
		//DEFAULT DRAW FUNCTION (loops every 60sec by default)	 
		P.draw = function() {	
			// determine center and max clock arm length	
			var centerX = P.width / 2, centerY = P.height / 2;	
			var maxArmLength = Math.min(centerX, centerY);
			
				
		
			function drawArm(position, lengthScale, weight) {	 
				P.strokeWeight(weight);	 
				P.line(centerX, centerY,  
					 centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,	
					 centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);	 
					 
				/*
P.strokeWeight(10);
				P.ellipse(55, 55, 55, 55);
*/
			}
			
			P.mouseDragged = function() {
				mX = P.mouseX;
				mY = P.mouseY;
			}
			var radius = mX * 1;
			var stroke = mY / 2;
		
			// RESETS THE BACKGROUND
			P.background(224);	 
			
			//Draw a circle
			P.strokeWeight(stroke);
			P.ellipse(mX, mY, radius, radius);
			
			//Draw image
			P.tint(255, 128);
   			P.image(b, 10, 10);
    		P.image(b, 10, 10, 100, 100);
			
			var now = new Date();	 
		
			// Moving hours arm by small increments	 
			var hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;	 
			drawArm(hoursPosition, 0.5, 5);	 
		
			// Moving minutes arm by small increments	 
			var minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;	
			drawArm(minutesPosition, 0.80, 3);	
		
			// Moving hour arm by second increments	 
			var secondsPosition = now.getSeconds() / 60;	
			drawArm(secondsPosition, 0.90, 1);
		
		};	
	}	 
		
	var canvas = document.getElementById("canvas1"); 
	// attaching the sketchProc function to the canvas	 
	var processingInstance = new Processing(canvas, sketchProc);
});