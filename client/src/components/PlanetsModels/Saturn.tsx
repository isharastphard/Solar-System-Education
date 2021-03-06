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
    Saturn001: THREE.Mesh;
    RingsTop: THREE.Mesh;
    RingsBottom: THREE.Mesh;
  };
  materials: {
    None: THREE.MeshStandardMaterial;
    SaturnRings: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/Saturn.glb") as GLTFResult;
  useFrame(() => {
    //rotates planet around sun
    group!.current!.rotation.y += 0.00625;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Saturn001.geometry}
        material={materials.None}
        material-color="tan"
        position={[134.22, 0, 0]}
        scale={0.0092}
      />
      <mesh
        geometry={nodes.RingsTop.geometry}
        material={nodes.RingsTop.material}
        position={[134.22, 0, 0]}
        scale={0.0092}
      />
      <mesh
        geometry={nodes.RingsBottom.geometry}
        material={nodes.RingsBottom.material}
        position={[134.22, 0, 0]}
        scale={0.0027}
      />
    </group>
  );
}

useGLTF.preload("/Saturn.glb");
