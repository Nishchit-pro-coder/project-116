mustacheX=0;
mustacheY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/x1wqdGgV/mustache-removebg-preview.png');
}


function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) 
{
    if (results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x-40;
        mustacheY = results[0].pose.nose.y-15;
        console.log("mustache x = " + mustacheX);
        console.log("mustache y = " + mustacheY);
    }
}

function draw() {
    image(video, 0, 0, 640, 480);
    image(mustache, mustacheX, mustacheY, 80, 80);
}

function take_snapshot() {
    save('mustache_photo.png')
}