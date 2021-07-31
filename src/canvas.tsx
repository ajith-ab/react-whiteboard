import React, { useRef, useEffect } from "react";

const Canvas = () => {
    const canvasRef = useRef(null);
    let ctx: any = null;


    useEffect(() => {
        // dynamically assign the width and height to canvas
        const canvasEle: any = canvasRef.current;
        if (canvasEle) {
            canvasEle.width = canvasEle.clientWidth;
            canvasEle.height = canvasEle.clientHeight;

            // get context of the canvas
            ctx = canvasEle.getContext("2d");
        }
    }, []);


    useEffect(() => {
        drawLine({ x: 20, y: 20, x1: 20, y1: 100 }, { color: 'red' });

        drawLine({ x: 50, y: 50, x1: 200, y1: 100 }, { color: 'red' });

        drawLine({ x: 300, y: 250, x1: 260, y1: 70 }, { color: 'green', width: 5 });

        drawLine({ x: 70, y: 240, x1: 160, y1: 120 }, { color: 'blue' });
    }, []);

    // draw a line
    const drawLine = (info: any, style: any) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }



    return (
        <div>
            <canvas ref={canvasRef} width="100%" height="100%"></canvas>
        </div>
    )
}

export default Canvas;