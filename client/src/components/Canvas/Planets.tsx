import React, { useCallback, useEffect, useRef } from "react";
import sun from "../../images/sun.png"
import mercury from "../../images/mercury1.png"
import venus from "../../images/Venus.png"
import earth from "../../images/earth.png"
import mars from "../../images/Mars.png"
import belt from "../../images/asteroid_belt_grey.png"
import jupiter from "../../images/Jupiter_rotate.png"
import saturn from "../../images/saturn.png"
import uranus from "../../images/uranus.png"
import neptune from "../../images/Neptune.png"

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
    context.scale(.85,.85);


    //Mercury
    //context.fillRect (-100,83,40,40);//shadow
    makeBody(context, mercury, -85, -40, 20, 20);
    //Venus
    makeBody(context, venus, -125, -90, 30, 30);
    //Earth
    makeBody(context, earth, -100, 83, 35, 35);
    //Mars - Might need another PNG without a shadow
    makeBody(context, mars, 18, -12, 25, 25);
    //Jupiter
    makeBody(context, jupiter, -335, 30, 80, 80);
    //Saturn
    makeBody(context, saturn, -345, -150, 60, 60);
    //Uranus
    makeBody(context, uranus, -220, 250, 33, 33);
    //Neptune
    makeBody(context, neptune, 40, -300, 35, 35);
    
    context.restore();
    context.save();
    //context.scale(.9,.9);
    //Sun
    const Sun = document.createElement('img')
    Sun.src = sun;
    let sunDimension:number = 80 * .85;
    context.drawImage(Sun, (width-sunDimension)/2, (height-sunDimension)/2, sunDimension, sunDimension);

    //asteroid belt
    const Belt = document.createElement('img');
    Belt.src = belt;
    let x:number = 400 * .85;
    let y:number = 0; //trying to find a way to change animation speed
    let z:number = y/10;
    context.translate(width/2, height/2);
    context.rotate(((2*Math.PI)/60)*(time.getSeconds()-y)+((2*Math.PI)/60000)*(time.getMilliseconds()-y)); 
    context.drawImage(Belt, (width-x)/2-(width)/2, (height-x)/2-(height)/2, x, x);
    context.translate(-(width)/2, -(height)/2);

    context.restore();
    context.save();
    context.scale(.85,.85);
    context.translate(115,57);
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
    makeOrbit(context, 205);
    //Saturn orbit
    makeOrbit(context, 245);
    //Uranus orbit
    makeOrbit(context, 285);
    //Neptune orbit
    makeOrbit(context,325);

    context.restore();

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
  

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{
        padding: 0,
        margin: "auto",
        display: "block",
        width: width,
        height: height,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    />
  );
};

Canvas.defaultProps = {
  width: window.innerWidth*.85,
  height:window.innerHeight*.85,
};
export default Canvas;
