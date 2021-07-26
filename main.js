last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
   function my_touchmove(e)
   {
       current_position_of_touch_x e.touches[0].clientX - canvas.offsetLeft;
       current_position_of_touch_y e.touches[0].clientX - canvas.offsetTop;
       ctx.beginPath();
      ctx.strokeStyle - color;
      ctx.lineWidth - width_of_line
      ctx.moveTo(last_poasition_of_touch_x, last_poasition_of_touch_y);
      ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
      ctx.stroke();
   }
   
   last_poasition_of_touch_x = current_position_of_touch_x;
   last_poasition_of_touch_y = current_position_of_touch_y;

