import { OrbitControls } from "@react-three/drei"
import { Avatar } from "./Avatar"

export const Experience = () => {
  return (
    <>
      <OrbitControls enableRotate={false} enableZoom={false} />
      <group position-y={-1.68}>
        <Avatar />
      </group>
      <ambientLight intensity={3} />
    </>
  )
}
