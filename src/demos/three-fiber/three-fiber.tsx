import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, softShadows, MeshWobbleMaterial } from "@react-three/drei";
import "./three-fiber.css";

/**
 * Simple react three fiber projects to demo the library
 * and checkout the associated libraries and capabilities
 * https://github.com/pmndrs/react-three-fiber
 * this demo uses implementation from https://www.youtube.com/watch?v=fdtqqyeKRJk
 * all credits to Wrong Akram
 */

softShadows();

const SpinningMesh = (props: any) => {
  const [expand, setExpand] = useState(false);

  const mesh = useRef<THREE.Mesh>();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh 
    castShadow 
    position={props.pose} 
    ref={mesh}
    scale={expand ? [1.4, 1.4, 1.4] : [1, 1, 1]}
    onClick={(e)=>setExpand(!expand)}>
      <boxBufferGeometry attach="geometry" args={props.scale} />
      <MeshWobbleMaterial attach="material" color={props.color} speed={props.speed} factor={0.6}/>
    </mesh>
  );
};

const FiberSimpleDemo = (props: any): React.ReactElement => {
  return (
    <Canvas
    shadows
    camera={{ position: [-5, 2, 10], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, 20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <group>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.3}/>
        </mesh>
      </group>
      <SpinningMesh pose={[0, 1, 0]} scale={[3, 2, 1]} color={"lightblue"} speed={2}/>
      <SpinningMesh pose={[-2, 1, -5]} scale={[1, 1, 1]} color={"hotpink"}  speed={6}/>
      <SpinningMesh pose={[5, 1, -2]} scale={[1, 1, 1]} color={"hotpink"}  speed={6}/>
      <OrbitControls />
    </Canvas>
  );
};

export default FiberSimpleDemo;
