import React, { useCallback, useEffect, useRef } from "react";
import sun from "./sun.png"
import mercury from "./mercury1.png"
import venus from "./Venus.png"
import earth from "./earth.png"
import mars from "./Mars.png"
import belt from "./asteroid_belt_grey.png"
import jupiter from "./Jupiter_rotate.png"
import saturn from "./saturn.png"
import uranus from "./uranus.png"
import neptune from "./Neptune.png"

interface CanvasProps{
  width: number;
  height: number;
}

const Canvas =({width, height}: CanvasProps) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);

  function makeOrbit(context:any, x:number){
    context.beginPath();
    context.arc(width/2,height/2,x,0,Math.PI*2,false);
    context.stroke();
    context.closePath();
  }
  function makeBody(context: any, pic:any, x:number, y:number, pwidth:number, pheight:number) {
    const Body = document.createElement('img');
    Body.src = pic;
    context.drawImage(Body, x, y, pwidth, pheight);
  }

  const draw = useCallback((context:any) =>{
    context.globalCompositeOperation ='destination-over';
    context.clearRect(0,0,width,height); // clear canvas
    //context.fillStyle='rgba(0,0,0,0.4)';
    context.strokeStyle = 'rgba(0,153,255,0.4)';
    context.save();
    context.translate(width/2,height/2)

    //PLANETS

    var time = new Date();
    context.rotate(((2*Math.PI)/60)*time.getSeconds()+((2*Math.PI)/60000)*time.getMilliseconds());
    context.translate(90,0);


    //Mercury
    //context.fillRect (-100,83,40,40);//shadow
    makeBody(context, mercury, -65, -40, 20, 20);
    //Venus
    makeBody(context, venus, -143, -78, 30, 30);
    //Earth
    makeBody(context, earth, -100, 83, 35, 35);
    //Mars - Might need another PNG without a shadow
    makeBody(context, mars, 32, -12, 25, 25);
    //Jupiter
    makeBody(context, jupiter, -325, 30, 80, 80);
    //Saturn
    makeBody(context, saturn, -330, -150, 60, 60);
    //Uranus
    makeBody(context, uranus, -220, 245, 33, 33);
    //Neptune
    makeBody(context, neptune, 50, -300, 35, 35);
    
    context.restore();

    context.save();
    //Sun
    const Sun = document.createElement('img')
    Sun.src = sun;
    context.drawImage(Sun, (width-80)/2, (height-80)/2, 80, 80);

    //asteroid belt
    const Belt = document.createElement('img');
    Belt.src = belt;
    let x:number = 400;
    let y:number = 0; //trying to find a way to change animation speed
    let z:number = y/10;
    context.translate(width/2, height/2);
    context.rotate(((2*Math.PI)/60)*(time.getSeconds()-y)+((2*Math.PI)/60000)*(time.getMilliseconds()-y)); 
    context.drawImage(Belt, (width-x)/2-(width)/2, (height-x)/2-(height)/2, x, x);
    context.translate(-(width)/2, -(height)/2);

    context.restore();

    //ORBITS
    //Mercury orbit
    makeOrbit(context, 45);
    //Venus orbit
    makeOrbit(context, 75);
    //Earth orbit
    makeOrbit(context, 105);
    //Mars orbit
    makeOrbit(context, 135);
    //Jupiter orbit
    makeOrbit(context,205);
    //Saturn orbit
    makeOrbit(context, 245);
    //Uranus orbit
    makeOrbit(context, 285);
    //Neptune orbit
    makeOrbit(context,325);

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
};
export default Canvas;
