
import { Nail } from "./points_and_lines.js";
import { vector2Doperations } from "./points_and_lines.js";
const canvas = document.getElementById("canvas");
const NAIL_COUNT = 100;
const center = { x: 400, y: 400 };
const radius = 200;
const BOUND_X = Math.cos(Math.PI) + center.x;
const BOUND_Y = Math.sin(Math.PI) + center.y;
function draw() {

    if (!canvas) return; // Safety check
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nails = [];
 while (nails.length < NAIL_COUNT) {
        // Generate coordinates across the whole canvas
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        // Calculate distance from the actual center point {400, 400}
        const dx = x
        const dy = y 
        
        if (Math.sqrt(dx * dx + dy * dy) < radius) {
            nails.push(new Nail(x, y));
        }
    }

    nails.sort((a, b) => a.x -b.x|| a.y - b.y);
   const  upperHull = [];
    const lowerHull = [];

    for (let i = 0; i < nails.length; i++) {
        
        while (upperHull.length >= 2) {
            const p1 = upperHull[upperHull.length - 2];
            const p2 = upperHull[upperHull.length - 1];
            const p3 = nails[i];

            const v1={ x: p2.x - p1.x, y: p2.y - p1.y};
            const v2={ x: p3.x - p2.x, y: p3.y - p2.y};

                        if (vector2Doperations.crossProduct( v1,v2) <= 0) {
                upperHull.pop();
            }else{
                break;
            }

        }
        upperHull.push(nails[i]);

              


    }
    // for (let i = nails.length - 1; i > 2; i--) {


    //     const vector1 = { x: nails[i -1].x - nails[i].x, y: nails[i - 1].y - nails[i].y };
    //     const vector2 = { x: nails[i-2].x - nails[i - 1].x, y: nails[i-2].y - nails[i - 1].y };
    //     const orientation = vector2Doperations.crossProduct(vector1, vector2);

    //     if (orientation > 0) {
    //        upperHull.push(nails[i-2]);
    //         upperHull.push(nails[i-1]);
    //         upperHull.push(nails[i]);
    //     }


    // }


    ctx.fillStyle = "black";
    ctx.strokeStyle = "red";

    nails.forEach((nail) => {
        if(upperHull.includes(nail)){
            ctx.fillStyle = "red";
        }else{
            ctx.fillStyle = "black";
        }
        ctx.strokeRect(nail.x + 100, nail.y + 100, 9, 9);
        ctx.fillRect(nail.x + 100, nail.y + 100, 9, 9);
    });
}

draw();