import React from "react";
import Canvas from "../Canvas/canvas";

const Home: React.FunctionComponent = () => {
  return (
    <div className="App">
      <body>
        <Canvas width={window.innerWidth} height={window.innerHeight}/>
      </body>
    </div>
  );
};

export default Home;
