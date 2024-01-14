import { Canvas } from "@react-three/fiber"
import { Experience } from "./Experience"

export function AvatarContainer({ isDarkTheme }) {
  return (
    <div className="avatar-container">
      {/** 
       * Canvas: + main component + it represents the scene.
		             + Any child of Canvas will be part of the scene (i.e. displayed on the screen).
        */}
      <Canvas shadows camera={{ position: [0, 0, 1], fov: 22 }}>
        <color attach="background" args={[isDarkTheme ? "#121212" : "white"]} />
        <Experience />
      </Canvas>
    </div>
  )
}
