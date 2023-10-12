import { MeshProps } from "@react-three/fiber";

const Box = (props: any) => {
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxGeometry />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

export default Box;
