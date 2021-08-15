/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Uranus: THREE.Mesh;
  };
  materials: {
    ["Default OBJ.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/Uranus.glb") as GLTFResult;
  useFrame(() => {
    //rotates planet around sun
    group!.current!.rotation.y += 0.005;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Uranus.geometry}
        material={materials["Default OBJ.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[265, 0, 0]}
        scale={0.004}
      />
    </group>
  );
}

useGLTF.preload("/Uranus.glb");
