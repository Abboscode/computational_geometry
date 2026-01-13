import { Nail } from "./points_and_lines.js"; 

const NAIL_COUNT = 100;

function draw() {
  const canvas = document.getElementById("canvas");
  if (!canvas) return; // Safety check
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const nails = [];
  for (let i = 0; i < NAIL_COUNT; i++) {
   
    const x = Math.random() * canvas.width/2;
    const y = Math.random() * canvas.height/2;
    nails.push(new Nail(x, y));
  }

   ctx.fillStyle = "black";
  ctx.strokeStyle = "red";

  nails.forEach((nail) => {
    ctx.strokeRect(nail.x+100, nail.y+100, 9, 9);
    ctx.fillRect(nail.x+100, nail.y+100, 9, 9);
  });
}

draw();