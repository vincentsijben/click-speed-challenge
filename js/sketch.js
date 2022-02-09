
let start = false;
let startTime;
let elapsedTime = 0;
let clicks = 0;
let firstClick = true;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240);
    textSize(14);
    textAlign(CENTER);
    text("How fast can you click in 5 seconds? Note: Clock starts ticking with the first click.", width/2, 50);
    text("Refresh the page to start over.", width/2, 75);
} 

function draw() {
  

    // do not start the timer immediately
    // wait for first click;
    if (start) {
        
        elapsedTime = millis() - startTime;
        
        if (elapsedTime > 5000) {
            background("black");
            fill(255);
            start = !start;
            let cps = clicks / 5;
            textSize(40);
            text("Your Score: " + cps + " CPS", width / 2, 200);

        } else {
            background(240);
            
            textAlign(CENTER);
    fill(0);
    textSize(15);
    text(nf(elapsedTime, 2), width / 2, height / 2);
    textSize(40);
    text(clicks, width / 2, height - 200);
        }
    } 




    
}
function mousePressed() {
    // only do this once
    
    if(firstClick){
        start=true;   
        startTime = millis();
        firstClick = false;
    }
    if (start) clicks++;
}
