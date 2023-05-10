import { Canvas } from "@react-three/fiber";
import { Physics, usePlane } from "@react-three/cannon";
import React, { Suspense } from "react";
import { Lamp } from "./items";
import { MeshReflectorMaterial } from "@react-three/drei";
import HomeComponent from "./HomeComponent";
import EducationComponent from "./EducationComponent";
import WorkSection from "./WorkSection";
import ProjectComponent from "./ProjectComponent";

const DashArea = (props) => {
  const { selectedOption } = props;
  return (
    <div className="h-full w-full relative">
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [-40, 38, 40], fov: 25, near: 1, far: 250 }}
      >
        <Suspense fallback={"Loading..."}>
          <color attach="background" args={["#171720"]} />
          <fog attach="fog" args={["#171720", 60, 90]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[-20, -6, -20]} color="red" />
          {selectedOption === 0 ? (
            <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
              <Lamp position={[0, 15, 0]} />
              <Floor position={[0, -6, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            </Physics>
          ) : selectedOption === 1 || selectedOption === 2 ? (
            <></>
          ) : (
            <Physics allowSleep={false} iterations={15} gravity={[0, -100, 0]}>
              <Lamp position={[0, 15, 0]} />
              <Floor position={[0, -6, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            </Physics>
          )}
        </Suspense>
      </Canvas>
      {selectedOption === 0 && <HomeComponent />}
      {selectedOption === 1 && <EducationComponent />}
      {/* {selectedOption === 2 && <WorkSection />} */}
      <WorkSection />
      <ProjectComponent />
    </div>
  );
};
export default DashArea;

const Floor = (props) => {
  const [ref] = usePlane(() => ({ type: "Static", ...props }));
  return (
    <>
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          color="#878790"
          blur={[400, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={3}
          depthScale={1}
          minDepthThreshold={0.85}
          metalness={0}
          roughness={1}
        />
      </mesh>
    </>
  );
};
