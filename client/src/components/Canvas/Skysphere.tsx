import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PointerLockControls,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import Sun from "../PlanetsModels/Sun";
import Earth from "../PlanetsModels/Earth";
import Mars from "../PlanetsModels/Mars";
import Mercury from "../PlanetsModels/Mercury";
import Venus from "../PlanetsModels/Venus";
import Jupiter from "../PlanetsModels/Jupiter";
import Saturn from "../PlanetsModels/Saturn";
import Uranus from "../PlanetsModels/Uranus";
import Neptune from "../PlanetsModels/Neptune";
import { SignatureKind } from "typescript";

export default function System() {
  return (
    <Canvas
      style={{
        backgroundColor: "Black",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <ambientLight intensity={1} />
      <Stars radius={300} depth={60} count={10000} factor={8} saturation={0} />
      <Suspense fallback={null}>
        <Sun />
        <Mercury />
        <Venus />
        <Mars />
        <Earth />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}
