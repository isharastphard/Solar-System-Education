import React, { useCallback, useEffect, useState, useRef } from "react";
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
import {Modal} from "@material-ui/core";
import PlanetsInfo from "components/PlanetsInfo/PlanetsInfo";
import "./../../assets/ModalStyle.css";

interface CanvasProps{
  width: number;
  height: number;
}

const Canvas =({width, height}: CanvasProps) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [modalContent, setModalContent] = useState(
    <React.Fragment></React.Fragment>
  );
  const [showModal, setShowModal] = useState(false);

  function makeOrbit(context:any, x:number){
    //context.beginPath();
    const Circle = new Path2D()
    Circle.arc(width/2,height/2,x,0,Math.PI*2,false);
    context.stroke(Circle);
    //context.closePath();
    return Circle
  }
  function makeBody(context: any, pic:any, x:number, y:number, pwidth:number, pheight:number) {
    const Body = document.createElement('img');
    Body.src = pic;
    context.drawImage(Body, x, y, pwidth, pheight);
  }

  const draw = useCallback((context:any, canvas:any) =>{
    context.globalCompositeOperation ='destination-over';
    context.clearRect(0,0,width,height); // clear canvas
    //context.fillStyle='rgba(0,0,0,0.4)';
    context.strokeStyle = 'rgba(0,153,255,0.4)';
    context.save();
    context.translate(width/2,(height+70)/2);

    //PLANETS

    var time = new Date();
   // context.rotate(((2*Math.PI)/60)*time.getSeconds()+((2*Math.PI)/60000)*time.getMilliseconds());
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
<<<<<<< Updated upstream
    makeBody(context, sun, (width-80)/2, (height-80)/2, 80, 80);
=======
    const Sun = document.createElement('img')
    Sun.src = sun;
    let sunDimension:number = 80 * .85;
    context.drawImage(Sun, (width-sunDimension)/2, (height-sunDimension + 70)/2, sunDimension, sunDimension);
>>>>>>> Stashed changes

    //asteroid belt
    const Belt = document.createElement('img');
    Belt.src = belt;
    let x:number = 400;
    let y:number = 0; //trying to find a way to change animation speed
    let z:number = y/10;
<<<<<<< Updated upstream
    context.translate(width/2, height/2);
    context.rotate(((2*Math.PI)/60)*(time.getSeconds()-z)+((2*Math.PI)/60000)*(time.getMilliseconds()-y)); 
=======
    context.translate(width/2, (height+70)/2);
    context.rotate(((2*Math.PI)/60)*(time.getSeconds()-y)+((2*Math.PI)/60000)*(time.getMilliseconds()-y)); 
>>>>>>> Stashed changes
    context.drawImage(Belt, (width-x)/2-(width)/2, (height-x)/2-(height)/2, x, x);
    context.translate(-(width)/2, -(height)/2);

    context.restore();
<<<<<<< Updated upstream

=======
    context.save();
    context.scale(.85,.85);
    context.translate(110 + 25,57 + 50);
>>>>>>> Stashed changes
    //ORBITS
    //Mercury orbit
    var MercuryO = makeOrbit(context, 45);
    //Venus orbit
    var VenusO = makeOrbit(context, 75);
    //Earth orbit
    var EarthO = makeOrbit(context, 105);
    //Mars orbit
    var MarsO = makeOrbit(context, 135);
    //Jupiter orbit
<<<<<<< Updated upstream
    makeOrbit(context,205);
=======
    var JupiterO = makeOrbit(context, 205);
>>>>>>> Stashed changes
    //Saturn orbit
    var SaturnO = makeOrbit(context, 245);
    //Uranus orbit
    var UranusO = makeOrbit(context, 285);
    //Neptune orbit
    var NeptuneO = makeOrbit(context,325);

<<<<<<< Updated upstream
    window.requestAnimationFrame(() => draw(context));},[width,height]) 
=======
    canvas.addEventListener('click', function(event:any) {
      if(context.isPointInPath(MercuryO, event.offsetX, event.offsetY)){
        setModalContent(<PlanetsInfo name = {'Mercury'}/>);
        setShowModal(true);
      }
    })
    
    context.restore();


    window.requestAnimationFrame(() => draw(context, canvas));},[width,height]) 
>>>>>>> Stashed changes

    
  useEffect(() => {
    if(canvasRef.current){
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if(context){
        draw(context, canvas);
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
