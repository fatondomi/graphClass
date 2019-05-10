
class Graph
{
    constructor(divIdString) 
    {
        let cDiv = document.getElementById(divIdString);
        this.divId = divIdString;
        this.id = divIdString+"canvas";
        this.width = cDiv.clientWidth;
        this.height = cDiv.clientHeight;

        //newCanvas.setAttribute("width",x); != newCanvas.style.width = x;

        let newCanvas = document.createElement("canvas");
        newCanvas.setAttribute("id",divIdString+"canvas");
        newCanvas.setAttribute("width",cDiv.clientWidth); 
        newCanvas.setAttribute("height",cDiv.clientHeight);

        cDiv.appendChild(newCanvas);
    }
    
    drawCS()
    {   
        this.drawLine(0,this.height/2,this.width,0,"black",1);
        this.drawLine(this.width/2,0,this.height,-90,"black",1);
    }

    onResize()
    {
        let cDiv = document.getElementById(this.divId);
        this.width = cDiv.clientWidth;
        this.height = cDiv.clientHeight;
        let c = document.getElementById(this.id);
        c.setAttribute("width",this.width);
        c.setAttribute("height",this.height);
        this.drawCS();
    }

    drawLine(in_x,in_y,in_length,in_angle,in_color,in_width)
    {
        let c = document.getElementById(this.id);
        let ctx = c.getContext("2d");
        ctx.strokeStyle = in_color;
        ctx.lineWidth = in_width;
        ctx.beginPath();
        ctx.moveTo(in_x, in_y);
        let x2 = in_length;
        let y2 = 0;
        let point = this.rotatePoint(x2, y2, in_angle);
        ctx.lineTo(in_x + point[0], in_y - point[1]);
        ctx.stroke();
    }

    rotatePoint(in_x, in_y, in_angle) 
    {
        let module = Math.sqrt(Math.pow(in_x, 2) + Math.pow(in_y, 2));
        let angle = Math.atan(in_y / in_x);
        angle += in_angle * Math.PI / 180;
        return [(module * Math.cos(angle)),(module * Math.sin(angle))];
    }
}