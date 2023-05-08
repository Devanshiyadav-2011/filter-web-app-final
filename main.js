noseX=0;
noseY=0;


function preload() {  
    clown_nose = loadImage('https://i.postimg.cc/ydbR3RhH/59cfc2c6d3b1936210a5ddbd.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 40, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-9;
    noseY = results[0].pose.nose.y+30;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}
