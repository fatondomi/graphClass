
let carPos = [20,20];
let carDir = -45;

function drawCar()
{
    let c = document.getElementById("div1canvas");
    let ctx = c.getContext("2d");

    // green body
    let newPt = graph.rotatePoint(- 3.5,11,carDir);
    let p1 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(3.5,11,carDir);
    let p2 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(3.5,-10,carDir);
    let p3 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(-3.5,-10,carDir);
    let p4 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,255,0,0.4)";
    ctx.moveTo(p1[0],p1[1]);
    ctx.lineTo(p2[0],p2[1]);
    ctx.lineTo(p3[0],p3[1]);
    ctx.lineTo(p4[0],p4[1]);
    ctx.closePath();
    ctx.fill();

    // black front left tire
    newPt = graph.rotatePoint(-7,10,carDir);
    p1 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(-5,10,carDir);
    p2 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(-5,6,carDir);
    p3 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(-7,6,carDir);
    p4 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.moveTo(p1[0],p1[1]);
    ctx.lineTo(p2[0],p2[1]);
    ctx.lineTo(p3[0],p3[1]);
    ctx.lineTo(p4[0],p4[1]);
    ctx.closePath();
    ctx.fill();
    
    // black front right tire
    newPt = graph.rotatePoint(5,10,carDir);
    p1 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(7,10,carDir);
    p2 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(7,6,carDir);
    p3 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(5,6,carDir);
    p4 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.moveTo(p1[0],p1[1]);
    ctx.lineTo(p2[0],p2[1]);
    ctx.lineTo(p3[0],p3[1]);
    ctx.lineTo(p4[0],p4[1]);
    ctx.closePath();
    ctx.fill();

    // black back left tire
    newPt = graph.rotatePoint(-7,-5,carDir);
    p1 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(-5,-5,carDir);
    p2 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(-5,-9,carDir);
    p3 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(-7,-9,carDir);
    p4 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.moveTo(p1[0],p1[1]);
    ctx.lineTo(p2[0],p2[1]);
    ctx.lineTo(p3[0],p3[1]);
    ctx.lineTo(p4[0],p4[1]);
    ctx.closePath();
    ctx.fill();

    // black back right tire
    newPt = graph.rotatePoint(7,-5,carDir);
    p1 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(5,-5,carDir);
    p2 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(5,-9,carDir);
    p3 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    newPt = graph.rotatePoint(7,-9,carDir);
    p4 = graph.convert([newPt[0] + carPos[0], newPt[1] + carPos[1]]);
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.moveTo(p1[0],p1[1]);
    ctx.lineTo(p2[0],p2[1]);
    ctx.lineTo(p3[0],p3[1]);
    ctx.lineTo(p4[0],p4[1]);
    ctx.closePath();
    ctx.fill();
}

let points = [
                [-50,0],
                [-50,5],
                [50, 0],
                [50, 5]
];

let graph = new Graph("div1",points);

window.onresize = function(){graph.onResize();};

//

graph.callBackDrawing(
    function () {
        drawCar();
    }
);

graph.focus();
