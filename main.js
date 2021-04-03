canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
images=["img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg"];
random=Math.floor(Math.random()*4);
console.log(random);
roverWidth=100;
roverHeight=90;
roverX=10;
roverY=10;
roverimage="rover.png";
canvasbg=images[random];
console.log("bgimageis "+canvasbg);

function add(){
bgimage=new Image();
bgimage.onload=uploadbackground;
bgimage.src=canvasbg;
roverimg=new Image();
roverimg.onload=uploadrover;
roverimg.src=roverimage;
}

function uploadbackground(){
ctx.drawImage(bgimage, 0, 0, canvas.width, canvas.height);

}
function uploadrover(){
ctx.drawImage(roverimg, roverX, roverY, roverWidth, roverHeight);

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypress=e.keyCode;
if(keypress=='38')
{
up();
console.log("Anshul just pressed the up key")
}
if(keypress=='40')
{
down();
console.log("Anshul just pressed the down key")
}
if(keypress=='37')
{
left();
console.log("Anshul just pressed the left key")
}
if(keypress=='39')
{
right();
console.log("Anshul just pressed the right key")
}
}
function up()
{
if(roverY>=0)
{
    roverY=roverY-10;
uploadbackground();
uploadrover();
}
}
function down()
{
if(roverY<=500)
{
    roverY=roverY+10;
uploadbackground();
uploadrover();
}
}
function left()
{
if(roverX>=0)
{
    roverX=roverX-10;
uploadbackground();
uploadrover();
}
}
function right()
{
if(roverX<=700)
{
    roverX=roverX+10;
uploadbackground();
uploadrover();
}
}
