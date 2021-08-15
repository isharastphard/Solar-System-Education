import React, { useCallback, useEffect, useState, useRef } from "react";
import sun from "../../images/sun.png";
import { Modal } from "@material-ui/core";
import PlanetsInfo from "components/PlanetsInfo/PlanetsInfo";
import "./../../assets/ModalStyle.css";

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [modalContent, setModalContent] = useState(
    <React.Fragment></React.Fragment>
  );
  const [showModal, setShowModal] = useState(false);

  function makeOrbit(context: any, x: number) {
    //context.beginPath();
    const Circle = new Path2D();
    Circle.arc(width / 2, height / 2, x, 0, Math.PI * 2, false);
    context.stroke(Circle);
    //context.closePath();
    return Circle;
  }

  const draw = useCallback(
    (context: any, canvas: any) => {
      context.globalCompositeOperation = "destination-over";
      context.clearRect(0, 0, width, height); // clear canvas
      //context.fillStyle='rgba(0,0,0,0.4)';
      context.strokeStyle = "rgba(0,153,255,0.4)";
      context.save();
      context.translate(width / 2, (height + 70) / 2);
      var time = new Date();
      context.translate(90, 0);
      context.restore();
      context.save();

      //Sun
      const Sun = document.createElement("img");
      Sun.src = sun;
      let sunDimension: number = 80 * 0.85;
      context.drawImage(
        Sun,
        (width - sunDimension) / 2,
        (height - sunDimension + 70) / 2,
        sunDimension,
        sunDimension
      );

      context.restore();
      context.save();
      context.scale(0.85, 0.85);
      context.translate(110 + 25, 57 + 50);

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
      var JupiterO = makeOrbit(context, 205);
      //Saturn orbit
      var SaturnO = makeOrbit(context, 245);
      //Uranus orbit
      var UranusO = makeOrbit(context, 285);
      //Neptune orbit
      var NeptuneO = makeOrbit(context, 325);

      canvas.addEventListener("click", function (event: any) {
        if (context.isPointInPath(Sun, event.offsetX, event.offsetY)) {
          setModalContent(<PlanetsInfo name={"Sun"} />);
          setShowModal(true);
        } else if (
          context.isPointInPath(MercuryO, event.offsetX, event.offsetY)
        ) {
          setModalContent(<PlanetsInfo name={"Mercury"} />);
          setShowModal(true);
        } else if (
          context.isPointInPath(VenusO, event.offsetX, event.offsetY)
        ) {
          setModalContent(<PlanetsInfo name={"Venus"} />);
          setShowModal(true);
        } else if (
          context.isPointInPath(EarthO, event.offsetX, event.offsetY)
        ) {
          setModalContent(<PlanetsInfo name={"Earth"} />);
          setShowModal(true);
        } else if (context.isPointInPath(MarsO, event.offsetX, event.offsetY)) {
          setModalContent(<PlanetsInfo name={"Mars"} />);
          setShowModal(true);
        } else if (
          context.isPointInPath(JupiterO, event.offsetX, event.offsetY)
        ) {
          setModalContent(<PlanetsInfo name={"Jupiter"} />);
          setShowModal(true);
        } else if (
          context.isPointInPath(SaturnO, event.offsetX, event.offsetY)
        ) {
          setModalContent(<PlanetsInfo name={"Saturn"} />);
          setShowModal(true);
        } else if (
          context.isPointInPath(UranusO, event.offsetX, event.offsetY)
        ) {
          setModalContent(<PlanetsInfo name={"Uranus"} />);
          setShowModal(true);
        } else if (
          context.isPointInPath(NeptuneO, event.offsetX, event.offsetY)
        ) {
          setModalContent(<PlanetsInfo name={"Neptune"} />);
          setShowModal(true);
        }
      });

      context.restore();

      window.requestAnimationFrame(() => draw(context, canvas));
    },
    [width, height]
  );

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        draw(context, canvas);
      }
    }
  }, [draw]);

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
        zIndex: 45,
      }}
    />
  );
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;
