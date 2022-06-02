import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Flowerbed from "./Flowerbed";

const Ad = ({ props }) => {
  const [close, setClose] = useState(false);

  return (
    <div className="absolute w-[350px] h-[140px] sm:w-[600px] sm:h-[200px] md:w-[600px] md:h-[200px] lg:w-[780px] lg:h-[250px] xl:w-[800px] xl:h-[265px]  bottom-5 left-1/2 transform -translate-x-1/2">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 15 }}
        // frameloop="demand"
      >
        <ambientLight intensity={0.7} />
        <pointLight intensity={0.7} position={[8, 7, 5]} />

        <Suspense fallback={null}>
          <Flowerbed
            close={close}
            setClose={setClose}
            position={[0, -0.4, 0]}
            scale={[0.58, 0.58, 0.58]}
            rotation={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Ad;
