import React from "react";
import Canvas from "../Canvas/canvas";
import Background from "../Canvas/background";

const Home: React.FunctionComponent = () => {
  return (
    <div className="App">
      <body>
        <Background width={window.innerWidth} height={window.innerHeight}/>
        <Canvas width={window.innerWidth} height={window.innerHeight}/>
      </body>
    </div>
  );
};

export default Home;
