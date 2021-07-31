import React, { FC } from "react";
import { ReactCanvasInterface } from "./reactCanvas.inteface";
import Canvas from "./canvas"

const ReactCanvas: FC<ReactCanvasInterface> = (): JSX.Element => (
    <Canvas />
);

export default ReactCanvas;