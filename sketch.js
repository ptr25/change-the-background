var r = 0;
var g = 0;
var b=25;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1200,400);
 
}


function draw(){
  // Use the map() function to do so. 
  // Pass the values to the background() function you have learnt previously.
 
  
  
  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
 r = mouseX;
 g = mouseX;
 b = mouseX;
background(rgb(r,g,b));
fill ("yellow");
ellipse(mouseX,200,100,100);

}
