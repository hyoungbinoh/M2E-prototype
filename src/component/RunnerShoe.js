import React from "react";
import { useState, useRef, useEffect } from "react";

import { useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { angleToRadians } from "../utils/angle"

function Runner(props) {
  const { nodes, materials } = useGLTF('/img/Runner/runner.gltf')

  return (
    <group {...props} dispose={null} scale={0.9}>
      <mesh geometry={nodes.bottem_01.geometry} material={materials.bottem_01} />
      <mesh geometry={nodes.top_01.geometry} material={materials.top_01} />
    </group>
  )
}

const RunnerShoe = () => {
  const orbitControlsRef = useRef(null)

  const [loadImg, setLoadImg] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => { setLoadImg(false) }, 2000);
    return () => {
      clearTimeout(load);
    }
  }, []);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle((x + 45) * angleToRadians(50));
      orbitControlsRef.current.setPolarAngle((y + 39) * angleToRadians(20));
      orbitControlsRef.current.update();
    }
  })

  return (
    <>
      {loadImg === true ? null : (
        <>
          <ambientLight args={["#ffffff", 0.4]} />
          <directionalLight args={["#ffffff", 0.8]} position={[20, 20, -30]} />
          <Runner />
          <PerspectiveCamera makeDefault position={[0, 0, 60]} />
          <OrbitControls ref={orbitControlsRef} enableZoom={false} />
        </>
      )}
    </>
  )
}

export default RunnerShoe