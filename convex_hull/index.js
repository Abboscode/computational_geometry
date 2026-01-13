import { Nail } from "./points_and_lines.js"; 
const canvas = document.getElementById("canvas");
const NAIL_COUNT = 100;
const center={x:400,y:400};
const radius=200;
const BOUND_X=Math.cos(Math.PI)+center.x;
const BOUND_Y=Math.sin(Math.PI)+center.y;
function draw() {
  
  if (!canvas) return; // Safety check
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const nails = [];
  for (let i = 0; i < NAIL_COUNT; i++) {
   
    const x = Math.random() * canvas.width/2;
    const y = Math.random() * canvas.height/2;
    const distanceForomCenter = x*x + y*y;
    if(distanceForomCenter**0.5<radius){
    nails.push(new Nail(x, y));}
  }

   ctx.fillStyle = "black";
  ctx.strokeStyle = "red";

  nails.forEach((nail) => {
    ctx.strokeRect(nail.x+100, nail.y+400, 9, 9);
    ctx.fillRect(nail.x+100, nail.y+400, 9, 9);
  });
}

draw();