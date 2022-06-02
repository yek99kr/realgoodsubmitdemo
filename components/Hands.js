import { Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Hand from "./Hand";
import { useTexture, Html } from "@react-three/drei";
import { Physics, useSphere, useBox, usePlane } from "@react-three/cannon";

function Ball({ start, setStart }) {
  const map = useTexture("./ball.jpg");
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: [0.5],
    position: [0, -10, -2],
  }));
  usePlane(() => ({
    type: "Static",
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -10, 0],
    onCollide: () => {
      api.velocity.set(0, 0, 0);
      setStart(false);
    },
  }));

  if (start) {
    api.position.set(0, 5, -2);
    api.rotation.set(0, 0, 0);
  }

  return (
    <mesh castShadow ref={ref}>
      <sphereGeometry args={[0.45, 16, 16]} />
      <meshBasicMaterial map={map} toneMapped={false} />
    </mesh>
  );
}

function Paddle({ args = [5, 0.65, 0.6], start }) {
  const [ref, api] = useBox(() => ({
    args,
  }));

  const [mouseX, setMouseX] = useState();

  useEffect(() => {
    const mouseXUpdate = (e) => {
      setMouseX((e.x / window.innerWidth) * 2 - 1);
    };
    window.addEventListener("mousemove", mouseXUpdate);
    window.addEventListener("touchmove", mouseXUpdate);
    return () => {
      window.removeEventListener("mousemove", mouseXUpdate);
      window.removeEventListener("touchmove", mouseXUpdate);
    };
  }, [setMouseX]);

  useFrame((state) => {
    if (start) {
      api.position.set(
        (mouseX * state.viewport.width) / 2,
        -state.viewport.height / 5 + 0.5,
        -2
      );
      api.rotation.set(0, 0, (mouseX * Math.PI) / 5);
    } else {
      api.position.set(0, -state.viewport.height / 5 + 0.5, -2);
      api.rotation.set(0, 0, 0);
    }
  });

  return (
    <mesh ref={ref}>
      <Html
        transform
        position={[0, 0.05, 0.5]}
        className="transform relative pointer-events-none"
      >
        <div className="relative pointer-events-none">Submit</div>
      </Html>
      <boxGeometry args={args}></boxGeometry>

      <meshBasicMaterial color="white" toneMapped={false} />
      {/* <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, 0.05, 0.5]}
        fontSize={0.37}
      >
        Submit
      </Text> */}
    </mesh>
  );
}

const Hands = ({ router }) => {
  const [start, setStart] = useState(false);

  const texture = [
    "/texture/HandT1.jpg",
    "/texture/HandT2.jpg",
    "/texture/HandT3.jpg",
    "/texture/HandT4.jpg",
  ];

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] pointer-events-none"
        style={{ pointerEvent: "none" }}
      >
        <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 30], fov: 30 }}>
          <hemisphereLight intensity={0.7} position={[0, 50, 0]} />

          <directionalLight intensity={0.8} position={[-8, 20, 8]} />

          <Suspense fallback={null}>
            <Physics
              gravity={[0, -30, 0]}
              defaultContactMaterial={{
                restitution: 1.01,
                contactEquationRelaxation: 10,
              }}
            >
              <Ball start={start} setStart={setStart} />
              <Paddle start={start} linear flat />
            </Physics>
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
      {!start && (
        <div
          className="absolute w-[275px] h-[50px] z-[100] left-[41.9%] top-[63%] translate-x-[-50%] translate-y-[-1/2] thumbcursor"
          onClick={(e) => {
            setStart(true);
          }}
        ></div>
      )}
    </>
  );
};

export default Hands;
