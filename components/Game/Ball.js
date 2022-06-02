import { Physics, useSphere, useBox, usePlane } from "@react-three/cannon";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const Ball = () => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: [0.5],
    position: [0, 5, 0],
  }));
  usePlane(() => ({
    type: "Static",
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -10, 0],
    onCollide: () => {
      api.position.set(0, 5, 0);
      api.velocity.set(0, 5, 0);
    },
  }));
  return (
    <mesh castShadow ref={ref}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Ball;
