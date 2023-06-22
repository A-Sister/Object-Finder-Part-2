status = "";

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(700,300);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0,0,500,500);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects!";
    Input = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
