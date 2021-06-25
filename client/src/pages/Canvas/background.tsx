import React, { useCallback, useEffect, useRef } from "react";

interface CanvasProps{
    width: number;
    height: number;
  }
  const Canvas =({width, height}: CanvasProps) => {
    let canvasRef = useRef<HTMLCanvasElement | null>(null);

    const draw = useCallback((context:any) =>{
        context.globalCompositeOperation ='destination-over';
        context.clearRect(0,0,width,height); // clear canvas
        
        context.fillStyle=""
        window.requestAnimationFrame(() => draw(context));
    },[width,height])

    useEffect(() => {
        if(canvasRef.current){
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          if(context){
            draw(context);
          }
        }
      },[draw]);

      return <canvas ref = {canvasRef} height={height} width ={width}/>
  };  
  Canvas.defaultProps = {
    width: window.innerWidth,
    height:window.innerHeight
  };
  export default Canvas;
  