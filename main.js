noseX=0
noseY=0
function preload(){
  bogode=loadImage("bogode.png")
}
function draw(){
  image(video,0,0,300,300)
  image(bogode,noseX,noseY,50,50)
}
function setup(){
  canvas=createCanvas(300,300)
  canvas.center()
  video=createCapture(VIDEO)
  video.size(300,300)
  video.hide()
  poseNet=ml5.poseNet(video,modelload)
  classifier=ml5.imageClassifier("MobileNet",modelload)
  poseNet.on("pose",gotPose)
}
function takeSnapshot(){
  save("Miguel_é_o_aquamem.png")
}
function modelload(){
  console.log("modelo carregado")
}
function gotPose(results){
  console.log(results)
  noseX=results[0].pose.nose.x-25
  noseY=results[0].pose.nose.y-10
}