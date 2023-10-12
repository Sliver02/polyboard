"use client";

import SceneTest from "@/components/SceneTest";
import { GlobalProvider } from "@/contexts/globalProvider";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <GlobalProvider>
        <SceneTest />
      </GlobalProvider>
    </main>
  );
}
