
function preload() {
  clown=loadImage('https://i.postimg.cc/kGCXKJBW/Clown-Nose-PNG-Image.png');
}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide(); 
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses);
}
function draw() {
  image(video,0,0,300,300);
  image(clown,nose_x,nose_y,30,30);
  //fill("yellow");
 // stroke("marineblue");
  //circle(nose_x,nose_y,20);
}
function take_snapshot(){    
  save('myFilterImage.png');
}
function modelLoaded() {
  console.log("Posenet starts");
}
function gotPoses (results) {
  if (results.length>0) {
    console.log(results);
    nose_x=results[0].pose.nose.x-10;
    nose_y=results[0].pose.nose.y-8;
    console.log("nose x= "+nose_x);
    console.log("nose y= "+nose_y);
  }
}
var nose_x=0;
var nose_y=0;
