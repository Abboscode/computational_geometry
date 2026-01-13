
import { Nail } from "./points_and_lines.js";
import { vector2Doperations } from "./points_and_lines.js";
const canvas = document.getElementById("canvas");
const NAIL_COUNT = 100;
const center = { x: 400, y: 400 };
const radius = 200;
const BOUND_X = Math.cos(Math.PI) + center.x;
const BOUND_Y = Math.sin(Math.PI) + center.y;


function buildHull(nails){
const upperHull = [];
 for (let i = 0; i < nails.length; i++) {
        
        while (upperHull.length >= 2) {
            const p1 = upperHull[upperHull.length - 2];
            const p2 = upperHull[upperHull.length - 1];
            const p3 = nails[i];

            const v1={ x: p2.x - p1.x, y: p2.y - p1.y};
            const v2={ x: p3.x - p2.x, y: p3.y - p2.y};

                        if (vector2Doperations.crossProduct( v1,v2) < 0) {
                upperHull.pop();
            }else{
                break;
            }

        }
        upperHull.push(nails[i]);

              


    }

const lowerHull=[];
    for(let i=nails.length -1;i>=0;i--){
    ;
        while(lowerHull.length>=2){
            const p1 = lowerHull[lowerHull.length - 2];
            const p2 = lowerHull[lowerHull.length - 1];
            const p3 = nails[i];
            const v1={ x: p2.x - p1.x, y: p2.y - p1.y};
            const v2={ x: p3.x - p2.x, y: p3.y - p2.y};
            if( vector2Doperations.crossProduct( v1,v2) < 0){
                lowerHull.pop();
            }else{
                break;
            }

    }
    lowerHull.push(nails[i]);
    }


return [...upperHull,...lowerHull];

}



function intit(){
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
  

    const hull =buildHull(nails);
    return {nails,hull};


}
function draw() {

    if (!canvas) return; // Safety check
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const {nails,hull} = intit();
 

    ctx.fillStyle = "black";
    ctx.strokeStyle = "red";

    nails.forEach((nail) => {
        if(hull.includes(nail)){
            ctx.fillStyle = "red";
        }else{
            ctx.fillStyle = "black";
        }
        ctx.strokeRect(nail.x + 100, nail.y + 100, 9, 9);
        ctx.fillRect(nail.x + 100, nail.y + 100, 9, 9);
    });
    // Draw the line for the Upper Hull
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(hull[0].x+100, hull[0].y+100);
    for(let i = 1; i < hull.length; i++) {
        ctx.lineTo(hull[i].x+100, hull[i].y+100);
    }
    ctx.stroke();


}

draw();