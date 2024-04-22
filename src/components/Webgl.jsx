import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import Swap from "./Swap";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";

function Webgl() {

  return (
    <div className="w-full h-3/5 relative z-10 lg:w-1/2 lg:h-full ">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
      <Swap />
    </div>
  );
}

export default Webgl;
