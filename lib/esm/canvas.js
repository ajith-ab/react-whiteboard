import React, { useRef, useEffect } from "react";
var Canvas = function () {
    var canvasRef = useRef(null);
    var ctx = null;
    useEffect(function () {
        // dynamically assign the width and height to canvas
        var canvasEle = canvasRef.current;
        if (canvasEle) {
            canvasEle.width = canvasEle.clientWidth;
            canvasEle.height = canvasEle.clientHeight;
            // get context of the canvas
            ctx = canvasEle.getContext("2d");
        }
    }, []);
    useEffect(function () {
        drawLine({ x: 20, y: 20, x1: 20, y1: 100 }, { color: 'red' });
        drawLine({ x: 50, y: 50, x1: 200, y1: 100 }, { color: 'red' });
        drawLine({ x: 300, y: 250, x1: 260, y1: 70 }, { color: 'green', width: 5 });
        drawLine({ x: 70, y: 240, x1: 160, y1: 120 }, { color: 'blue' });
    }, []);
    // draw a line
    var drawLine = function (info, style) {
        var x = info.x, y = info.y, x1 = info.x1, y1 = info.y1;
        var _a = style.color, color = _a === void 0 ? 'black' : _a, _b = style.width, width = _b === void 0 ? 1 : _b;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    };
    return (React.createElement("div", null,
        React.createElement("canvas", { ref: canvasRef, width: "100%", height: "100%" })));
};
export default Canvas;
