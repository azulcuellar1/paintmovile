var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
color = "black";
ctx.lineWidth=1;


var mouseEvent="empty";
var last_position_x,last_position_y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e){
mouseEvent="mouseDown";

}
canvas.addEventListener("mousemove", my_mousemove);

if (width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";

    }
    canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    last_position_x=e.touhes[0].clientX-canvas.offsetLeft
    last_position_y=e.touhes[0].clientY-canvas.offsetLeft
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    posicion_continua_x = e.touches[0].clientX- canvas.offsetLeft;
    posicion_continua_y = e.touches[0].clientY - canvas.offsetTop;

}


