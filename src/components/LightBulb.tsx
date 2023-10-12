import { MeshProps } from "@react-three/fiber";

const LightBulb = (props: MeshProps) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
};

export default LightBulb;
