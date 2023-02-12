import React from "react";
import {useState, useRef, useEffect} from "react";

import {useFrame} from "@react-three/fiber"
import {OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei"
import {angleToRadians} from "../utils/angle"

function Jogger(props) {
    const { nodes, materials } = useGLTF('/img/Jogger/joker.gltf')

    return (
      <group {...props} dispose={null} scale={0.9}>
        <mesh geometry={nodes.bottem_01.geometry} material={materials.joker_bottem_01} />
        <mesh geometry={nodes.patch_01.geometry} material={materials.joker_patch_01} />
        <mesh geometry={nodes.top.geometry} material={materials.joker_top_01} />
      </group>
    )
  }
  
const JoggerShoe = (state) => {
    const orbitControlsRef = useRef(null)

    const [loadImg, setLoadImg] = useState(true);
    useEffect(()=>{
        const load = setTimeout(()=>{setLoadImg(false)}, 2000);
        return () => {
            clearTimeout(load);
        }
    }, []);

    useFrame((state) => {
        if(!!orbitControlsRef.current) {
            const { x, y } = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle((x + 45) *angleToRadians(50));
            orbitControlsRef.current.setPolarAngle((y + 39) *angleToRadians(20));
            orbitControlsRef.current.update();
        }
    })

    return(
      <>
        {loadImg === true ? null : (
          <>
            <ambientLight args={["#ffffff", 0.4]}/>
            <directionalLight args={["#ffffff", 0.8]} position={[20, 20, -30]}/>
            <Jogger/>
            <PerspectiveCamera makeDefault position={[0, 0, 60]}/>
            <OrbitControls ref={orbitControlsRef} enableZoom={false}/>
          </>
        )}
      </>
    )
}

export default JoggerShoe