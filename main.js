objects=[];
Status="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(475,200)
}
var video="";
function preload(){
    video=loadImage("avatar.jpg");
}
img="";
function preload(){
    img=loadImage("download.jpg")
}
function draw(){
image(img,0,0,600,420)
if(Status!="")
for(i=0;i<objects.length;i++)
{document.getElementById("status").innerHTML="status:objectDetected;"
fill("#ff0000");
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y+15)
}
}
function gotResult(){
    if(error)
    {console.log(error)}
    else{
        console.log(results)
    }
}