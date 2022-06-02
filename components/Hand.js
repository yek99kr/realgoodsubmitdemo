import * as THREE from "three";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { useGLTF, useTexture, useAnimations } from "@react-three/drei";
import { useGraph, useFrame } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";
import { getMouseDegrees } from "../utils/getMouseDegrees";

function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = getMouseDegrees(-mouse.y + 400, mouse.x, degreeLimit);
  joint.rotation.xD = THREE.MathUtils.lerp(
    joint.rotation.xD || 0,
    degrees.y,
    0.3
  );

  joint.rotation.yD = THREE.MathUtils.lerp(
    joint.rotation.yD || 0,
    degrees.x,
    0.3
  );
  joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD);
  joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD);
}

function movePosition(mouse, joint) {
  joint.position.x = mouse.x * 2.2;
}

export default function Hand({
  firstPosition,
  secondPosition,
  pose,
  mouseP,
  textureMap,
  ...props
}) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF("/hand.glb");

  const { ref, actions, names } = useAnimations(animations, group);

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);

  const texture = useTexture(textureMap);

  ////MousePosition
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const update = (e) => {
      setX((e.x / window.innerWidth) * 2 - 1);
      setY((e.y / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  const px = secondPosition[0];
  const py = secondPosition[1];
  const pz = secondPosition[2];

  ////MousePositionEnd
  useFrame((state, delta) => {
    const mouse = {
      x: (state.viewport.width * 32) / 2 + (x * state.viewport.width * 32) / 2,
      y:
        (state.viewport.height * 32) / 2 + (y * state.viewport.height * 32) / 2,
    };

    moveJoint(mouse, nodes.Thumb1);
    moveJoint(mouse, nodes.Wrist);
    movePosition({ x: x * mouseP, y }, nodes.Shoulder);

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      px,
      0.1
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      py,
      0.1
    );

    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      pz,
      0.1
    );
  });

  return (
    <group ref={group} position={firstPosition} {...props} dispose={null}>
      <primitive object={nodes.Shoulder} />
      <skinnedMesh
        geometry={nodes.FpsArms3.geometry}
        skeleton={nodes.FpsArms3.skeleton}
        action={actions}
      >
        <meshStandardMaterial
          map={texture}
          roughness={0.5}
          map-flipY={false}
          skinning
        />
      </skinnedMesh>
    </group>
  );
}

useGLTF.preload("/hand.glb");
