import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Hand from "./Hand";
import { Html } from "@react-three/drei";

const Hands = () => {
  const texture = [
    "/texture/HandT1.jpg",
    "/texture/HandT2.jpg",
    "/texture/HandT3.jpg",
    "/texture/HandT4.jpg",
  ];

  return (
    <div className="w-[100vw] h-[100vh]" style={{ pointerEvents: "none" }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 30], fov: 30 }}
        frameloop="demand"
      >
        <hemisphereLight intensity={0.7} position={[0, 50, 0]} />
        <directionalLight intensity={0.8} position={[-8, 20, 8]} />

        <Suspense fallback={null}>
          <Hand
            firstPosition={[31, 10, 2]}
            secondPosition={[18, 10, 2]}
            rotation={[0, 0, 0.45]}
            scale={[0.85, 0.85, 0.85]}
            mouseP={1}
            textureMap={texture[1]}
          />
          <Hand
            firstPosition={[31, 0, 2]}
            secondPosition={[20.5, 0, 2]}
            rotation={[0, 0, 0.05]}
            scale={[0.85, 0.85, 0.85]}
            mouseP={1}
            textureMap={texture[2]}
          />

          <Hand
            firstPosition={[31, -9.5, 2]}
            secondPosition={[18, -9.5, 2]}
            rotation={[0, 0, -0.4]}
            scale={[0.85, 0.85, 0.85]}
            mouseP={1}
            textureMap={texture[0]}
          />

          <Hand
            firstPosition={[-30, 10, 2]}
            secondPosition={[-18.5, 10, 2]}
            rotation={[0, 0, -0.45]}
            scale={[-0.85, 0.85, 0.85]}
            mouseP={-1}
            textureMap={texture[2]}
          />

          <Hand
            firstPosition={[-31, 0, 2]}
            secondPosition={[-20.5, 0, 2]}
            rotation={[0, 0, -0.05]}
            scale={[-0.85, 0.85, 0.85]}
            mouseP={-1}
            textureMap={texture[0]}
          />

          <Hand
            firstPosition={[-31, -9.5, 2]}
            secondPosition={[-18, -9.5, 2]}
            rotation={[0, 0, 0.4]}
            scale={[-0.85, 0.85, 0.85]}
            mouseP={-1}
            textureMap={texture[3]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hands;
