/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh
  }
  materials: {
    ['Default OBJ.005']: THREE.MeshStandardMaterial
  }
}
var axis = new THREE.Vector3(5, 0,0);
var rad = .01;

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Mercury.glb') as GLTFResult
  useFrame(() => { //rotates planet around sun
   group!.current!.rotation.y += .05;
  })
  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} position = {[5,0,0]} scale ={.0005}  />
    </group>
  )
}

useGLTF.preload('/Mercury.glb')
