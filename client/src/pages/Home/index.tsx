import React from "react";
import Canvas from "../../components/Canvas/Planets";

import Orbits from "../../components/Canvas/OrbitsnModals";
import Background from "../../components/Canvas/Stars";
import Skysphere from "../../components/Canvas/Skysphere";
import NavBar from "./../../components/Navbar/NavBar";

const Home: React.FunctionComponent = () => {
  return (
    <div className="App">
      <NavBar />
      <body>
        {/* <Background width={window.innerWidth} height={window.innerHeight}/> 
        <Orbits width={window.innerWidth} height={window.innerHeight}/>
        <Canvas width={window.innerWidth} height={window.innerHeight}/> */}
        <Skysphere />
      </body>
    </div>
  );
};

export default Home;
