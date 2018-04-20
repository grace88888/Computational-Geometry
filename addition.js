var intersect = closestIntersect;
  // Draw red laser
  ctx.strokeStyle = "#dd3838";
  ctx.beginPath();
  ctx.moveTo(320,180);
  ctx.lineTo(intersect.x,intersect.y);
  ctx.stroke();

  X === 360 - (intersect.x)*(180 - intersect.y)/(360 - intersect.x)
  ctx.strokeStyle = "#dd3838";
  ctx.beginPath();
  ctx.moveTo(320,180);
  ctx.lineTo(0, X);
  ctx.stroke();
  
  // ORRRR
  //X === 360 - (intersect.x)*(180 - intersect.y)/(360 - intersect.x)
  ctx.strokeStyle = "#dd3838";
  ctx.beginPath();
  ctx.moveTo(intersect.x,360);
  ctx.lineTo(0,0);
  ctx.stroke();

//////PARALLELL HALF
var intersect = closestIntersect;
  // Draw red laser
  ctx.strokeStyle = "#dd3838";
  ctx.beginPath();
  ctx.moveTo(320,180);
  ctx.lineTo(intersect.x,intersect.y);
  
  ctx.stroke();

  X = 320 - (intersect.x)*(180 - intersect.y)/(320 - intersect.x)
  ctx.strokeStyle = "#dd3838";
  ctx.beginPath();
  ctx.moveTo(intersect.x,360);
  ctx.lineTo(0,X);
  ctx.stroke();
  ctx.fillStyle = "#dd3838";
  ctx.beginPath();
    ctx.arc(intersect.x, intersect.y, 4, 0, 2*Math.PI, false);
    ctx.fill();
