"use client";

import Box from "@/components/Box";
import Floor from "@/components/Floor";
import LightBulb from "@/components/LightBulb";
import OrbitController from "@/components/OrbitController";
import SceneTest from "@/components/SceneTest";
import { GlobalContext, GlobalProvider } from "@/contexts/globalProvider";
import { TransformationType } from "@/utils/interfaces";
import { TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <GlobalProvider>
        <SceneTest />
      </GlobalProvider>
    </main>
  );
}
