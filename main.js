video = "";
status = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
}

function draw(){
    image(video,0,0,400,400);
}

function start(){
    object_detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
}

function modelLoaded(){
    console.log("moadel is loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}