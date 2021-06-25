import React, { useCallback, useEffect, useRef } from "react";
import earth from "./earth.png"
interface CanvasProps{
  width: number;
  height: number;
}

const Canvas =({width, height}: CanvasProps) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);

  const draw = useCallback((context:any) =>{
    context.globalCompositeOperation ='destination-over';
    context.clearRect(0,0,width,height); // clear canvas

    context.fillStyle='rgba(0,0,0,0.4)';
    context.strokeStyle = 'rgba(0,153,255,0.4)';
    context.save();
    context.translate(width/2,height/2)

    //Earth
    var time = new Date();
    context.rotate(((2*Math.PI)/60)*time.getSeconds()+((2*Math.PI)/60000)*time.getMilliseconds());
    context.translate(105,0);
    //context.fillRect (0,-12,50,24);//shadow
    const Earth = document.createElement('img')
    Earth.src = earth;
    context.drawImage(Earth, 0,-12, 50, 54)
    context.restore();          
    context.beginPath()

    context.arc(width/2,height/2,105,0,Math.PI*2,false);//orbit of earth
    context.stroke();

    window.requestAnimationFrame(() => draw(context));},[width,height]) 

    
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
