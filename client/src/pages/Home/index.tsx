import React from "react";
import Canvas from "../../components/Canvas/Planets";
import Background from "../../components/Canvas/Stars";

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
