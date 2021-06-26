import React, { useCallback, useEffect, useRef } from "react";
import sun from "./sun.png"
import mercury from "./mercury.png"
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

    //PLANETS

    var time = new Date();
    context.rotate(((2*Math.PI)/60)*time.getSeconds()+((2*Math.PI)/60000)*time.getMilliseconds());
    context.translate(30,0);
  //  context.fillRect (0,-12,50,24);//shadow
    //Mercury
    const Mercury = document.createElement('img')
    Mercury.src = mercury;
    context.drawImage(Mercury, -12, -80, 20, 20)

    //Earth
    context.translate(60,0);
    const Earth = document.createElement('img')
    Earth.src = earth;
    context.drawImage(Earth, 0,-12, 30, 30)
    context.restore();          
    context.beginPath()

    //Sun
    const Sun = document.createElement('img')
    Sun.src = sun;
    context.drawImage(Sun, (width-80)/2, (height-80)/2, 80, 80)

    //ORBITS
    //Mercury orbit
    context.arc(width/2, height/2, 75,0,Math.PI*2,false);
    context.stroke();
    //Earth orbit
    context.arc(width/2,height/2,105,0,Math.PI*2,false);
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
  

  return <canvas ref = {canvasRef} height={height} width ={width} style = {{position:'absolute', zIndex:50}}/>
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height:window.innerHeight,
  zIndex:2
};
export default Canvas;
