import React, {Suspense} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sun from "../PlanetsModels/Sun";
  


export default function System() {
    return(
    <Canvas style={{backgroundColor: 'black', width:window.innerWidth, height:window.innerHeight}}>
        <ambientLight intensity = {1}/>            
        <Stars radius = {300} depth = {60} count = {10000} factor = {8} saturation = {0}/>
        <Suspense fallback = {null}>
            <Sun/>
        </Suspense>            
    </Canvas>
    );
};



