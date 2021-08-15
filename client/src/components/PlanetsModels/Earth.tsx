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
    Cube001: THREE.Mesh;
  };
  materials: {
    ["Default OBJ"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/Earth.glb") as GLTFResult;
  useFrame(() => {
    //rotates sun around its axis
    group!.current!.rotation.y += 0.0037;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Default OBJ"]}
        visible={true}
        position={[18.46, 0, 0]}
        scale={0.00297}
      />
    </group>
  );
}
