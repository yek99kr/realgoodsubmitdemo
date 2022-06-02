import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

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

export default Paddle;
