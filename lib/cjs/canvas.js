"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Canvas = function () {
    var canvasRef = react_1.useRef(null);
    var ctx = null;
    react_1.useEffect(function () {
        // dynamically assign the width and height to canvas
        var canvasEle = canvasRef.current;
        if (canvasEle) {
            canvasEle.width = canvasEle.clientWidth;
            canvasEle.height = canvasEle.clientHeight;
            // get context of the canvas
            ctx = canvasEle.getContext("2d");
        }
    }, []);
    react_1.useEffect(function () {
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
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("canvas", { ref: canvasRef, width: "100%", height: "100%" })));
};
exports.default = Canvas;
