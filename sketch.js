function setup() {
    createCanvas(600, 600);
    background(220);
  }
  
  function draw() {
    stroke("#009688");
    fill("rgb(184,8,8)");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }