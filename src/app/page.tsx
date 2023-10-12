"use client";

import Box from "@/components/Box";
import Floor from "@/components/Floor";
import LightBulb from "@/components/LightBulb";
import OrbitController from "@/components/OrbitController";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <Canvas
        shadows
        eventPrefix="screen"
        flat
        linear
        camera={{
          position: [-7, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        <Box rotateX={3} rotateY={0.2} />
        <OrbitController />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </main>
  );
}
