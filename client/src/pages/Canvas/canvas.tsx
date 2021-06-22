import React, { useEffect, useRef } from "react";

const Canvas: React.FunctionComponent = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx: any) => {
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    ctx.save();
    ctx.translate(150, 150);
    // Earth
    var time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 40, 24); // Shadow
    
    make_base();

    function make_base()
    {
      var base_image = new Image();
      base_image.src = 'canvas/earth.png';
      base_image.onload = function(){
        ctx.drawImage(base_image, -12, -12);
      }
    }

    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.restore();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();
  
  };

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId: number;
    const render = () => {
      draw(ctx);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
