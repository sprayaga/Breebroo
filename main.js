function setup(){
    canvas=createCanvas(420,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,420,250);
}