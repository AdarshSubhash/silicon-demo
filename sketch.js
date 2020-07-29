var box1, pig1;
var backgroundImg,platform;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
  form=new Form();
  barber=new Barber();
}

function draw(){
    background(255);
 form.display();
 barber.go();
}
