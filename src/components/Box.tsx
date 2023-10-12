import { GlobalContext } from "@/contexts/globalProvider";
import { useCursor } from "@react-three/drei";
import { useContext, useState } from "react";

const Box = (props: any) => {
  const [hovered, setHovered] = useState(false);
  const { setTarget } = useContext(GlobalContext);

  useCursor(hovered);

  return (
    <mesh
      {...props}
      onClick={(e) => {
        setTarget(e.object);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      receiveShadow
      castShadow
    >
      <boxGeometry />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

export default Box;
