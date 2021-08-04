import React, { useCallback, useEffect, useRef } from "react";

interface CanvasProps {
  width: number;
  height: number;
}

class Star {
  //variables
  x: number;
  y: number;
  r: number;
  rChange: number = 0.015;
  color: string;

  //constructor
  constructor(x: number, y: number, r: number, color: string) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }
  //member functions
  render(context:any): void {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    context.shadowBlur = 8;
    context.shadowColor = "white";
    context.fillStyle = this.color;
    context.fill();
  }

  update(): void {
    if (this.r > 2 || this.r < 0.8) {
      this.rChange = -this.rChange;
    }
    this.r += this.rChange;
  }
}

function randomColor() {
  var arrColors = ["ffffff", "ffecd3", "bfcfff"];
  return "#" + arrColors[Math.floor(Math.random() * 3)];
}

const Canvas = ({ width, height }: CanvasProps) => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);

  var randX = Math.floor(Math.random() * width + 1);
  var randY = Math.floor(Math.random() * height + 1);
  var randR = Math.random() * 1.7 + 0.5;
  var arrStars:Star[] = [new Star(randX, randY, randR, randomColor())]
  

  for (var i = 0; i < 400; i++) {
    randX = Math.floor(Math.random() * width + 1);
    randY = Math.floor(Math.random() * height + 1);
    randR = Math.random() * 1.7 + 0.5;

    var star = new Star(randX, randY, randR, randomColor());
    arrStars.push(star);
  }
  function updateArr() {
    for (var i = 0; i < arrStars.length; i++) {
      arrStars[i].update();
    }
  }

  const draw = useCallback(
    (context: any) => {
      updateArr();
      context.globalCompositeOperation = "destination-over";
      context.clearRect(0, 0, width, height); // clear canvas

      for(var i = 0; i < arrStars.length; i++){
        arrStars[i].render(context);
      }
      window.requestAnimationFrame(() => draw(context));
    },
    [width, height]
  );

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        draw(context);
      }
    }
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      style={{position:'absolute', zIndex: 1, backgroundColor: 'black'}}
    />
  );
};
Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};
export default Canvas;
