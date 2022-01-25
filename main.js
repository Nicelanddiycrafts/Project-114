noseX = 0
noseY = 0
noseXE = 0
noseYE = 0

function preload(){
koala_ears = loadImage("https://i.postimg.cc/kX1b58k1/image-removebg-preview-1.png");
koala_nose = loadImage("https://i.postimg.cc/sDXMbxvp/image-removebg-preview-2.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(koala_ears,noseXE,noseYE,50,50);
    image(koala_nose,noseX,noseY,50,50);
}

function take_snapshot(){
    save("Koala.png");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x -25;
    noseY = results[0].pose.nose.y -20;
    noseXE = results[0].pose.nose.x -30;
    noseYE = results[0].pose.nose.y -100;
}
}

function modelLoaded(){
console.log('model is loaded');
}