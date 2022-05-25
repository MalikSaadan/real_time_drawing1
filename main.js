noseX=0;
noseY=0;
leftwrist=0
rightwrist=0
squarelenth=0

function setup(){
    video=createCapture(VIDEO)
    video.size(500,500)
    canvas=createCanvas(500,500)
    canvas.position(550,120)
    poseNet=ml5.poseNet(video,model_loaded)
    poseNet.on('pose',gotpose)
}

function model_loaded(){
    console.log('model_is_loaded')
}

function gotpose(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        leftwrist=results[0].pose.leftWrist.x
        rigthwrist=results[0].pose.rightWrist.y
        squarelenth=floor(leftwrist-rightwrist)        

    }
}

function draw(){
    background("#00C8FF")
    fill("#364789")
    stroke("#098765")
    square(noseX,noseY,squarelenth)
}

