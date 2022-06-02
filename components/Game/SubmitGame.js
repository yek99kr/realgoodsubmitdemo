import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Physics, useSphere, useBox, usePlane } from "@react-three/cannon";

const SubmitGame = () => {
  function Ball() {
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
  }

  function Paddle({ args = [5, 0.8, 1] }) {
    const [ref, api] = useBox(() => ({ args }));

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
      api.position.set(
        (mouseX * state.viewport.width) / 2,
        -state.viewport.height / 2 + 2,
        0
      );
      api.rotation.set(0, 0, (mouseX * Math.PI) / 5);
    });
    return (
      <mesh ref={ref}>
        <boxGeometry args={args}></boxGeometry>
        <Text
          color="black"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.5]}
          fontSize={0.4}
        >
          Submit
        </Text>
        <meshStandardMaterial color="pink" />
      </mesh>
    );
  }
  return (
    <Physics
      gravity={[0, -30, 0]}
      defaultContactMaterial={{
        restitution: 1.01,
        contactEquationRelaxation: 10,
      }}
    >
      <Ball />
      <Paddle />
    </Physics>
  );
};

export default SubmitGame;
