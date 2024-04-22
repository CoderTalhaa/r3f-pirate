import { CameraControls, Stage } from "@react-three/drei";
import { Pirate } from "./Pirate";

export const Experience = () => {
  return (
    <>
      <CameraControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />

      <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
        <Pirate position={[0, 0, 0]} />
      </Stage>
    </>
  );
};
