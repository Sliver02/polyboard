import React from "react";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

const OrbitController = ({}) => {
  const { camera, gl } = useThree();

  return (
    <OrbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />
  );
};

export default OrbitController;
