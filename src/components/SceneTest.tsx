import Box from "@/components/Box";
import Floor from "@/components/Floor";
import LightBulb from "@/components/LightBulb";
import { GlobalContext } from "@/contexts/globalProvider";
import { TransformationType } from "@/utils/interfaces";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useContext, useEffect } from "react";

const SceneTest = ({}) => {
  const { target, setTarget } = useContext(GlobalContext);

  const { mode } = useControls({
    mode: { value: "translate", options: ["translate", "rotate", "scale"] },
  });

  useEffect(() => {
    console.log(target, "target");
  }, [target]);

  return (
    <Canvas
      shadows
      flat
      linear
      onPointerMissed={() => setTarget(null)}
      camera={{
        position: [-7, 7, 7],
      }}
    >
      <ambientLight color={"white"} intensity={0.2} />
      <LightBulb position={[0, 3, 0]} />
      <Box rotateX={3} rotateY={0.2} />
      <Box rotateX={3} rotateY={0.2} position={[2, 0, 2]} />
      <OrbitControls makeDefault />
      <Floor position={[0, -1, 0]} />
      {target && (
        <TransformControls object={target} mode={mode as TransformationType} />
      )}
    </Canvas>
  );
};

export default SceneTest;
