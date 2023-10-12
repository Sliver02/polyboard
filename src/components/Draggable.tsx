import React, { useEffect, useRef, useState } from "react";
import { extend, useThree } from "@react-three/fiber";
import { FlyControls } from "@react-three/drei";

extend({ DragControls });

const Draggable = (props: any) => {
  const groupRef = useRef<any>();
  const controlsRef = useRef<any>();
  const [objects, setObjects] = useState<any>(null);
  const { camera, gl, scene } = useThree<any>();

  useEffect(() => {
    setObjects(groupRef.current.children);
  }, [groupRef]);

  useEffect(() => {
    if (!controlsRef.current) return;

    controlsRef.current.addEventListener("hoveron", () => {
      scene.orbitControls.enabled = false;
    });
    controlsRef.current.addEventListener("hoveroff", () => {
      scene.orbitControls.enabled = true;
    });
  }, [objects]);

  return <group ref={groupRef}>{props.children}</group>;
};

export default Draggable;
