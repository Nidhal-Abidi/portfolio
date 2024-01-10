import { Canvas } from "@react-three/fiber"
import { Experience } from "./Experience"

export function AvatarContainer() {
  return (
    <div className="avatar-container">
      <Canvas shadows camera={{ position: [0, 0, 1], fov: 22 }}>
        <color attach="background" args={["white"]} />
        <Experience />
      </Canvas>
    </div>
  )
}
