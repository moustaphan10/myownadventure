var textX=0;
var diam=5;

function setup(){
    createCanvas(600,400);
   // background(150,10,150);
}

function draw(){
   background(150,10,150);
    fill(255,0,0);
    stroke(216,220,200);
    strokeWeight(0);
    textSize(50);
    textFont("Georgia");
    textStyle(BOLD);
    textAlign(CENTER);
    text('Bonjour',textX,height/2);
    //textX=textX+5;
    if(textX>600){
        textX=0;
    }else{
        textX=textX+3;
    }
fill(255,255,0);    
strokeWeight(5);
ellipse(width/2,height/2,diam,diam);
    fill(255,80,50);
ellipse(150,200,diam,diam);
    fill(255,0,200);
ellipse(350,300,diam,diam);
if(diam>150){
diam=5;}else{
diam=diam+5;
}
}